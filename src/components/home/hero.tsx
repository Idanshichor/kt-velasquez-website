"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";
import { Scene } from "./scene";
import { KtCta } from "./scrub";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29";

export function Hero() {
  const { t } = useLanguage();

  return (
    <Scene
      className="relative w-full md:min-h-[100svh] flex items-center pt-28 pb-20 md:pt-32 md:pb-16 px-6 md:px-16 bg-white overflow-hidden"
      build={({ root }) => {
        const q = (s: string) => root.querySelector<HTMLElement>(s);

        // Intro, plays once on load: the words float up one after the other while the
        // photo settles into its card and the pink label slides in last.
        gsap.fromTo(q("[data-hero-img]"), { scale: 1.08 }, { scale: 1, duration: 3.2, ease: "power2.out" });
        gsap.fromTo(q("[data-hero-card]"), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.6, ease: "power3.out", delay: 0.2, clearProps: "transform" });
        root.querySelectorAll<HTMLElement>("[data-hero-line]").forEach((el) => gsap.set(el, { visibility: "visible" }));
        gsap.fromTo(
          [q("[data-hero-tag]"), ...root.querySelectorAll<HTMLElement>("[data-hero-line]"), q("[data-hero-desc]"), q("[data-hero-cta]"), q("[data-hero-script]")],
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 1.8, ease: "power3.out", stagger: 0.14, delay: 0.25, clearProps: "transform" },
        );

        // Leaving the hero: the photo drifts a little inside its card
        gsap.to(q("[data-hero-parallax]"), { yPercent: 8, ease: "none", scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true } });
      }}
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-14 md:gap-16 lg:gap-20 items-center">
        <div className="flex flex-col items-start">
          <p data-hero-tag className="kt-eyebrow text-[var(--color-brand-black)] mb-8">
            {t("hero.consultoria")}
          </p>

          <h1 className="kt-title text-6xl md:text-7xl lg:text-[6.5rem] text-[var(--color-brand-black)]">
            <span data-hero-line className="block">{t("hero.katherine")}</span>
            <span data-hero-line className="block font-script normal-case tracking-normal text-[0.8em] leading-[1.15] mt-1">{t("hero.velasquez")}</span>
            <span className="sr-only">— {t("hero.h1_keyword")}</span>
          </h1>

          <div data-hero-desc className="mt-10 max-w-[30rem]">
            <span className="kt-rule mb-6" />
            <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed">
              {t("hero.description")}
            </p>
          </div>

          <div data-hero-cta className="mt-10">
            <KtCta href={WHATSAPP} tone="dark">{t("hero.cta")}</KtCta>
          </div>
        </div>

        {/* Portrait card with the pink lower third, same as the "Hola, soy Katherine" block */}
        <div className="relative mx-auto w-full max-w-[440px] pb-10">
          <div data-hero-card className="relative aspect-[4/5] overflow-hidden rounded-[28px] kt-card bg-[var(--color-brand-black)]">
            <div data-hero-parallax className="absolute -inset-y-[6%] inset-x-0">
              <div data-hero-img className="absolute inset-0">
                <Image src="/images/KT_Hero.webp" alt="Katherine Velasquez" fill sizes="(max-width: 768px) 90vw, 440px" className="object-cover object-[90%_center]" priority />
              </div>
            </div>
          </div>
          <div data-hero-script className="absolute left-0 right-6 bottom-0 md:-left-8 bg-[var(--color-brand-pink)] rounded-2xl px-6 py-5 shadow-[0_24px_60px_-28px_rgba(26,26,26,0.45)]">
            <p className="font-heading italic text-lg md:text-xl leading-snug text-[var(--color-brand-black)]">{t("hero.direccion")}</p>
          </div>
        </div>
      </div>
    </Scene>
  );
}
