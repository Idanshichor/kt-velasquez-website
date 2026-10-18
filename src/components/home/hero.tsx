"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { gsap, SplitText } from "@/lib/gsap";
import { Scene } from "./scene";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29";

export function Hero() {
  const { t } = useLanguage();

  return (
    <Scene
      className="relative w-full min-h-[100svh] flex flex-col justify-start pt-32 pb-6 md:justify-center md:pt-24 md:pb-0 overflow-hidden bg-white"
      build={({ root }) => {
        const q = (s: string) => root.querySelector<HTMLElement>(s);

        // Intro, plays once on load
        gsap.fromTo(q("[data-hero-img]"), { scale: 1.18 }, { scale: 1, duration: 2.4, ease: "power3.out" });
        gsap.fromTo(q("[data-hero-tag]"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" });
        root.querySelectorAll<HTMLElement>("[data-hero-line]").forEach((el, i) => {
          gsap.set(el, { visibility: "visible" });
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
              return gsap.from(self.lines, { yPercent: 115, duration: 1.3, ease: "power4.out", delay: 0.45 + i * 0.15 });
            },
          });
        });
        gsap.fromTo(
          q("[data-hero-script]"),
          { clipPath: "inset(-10% 100% -10% 0%)" },
          { clipPath: "inset(-10% -5% -10% -2%)", duration: 1.8, delay: 1.0, ease: "power2.inOut" },
        );
        gsap.fromTo(q("[data-hero-desc]"), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, delay: 1.3, ease: "power3.out" });
        gsap.fromTo(q("[data-hero-cta]"), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power3.out" });

        // Leaving the hero: photo drifts slower than text, and dims
        const st = { trigger: root, start: "top top", end: "bottom top", scrub: true };
        gsap.to(q("[data-hero-img]"), { yPercent: 12, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-hero-dim]"), { opacity: 0.55, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-hero-copy]"), { yPercent: -14, opacity: 0.2, ease: "none", scrollTrigger: st });
      }}
    >
      {/* Full background image */}
      <div className="absolute inset-0 z-0 bg-black">
        <div data-hero-img className="absolute inset-0">
          <Image src="/images/KT_Hero.webp" alt="Katherine Velasquez Background" fill sizes="100vw" className="object-cover object-[82%_40%] md:object-[75%_center]" priority />
        </div>
        {/* Mobile dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent md:hidden" />
        <div data-hero-dim className="absolute inset-0 bg-black opacity-0 pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center flex-1 md:flex-none">
        <div data-hero-copy className="flex flex-col text-center md:text-left z-20 h-full md:h-auto justify-between md:justify-center md:gap-6">
          <p data-hero-tag className="font-heading text-2xl md:text-3xl text-[var(--color-brand-cream)] mb-2 md:mb-0">
            <span className="italic">{t("hero.consultoria")}</span>
          </p>

          <div className="flex flex-col gap-6 mt-auto md:mt-0 pt-16 md:pt-0 md:pb-0">
            <h1 className="order-1 font-heading text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-[var(--color-brand-cream)] mt-4 md:mt-0">
              <span data-hero-line className="block w-max mx-auto md:mx-0">{t("hero.katherine")}</span>
              <span data-hero-line className="block w-max mx-auto md:mx-0">{t("hero.velasquez")}</span>
              <span className="sr-only">— {t("hero.h1_keyword")}</span>
            </h1>

            <div data-hero-script className="order-3 md:order-2 font-script-readable text-2xl md:text-[2.25rem] lg:text-[2.75rem] text-[var(--color-brand-gold)] max-w-[500px] leading-tight text-center md:text-left mx-auto md:mx-0 md:-ml-2 mt-2 md:mt-4 hidden md:block">
              {t("hero.direccion")}
            </div>

            <div data-hero-desc className="order-4 md:order-3 flex justify-center md:justify-start max-w-[480px] mx-auto md:mx-0">
              <p className="font-body text-[var(--color-brand-cream)] text-sm md:text-base font-medium leading-relaxed text-center md:text-left">
                {t("hero.description")}
              </p>
            </div>

            <div data-hero-cta className="order-2 md:order-4 flex justify-center md:justify-start max-w-[480px] mx-auto md:mx-0">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-gold-light)] transition-colors shadow-none cursor-pointer text-center inline-block">
                {t("hero.cta")}
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </Scene>
  );
}
