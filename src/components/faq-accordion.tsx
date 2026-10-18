import { useState } from "react";
import { useLanguage } from "@/context/language-context";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();
  const faqs = t("faqs") as Array<{ q: string; a: string }>;

  return (
    <div data-stagger className="max-w-3xl mx-auto">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`border-b border-gray-200 ${i === 0 ? "border-t" : ""}`}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-7 text-left group cursor-pointer"
            >
              <span
                className={`font-heading italic text-xl md:text-2xl transition-colors ${
                  isOpen ? "text-[var(--color-brand-pink-dark)]" : "text-[var(--color-brand-black)] group-hover:text-[var(--color-brand-pink-dark)]"
                }`}
              >
                {faq.q}
              </span>
              <span
                className={`ml-6 shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-lg transition-all duration-300 ${
                  isOpen
                    ? "border-[var(--color-brand-pink-dark)] text-[var(--color-brand-pink-dark)] rotate-45"
                    : "border-gray-400 text-gray-600 rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-800 font-normal text-base leading-relaxed pl-0 md:pl-1 max-w-2xl pb-8">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
