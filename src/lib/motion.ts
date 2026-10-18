import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";

export type SceneEnv = { root: HTMLElement; desktop: boolean };

const all = (root: ParentNode, sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel));

/** Marks a scene as pinned (sticky stage inside a tall wrapper). Returns the cleanup. */
export function enablePin(root: HTMLElement, vh: number) {
  root.classList.add("is-pinned");
  root.style.setProperty("--pin-h", `${vh}vh`);
  return () => {
    root.classList.remove("is-pinned");
    root.style.removeProperty("--pin-h");
  };
}

/** Splits an element into words (kept inline, so no re-split is needed on resize). */
export function splitWords(el: HTMLElement) {
  gsap.set(el, { visibility: "visible" });
  return SplitText.create(el, { type: "words", wordsClass: "split-word" }).words as HTMLElement[];
}

/** Words light up one by one while scrolling. */
export function wordScrub(el: HTMLElement, trigger: Element, start: string, end: string) {
  const words = splitWords(el);
  gsap.fromTo(
    words,
    { opacity: 0.14 },
    { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger, start, end, scrub: 0.3 } },
  );
}

/** Panels that take turns on a sticky stage, driven by scroll. */
export function pinStack(root: HTMLElement, panels: HTMLElement[], line?: HTMLElement | null) {
  const n = panels.length;
  gsap.set(panels, { autoAlpha: 0 });
  gsap.set(panels[0], { autoAlpha: 1, y: 0 });
  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: 0.3 },
  });
  panels.forEach((p, i) => {
    if (i > 0) tl.fromTo(p, { autoAlpha: 0, y: 70 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }, i);
    if (i < n - 1) tl.to(p, { autoAlpha: 0, y: -70, duration: 0.4, ease: "power2.in" }, i + 0.6);
  });
  tl.to({}, { duration: 0.6 }, n - 1 + 0.4);
  if (line) tl.fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: n }, 0);
  return tl;
}

/** Generic attribute-driven effects used by every scene. */
export function genericEffects(root: HTMLElement, desktop: boolean) {
  all(root, "[data-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: Number(el.dataset.delay || 0),
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      },
    );
  });

  all(root, "[data-stagger]").forEach((parent) => {
    gsap.fromTo(
      Array.from(parent.children),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: parent, start: "top 88%", once: true },
      },
    );
  });

  all(root, "[data-lines]").forEach((el) => {
    gsap.set(el, { visibility: "visible" });
    SplitText.create(el, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      linesClass: "split-line",
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
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
        duration: 1.4,
        ease: "power4.inOut",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      },
    );
    const img = el.querySelector<HTMLElement>("[data-mask-img]");
    if (img) {
      gsap.fromTo(
        img,
        { scale: 1.18, yPercent: -6 },
        {
          scale: 1.18,
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    }
  });

  all(root, "[data-parallax]").forEach((el) => {
    const amount = Number(el.dataset.parallax || 0.1) * 100;
    gsap.fromTo(
      el,
      { yPercent: -amount },
      { yPercent: amount, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
    );
  });

  if (desktop && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    all(root, "[data-magnetic]").forEach((el) => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.28);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.28);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
    });
  }
}

export { ScrollTrigger };
