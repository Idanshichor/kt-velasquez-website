"use client";

import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";

export function AboutPreview() {
  const { language, t } = useLanguage();
  return (
    <Scene className="py-28 md:py-36 px-6 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p data-reveal className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-8">{t("about.tag")}</p>
        <p data-reveal className="font-body text-[var(--color-brand-black)] text-lg md:text-[1.375rem] leading-[1.7] text-left md:text-center">
          {language === "es" ? (
            <>
              Soy Ingeniera Civil con doble maestría en Marketing y Comunicación Digital. Tras fundar mis propias empresas y asesorar proyectos en el ecosistema corporativo y de startups, entendí que un negocio no escala solo con buen marketing o mejores procesos.<br /><br />
              El verdadero crecimiento ocurre en la intersección de tres áreas: la <span className="font-bold">estructura del negocio</span>, la <span className="font-bold">estrategia de comunicación</span> y la <span className="font-bold">mentalidad del líder</span>. A esto lo llamo mi enfoque <span className="font-script text-3xl md:text-4xl">360.</span> Ayudo a fundadores y marcas maduras a operar con sistema, claridad y dirección.
            </>
          ) : (
            <>
              I am a Civil Engineer with a double master&apos;s degree in Marketing and Digital Communication. Having founded my own businesses and advised startups and corporate ventures, I realized that scaling isn&apos;t just about clever marketing or optimized workflows.<br /><br />
              True expansion happens at the intersection of three pillars: <span className="font-bold">business structure</span>, <span className="font-bold">communication strategy</span>, and <span className="font-bold">executive leadership mindset</span>. This is my <span className="font-script text-3xl md:text-4xl">360°</span> approach. I help founders and mature brands operate with systematic clarity and strategic direction.
            </>
          )}
        </p>
      </div>
    </Scene>
  );
}
