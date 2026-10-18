"use client";

import { useLanguage } from "@/context/language-context";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { Scene } from "./scene";
import { KtStar } from "./scrub";

export function AboutPreview() {
  const { language, t } = useLanguage();
  return (
    <Scene
      className="about-preview relative overflow-hidden py-28 md:py-36 px-6 md:px-16 bg-white"
      build={({ root }) => {
        // The three pillar words get a pink marker stroke as the paragraph comes in
        const marks = root.querySelectorAll<HTMLElement>(".kt-mark");
        gsap.fromTo(
          marks,
          { backgroundSize: "0% 40%" },
          { backgroundSize: "100% 40%", duration: 1.1, ease: "power2.inOut", stagger: 0.25, scrollTrigger: { trigger: marks[0], start: "top 80%", once: true } },
        );
      }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20 items-center">
        <div className="relative mx-auto w-full max-w-[26rem]">
          <div data-mask className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
            <div data-mask-img className="absolute inset-0">
              <Image src="/images/KT_About_Hero.webp" alt="Katherine Velasquez" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover object-[center_25%]" />
            </div>
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-10 w-28 h-28 md:w-36 md:h-36 rounded-full bg-[var(--color-brand-gold)] grid place-items-center shadow-elevated" aria-hidden="true">
            <span className="font-script text-5xl md:text-6xl text-[var(--color-brand-black)] leading-none">360</span>
            <KtStar className="kt-turn absolute top-3 right-4 w-5 h-5 text-[var(--color-brand-pink-dark)]" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 data-reveal className="font-script text-6xl md:text-7xl leading-none text-[var(--color-brand-pink-dark)] mb-2">{t("about.tag")}</h2>
          {language === "es" ? (
            <>
          <p data-reveal className="font-body text-gray-700 text-base md:text-lg leading-[1.75]">
                Soy Ingeniera Civil con doble maestría en Marketing y Comunicación Digital. Tras fundar mis propias empresas y asesorar proyectos en el ecosistema corporativo y de startups, entendí que un negocio no escala solo con buen marketing o mejores procesos.
              </p>
          <p data-reveal className="font-body text-[var(--color-brand-black)] text-lg md:text-xl leading-[1.75]">
                El verdadero crecimiento ocurre en la intersección de tres áreas: la <span className="kt-mark font-semibold">estructura del negocio</span>, la <span className="kt-mark font-semibold">estrategia de comunicación</span> y la <span className="kt-mark font-semibold">mentalidad del líder</span>. A esto lo llamo mi enfoque <span className="font-script text-4xl md:text-5xl text-[var(--color-brand-gold-deep)]">360.</span> Ayudo a fundadores y marcas maduras a operar con sistema, claridad y dirección.
              </p>
            </>
          ) : (
            <>
          <p data-reveal className="font-body text-gray-700 text-base md:text-lg leading-[1.75]">
                I am a Civil Engineer with a double master&apos;s degree in Marketing and Digital Communication. Having founded my own businesses and advised startups and corporate ventures, I realized that scaling isn&apos;t just about clever marketing or optimized workflows.
              </p>
          <p data-reveal className="font-body text-[var(--color-brand-black)] text-lg md:text-xl leading-[1.75]">
                True expansion happens at the intersection of three pillars: <span className="kt-mark font-semibold">business structure</span>, <span className="kt-mark font-semibold">communication strategy</span>, and <span className="kt-mark font-semibold">executive leadership mindset</span>. This is my <span className="font-script text-4xl md:text-5xl text-[var(--color-brand-gold-deep)]">360°</span> approach. I help founders and mature brands operate with systematic clarity and strategic direction.
              </p>
            </>
          )}
        </div>
      </div>
    </Scene>
  );
}
