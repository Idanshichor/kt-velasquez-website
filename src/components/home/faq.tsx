"use client";

import { useLanguage } from "@/context/language-context";
import FaqAccordion from "@/components/faq-accordion";
import { Scene } from "./scene";
import { KtStar } from "./scrub";

export function Faq() {
  const { t } = useLanguage();
  return (
    <Scene className="py-28 md:py-36 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-36 text-center lg:text-left">
          <h2 data-lines className="uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance] text-5xl md:text-6xl lg:text-[min(3.75rem,calc((min(100vw-8rem,80rem)-5rem)/3/6.3))] text-[var(--color-brand-black)]">
            {t("faq.title")} <span className="block mt-2 font-script normal-case tracking-normal text-6xl md:text-7xl text-[var(--color-brand-pink-ink)]">{t("faq.accent")}</span>
          </h2>
          <div className="relative hidden lg:block w-44 h-44 mt-12" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="kt-turn absolute inset-0 w-full h-full">
              <circle cx="100" cy="100" r="92" fill="none" stroke="var(--color-brand-black)" strokeOpacity="0.3" strokeDasharray="2 7" />
              <circle cx="100" cy="8" r="4" fill="var(--color-brand-pink-dark)" />
            </svg>
            <KtStar className="statement-star absolute inset-[34%] text-[var(--color-brand-gold-deep)]" />
          </div>
        </div>
        <FaqAccordion />
      </div>
    </Scene>
  );
}
