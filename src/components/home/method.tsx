"use client";

import { useLanguage } from "@/context/language-context";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Scene } from "./scene";
import { KtStar } from "./scrub";

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
      className="method360 bg-[var(--color-brand-pink-dark)] text-white py-28 md:py-36 px-6 md:px-16"
      build={({ root, desktop }) => {
        if (!desktop || window.innerHeight < 740) return;
        const cards = Array.from(root.querySelectorAll<HTMLElement>(".m-card"));
        const nodes = Array.from(root.querySelectorAll<SVGGElement>(".m-node"));
        const setActive = (n: number) => nodes.forEach((g, i) => g.classList.toggle("is-on", i === n));
        setActive(0);
        cards.slice(0, -1).forEach((card, i) => {
          gsap.to(card, {
            scale: 0.94,
            rotation: -1.2,
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: { trigger: cards[i + 1], start: "top 85%", end: "top 200px", scrub: 0.8, invalidateOnRefresh: true },
          });
        });
        cards.forEach((card, i) => {
          ScrollTrigger.create({ trigger: card, start: "top 60%", end: "bottom 60%", onToggle: (self) => self.isActive && setActive(i) });
        });
        gsap.to(root.querySelector(".m-orbit"), {
          rotation: 180,
          svgOrigin: "200 200",
          ease: "none",
          scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1 },
        });
        gsap.fromTo(
          root.querySelector(".m-progress i"),
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: { trigger: root.querySelector(".m-cards"), start: "top 200px", end: "bottom bottom", scrub: 0.6 } },
        );
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-14 lg:gap-24 items-start">
        <div className="m-anchor text-center lg:text-left">
          <h2 data-lines className="font-heading italic text-5xl md:text-7xl leading-tight text-white mb-5">
            {t("methodology.title")} <span className="not-italic font-black text-[var(--color-brand-gold)] font-script text-6xl md:text-7xl">{t("methodology.title_accent")}</span>
          </h2>
          <p data-reveal className="font-body text-white/85 font-medium text-lg md:text-xl">{t("methodology.desc")}</p>

          <div className="relative hidden lg:block mt-10 w-[min(100%,340px)] aspect-square" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 400">
              <g className="m-orbit">
                <circle cx="200" cy="200" r="170" fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="1.2" strokeDasharray="3 9" />
                <circle cx="200" cy="30" r="5" fill="var(--color-brand-gold)" transform="rotate(45 200 200)" />
              </g>
              <circle cx="200" cy="200" r="122" fill="none" stroke="var(--color-brand-gold)" strokeOpacity="0.7" strokeWidth="1" />
              {[[200, 30], [370, 200], [200, 370], [30, 200]].map(([x, y], i) => (
                <g key={i} className="m-node" transform={`translate(${x} ${y})`}>
                  <circle r="22" className="m-node-ring" />
                  <text textAnchor="middle" dy="5" className="m-node-num">{pillars[i].n}</text>
                </g>
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <KtStar className="kt-turn w-10 h-10 text-white mb-1" />
              <span className="font-script text-6xl md:text-7xl text-[var(--color-brand-gold)] leading-none">360</span>
            </div>
          </div>
        </div>

        <div className="m-cards relative grid gap-6">
          <div className="m-progress" aria-hidden="true"><i /></div>
          {pillars.map((p, i) => (
            <article key={p.n} className={`m-card kt-card relative rounded-[1.75rem] p-7 md:p-12 text-[var(--color-brand-black)] ${i % 2 ? "bg-[var(--color-brand-gold)]" : "bg-white"}`} style={{ zIndex: i + 1 }}>
              <div className="flex gap-1.5 mb-5 md:mb-8" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand-pink-dark)]" />
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand-gold)]" />
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand-black)]" />
              </div>
              <p className="font-heading text-5xl md:text-7xl text-[var(--color-brand-pink-dark)] leading-none mb-4 md:mb-6" aria-hidden="true">{p.n}</p>
              <h3 className="font-heading text-2xl md:text-4xl leading-tight mb-3 md:mb-5 italic font-bold text-[var(--color-brand-black)]">{p.title}</h3>
              <p className="font-body text-[15px] md:text-lg leading-relaxed text-[var(--color-brand-black)]/80 max-w-[46ch]">{p.desc}</p>
              <KtStar className="absolute right-8 bottom-8 w-7 h-7 text-[var(--color-brand-pink-dark)]" />
            </article>
          ))}
        </div>
      </div>
    </Scene>
  );
}
