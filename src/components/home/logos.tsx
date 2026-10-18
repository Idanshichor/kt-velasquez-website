"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";

const LOGOS = [
  { src: "/images/BioChange_logo.png", alt: "BioChange", href: "https://biochange.life/" },
  { src: "/images/logo-roma-studio.webp", alt: "Roma Studio Creativo", href: "https://romastudiocreativo.es/" },
  { src: "/images/logo-bound-travel-updated.png", alt: "Bound To Travel", href: "https://www.boundtotravel.com/", scale: "scale-[2.1]" },
  { src: "/images/logo-aev.png", alt: "AevArk", href: "https://www.aevark.com/", scale: "scale-[0.8]" },
  { src: "/images/logo-lightu-v2.png", alt: "Light U", href: "https://www.lightu.es/", scale: "scale-[1.6]" },
];

export function Logos() {
  const { t } = useLanguage();
  return (
    <Scene className="py-16 md:py-20 px-6 md:px-16 bg-white border-b-[1.5px] border-[var(--color-brand-black)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <p data-reveal className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] shrink-0">{t("logos.trust")}</p>
        <div data-stagger className="grid grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-8 items-center flex-1 w-full">
          {LOGOS.map((logo) => (
            <a key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.alt} className="group relative block h-14 md:h-16">
              <Image src={logo.src} alt={logo.alt} fill sizes="200px" className={`object-contain grayscale contrast-125 mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition duration-300 ${logo.scale || ""}`} />
            </a>
          ))}
        </div>
      </div>
    </Scene>
  );
}
