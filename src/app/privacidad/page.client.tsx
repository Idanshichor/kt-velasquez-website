"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/language-context";

export default function PrivacyPageClient() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[var(--color-brand-black)] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-40 md:pt-52 pb-28 md:pb-36 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          {language === "es" ? (
            <article className="prose prose-stone">
              <h1 className="uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance] text-5xl md:text-7xl mb-8">
                Política de Privacidad
              </h1>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-black)]/60 mb-16">
                Última actualización: 29 de junio de 2026
              </p>
              
              <div className="space-y-8 text-base md:text-[17px] leading-[1.7] text-[var(--color-brand-black)]">
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-4 pt-8 border-t border-[var(--color-brand-black)]/15">
                    1. Identificación del Responsable
                  </h2>
                  <p>
                    Katherine Velasquez (en adelante, "la Responsable"), domiciliada en Medellín, Colombia, y con canal de contacto a través del número de WhatsApp +57 321 615 4870, es responsable del tratamiento de los datos personales recolectados en este sitio web (<a href="https://www.ktvelasquez.com" className="underline underline-offset-4 decoration-[var(--color-brand-pink)] decoration-2">www.ktvelasquez.com</a>).
                  </p>
                </section>

                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-4 pt-8 border-t border-[var(--color-brand-black)]/15">
                    2. Marco Legal (Ley 1581 de 2012)
                  </h2>
                  <p>
                    Esta política de privacidad se rige por la Ley 1581 de 2012 de la República de Colombia (Ley de Protección de Datos Personales o Habeas Data) y sus decretos reglamentarios. Nos comprometemos a garantizar la confidencialidad, seguridad y transparencia en el uso de su información.
                  </p>
                </section>

                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-4 pt-8 border-t border-[var(--color-brand-black)]/15">
                    3. Datos Recolectados y Finalidad
                  </h2>
                  <p>
                    Recolectamos datos de identificación y contacto (nombre, apellido, correo electrónico, enlaces a redes sociales y mensajes) que usted introduce voluntariamente en nuestros formularios de newsletter y postulación al podcast.
                  </p>
                  <p className="mt-2">
                    Estos datos serán tratados exclusivamente para las siguientes finalidades:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Gestionar y enviar suscripciones a nuestro boletín estratégico (newsletter).</li>
                    <li>Atender y responder solicitudes de contacto y consultas sobre servicios de mentoría y consultoría.</li>
                    <li>Evaluar y gestionar postulaciones de invitadas para el podcast *Estrategia 360 - Sin Pelos en la Lengua*.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-4 pt-8 border-t border-[var(--color-brand-black)]/15">
                    4. Derechos del Titular de los Datos
                  </h2>
                  <p>
                    Como titular de sus datos personales, usted tiene derecho a:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Conocer, actualizar y rectificar sus datos personales frente a la Responsable.</li>
                    <li>Solicitar prueba de la autorización otorgada.</li>
                    <li>Ser informado sobre el uso que se le ha dado a sus datos personales.</li>
                    <li>Revocar la autorización y/o solicitar la supresión de sus datos cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
                    <li>Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-4 pt-8 border-t border-[var(--color-brand-black)]/15">
                    5. Procedimiento para Ejercer sus Derechos (Habeas Data)
                  </h2>
                  <p>
                    Para ejercer sus derechos de consulta, actualización, rectificación o supresión de datos, puede enviar una solicitud clara a través de nuestro canal de WhatsApp: <strong>+57 321 615 4870</strong>. Su solicitud será atendida en los términos legales establecidos por la ley de protección de datos de Colombia.
                  </p>
                </section>
              </div>
            </article>
          ) : (
            <article className="prose prose-stone">
              <h1 className="uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance] text-5xl md:text-7xl mb-8">
                Privacy Policy
              </h1>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-black)]/60 mb-16">
                Last updated: June 29, 2026
              </p>
              
              <div className="space-y-8 text-base md:text-[17px] leading-[1.7] text-[var(--color-brand-black)]">
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-4 pt-8 border-t border-[var(--color-brand-black)]/15">
                    1. Data Controller Identification
                  </h2>
                  <p>
                    Katherine Velasquez (hereinafter, "the Controller"), located in Medellin, Colombia, and reachable via WhatsApp at +57 321 615 4870, is the controller of the personal data collected on this website (<a href="https://www.ktvelasquez.com" className="underline underline-offset-4 decoration-[var(--color-brand-pink)] decoration-2">www.ktvelasquez.com</a>).
                  </p>
                </section>

                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-4 pt-8 border-t border-[var(--color-brand-black)]/15">
                    2. Legal Framework
                  </h2>
                  <p>
                    This privacy policy is designed in compliance with personal data protection regulations, specifically following Colombia's Law 1581 of 2012 (Habeas Data Regulation). We are committed to ensuring the confidentiality, security, and transparent use of your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-4 pt-8 border-t border-[var(--color-brand-black)]/15">
                    3. Data Collected and Purpose
                  </h2>
                  <p>
                    We collect identification and contact information (first name, last name, email address, social media links, and messages) that you voluntarily submit through our newsletter and podcast application forms.
                  </p>
                  <p className="mt-2">
                    This data will be processed exclusively for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Managing and delivering subscriptions to our strategic newsletter.</li>
                    <li>Processing and responding to contact inquiries about mentoring and consulting services.</li>
                    <li>Evaluating and managing guest applications for the *Estrategia 360 - Sin Pelos en la Lengua* podcast.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-4 pt-8 border-t border-[var(--color-brand-black)]/15">
                    4. Your Rights as a Data Subject
                  </h2>
                  <p>
                    As a data subject, you have the right to:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Access, update, and rectify your personal data.</li>
                    <li>Request proof of the consent provided.</li>
                    <li>Be informed about how your personal data is being used.</li>
                    <li>Revoke your consent and/or request the deletion of your data when constitutional and legal principles are not respected.</li>
                    <li>Access your processed personal data free of charge.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-4 pt-8 border-t border-[var(--color-brand-black)]/15">
                    5. How to Exercise Your Rights
                  </h2>
                  <p>
                    To exercise your rights to access, update, rectify, or delete your data, you can send a clear request through our WhatsApp channel: <strong>+57 321 615 4870</strong>. We will respond to your request within the legally mandated timeframes.
                  </p>
                </section>
              </div>
            </article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
