"use client";

import { useLanguage } from "@/context/language-context";
import FaqAccordion from "@/components/faq-accordion";
import { Scene } from "./scene";

export function Faq() {
  const { t } = useLanguage();
  return (
    <Scene className="py-32 px-6 md:px-16 bg-[var(--color-brand-gold-light)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-lines className="font-heading italic text-4xl md:text-6xl text-[var(--color-brand-black)]">
            {t("faq.title")} <span className="font-script text-5xl md:text-7xl">{t("faq.accent")}</span>
          </h2>
        </div>
        <FaqAccordion />
      </div>
    </Scene>
  );
}
