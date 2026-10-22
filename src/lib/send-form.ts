// Sends a site form through /api/forms (Resend). If Resend isn't configured yet (503),
// falls back to Web3Forms so no sign-up is lost while the key is being set up.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "7bd1aa94-7d33-4738-b627-5b9378af65d4";

export async function sendForm(formData: FormData, subject: string, kind: "newsletter" | "podcast" | "intake"): Promise<boolean> {
  formData.set("subject", subject);
  formData.set("kind", kind);
  try {
    const res = await fetch("/api/forms", { method: "POST", body: formData });
    if (res.status !== 503) return res.ok;
  } catch {
    // network error: try the fallback below
  }
  formData.delete("answers"); // the intake form also sends each answer as its own field, which Web3Forms emails as-is
  formData.set("access_key", WEB3FORMS_KEY);
  const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
  return res.ok;
}
