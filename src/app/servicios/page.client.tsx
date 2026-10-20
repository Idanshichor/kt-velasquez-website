"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/home/final-cta";
import { ServicePanel, useServiceTiers } from "@/components/services/service-panel";
import { useLanguage } from "@/context/language-context";

/**
 * Full services page, laid out like the Mango services page: a big title,
 * a numbered index that jumps to each service, then one block per service
 * with every plan, price and pay button.
 */
export default function ServicesPageClient() {
  const { language, t } = useLanguage();
  const tiers = useServiceTiers();
  const es = language === "es";
  const title = (t("services.title") as string) || "";
  const cut = title.lastIndexOf(" ");

  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)]">
      <Navbar />

      <header className="pt-40 md:pt-48 pb-16 md:pb-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="kt-eyebrow mb-6">{t("nav.servicios")}</p>
          <h1 className="kt-title text-5xl md:text-8xl lg:text-[7rem] text-[var(--color-brand-black)]">
            {cut === -1 ? title : title.slice(0, cut)}
            {cut !== -1 && (
              <span className="block font-script normal-case tracking-normal text-[0.75em] leading-[1.1] mt-1">{title.slice(cut + 1)}</span>
            )}
          </h1>
          <span className="kt-rule mt-10 mb-6" />
          <p className="font-body text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">{t("services.desc")}</p>

          <nav aria-label={es ? "Índice de servicios" : "Services index"} className="mt-14 md:mt-20">
            <ol className="border-t border-[var(--color-brand-black)]/15">
              {tiers.map((tier, i) => (
                <li key={i} className="border-b border-[var(--color-brand-black)]/15">
                  <a
                    href={`#servicio-${i + 1}`}
                    className="group grid grid-cols-[3rem_minmax(0,1fr)] md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,18rem)] items-baseline gap-x-5 md:gap-x-10 gap-y-1 py-5 md:py-6 px-2 md:px-6 rounded-2xl transition-colors duration-500 hover:bg-[var(--color-brand-pink)] focus-visible:bg-[var(--color-brand-pink)] focus-visible:outline-none"
                  >
                    <span className="font-heading text-2xl md:text-3xl text-[var(--color-brand-black)]/30 group-hover:text-[var(--color-brand-black)] transition-colors">0{i + 1}</span>
                    <span className="kt-title text-lg md:text-2xl leading-[1.1] text-[var(--color-brand-black)]">{tier.title}</span>
                    <span className="col-start-2 md:col-start-3 text-sm text-gray-600 group-hover:text-[var(--color-brand-black)] transition-colors">{tier.subtitle}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </header>

      {tiers.map((tier, i) => (
        <section
          key={i}
          id={`servicio-${i + 1}`}
          className="scroll-mt-28 py-20 md:py-28 px-6 md:px-16 bg-white border-t border-[var(--color-brand-black)]/10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[auto_minmax(0,1fr)] gap-4 md:gap-10 items-end mb-10 md:mb-14">
              <span className="font-heading text-6xl md:text-8xl leading-none text-[var(--color-brand-black)]">0{i + 1}</span>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-4">
                  <p className="kt-eyebrow">{tier.subtitle}</p>
                  {tier.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] py-1 px-2.5 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)]">{tier.tag}</span>
                  )}
                </div>
                <h2 className="inline-block bg-[var(--color-brand-pink)] rounded-2xl px-5 py-4 md:px-7 md:py-5 shadow-[0_24px_60px_-28px_rgba(26,26,26,0.45)] kt-title text-2xl md:text-[2.6rem] leading-[1.05] text-[var(--color-brand-black)]">
                  {tier.title}
                </h2>
              </div>
            </div>
            <ServicePanel index={i} />
          </div>
        </section>
      ))}

      <FinalCta />
      <Footer />
    </div>
  );
}
