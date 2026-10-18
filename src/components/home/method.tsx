"use client";

import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";
import { enablePin, pinStack } from "@/lib/motion";
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
    <Scene
      id="metodologia"
      className="method pin-wrap bg-white"
      build={({ root, desktop }) => {
        const panels = Array.from(root.querySelectorAll<HTMLElement>(".method-panel"));
        if (desktop) {
          const undo = enablePin(root, 470);
          pinStack(root, panels, root.querySelector<HTMLElement>("[data-method-line]"));
          return undo;
        }
        gsap.fromTo(
          panels,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: panels[0], start: "top 88%", once: true } },
        );
      }}
    >
      <div className="pin-stage">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-32 lg:py-0 lg:h-full lg:grid lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-16 text-center lg:text-left relative z-10">
          <div>
            <h2 data-lines className="font-heading italic text-5xl md:text-7xl leading-tight text-[var(--color-brand-black)] mb-6">
              {t("methodology.title")} <span className="not-italic font-black text-[var(--color-brand-gold-deep)] font-script text-6xl md:text-7xl">{t("methodology.title_accent")}</span>
            </h2>
            <p data-reveal className="font-body text-gray-700 font-medium text-lg md:text-xl mb-16 lg:mb-0 max-w-2xl mx-auto lg:mx-0">
              {t("methodology.desc")}
            </p>
            <div className="method-progress mt-12 h-32 w-px bg-gray-200 relative" aria-hidden="true">
              <div data-method-line className="absolute inset-0 bg-[var(--color-brand-gold-deep)] origin-top scale-y-0" />
            </div>
          </div>

          <div className="method-panels grid md:grid-cols-2 gap-12 text-left">
            {pillars.map((p) => (
              <div key={p.n} className="method-panel">
                <p className="method-num font-heading text-6xl text-[var(--color-brand-gold)] opacity-30 mb-4 font-black">{p.n}</p>
                <h3 className="font-heading text-2xl mb-4 italic font-bold">{p.title}</h3>
                <p className="method-text font-body text-sm leading-relaxed text-gray-700">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Scene>
  );
}
