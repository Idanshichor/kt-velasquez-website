"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/language-context";
import { KtStar } from "@/components/home/scrub";

/** The words band only moves while the page scrolls (either way), and rests when it stops. */
export function Marquee() {
  const { t } = useLanguage();
  const items = t("marquee") as string[];
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const draw = () => {
      raf = 0;
      const w = (el.firstElementChild as HTMLElement | null)?.offsetWidth || 1;
      const x = (((window.scrollY * 0.45) % w) + w) % w;
      el.style.transform = `translate3d(${-x}px,0,0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const run = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center font-heading italic text-2xl md:text-4xl text-white whitespace-nowrap">
          <span className="px-7 md:px-10">{item}</span>
          <KtStar className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-brand-gold)]" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden py-6 md:py-8 bg-[var(--color-brand-pink-dark)] border-y-[1.5px] border-[var(--color-brand-black)]" aria-label={items.join(", ")}>
      <div ref={track} className="flex w-max will-change-transform" aria-hidden="true">
        {run}
        {run}
        {run}
      </div>
    </div>
  );
}
