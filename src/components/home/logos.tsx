"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";

const LOGOS = [
  { src: "/images/BioChange_logo.png", alt: "BioChange", href: "https://biochange.life/" },
  { src: "/images/logo-roma-studio.webp", alt: "Roma Studio Creativo", href: "https://romastudiocreativo.es/" },
  { src: "/images/logo-bound-travel-updated.png", alt: "Bound To Travel", href: "https://www.boundtotravel.com/", scale: "scale-150" },
  { src: "/images/logo-aev.png", alt: "AevArk", href: "https://www.aevark.com/", scale: "scale-110" },
  { src: "/images/logo-lightu-v2.png", alt: "Light U", href: "https://www.lightu.es/" },
];

export function Logos() {
  const { t } = useLanguage();
  return (
    <Scene className="py-24 px-6 md:px-16 bg-white border-y border-gray-100">
      <div data-stagger className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-12 md:gap-20">
        <p className="text-base font-black uppercase tracking-[0.3em] text-[var(--color-brand-black)] shrink-0 hidden md:block">{t("logos.trust")}</p>
        <div className="w-[1px] h-16 bg-gray-200 hidden md:block" />
        {LOGOS.map((logo) => (
          <a key={logo.alt} data-cursor href={logo.href} target="_blank" rel="noopener noreferrer" className="block hover:-translate-y-1 transition-transform">
            <Image src={logo.src} alt={logo.alt} width={240} height={120} className={`object-contain grayscale opacity-40 hover:opacity-90 hover:grayscale-0 transition-all h-28 w-auto ${logo.scale || ""}`} />
          </a>
        ))}
      </div>
    </Scene>
  );
}
