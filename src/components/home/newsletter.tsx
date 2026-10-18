"use client";

import { useLanguage } from "@/context/language-context";
import { Web3Form } from "@/components/web3-form";
import { Scene } from "./scene";
import { KtStar } from "./scrub";

export function Newsletter() {
  const { language, t } = useLanguage();
  return (
    <Scene className="py-24 px-6 md:px-16 bg-[var(--color-brand-cream)]">
      <div data-reveal className="relative max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[2rem] border-[1.5px] border-[var(--color-brand-black)] text-center flex flex-col justify-center">
        <KtStar className="statement-star absolute -top-7 left-1/2 -ml-7 w-14 h-14 text-[var(--color-brand-gold)]" />
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-brand-gold-deep)] mb-4">{t("newsletter.tag")}</p>
        <h2 className="font-heading text-4xl md:text-6xl leading-[1.05] tracking-tight text-[var(--color-brand-black)] mb-6">{t("newsletter.title")}</h2>
        <p className="font-body text-[var(--color-brand-black)] mb-10 leading-relaxed max-w-lg mx-auto">
          {t("newsletter.desc")}
        </p>
        <Web3Form subject={language === "es" ? "Nuevo Suscriptor - Newsletter (Sección Principal)" : "New Subscriber - Newsletter (Main Section)"} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto w-full" variant="main" />
      </div>
    </Scene>
  );
}
