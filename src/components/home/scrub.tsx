"use client";

import { useEffect, useRef, type ElementType } from "react";

export type ScrubPart = { text: string; className?: string; block?: boolean };

/**
 * A headline whose words light up as it passes through the viewport.
 * It never holds the page: it only reads the scroll position. Once a word is lit
 * it stays lit, and reduced motion (or no script) shows the finished line.
 */
export function Scrub({ parts, as: Tag = "p", className = "" }: { parts: ScrubPart[]; as?: ElementType; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    el.dataset.ready = "";
    let lit = 0;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (vh * 0.35 + r.height * 0.6)));
      const n = Math.max(lit, Math.round(p * words.length));
      if (n === lit) return;
      for (let i = lit; i < n; i++) words[i].classList.add("lit");
      lit = n;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Tag ref={ref} className={`scrub ${className}`}>
      {parts.map((part, pi) => {
        const words = part.text.split(/\s+/).filter(Boolean);
        const inner = words.map((w, i) => (
          <span key={i}>
            <span data-w>{w}</span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ));
        return part.block ? (
          <span key={pi} className={`block ${part.className || ""}`}>{inner}</span>
        ) : (
          <span key={pi} className={part.className}>
            {inner}
            {pi < parts.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}

/** The KT four-point star, drawn as a shape so it scales cleanly. */
export function KtStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M50 0C53 30 70 47 100 50C70 53 53 70 50 100C47 70 30 53 0 50C30 47 47 30 50 0Z" fill="currentColor" />
    </svg>
  );
}

type CtaTone = "dark" | "gold" | "pink";

/** The one KT button: a pill with the label and a round star badge that turns on hover. */
export function KtCta({ href, children, tone = "dark", external = true }: { href: string; children: React.ReactNode; tone?: CtaTone; external?: boolean }) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`kt-btn kt-btn-${tone}`}>
      <span>{children}</span>
      <span className="kt-btn-dot" aria-hidden="true">
        <KtStar className="w-3.5 h-3.5" />
      </span>
    </a>
  );
}
