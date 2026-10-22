"use client";

import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";
import { KtStar } from "./scrub";

const WHATSAPP = {
  es: "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29",
  en: "https://wa.me/573216154870?text=Hi%20Kathe%2C%20I%27d%20like%20to%20talk%20to%20you%20about%20my%20project%20%3A%29",
};

export function FinalCta() {
  const { language, t } = useLanguage();
  return (
    <Scene className="relative overflow-hidden bg-[var(--color-brand-pink)] py-28 md:py-44 px-6 md:px-16">
      {/* A large slow orbit behind the words, the same 360 mark as the method section */}
      <svg className="kt-turn absolute left-1/2 top-1/2 w-[150vw] md:w-[78rem] max-w-none opacity-60 pointer-events-none" viewBox="0 0 400 400" aria-hidden="true" style={{ translate: "-50% -50%" }}>
        <circle cx="200" cy="200" r="190" fill="none" stroke="var(--color-brand-black)" strokeOpacity="0.25" strokeWidth="0.6" strokeDasharray="2 7" />
        <circle cx="200" cy="10" r="3.5" fill="var(--color-brand-pink-dark)" />
        <circle cx="390" cy="200" r="2.5" fill="var(--color-brand-black)" />
      </svg>

      <div id="contacto" className="relative z-10 max-w-5xl mx-auto text-center">
        <KtStar className="statement-star w-12 h-12 md:w-16 md:h-16 mx-auto mb-10 text-[var(--color-brand-black)]" />
        <h2 data-lines className="kt-title text-[min(3rem,calc((100vw_-_3rem)_/_6))] sm:text-5xl md:text-7xl lg:text-[6.5rem] mb-8 text-[var(--color-brand-black)]">
          {t("cta.title")} <span className="font-script normal-case tracking-normal text-6xl md:text-8xl lg:text-[8.5rem] text-[var(--color-brand-pink-ink)]">{t("cta.accent")}</span> {t("cta.suffix")}
        </h2>
        <p data-reveal className="font-body font-medium mb-12 text-base md:text-xl max-w-2xl mx-auto text-[var(--color-brand-black)]/80 leading-relaxed">
          {t("cta.desc")}
        </p>
        <div data-reveal className="flex justify-center">
          <a href={WHATSAPP[language === "es" ? "es" : "en"]} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-[var(--color-brand-black)] text-white border-2 border-[var(--color-brand-black)] pl-10 pr-3 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-transparent hover:text-[var(--color-brand-black)] transition-colors">
            {t("cta.button")}
            <span className="w-10 h-10 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] grid place-items-center transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">
              <KtStar className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </Scene>
  );
}
