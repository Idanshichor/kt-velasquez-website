"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { KtCta, KtStar } from "@/components/home/scrub";
import { useLanguage } from "@/context/language-context";

const TITLE = "uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance]";

const COPY = {
  es: {
    eyebrow: "Pago confirmado",
    title: ["¡Pago recibido", "con éxito!"],
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
    title: ["Payment received", "successfully!"],
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

/** Thank-you page after a Wompi payment: purple welcome, pink next steps, gold WhatsApp close. */
export default function GraciasPageClient() {
  const { language } = useLanguage();
  const c = COPY[language === "es" ? "es" : "en"];

  return (
    <div className="min-h-screen bg-white text-[var(--color-brand-black)] flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Purple hero: white type only */}
        <section className="relative overflow-hidden bg-[var(--color-brand-purple)] text-white pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-16">
          <KtStar className="absolute right-6 md:right-16 top-28 md:top-36 w-10 md:w-16 h-10 md:h-16 text-white" />
          <div className="relative max-w-7xl mx-auto">
            <p className="inline-block border border-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] mb-10">{c.eyebrow}</p>
            <h1>
              <span className={`${TITLE} block text-[13vw] sm:text-7xl md:text-[7.5rem] lg:text-[9rem] leading-[0.85] tracking-[-0.03em]`}>{c.title[0]}</span>
              <span className="block font-script text-[3.4rem] md:text-8xl lg:text-9xl leading-none mt-1 md:-mt-3 md:ml-28">
                {c.title[1]} <span className="font-body text-4xl md:text-6xl align-middle">🎉</span>
              </span>
            </h1>
            <div className="mt-14 md:mt-20 grid md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] gap-6 md:gap-16 border-t border-white pt-8">
              <p className="text-xl md:text-2xl font-semibold leading-snug">{c.lead}</p>
              <p className="text-base leading-[1.7]">{c.body}</p>
            </div>
          </div>
        </section>

        {/* Pink next steps: title left, numbered steps right */}
        <section className="bg-[var(--color-brand-pink)] text-[var(--color-brand-black)] py-24 md:py-36 px-6 md:px-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 md:gap-24">
            <h2 className={`${TITLE} text-5xl md:text-7xl md:sticky md:top-32 self-start`}>{c.next}</h2>
            <ol>
              {c.steps.map(([title, text], i) => (
                <li key={i} className="grid grid-cols-[4.5rem_minmax(0,1fr)] md:grid-cols-[7rem_minmax(0,1fr)] gap-4 border-t border-[var(--color-brand-black)] py-10 md:py-12 last:border-b">
                  <span className="font-heading text-6xl md:text-8xl leading-none tabular-nums">0{i + 1}</span>
                  <div>
                    <p className={`${TITLE} text-2xl md:text-3xl mb-4`}>{title}</p>
                    <p className="text-base md:text-lg leading-[1.7]">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gold close: the question and WhatsApp */}
        <section className="bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] py-24 md:py-32 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <KtStar className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-brand-black)] mb-8" />
            <p className={`${TITLE} text-3xl md:text-5xl mb-10`}>{c.question}</p>
            <KtCta href={c.wa} tone="dark">{c.cta}</KtCta>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
