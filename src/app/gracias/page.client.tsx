"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/language-context";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

export default function GraciasPageClient() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-36 pb-24 px-6 md:px-16 flex items-center justify-center relative overflow-hidden bg-[var(--color-brand-cream)]">
        {/* Background decorative blobs matching the brand's visual identity */}
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-[var(--color-brand-pink-light)] opacity-50 blur-3xl z-0 pointer-events-none" />
        <div className="absolute bottom-10 -left-10 w-96 h-96 rounded-full bg-[var(--color-brand-gold-light)] opacity-45 blur-3xl z-0 pointer-events-none" />

        <div className="max-w-2xl w-full bg-white rounded-[3rem] p-8 md:p-16 shadow-elevated border border-gray-100 relative z-10 overflow-hidden text-center">
          {/* Decorative Top Accent line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-brand-gold)] to-[var(--color-brand-pink)]" />

          {/* Success Icon using brand pink identity */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand-pink-light)] text-[var(--color-brand-pink-dark)] mb-8 border border-[var(--color-brand-pink)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          {language === "es" ? (
            <div>
              <h1 className="font-heading text-3xl md:text-4xl leading-tight text-[var(--color-brand-black)] mb-4 italic font-bold">
                ¡Pago recibido con éxito! 🎉
              </h1>
              <p className="font-body text-base md:text-lg text-[var(--color-brand-gold)] font-extrabold mb-6">
                Bienvenido(a) a esta nueva etapa de transformación para tu negocio.
              </p>
              <p className="font-body text-sm md:text-base text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
                Tu transacción ha sido procesada correctamente. En los próximos minutos recibirás un correo electrónico con el recibo de tu pago y los detalles del servicio.
              </p>

              {/* Steps Box */}
              <div className="bg-gray-50 rounded-[2rem] p-6 md:p-8 text-left border border-gray-100 mb-8">
                <h3 className="font-heading text-lg font-bold text-[var(--color-brand-black)] mb-6 flex items-center gap-2">
                  <span>¿Qué sigue ahora?</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-body text-sm font-bold text-[var(--color-brand-black)]">
                        Revisa tu bandeja de entrada
                      </p>
                      <p className="font-body text-xs text-gray-500 mt-1 leading-relaxed">
                        Te enviamos un correo con el enlace directo para agendar nuestra primera sesión / onboarding. (Si no lo ves, revisa tu carpeta de spam o promociones).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-body text-sm font-bold text-[var(--color-brand-black)]">
                        Prepárate para empezar
                      </p>
                      <p className="font-body text-xs text-gray-500 mt-1 leading-relaxed">
                        Ten a la mano la información clave de tu proyecto o equipo para sacarle el máximo provecho a nuestro trabajo juntos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Callout styled to match the site's CTAs */}
              <div className="pt-4">
                <p className="font-body text-xs text-gray-500 mb-4 font-medium">
                  ¿Tienes alguna duda urgente antes de nuestra sesión?
                </p>
                <a
                  href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20acabo%20de%20realizar%20mi%20pago%20y%20quiero%20coordinar%20los%20siguientes%20pasos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer w-full max-w-xs mx-auto shadow-none font-body"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="font-heading text-3xl md:text-4xl leading-tight text-[var(--color-brand-black)] mb-4 italic font-bold">
                Payment received successfully! 🎉
              </h1>
              <p className="font-body text-base md:text-lg text-[var(--color-brand-gold)] font-extrabold mb-6">
                Welcome to this new stage of transformation for your business.
              </p>
              <p className="font-body text-sm md:text-base text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
                Your transaction has been processed correctly. In the next few minutes, you will receive an email with your payment receipt and service details.
              </p>

              {/* Steps Box */}
              <div className="bg-gray-50 rounded-[2rem] p-6 md:p-8 text-left border border-gray-100 mb-8">
                <h3 className="font-heading text-lg font-bold text-[var(--color-brand-black)] mb-6 flex items-center gap-2">
                  <span>What happens next?</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-body text-sm font-bold text-[var(--color-brand-black)]">
                        Check your inbox
                      </p>
                      <p className="font-body text-xs text-gray-500 mt-1 leading-relaxed">
                        We have sent you an email with the direct link to schedule our first session / onboarding. (If you don't see it, check your spam or promotions folder).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-body text-sm font-bold text-[var(--color-brand-black)]">
                        Get ready to start
                      </p>
                      <p className="font-body text-xs text-gray-500 mt-1 leading-relaxed">
                        Have the key information about your project or team ready so we can make the most out of our work together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Callout styled to match the site's CTAs */}
              <div className="pt-4">
                <p className="font-body text-xs text-gray-500 mb-4 font-medium">
                  Do you have any urgent questions before our session?
                </p>
                <a
                  href="https://wa.me/573216154870?text=Hi%20Kathe%2C%20I%20just%20completed%20my%20payment%20and%20would%20like%20to%20coordinate%20the%20next%20steps."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer w-full max-w-xs mx-auto shadow-none font-body"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Write on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
