"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { KtCta, KtStar } from "@/components/home/scrub";
import { useLanguage } from "@/context/language-context";

const TITLE = "uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance]";

const COPY = {
  es: {
    eyebrow: "Pago confirmado",
    title: "¡Pago recibido con éxito! 🎉",
    lead: "Bienvenido(a) a esta nueva etapa de transformación para tu negocio.",
    body: "Tu transacción ha sido procesada correctamente. En los próximos minutos recibirás un correo electrónico con el recibo de tu pago y los detalles del servicio.",
    next: "¿Qué sigue ahora?",
    steps: [
      ["Revisa tu bandeja de entrada", "Te enviamos un correo con el enlace directo para agendar nuestra primera sesión / onboarding. (Si no lo ves, revisa tu carpeta de spam o promociones)."],
      ["Prepárate para empezar", "Ten a la mano la información clave de tu proyecto o equipo para sacarle el máximo provecho a nuestro trabajo juntos."],
    ],
    question: "¿Tienes alguna duda urgente antes de nuestra sesión?",
    cta: "Escribir por WhatsApp",
    wa: "https://wa.me/573216154870?text=Hola%20Kathe%2C%20acabo%20de%20realizar%20mi%20pago%20y%20quiero%20coordinar%20los%20siguientes%20pasos.",
  },
  en: {
    eyebrow: "Payment confirmed",
    title: "Payment received successfully! 🎉",
    lead: "Welcome to this new stage of transformation for your business.",
    body: "Your transaction has been processed correctly. In the next few minutes, you will receive an email with your payment receipt and service details.",
    next: "What happens next?",
    steps: [
      ["Check your inbox", "We have sent you an email with the direct link to schedule our first session / onboarding. (If you don't see it, check your spam or promotions folder)."],
      ["Get ready to start", "Have the key information about your project or team ready so we can make the most out of our work together."],
    ],
    question: "Do you have any urgent questions before our session?",
    cta: "Write on WhatsApp",
    wa: "https://wa.me/573216154870?text=Hi%20Kathe%2C%20I%20just%20completed%20my%20payment%20and%20would%20like%20to%20coordinate%20the%20next%20steps.",
  },
};

/** Thank-you page after a Wompi payment: a white welcome, then the next steps on black. */
export default function GraciasPageClient() {
  const { language } = useLanguage();
  const c = COPY[language === "es" ? "es" : "en"];

  return (
    <div className="min-h-screen bg-white text-[var(--color-brand-black)] flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="pt-40 md:pt-52 pb-20 md:pb-28 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-10 md:gap-20 items-end">
            <div>
              <p className="kt-eyebrow mb-6">{c.eyebrow}</p>
              <h1 className={`${TITLE} text-5xl md:text-7xl`}>{c.title}</h1>
            </div>
            <div>
              <span className="kt-rule mb-5" />
              <p className="text-lg font-semibold leading-snug mb-4">{c.lead}</p>
              <p className="text-base leading-[1.7]">{c.body}</p>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 md:px-16 bg-[var(--color-brand-black)] text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${TITLE} text-3xl md:text-5xl mb-14 md:mb-20 flex items-center gap-4`}>
              <KtStar className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-brand-gold)] shrink-0" />
              {c.next}
            </h2>
            <ol className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
              {c.steps.map(([title, text], i) => (
                <li key={i} className="border-t border-white/25 pt-8">
                  <span className="block text-6xl md:text-7xl font-normal leading-none text-[var(--color-brand-gold)] mb-8">0{i + 1}</span>
                  <p className="text-xl font-semibold mb-3">{title}</p>
                  <p className="text-base leading-[1.7] text-white/75">{text}</p>
                </li>
              ))}
            </ol>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/25 pt-10">
              <p className="text-lg">{c.question}</p>
              <KtCta href={c.wa} tone="gold">{c.cta}</KtCta>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
