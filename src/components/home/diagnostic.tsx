"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";
import { Scene } from "./scene";
import { KtStar } from "./scrub";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29";

export function Diagnostic() {
  const { language, t } = useLanguage();
  const ring = `${t("hero.consultoria")} ✦ ${t("hero.consultoria")} ✦ `;
  return (
    <Scene
      id="quien-soy"
      className="py-28 md:py-36 px-6 md:px-16 bg-[var(--color-brand-gold-light)] relative overflow-hidden"
      build={({ root }) => {
        // A hand-drawn pink stroke draws itself under "¿qué sigue?"
        const path = root.querySelector<SVGPathElement>("[data-underline] path");
        if (path) {
          const len = path.getTotalLength();
          gsap.fromTo(
            path,
            { strokeDasharray: len, strokeDashoffset: len },
            { strokeDashoffset: 0, duration: 1.2, delay: 0.6, ease: "power2.inOut", scrollTrigger: { trigger: path, start: "top 85%", once: true } },
          );
        }
      }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-16 lg:gap-24 items-center relative z-10">
        <div className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left">
          <p data-reveal className="inline-flex items-center justify-center lg:justify-start gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)]">
            <KtStar className="w-3.5 h-3.5 text-[var(--color-brand-pink-dark)]" />
            {t("diagnostic.tag")}
          </p>

          <h2 data-reveal className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[var(--color-brand-black)]">
            {language === "es" ? (
              <>Tu negocio o marca está creciendo, pero te quedas preguntándote </>
            ) : (
              <>Your business or brand is growing, yet you&apos;re left wondering: </>
            )}
            <span className="relative inline-block italic font-bold text-[var(--color-brand-pink-dark)]">
              {language === "es" ? "¿qué sigue?" : "what's next?"}
              <svg data-underline viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute left-0 -bottom-3 w-full h-4" aria-hidden="true">
                <path d="M4 16C60 6 140 4 296 12" fill="none" stroke="var(--color-brand-pink-dark)" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p data-reveal className="text-gray-700 font-medium text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            {t("diagnostic.desc1")}
          </p>
          <p data-reveal className="font-heading italic text-xl md:text-2xl leading-snug text-[var(--color-brand-black)] max-w-xl mx-auto lg:mx-0 lg:border-l-2 lg:border-[var(--color-brand-gold-deep)] lg:pl-6">
            {t("diagnostic.desc2")}
          </p>
          <div data-reveal className="flex justify-center lg:justify-start mt-2">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-[var(--color-brand-black)] text-white border-2 border-[var(--color-brand-black)] pl-8 pr-2.5 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-transparent hover:text-[var(--color-brand-black)] transition-colors">
              {t("diagnostic.cta")}
              <span className="w-9 h-9 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] grid place-items-center transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">
                <KtStar className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 mx-auto w-full max-w-[24rem]">
          <div className="absolute -inset-4 md:-inset-6 rounded-t-full border border-[var(--color-brand-gold-deep)]/40" aria-hidden="true" />
          <div data-mask className="relative aspect-[3/4] rounded-t-full overflow-hidden">
            <div data-mask-img className="absolute inset-0">
              <Image src="/images/KTSecondPhoto.webp" alt="Katherine Velasquez" fill sizes="(max-width: 1024px) 90vw, 35vw" quality={90} className="object-cover object-[center_30%]" />
            </div>
          </div>
          {/* Turning badge with the brand line */}
          <div className="absolute -left-2 md:-left-14 bottom-8 md:bottom-10 w-28 h-28 md:w-40 md:h-40 rounded-full bg-[var(--color-brand-black)] text-white shadow-elevated" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="kt-turn absolute inset-0 w-full h-full">
              <defs><path id="kt-ring" d="M100 100m-74 0a74 74 0 1 1 148 0a74 74 0 1 1-148 0" /></defs>
              <text className="fill-white" style={{ fontSize: 13.5, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
                <textPath href="#kt-ring" textLength="462">{ring}</textPath>
              </text>
            </svg>
            <KtStar className="absolute inset-[38%] text-[var(--color-brand-gold)]" />
          </div>
        </div>
      </div>
    </Scene>
  );
}
