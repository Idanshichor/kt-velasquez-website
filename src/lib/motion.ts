import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";

export type SceneEnv = { root: HTMLElement; desktop: boolean };

const all = (root: ParentNode, sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel));

/**
 * Attribute-driven entrances used by every scene. Each one plays once as it
 * comes into view and never holds the page or ties text to scroll position.
 */
export function genericEffects(root: HTMLElement) {
  all(root, "[data-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: Number(el.dataset.delay || 0),
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      },
    );
  });

  all(root, "[data-stagger]").forEach((parent) => {
    gsap.fromTo(
      Array.from(parent.children),
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: parent, start: "top 90%", once: true },
      },
    );
  });

  all(root, "[data-lines]").forEach((el) => {
    gsap.set(el, { visibility: "visible" });
    SplitText.create(el, {
      type: "lines",
      mask: "lines",
      // "none": keep the text readable as-is. The default ("auto") puts aria-label on <p>/<span>, which ARIA forbids.
      aria: "none",
      autoSplit: true,
      linesClass: "split-line",
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 105,
          duration: 1,
          ease: "power4.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      },
    });
  });

  all(root, "[data-mask]").forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      },
    );
    const img = el.querySelector<HTMLElement>("[data-mask-img]");
    if (img) {
      gsap.fromTo(
        img,
        { scale: 1.1, yPercent: -3 },
        {
          scale: 1.1,
          yPercent: 3,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    }
  });
}

export { ScrollTrigger };
