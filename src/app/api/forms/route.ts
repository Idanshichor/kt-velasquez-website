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

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ error: "not_configured" }, { status: 503 });

  const form = await req.formData();
  const get = (k: string) => String(form.get(k) ?? "").trim().slice(0, 4000);
  const rawKind = get("kind");
  const kind = rawKind === "podcast" || rawKind === "intake" ? rawKind : "newsletter";
  const subject = get("subject").slice(0, 200) || "Nuevo formulario - ktvelasquez.com";
  const email = get("email").slice(0, 254);
  if (!EMAIL_RE.test(email)) return Response.json({ error: "invalid_email" }, { status: 400 });
  // Honeypot: real visitors never fill this hidden field.
  if (get("botcheck")) return Response.json({ ok: true });

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
