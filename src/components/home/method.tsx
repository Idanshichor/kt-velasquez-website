"use client";

import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";

export function Method() {
  const { language, t } = useLanguage();

  const pillars = [
    { n: "01", title: language === "es" ? <>Estructura de<br />Negocio</> : <>Business<br />Structure</>, desc: t("methodology.p1_desc") },
    { n: "02", title: language === "es" ? <>Estrategia &<br />Social Media</> : <>Strategy &<br />Social Media</>, desc: t("methodology.p2_desc") },
    { n: "03", title: language === "es" ? <>Mentalidad<br />Ejecutiva</> : <>Executive<br />Mindset</>, desc: t("methodology.p3_desc") },
    { n: "04", title: language === "es" ? <>Ejecución &<br />Medición</> : <>Execution &<br />Analytics</>, desc: t("methodology.p4_desc") },
  ];

  return (
    <Scene id="metodologia" className="bg-white py-28 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 data-lines className="font-heading italic text-5xl md:text-7xl leading-tight text-[var(--color-brand-black)] mb-6">
            {t("methodology.title")} <span className="not-italic font-black text-[var(--color-brand-gold-deep)] font-script text-6xl md:text-7xl">{t("methodology.title_accent")}</span>
          </h2>
          <p data-reveal className="font-body text-gray-700 font-medium text-lg md:text-xl">
            {t("methodology.desc")}
          </p>
        </div>

        <ol data-stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
          {pillars.map((p) => (
            <li key={p.n} className="border-t border-[var(--color-brand-black)]/15 pt-8">
              <p className="font-heading text-5xl text-[var(--color-brand-gold-deep)] leading-none mb-8" aria-hidden="true">{p.n}</p>
              <h3 className="font-heading text-2xl leading-tight mb-4 italic font-bold text-[var(--color-brand-black)]">{p.title}</h3>
              <p className="font-body text-[15px] leading-relaxed text-gray-700">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </Scene>
  );
}
