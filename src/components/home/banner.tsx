"use client";

import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";
import { enablePin, splitWords } from "@/lib/motion";
import { Scene } from "./scene";

export function Banner() {
  const { language, t } = useLanguage();

  return (
    <Scene
      className="pin-wrap bg-white"
      build={({ root, desktop }) => {
        const bg = root.querySelector<HTMLElement>("[data-banner-bg]")!;
        const head = root.querySelector<HTMLElement>("[data-words]")!;
        const desc = root.querySelector<HTMLElement>("[data-banner-desc]")!;
        const words = splitWords(head);

        if (desktop) {
          const undo = enablePin(root, 240);
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: 0.3 },
          });
          tl.fromTo(bg, { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(150% at 50% 50%)", duration: 0.3 }, 0);
          tl.fromTo(words, { opacity: 0.14 }, { opacity: 1, duration: 0.55, stagger: 0.55 / words.length }, 0.25);
          tl.fromTo(desc, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.15 }, 0.85);
          return undo;
        }

        gsap.fromTo(
          bg,
          { clipPath: "circle(0% at 50% 50%)" },
          { clipPath: "circle(150% at 50% 50%)", ease: "none", scrollTrigger: { trigger: root, start: "top 85%", end: "top 25%", scrub: true } },
        );
        gsap.fromTo(
          words,
          { opacity: 0.14 },
          { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: head, start: "top 80%", end: "bottom 55%", scrub: true } },
        );
        gsap.fromTo(desc, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: desc, start: "top 90%", once: true } });
      }}
    >
      <div className="pin-stage relative flex items-center justify-center py-32 px-6 md:px-16 text-center">
        <div data-banner-bg className="absolute inset-0 bg-[var(--color-brand-pink)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 data-words className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-tight text-[var(--color-brand-black)]">
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
          <p data-banner-desc className="font-body text-[var(--color-brand-black)] mt-12 text-sm md:text-base font-medium max-w-2xl mx-auto">
            {t("banner.desc")}
          </p>
        </div>
      </div>
    </Scene>
  );
}
