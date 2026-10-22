"use client";

import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";
import { KtStar, Scrub } from "./scrub";

export function Banner() {
  const { language, t } = useLanguage();

  const parts =
    language === "es"
      ? [
          { text: t("banner.para_quienes") as string, className: "font-script normal-case text-[var(--color-brand-pink)] text-[1.35em] leading-none", block: true },
          { text: "están construyendo algo" },
          { text: "real.", className: "text-[var(--color-brand-gold)]" },
        ]
      : [
          { text: t("banner.para_quienes") as string, className: "font-script normal-case text-[var(--color-brand-pink)] text-[1.35em] leading-none", block: true },
          { text: "building something" },
          { text: "real.", className: "text-[var(--color-brand-gold)]" },
        ];

  return (
    <Scene className="statement relative overflow-hidden bg-[var(--color-brand-black)] text-white py-28 md:py-44 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[auto_minmax(0,1fr)] gap-10 lg:gap-20 items-center">
        <KtStar className="statement-star w-20 md:w-48 lg:w-56 text-[var(--color-brand-gold)]" />
        <div className="min-w-0">
          <Scrub as="h2" parts={parts} className="kt-title text-[min(2.5rem,calc((100vw_-_3rem)_/_8))] sm:text-5xl md:text-7xl lg:text-[min(5.5rem,calc((min(100vw_-_8rem,72rem)_-_19rem)_/_8.2))]" />
          <span data-reveal className="kt-rule mt-10" />
          <p data-reveal className="font-body text-white/65 mt-6 text-sm md:text-base font-medium max-w-xl leading-relaxed">
            {t("banner.desc")}
          </p>
        </div>
      </div>
    </Scene>
  );
}
