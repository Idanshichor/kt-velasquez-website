"use client";

import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";
import { Scene } from "./scene";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29";
const STARS = [
  { top: "12%", left: "8%", size: "text-3xl", p: 0.25, delay: "0s" },
  { top: "22%", left: "88%", size: "text-2xl", p: 0.4, delay: "1.2s" },
  { top: "74%", left: "12%", size: "text-2xl", p: 0.35, delay: "2.1s" },
  { top: "80%", left: "84%", size: "text-4xl", p: 0.2, delay: "0.6s" },
  { top: "48%", left: "3%", size: "text-xl", p: 0.5, delay: "1.8s" },
];

export function FinalCta() {
  const { t } = useLanguage();
  return (
    <Scene
      className="py-20 px-6 md:px-16 bg-white"
      build={({ root }) => {
        const card = root.querySelector<HTMLElement>("[data-cta-card]");
        gsap.fromTo(
          card,
          { scale: 0.9 },
          { scale: 1, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "top 35%", scrub: true } },
        );
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div data-cta-card id="contacto" className="p-14 md:p-24 bg-[var(--color-brand-pink-light)] border-2 border-[var(--color-brand-gold)] text-[var(--color-brand-black)] text-center relative overflow-hidden shadow-none rounded-[2rem]">
          {STARS.map((s, i) => (
            <span key={i} data-parallax={s.p} aria-hidden="true" className={`absolute ${s.size} text-[var(--color-brand-gold-deep)]/60`} style={{ top: s.top, left: s.left }}>
              <span className="star-drift block" style={{ animationDelay: s.delay }}>✦</span>
            </span>
          ))}
          <div className="relative z-10">
            <h3 data-lines className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-[var(--color-brand-black)]">
              {t("cta.title")} <span className="italic font-script text-5xl md:text-7xl text-[var(--color-brand-black)]">{t("cta.accent")}</span> {t("cta.suffix")}
            </h3>
            <p data-reveal className="font-body font-medium mb-10 text-base md:text-lg max-w-xl mx-auto text-[var(--color-brand-black)]">
              {t("cta.desc")}
            </p>
            <div data-reveal className="flex flex-col sm:flex-row justify-center gap-4">
              <a data-magnetic data-cursor href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] border-2 border-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer text-center inline-block">
                {t("cta.button")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}
