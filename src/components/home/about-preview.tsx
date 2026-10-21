"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";
import { Scrub, type ScrubPart } from "./scrub";

const B = "font-bold not-italic";
const S = "font-script not-italic text-[var(--color-brand-gold-deep)] text-[1.35em] leading-none";

export function AboutPreview() {
  const { language, t } = useLanguage();

  const lead =
    language === "es"
      ? "Soy Ingeniera Civil con doble maestría en Marketing y Comunicación Digital. Tras fundar mis propias empresas y asesorar proyectos en el ecosistema corporativo y de startups, entendí que un negocio no escala solo con buen marketing o mejores procesos."
      : "I am a Civil Engineer with a double master's degree in Marketing and Digital Communication. Having founded my own businesses and advised startups and corporate ventures, I realized that scaling isn't just about clever marketing or optimized workflows.";

  // The second paragraph is the heart of the section, so it reads like the "para quienes" statement
  const parts: ScrubPart[] =
    language === "es"
      ? [
          { text: "El verdadero crecimiento ocurre en la intersección de tres áreas: la" },
          { text: "estructura del negocio,", className: B },
          { text: "la" },
          { text: "estrategia de comunicación", className: B },
          { text: "y la" },
          { text: "mentalidad del líder.", className: B },
          { text: "A esto lo llamo mi enfoque" },
          { text: "360.", className: S },
          { text: "Ayudo a fundadores y marcas maduras a operar con sistema, claridad y dirección." },
        ]
      : [
          { text: "True expansion happens at the intersection of three pillars:" },
          { text: "business structure,", className: B },
          { text: "communication strategy,", className: B },
          { text: "and" },
          { text: "executive leadership mindset.", className: B },
          { text: "This is my" },
          { text: "360°", className: S },
          { text: "approach. I help founders and mature brands operate with systematic clarity and strategic direction." },
        ];

  return (
    <Scene className="py-28 md:py-40 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 lg:gap-20 items-center">
        {/* Portrait with the name strap, like a lower third in the reels */}
        <div data-reveal className="relative mx-auto w-full max-w-[420px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] kt-card">
            <Image src="/images/KT_About_Hero.webp" alt="Katherine Velasquez" fill sizes="(max-width: 1024px) 90vw, 420px" quality={90} className="object-cover object-[center_25%]" />
          </div>
        </div>
        <div>
          <h2 data-lines className="kt-title text-[2.6rem] md:text-6xl text-[var(--color-brand-black)] mb-8">{t("about.tag")}</h2>
          <span className="kt-rule mb-8" />
          <p data-reveal className="font-body text-gray-600 text-base md:text-lg leading-[1.75] mb-10 max-w-2xl">{lead}</p>
          <Scrub parts={parts} className="font-heading italic text-2xl md:text-[2.1rem] leading-[1.3] tracking-tight text-[var(--color-brand-black)]" />
        </div>
      </div>
    </Scene>
  );
}
