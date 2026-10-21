import { useState } from "react";
import { useLanguage } from "@/context/language-context";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();
  const faqs = t("faqs") as Array<{ q: string; a: string }>;

  return (
    <div data-stagger className="border-t border-[var(--color-brand-black)]/15">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const id = `faq-${i}`;
        return (
          <div key={i} className="border-b border-[var(--color-brand-black)]/15">
            <h3>
              <button
                id={`${id}-q`}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`${id}-a`}
                className="w-full flex items-start gap-4 md:gap-6 py-5 md:py-6 text-left group cursor-pointer"
              >
                <span
                  className={`shrink-0 w-10 md:w-12 h-7 rounded-full grid place-items-center text-[11px] font-bold tracking-[0.12em] tabular-nums transition-colors duration-500 ${
                    isOpen ? "bg-[var(--color-brand-pink)] text-[var(--color-brand-black)]" : "bg-[var(--color-brand-black)]/[0.06] text-[var(--color-brand-black)]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-base md:text-xl font-semibold leading-snug text-[var(--color-brand-black)] pt-0.5 [text-wrap:balance]">{faq.q}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full grid place-items-center transition-all duration-500 ${
                    isOpen ? "bg-[var(--color-brand-black)] text-white rotate-45" : "border border-[var(--color-brand-black)]/25 text-[var(--color-brand-black)] group-hover:bg-[var(--color-brand-pink)] group-hover:border-[var(--color-brand-pink)]"
                  }`}
                >
                  <svg viewBox="0 0 16 16" className="w-3 h-3"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </span>
              </button>
            </h3>
            <div
              id={`${id}-a`}
              role="region"
              aria-labelledby={`${id}-q`}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="pb-7 pl-14 md:pl-[4.5rem] pr-2 md:pr-14 max-w-3xl space-y-3 text-[15px] md:text-base leading-relaxed text-[var(--color-brand-black)]/75">
                  {faq.a.split("\n").map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
