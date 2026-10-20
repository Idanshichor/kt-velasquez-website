"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";
import { Scene } from "./scene";
import { KtCta, KtStar } from "./scrub";

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
        // rises line by line, the star spins in, and the name straps slide in from
        // the side like a lower third in the reels.
        gsap.fromTo(q("[data-hero-img]"), { scale: 1.1, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 3, ease: "power2.out" });
        all("[data-hero-line]").forEach((el) => gsap.set(el, { visibility: "visible" }));
        gsap.fromTo(all("[data-hero-line]"), { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.4, ease: "power4.out", stagger: 0.15, delay: 0.2 });
        gsap.fromTo(q("[data-hero-star]"), { rotate: -120, scale: 0, opacity: 0 }, { rotate: 0, scale: 1, opacity: 1, duration: 1.6, ease: "back.out(1.6)", delay: 0.6 });
        gsap.fromTo(all("[data-hero-strap]"), { xPercent: -14, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1.1, ease: "power3.out", stagger: 0.12, delay: 0.9, clearProps: "transform" });
        gsap.fromTo([q("[data-hero-desc]"), q("[data-hero-cta]")], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.12, delay: 1.1, clearProps: "transform" });

        // Leaving the hero: layers move at different speeds
        const st = { trigger: root, start: "top top", end: "bottom top", scrub: true };
        gsap.to(q("[data-hero-parallax]"), { yPercent: 12, scale: 1.06, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-hero-title]"), { yPercent: -35, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-hero-star]"), { rotate: 180, ease: "none", scrollTrigger: st });
        gsap.to(q("[data-hero-dim]"), { opacity: 0.5, ease: "none", scrollTrigger: st });
      }}
    >
      {/* Full-screen photo */}
      <div className="absolute inset-0 z-0">
        <div data-hero-parallax className="absolute inset-0">
          <div data-hero-img className="absolute inset-0">
            <Image src="/images/KT_Hero.webp" alt="Katherine Velasquez" fill sizes="100vw" className="object-cover object-[80%_30%] md:object-[75%_center]" priority />
          </div>
        </div>
        {/* Shade so the white words read on the grey backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-transparent" />
        <div data-hero-dim className="absolute inset-0 bg-black opacity-0 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-[46rem]">
          <div data-hero-title className="relative">
            <span data-hero-star className="absolute -top-10 right-2 md:-top-14 md:-right-6 w-12 md:w-20 text-[var(--color-brand-gold)]"><KtStar className="w-full h-auto block" /></span>
            <h1 className="kt-title text-white text-[3.4rem] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
              <span data-hero-line className="block">{t("hero.katherine")}</span>
              <span data-hero-line className="block font-script normal-case tracking-normal text-[var(--color-brand-gold)] text-[0.78em] leading-[1.1] -mt-1 md:-mt-3 md:pl-[0.6em]">{t("hero.velasquez")}</span>
              <span className="sr-only">— {t("hero.h1_keyword")}</span>
            </h1>
          </div>

          {/* Name straps, like the lower third in the reels */}
          <div className="mt-8 md:mt-10 flex flex-col items-start gap-0">
            <p data-hero-strap className="relative z-10 bg-[var(--color-brand-black)] text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] rounded-t-xl rounded-br-xl px-5 py-3 flex items-center gap-3">
              <span aria-hidden="true" className="w-[3px] h-[1.6em] rounded-sm bg-[var(--color-brand-pink)]" />
              {t("hero.consultoria")}
            </p>
            <p data-hero-strap className="max-w-[30rem] bg-[var(--color-brand-pink)] text-[var(--color-brand-black)] font-heading italic text-lg md:text-2xl leading-snug rounded-b-2xl rounded-tr-2xl px-5 md:px-6 py-3 md:py-4 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)]">
              {t("hero.direccion")}
            </p>
          </div>

          <div className="mt-8 md:mt-10 flex flex-col items-start gap-6">
            <div data-hero-cta className="shrink-0">
              <KtCta href={WHATSAPP} tone="gold">{t("hero.cta")}</KtCta>
            </div>
            <p data-hero-desc className="font-body text-white/80 text-sm md:text-base leading-relaxed max-w-[26rem]">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </div>
    </Scene>
  );
}
