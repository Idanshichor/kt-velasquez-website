"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";
import { Scene } from "./scene";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29";

export function Diagnostic() {
  const { language, t } = useLanguage();
  return (
    <Scene
      id="quien-soy"
      className="py-32 px-6 md:px-16 bg-[var(--color-brand-gold-light)] relative overflow-hidden"
      build={({ root }) => {
        const frame = root.querySelector<HTMLElement>("[data-frame]");
        if (frame) {
          gsap.fromTo(
            frame,
            { x: -34, y: 34, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 1.5, delay: 0.3, ease: "power3.out", scrollTrigger: { trigger: frame, start: "top 85%", once: true } },
          );
        }
      }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left">
          <p data-reveal className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)]">{t("diagnostic.tag")}</p>

          <h2 data-lines className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[var(--color-brand-black)]">
            {language === "es" ? (
              <>Tu negocio o marca está creciendo, pero te quedas preguntándote <span className="italic font-bold">¿qué sigue?</span></>
            ) : (
              <>Your business or brand is growing, yet you&apos;re left wondering: <span className="italic font-bold">what&apos;s next?</span></>
            )}
          </h2>

          <p data-reveal className="text-[var(--color-brand-black)] font-medium text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            {t("diagnostic.desc1")}
            <br /><br />
            {t("diagnostic.desc2")}
          </p>
          <div data-reveal className="flex justify-center lg:justify-start mt-4">
            <a data-magnetic data-cursor href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer text-center inline-block">
              {t("diagnostic.cta")}
            </a>
          </div>
        </div>

        <div className="relative h-[450px] md:h-[600px] w-full p-6 lg:order-2 order-1 flex justify-center">
          {/* Thin gold border frame behind photo */}
          <div data-frame className="absolute inset-0 border border-[var(--color-brand-gold)] top-10 bottom-0 left-0 right-10 z-0 hidden lg:block" />

          <div data-mask className="relative w-full h-full z-10 overflow-hidden border-4 border-white shadow-soft">
            <div data-mask-img className="absolute inset-0">
              <Image src="/images/KTSecondPhoto.webp" alt="Katherine Velasquez" fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover object-[center_40%]" />
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}
