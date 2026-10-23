"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";
import { Scene } from "./scene";
import { KtCta, Scrub } from "./scrub";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29";

export function Diagnostic() {
  const { language, t } = useLanguage();
  return (
    <Scene
      id="quien-soy"
      className="py-32 px-6 md:px-16 bg-[var(--color-brand-purple)] text-white relative overflow-hidden"
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
          <p data-reveal className="kt-eyebrow on-dark justify-center lg:justify-start text-white">{t("diagnostic.tag")}</p>

          <Scrub
            as="h2"
            className="kt-title text-4xl md:text-5xl lg:text-6xl text-white"
            parts={
              language === "es"
                ? [
                    { text: "Tu negocio o marca está creciendo, pero te quedas preguntándote" },
                    { text: "¿qué sigue?", className: "font-script normal-case tracking-normal text-[var(--color-brand-pink)] text-[1.4em] leading-[1.1]", block: true },
                  ]
                : [
                    { text: "Your business or brand is growing, yet you're left wondering:" },
                    { text: "what's next?", className: "font-script normal-case tracking-normal text-[var(--color-brand-pink)] text-[1.4em] leading-[1.1]", block: true },
                  ]
            }
          />

          <p data-reveal className="text-white/80 font-medium text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            {t("diagnostic.desc1")}
            <br /><br />
            {t("diagnostic.desc2")}
          </p>
          <div data-reveal className="flex justify-center lg:justify-start mt-4">
            <KtCta href={WHATSAPP} tone="pink">{t("diagnostic.cta")}</KtCta>
          </div>
        </div>

        <div className="relative h-[450px] md:h-[600px] w-full p-6 lg:order-2 order-1 flex justify-center">
          {/* Thin gold border frame behind photo */}
          <div data-frame className="absolute inset-0 border border-white/50 rounded-[2rem] top-10 bottom-0 left-0 right-10 z-0 hidden lg:block" />

          <div data-mask className="kt-card relative w-full h-full z-10 overflow-hidden rounded-[2rem]">
            <div data-mask-img className="absolute inset-0">
              <Image src="/images/KT_Studio_Grey.webp" alt={language === "en" ? "Katherine Velasquez smiling in a grey outfit in a studio" : "Katherine Velasquez sonriendo, con conjunto gris, en un estudio"} fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover object-[center_40%]" />
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}
