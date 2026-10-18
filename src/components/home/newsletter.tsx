"use client";

import { useLanguage } from "@/context/language-context";
import { Web3Form } from "@/components/web3-form";
import { Scene } from "./scene";

export function Newsletter() {
  const { language, t } = useLanguage();
  return (
    <Scene className="py-24 px-6 md:px-16 bg-[var(--color-brand-cream)]">
      <div data-reveal className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[2rem] border border-[var(--color-brand-gold-light)] shadow-elevated text-center flex flex-col justify-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-brand-gold-deep)] mb-4">{t("newsletter.tag")}</p>
        <h2 className="font-heading italic text-4xl text-[var(--color-brand-black)] mb-6">{t("newsletter.title")}</h2>
        <p className="font-body text-[var(--color-brand-black)] mb-10 leading-relaxed max-w-lg mx-auto">
          {t("newsletter.desc")}
        </p>
        <Web3Form subject={language === "es" ? "Nuevo Suscriptor - Newsletter (Sección Principal)" : "New Subscriber - Newsletter (Main Section)"} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto w-full" variant="main" />
      </div>
    </Scene>
  );
}
