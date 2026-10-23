// Site forms (newsletter sign-ups, podcast guest applications, the private /empecemos intake form) go through Resend:
// an email to Katherine's inbox, and newsletter sign-ups are also added to a Resend Audience.
//
// Env vars (set in Vercel, never in the repo):
//   RESEND_API_KEY      required. Without it this route answers 503 and the client falls back to Web3Forms.
//   RESEND_FROM         sender on a domain verified in Resend, e.g. "KT Velasquez <web@ktvelasquez.com>".
//   FORMS_TO            optional, defaults to katherine@ktvelasquez.com.
//   RESEND_AUDIENCE_ID  optional. When set, newsletter sign-ups are saved as contacts in that Audience.

const TO = process.env.FORMS_TO || "katherine@ktvelasquez.com";
const FROM = process.env.RESEND_FROM || "KT Velasquez <web@ktvelasquez.com>";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELDS = ["name", "email", "social_media", "story"] as const;

// Bot filters, all free and invisible to people:
//   honeypot  "botcheck" is a hidden field only bots fill. Answer ok, send nothing, so the bot learns nothing.
//   timing    the page reports how long the form was open. Under 3 seconds is a script.
//   origin    a browser posting from another website is refused.
//   rate      at most 5 sends per visitor IP every 10 minutes (per server instance, so a soft limit).
//   links     links in the name field are a spam pattern; real names have none.
const MIN_FILL_MS = 3000;
const RATE_MAX = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v[v.length - 1] > RATE_WINDOW_MS) hits.delete(k);
  return recent.length > RATE_MAX;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ error: "not_configured" }, { status: 503 });

  const origin = req.headers.get("origin");
  if (origin) {
    let sameSite = false;
    try {
      sameSite = new URL(origin).host === req.headers.get("host");
    } catch {}
    if (!sameSite) return Response.json({ error: "forbidden" }, { status: 403 });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) return Response.json({ error: "too_many" }, { status: 429 });

  const form = await req.formData().catch(() => null);
  if (!form) return Response.json({ error: "bad_request" }, { status: 400 });
  const get = (k: string) => String(form.get(k) ?? "").trim().slice(0, 4000);
  const rawKind = get("kind");
  const kind = rawKind === "podcast" || rawKind === "intake" ? rawKind : "newsletter";
  const subject = get("subject").slice(0, 200) || "Nuevo formulario - ktvelasquez.com";
  const email = get("email").slice(0, 254);
  if (!EMAIL_RE.test(email)) return Response.json({ error: "invalid_email" }, { status: 400 });
  // Every page sends "elapsed". A post without it did not come from the site (or from a tab opened before this deploy).
  const elapsed = Number(get("elapsed"));
  if (!get("elapsed") || !Number.isFinite(elapsed)) return Response.json({ error: "stale_form" }, { status: 400 });
  if (get("botcheck") || elapsed < MIN_FILL_MS || /https?:\/\/|www\./i.test(get("name"))) return Response.json({ ok: true });

  const rows = FIELDS.filter((f) => get(f)).map(
    (f) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${f}</td><td style="padding:4px 0">${esc(get(f)).replace(/\n/g, "<br>")}</td></tr>`,
  );
  const html = kind === "intake" ? intakeHtml(subject, String(form.get("answers") ?? "")) : `<h2 style="font-family:sans-serif">${esc(subject)}</h2><table style="font-family:sans-serif;font-size:14px">${rows.join("")}</table>`;
  const headers = { Authorization: `Bearer ${key}`, "Content-Type": "application/json" };

  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers,
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject,
      html,
    }),
  });
  if (!sent.ok) {
    console.error("resend email failed", sent.status, await sent.text());
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  const audience = process.env.RESEND_AUDIENCE_ID;
  if (kind === "newsletter" && audience) {
    const added = await fetch(`https://api.resend.com/audiences/${audience}/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email, unsubscribed: false }),
    });
    // The email to Katherine already went out, so a failed audience add is logged, not shown to the visitor.
    if (!added.ok) console.error("resend audience add failed", added.status, await added.text());
  }

  return Response.json({ ok: true });
}

// The intake form sends its answers as [question, answer] pairs, in order. One block per question, easy to read on a phone.
function intakeHtml(subject: string, raw: string) {
  let pairs: [string, string][] = [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) pairs = parsed.slice(0, 40).map((p) => [String(p?.[0] ?? "").slice(0, 300), String(p?.[1] ?? "").slice(0, 4000)]);
  } catch {}
  const blocks = pairs
    .map(
      ([q, a]) =>
        `<tr><td style="padding:18px 0;border-top:1px solid #eee"><p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#7244D4">${esc(q)}</p><p style="margin:0;font-size:15px;line-height:1.55;color:#1A1A1A">${a ? esc(a).replace(/\n/g, "<br>") : '<span style="color:#999">(sin respuesta)</span>'}</p></td></tr>`,
    )
    .join("");
  return `<div style="font-family:Helvetica,Arial,sans-serif;max-width:640px"><h2 style="margin:0 0 4px;font-size:20px;color:#1A1A1A">${esc(subject)}</h2><p style="margin:0 0 12px;font-size:13px;color:#666">Formulario privado de ktvelasquez.com/empecemos</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${blocks}</table></div>`;
}
