"use client";

import { useLanguage } from "@/context/language-context";

export function Marquee() {
  const { t } = useLanguage();
  const items = t("marquee") as string[];

  return (
    <div className="relative overflow-hidden py-6 bg-[var(--color-brand-black)]">
      <div className="marquee-track flex gap-12 whitespace-nowrap w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm md:text-base font-medium tracking-widest uppercase text-white/70 flex items-center gap-12"
          >
            {item}
            <span className="text-[var(--color-brand-pink)] text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
