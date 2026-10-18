"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";

export function Marquee() {
  const { t } = useLanguage();
  const items = t("marquee") as string[];
  const track = useRef<HTMLDivElement>(null);

  // Runs faster while the page scrolls fast, and reverses when you scroll up.
  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.animation = "none";
    const loop = gsap.to(el, { xPercent: -50, duration: 30, ease: "none", repeat: -1 });
    let speed = 1;
    const tick = () => {
      const v = window.__lenis?.velocity ?? 0;
      const target = (v < -0.2 ? -1 : 1) * (1 + Math.min(Math.abs(v), 40) * 0.12);
      speed += (target - speed) * 0.08;
      loop.timeScale(speed);
    };
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      loop.kill();
      el.style.animation = "";
      gsap.set(el, { clearProps: "transform" });
    };
  }, []);

  return (
    <div className="relative overflow-hidden py-6 bg-[var(--color-brand-black)]">
      <div ref={track} className="marquee-track flex gap-12 whitespace-nowrap w-max">
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
