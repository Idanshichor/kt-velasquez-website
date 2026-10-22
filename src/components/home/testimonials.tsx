"use client";

import { useLanguage } from "@/context/language-context";
import { useRef, useState } from "react";
import { Scene } from "./scene";
import { KtStar } from "./scrub";

export function Testimonials() {
  const { language, t } = useLanguage();

  const testimonials = [
    {
      text: language === "es"
        ? "Tuve una excelente experiencia trabajando con Katherine en diseño y marketing. La recomiendo totalmente por su creatividad y su flexibilidad."
        : "I had an excellent experience working with Katherine on design and marketing. I highly recommend her for her creativity and flexibility.",
      name: "Hilit Hochman",
      role: language === "es" ? "VP de Marketing, BioChange" : "Marketing VP, BioChange",
    },
    {
      text: language === "es"
        ? "Trabajar con Katherine ha sido una experiencia absolutamente increíble. Su metodología, sus estrategias y su mentalidad empresarial son de otro nivel. Gracias a su dirección estratégica, nos ha ayudado a escalar y superar los $250,000 en ventas. Si de verdad hablas en serio sobre hacer crecer tu negocio, Katherine es la estratega que necesitas a tu lado."
        : "Working with Katherine has been an absolutely incredible experience. Her methodology, strategies, and business mindset are on another level. Thanks to her strategic direction, she helped us scale and surpass $250,000 in sales. If you are truly serious about growing your business, Katherine is the strategist you need by your side.",
      name: "Pnina Shichor",
      role: language === "es" ? "Fundadora, Bound to Travel" : "Founder, Bound to Travel",
    },
    {
      text: language === "es"
        ? "Ha sido una experiencia muy linda y enriquecedora. Desde el primer momento he sentido un acompañamiento muy personalizado, siempre con atención, paciencia y compromiso. Es una persona muy dedicada, apasionada por lo que hace y realmente se preocupa por brindar lo mejor en cada detalle. Me he sentido escuchada, apoyada y muy satisfecha con todo el proceso. Sin duda, recomiendo totalmente su trabajo por la calidad humana y profesional que transmite."
        : "It has been a beautiful and enriching experience. From day one, I felt a highly personalized level of guidance, always delivered with care, patience, and commitment. She is incredibly dedicated, passionate about her work, and truly cares about delivering excellence in every detail. I felt heard, supported, and fully satisfied with the entire process. I highly recommend her for both her human warmth and her professional caliber.",
      name: "Yulieth Mattos",
      role: language === "es" ? "Emprendedora" : "Entrepreneur",
    },
  ];

  const [i, setI] = useState(1);
  const n = testimonials.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const startX = useRef<number | null>(null);
  const cur = testimonials[i];
  // The one number that matters gets the gold, wherever it appears in the quote
  const parts = cur.text.split(/(\$250,000)/);

  return (
    <Scene className="bg-[var(--color-brand-black)] text-white py-28 md:py-40 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20 items-center">
        <div>
          <h2 data-lines className="kt-title text-4xl md:text-6xl fit-testimonials text-white mb-10 md:mb-14">
            {t("testimonials.title")}
          </h2>
          <div data-reveal className="flex items-center gap-6">
            <p className="font-heading text-5xl md:text-6xl leading-none text-[var(--color-brand-gold)] tabular-nums">
              0{i + 1}
              <span className="text-xl md:text-2xl text-white/40 align-top ml-1">/0{n}</span>
            </p>
            <div className="flex gap-3 ml-auto lg:ml-0">
              {[-1, 1].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => go(d)}
                  aria-label={d < 0 ? (language === "es" ? "Anterior" : "Previous") : language === "es" ? "Siguiente" : "Next"}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[1.5px] border-white/60 grid place-items-center text-white hover:bg-white hover:text-[var(--color-brand-black)] transition-colors cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className={`w-5 h-5 ${d < 0 ? "rotate-180" : ""}`} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2 mt-8" aria-hidden="true">
            {testimonials.map((_, k) => (
              <span key={k} className="h-[3px] flex-1 rounded-full bg-white/15 overflow-hidden">
                <span className={`block h-full bg-[var(--color-brand-pink)] origin-left transition-transform duration-700 ${k === i ? "scale-x-100" : "scale-x-0"}`} />
              </span>
            ))}
          </div>
        </div>

        <figure
          data-reveal
          aria-live="polite"
          onPointerDown={(e) => { startX.current = e.clientX; }}
          onPointerUp={(e) => {
            if (startX.current === null) return;
            const dx = e.clientX - startX.current;
            startX.current = null;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          }}
          style={{ "--kt-shadow": "var(--color-brand-gold)" } as React.CSSProperties} className="kt-card relative bg-[var(--color-brand-pink)] text-[var(--color-brand-black)] rounded-[2rem] p-8 md:p-14 min-h-[26rem] md:min-h-[30rem] flex flex-col touch-pan-y select-none"
        >
          <KtStar className="kt-turn absolute -top-6 -right-6 w-20 h-20 md:w-28 md:h-28 text-[var(--color-brand-gold)]" />
          <span aria-hidden="true" className="font-heading text-7xl md:text-8xl leading-[0.5] text-[var(--color-brand-pink-dark)] mb-6 md:mb-10">&ldquo;</span>
          <div key={i} className="svc-panel flex-1 flex flex-col">
            <blockquote className="font-heading italic text-lg md:text-2xl leading-[1.55] text-[var(--color-brand-black)] flex-1">
              {parts.map((p, k) => (p === "$250,000" ? <span key={k} className="not-italic font-bold underline decoration-[var(--color-brand-pink-dark)] decoration-[3px] underline-offset-[6px]">{p}</span> : p))}
            </blockquote>
            <figcaption className="mt-10 pt-6 border-t border-[var(--color-brand-black)]/15 flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-[var(--color-brand-black)] text-[var(--color-brand-pink)] grid place-items-center font-heading italic text-lg" aria-hidden="true">
                {cur.name.charAt(0)}
              </span>
              <span>
                <span className="block font-bold uppercase tracking-widest text-xs text-[var(--color-brand-black)]">{cur.name}</span>
                <span className="block text-xs mt-1 text-[var(--color-brand-black)]/65">{cur.role}</span>
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </Scene>
  );
}
