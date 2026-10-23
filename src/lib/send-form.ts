// Sends a site form through /api/forms (Resend). If Resend isn't configured yet (503),
// falls back to Web3Forms so no sign-up is lost while the key is being set up.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "7bd1aa94-7d33-4738-b627-5b9378af65d4";

// When the page loaded. A form sent seconds after load was filled by a script, not a person.
const loadedAt = Date.now();
const MIN_FILL_MS = 3000;

export async function sendForm(formData: FormData, subject: string, kind: "newsletter" | "podcast" | "intake"): Promise<boolean> {
  const elapsed = Date.now() - loadedAt;
  // Bot signs: the hidden trap field is filled, or the form came back too fast. Show success, send nothing.
  if (String(formData.get("botcheck") ?? "") || elapsed < MIN_FILL_MS) return true;

  formData.set("subject", subject);
  formData.set("kind", kind);
  formData.set("elapsed", String(elapsed));
  try {
    const res = await fetch("/api/forms", { method: "POST", body: formData });
    if (res.status !== 503) return res.ok;
  } catch {
    // network error: try the fallback below
  }
  formData.delete("answers"); // the intake form also sends each answer as its own field, which Web3Forms emails as-is
  formData.delete("elapsed");
  formData.set("access_key", WEB3FORMS_KEY);
  const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
  return res.ok;
}
