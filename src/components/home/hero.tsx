"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";
import { KtStar } from "./scrub";
import { Scene } from "./scene";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29";

export function Hero() {
  const { t } = useLanguage();

  return (
    <Scene
      className="relative w-full min-h-[100svh] flex flex-col justify-end pt-28 pb-10 md:pb-16 overflow-hidden bg-[var(--color-brand-black)]"
      build={({ root }) => {
        const q = (s: string) => root.querySelector<HTMLElement>(s);
        const all = (s: string) => Array.from(root.querySelectorAll<HTMLElement>(s));

        // Intro, plays once on load. The photo settles from a slight zoom, the name
        // rises line by line and the tagline slides in from the side.
        gsap.fromTo(q("[data-hero-img]"), { scale: 1.1, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 3, ease: "power2.out" });
        all("[data-hero-line]").forEach((el) => gsap.set(el, { visibility: "visible" }));
        gsap.fromTo(all("[data-hero-line]"), { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.4, ease: "power4.out", stagger: 0.15, delay: 0.2 });
        gsap.fromTo(all("[data-hero-strap]"), { xPercent: -14, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1.1, ease: "power3.out", stagger: 0.12, delay: 0.9, clearProps: "transform" });
        gsap.fromTo([...all("[data-hero-desc]"), q("[data-hero-cta]")], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.12, delay: 1.1, clearProps: "transform" });

        // Leaving the hero: the photo and the name move at different speeds
        const st = { trigger: root, start: "top top", end: "bottom top", scrub: true };
        gsap.to(q("[data-hero-parallax]"), { yPercent: 12, scale: 1.06, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-hero-title]"), { yPercent: -35, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-hero-dim]"), { opacity: 0.5, ease: "none", scrollTrigger: st });
      }}
    >
      {/* Full-screen photo */}
      <div className="absolute inset-0 z-0">
        <div data-hero-parallax className="absolute inset-0">
          <div data-hero-img className="absolute inset-0">
            <Image src="/images/KT_Hero.webp" alt="Katherine Velasquez" fill sizes="100vw" className="object-cover object-[80%_30%] md:object-[78%_30%]" priority />
          </div>
        </div>
        {/* Shade so the white words read on the grey backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 md:bg-[linear-gradient(90deg,rgba(26,26,26,0.6),rgba(26,26,26,0)_62%)]" />
        <div data-hero-dim className="absolute inset-0 bg-black opacity-0 pointer-events-none" />
      </div>

      {/* The hero from the KT360 brand manual ("El hero de ktvelasquez.com"): huge white
          name, one gold script word, flat black and pink straps, white pill button.
          Same pieces as the manual, with more room between them. */}
      <div className="relative z-10 w-full px-6 md:pl-[6vw] md:pr-0">
        <div className="md:w-[56vw] md:max-w-[64rem]">
          <div data-hero-title>
            <h1 className="font-heading uppercase text-white tracking-[-0.03em] leading-[0.82] text-[3.6rem] sm:text-7xl md:text-[clamp(5rem,10vw,12rem)]">
              <span data-hero-line className="block">{t("hero.katherine")}</span>
              <span data-hero-line className="block font-script normal-case tracking-normal leading-none text-[var(--color-brand-gold)] text-[0.75em] -mt-[0.12em] ml-[1.1em] md:ml-[1.6em]">{t("hero.velasquez")}</span>
              <span className="sr-only">— {t("hero.h1_keyword")}</span>
            </h1>
          </div>

          <p data-hero-strap className="mt-8 md:mt-12 flex flex-wrap text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]">
            <span className="bg-[var(--color-brand-black)] text-white px-4 py-2.5">{t("hero.consultoria")}</span>
            <span className="bg-[var(--color-brand-pink)] text-[var(--color-brand-black)] px-4 py-2.5">{t("hero.roles")}</span>
          </p>

          <p data-hero-desc className="mt-6 md:mt-8 font-body font-medium text-white text-lg md:text-2xl leading-snug max-w-[34rem] [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            {t("hero.direccion")}
          </p>
          <p data-hero-desc className="mt-3 font-body text-white/75 text-sm md:text-base leading-relaxed max-w-[28rem] [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            {t("hero.description")}
          </p>

          <div data-hero-cta className="mt-8 md:mt-10">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="kt-btn bg-white text-[var(--color-brand-black)] hover:bg-[var(--color-brand-pink)]">
              <span>{t("hero.cta")}</span>
              <span className="kt-btn-dot bg-[var(--color-brand-gold)] text-[var(--color-brand-black)]" aria-hidden="true">
                <KtStar className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </Scene>
  );
}
