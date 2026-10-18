"use client";

import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";

export function Banner() {
  const { language, t } = useLanguage();

  return (
    <Scene className="relative bg-[var(--color-brand-pink)] py-28 md:py-40 px-6 md:px-16 text-center">
      <div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 data-reveal className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-tight text-[var(--color-brand-black)]">
            <span className="font-script text-7xl md:text-8xl lg:text-[8rem] block -mb-8 md:-mb-12 text-[var(--color-brand-black)]">{t("banner.para_quienes")}</span>
            {language === "es" ? (
              <>
                están construyendo<br />
                algo <span className="italic font-bold">real.</span>
              </>
            ) : (
              <>
                building something<br />
                <span className="italic font-bold">real.</span>
              </>
            )}
          </h2>
          <p data-reveal data-delay="0.15" className="font-body text-[var(--color-brand-black)] mt-12 text-sm md:text-base font-medium max-w-2xl mx-auto">
            {t("banner.desc")}
          </p>
        </div>
      </div>
    </Scene>
  );
}
