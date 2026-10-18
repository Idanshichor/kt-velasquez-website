"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/** The brand star follows the pointer (desktop only). A thin star-tipped line tracks reading progress. */
export function StarCursor() {
  const star = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);
  const tip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (fill.current) fill.current.style.transform = `scaleY(${p})`;
      if (tip.current) tip.current.style.top = `${p * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let cleanup = () => {};
    if (fine && !reduced && star.current) {
      const el = star.current;
      const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
      const move = (e: PointerEvent) => {
        el.style.opacity = "1";
        xTo(e.clientX);
        yTo(e.clientY);
        const hot = (e.target as Element | null)?.closest?.("a, button, [data-cursor], input, textarea");
        el.classList.toggle("is-hot", !!hot);
      };
      const leave = () => {
        el.style.opacity = "0";
      };
      window.addEventListener("pointermove", move);
      document.documentElement.addEventListener("pointerleave", leave);
      cleanup = () => {
        window.removeEventListener("pointermove", move);
        document.documentElement.removeEventListener("pointerleave", leave);
      };
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      cleanup();
    };
  }, []);

  return (
    <>
      <div ref={star} className="star-cursor" aria-hidden="true">
        <span>✦</span>
      </div>
      <div className="read-progress" aria-hidden="true">
        <div ref={fill} className="read-progress-fill" />
        <div ref={tip} className="read-progress-tip">✦</div>
      </div>
    </>
  );
}
