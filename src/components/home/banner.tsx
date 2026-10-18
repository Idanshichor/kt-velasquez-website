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
          { text: "real.", className: "italic font-bold text-[var(--color-brand-gold)]" },
        ]
      : [
          { text: t("banner.para_quienes") as string, className: "font-script normal-case text-[var(--color-brand-pink)] text-[1.35em] leading-none", block: true },
          { text: "building something" },
          { text: "real.", className: "italic font-bold text-[var(--color-brand-gold)]" },
        ];

  return (
    <Scene className="statement relative overflow-hidden bg-[var(--color-brand-black)] text-white py-28 md:py-44 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_minmax(0,1fr)] gap-10 md:gap-20 items-center">
        <KtStar className="statement-star w-20 md:w-48 lg:w-56 text-[var(--color-brand-gold)]" />
        <div>
          <Scrub as="h2" parts={parts} className="font-heading text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] tracking-tight" />
          <p data-reveal className="font-body text-white/65 mt-10 text-sm md:text-base font-medium max-w-xl leading-relaxed">
            {t("banner.desc")}
          </p>
        </div>
      </div>
    </Scene>
  );
}
