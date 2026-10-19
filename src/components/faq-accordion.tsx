import { useState } from "react";
import { useLanguage } from "@/context/language-context";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();
  const faqs = t("faqs") as Array<{ q: string; a: string }>;

  return (
    <div data-stagger className="grid gap-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-[1.5rem] border-[1.5px] transition-[background-color,box-shadow] duration-500 ${
              isOpen ? "bg-[var(--color-brand-black)] text-white border-[var(--color-brand-black)]" : "bg-white border-[var(--color-brand-black)]/15 hover:border-[var(--color-brand-black)]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start gap-4 md:gap-6 p-5 md:p-7 text-left group cursor-pointer"
            >
              <span className={`font-heading text-lg md:text-xl leading-none pt-1.5 tabular-nums transition-colors ${isOpen ? "text-[var(--color-brand-pink)]" : "text-[var(--color-brand-pink-ink)]"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-heading text-lg md:text-2xl leading-snug">{faq.q}</span>
              <span
                aria-hidden="true"
                className={`shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full grid place-items-center transition-all duration-500 ${
                  isOpen ? "bg-[var(--color-brand-pink)] text-[var(--color-brand-black)] rotate-45" : "bg-[var(--color-brand-black)] text-white group-hover:bg-[var(--color-brand-pink-dark)] group-hover:text-[var(--color-brand-black)]"
                }`}
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="text-white/80 text-[15px] md:text-base leading-relaxed px-5 md:px-7 pb-7 md:pl-[4.75rem] max-w-3xl">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
