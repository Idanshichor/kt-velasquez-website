"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";

const IN_COMPANY_WHATSAPP =
  "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20consultar%20sobre%20los%20talleres%20y%20capacitaciones%20in-company%20para%20mi%20equipo.";

/** Splits "Label: detail" into its two halves. */
function splitLabel(text: string) {
  const i = text.indexOf(":");
  return i === -1 ? { label: text, detail: "" } : { label: text.slice(0, i), detail: text.slice(i + 1).trim() };
}

/**
 * The features of one tier as pills. Each pill shows the short name; tapping it
 * grows it into the full sentence. The open pill is clipped open and its
 * neighbours slide to their new spots, so nothing jumps.
 */
function Pills({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const before = useRef<DOMRect[] | null>(null);

  const toggle = (i: number) => {
    before.current = refs.current.map((el) => (el ? el.getBoundingClientRect() : new DOMRect()));
    setOpen((o) => (o === i ? null : i));
  };

  useLayoutEffect(() => {
    const prev = before.current;
    before.current = null;
    if (!prev || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const opts = { duration: 520, easing: "cubic-bezier(0.22, 1, 0.36, 1)" };
    refs.current.forEach((el, i) => {
      if (!el) return;
      const a = prev[i];
      const b = el.getBoundingClientRect();
      const dx = a.left - b.left;
      const dy = a.top - b.top;
      if (i === open) {
        const r = Math.max(0, b.width - a.width);
        const d = Math.max(0, b.height - a.height);
        el.animate(
          [
            { transform: `translate(${dx}px, ${dy}px)`, clipPath: `inset(0 ${r}px ${d}px 0 round 24px)` },
            { transform: "none", clipPath: "inset(0 0 0 0 round 24px)" },
          ],
          opts,
        );
      } else if (dx || dy) {
        el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], opts);
      }
    });
  }, [open]);

  return (
    <ul className={`kt-pills mb-8 ${dark ? "is-dark" : ""}`}>
      {items.map((feature, i) => {
        const { label, detail } = splitLabel(feature);
        const isOpen = open === i;
        return (
          <li key={i} ref={(el) => { refs.current[i] = el; }} className={`kt-pill p${i % 4}${isOpen ? " is-open" : ""}`}>
            <button type="button" aria-expanded={isOpen} onClick={() => toggle(i)} disabled={!detail}>
              <span className="kt-pill-ttl">{label}</span>
              {detail && <span className="kt-pill-plus" aria-hidden="true" />}
            </button>
            {isOpen && detail && <p className="kt-pill-body">{detail}</p>}
          </li>
        );
      })}
    </ul>
  );
}

export function Services() {
  const { language, t } = useLanguage();
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t1Plans = ((t("services.t1_plans") as any[]) || []);
  const selectedPlan = t1Plans[selectedPlanIndex] || t1Plans[0] || {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t2Plan = (t("services.t2_plan") as any) || {};

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const eyebrow = "text-[11px] font-bold uppercase tracking-[0.2em] mb-3";
  const cardTitle = "font-heading italic text-[1.75rem] md:text-[2rem] leading-[1.1] mb-5";
  const cardDesc = "font-body text-[14.5px] leading-relaxed mb-8";
  const card = "relative rounded-[1.75rem] p-7 md:p-9 flex flex-col shrink-0 w-[86%] sm:w-[62%] lg:w-auto snap-start";

  return (
    <Scene id="servicios" className="py-28 md:py-36 px-6 md:px-16 bg-[var(--color-brand-gold-light)] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <h2 data-lines className="font-heading italic text-5xl md:text-6xl text-[var(--color-brand-black)] mb-5">{t("services.title")}</h2>
          <p data-reveal className="font-body text-[var(--color-brand-black)] font-medium text-lg">{t("services.desc")}</p>
        </div>

        <div data-stagger className="no-scrollbar flex lg:grid lg:grid-cols-3 gap-4 lg:gap-7 items-start lg:items-stretch overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-px-6 -mx-6 px-6 md:-mx-16 md:px-16 lg:mx-0 lg:px-0 py-4 lg:py-0">
          {/* Tier 1 */}
          <article className={`${card} bg-white`}>
            <p className={`${eyebrow} text-gray-500`}>{t("services.t1_subtitle")}</p>
            <h3 className={`${cardTitle} text-[var(--color-brand-black)]`}>{t("services.t1_title")}</h3>
            <p className={`${cardDesc} text-gray-700`}>{t("services.t1_desc")}</p>
            <Pills items={t("services.t1_features") as string[]} />
            <div className="mt-auto">
            <div className="w-full" ref={dropdownRef}>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-2 text-center">
                {language === "es" ? "Programas Disponibles" : "Available Programs"}
              </p>

              <div className="relative">
                {/* Dropdown Selector Button */}
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                  className={`w-full bg-gray-50 hover:bg-gray-100/80 border rounded-2xl p-4 text-left flex items-center justify-between gap-3 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-gold)] ${
                    isDropdownOpen ? "border-[var(--color-brand-gold)] ring-1 ring-[var(--color-brand-gold)]" : "border-gray-200/90"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-[var(--color-brand-black)] leading-tight">
                        {selectedPlan.name}
                      </span>
                      {selectedPlan.name?.includes("Popular") && (
                        <span className="bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                          {language === "es" ? "Más Popular" : "Most Popular"}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-snug truncate">
                      {selectedPlan.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pl-1 border-l border-gray-200/60">
                    <span className="text-sm font-black text-[var(--color-brand-black)]">
                      {selectedPlan.price}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[var(--color-brand-black)]" : ""}`} />
                  </div>
                </button>

                {/* Dropdown Options List - rendered inline in document flow so it never gets cut off */}
                {isDropdownOpen && (
                  <div 
                    className="mt-2 bg-gray-50/70 rounded-2xl border border-gray-200/80 p-2 space-y-1.5 transition-all"
                    role="listbox"
                  >
                    {t1Plans.map((plan: { name?: string; desc?: string; price?: string }, idx: number) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setSelectedPlanIndex(idx);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full p-3.5 rounded-xl flex items-center justify-between gap-3 text-left transition-all cursor-pointer group ${
                          selectedPlanIndex === idx 
                            ? "bg-white border-2 border-[var(--color-brand-gold)] shadow-sm" 
                            : "bg-white/80 hover:bg-white border border-gray-200/60 hover:border-gray-300"
                        }`}
                        role="option"
                        aria-selected={selectedPlanIndex === idx}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-sm font-bold transition-colors ${
                              selectedPlanIndex === idx 
                                ? "text-[var(--color-brand-black)]" 
                                : "text-gray-700 group-hover:text-[var(--color-brand-black)]"
                            }`}>
                              {plan.name}
                            </span>
                            {plan.name?.includes("Popular") && (
                              <span className="bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                                {language === "es" ? "Más Popular" : "Most Popular"}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-snug">
                            {plan.desc}
                          </p>
                        </div>
                        <div className="flex items-center gap-2.5 shrink-0 pl-2">
                          <span className="text-sm font-black text-[var(--color-brand-black)]">
                            {plan.price}
                          </span>
                          {selectedPlanIndex === idx && (
                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-gold)] shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Primary CTA button for the currently selected plan */}
              <div className="mt-4">
                <a 
                  href={selectedPlan.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[var(--color-brand-black)] text-white border-2 border-[var(--color-brand-black)] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs w-full hover:bg-transparent hover:text-[var(--color-brand-black)] transition-colors cursor-pointer text-center block"
                >
                  {language === "es" ? "Pagar Programa" : "Pay Program"} — {selectedPlan.price}
                </a>
              </div>
            </div>
            </div>
          </article>

          {/* Tier 2, featured */}
          <article className={`${card} bg-[var(--color-brand-black)] text-white lg:-my-4 lg:py-12 shadow-elevated`}>
            <span className="absolute top-6 right-6 md:top-8 md:right-8 bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] text-[10px] font-bold tracking-[0.18em] uppercase py-1 px-3 rounded-full">
              {t("services.t2_tag")}
            </span>
            <p className={`${eyebrow} text-[var(--color-brand-gold)] pr-24`}>{t("services.t2_subtitle")}</p>
            <h3 className={`${cardTitle} text-white`}>{t("services.t2_title")}</h3>
            <p className={`${cardDesc} text-white/75`}>{t("services.t2_desc")}</p>
            <Pills items={t("services.t2_features") as string[]} dark />
            <div className="mt-auto pt-6 border-t border-white/12">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-2">
                {language === "es" ? "Inversión del Acompañamiento" : "Advisory Investment"}
              </p>
              <p className="font-heading text-[2rem] leading-none text-white mb-2">{t2Plan.price}</p>
              <p className="text-xs text-white/55 mb-6 uppercase tracking-wider font-bold">{t2Plan.name}</p>
              <a
                href={t2Plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-gold)] text-[var(--color-brand-black)] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs w-full hover:bg-white hover:border-white transition-colors cursor-pointer text-center block"
              >
                {language === "es" ? "Contratar Acompañamiento" : "Start Advisory"}
              </a>
            </div>
          </article>

          {/* Tier 3 */}
          <article className={`${card} bg-white`}>
            <p className={`${eyebrow} text-gray-500`}>{t("services.t3_subtitle")}</p>
            <h3 className={`${cardTitle} text-[var(--color-brand-black)]`}>{t("services.t3_title")}</h3>
            <p className={`${cardDesc} text-gray-700`}>{t("services.t3_desc")}</p>
            <Pills items={[...(t("services.t3_features") as string[]), (t("services.t3_inclusions") as string) || ""].filter(Boolean)} />
            <div className="mt-auto pt-6 border-t border-[var(--color-brand-black)]/10">
              <p className="text-[13px] italic text-gray-600 mb-5 leading-relaxed">{t("services.t3_question")}</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
                {(t("services.t3_price_label") as string) || (language === "es" ? "Inversión" : "Investment")}
              </p>
              <p className="font-heading text-[2rem] leading-none text-[var(--color-brand-black)] mb-6">
                {(t("services.t3_price") as string) || "$200.000 COP"}{" "}
                <span className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider">{(t("services.t3_price_unit") as string) || (language === "es" ? "por hora" : "per hour")}</span>
              </p>
              <a
                href={IN_COMPANY_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs w-full hover:bg-[var(--color-brand-black)] hover:text-white transition-colors cursor-pointer text-center block"
              >
                {language === "es" ? "Diseñar sesión a mi medida" : "Customize my session"}
              </a>
            </div>
          </article>
        </div>
      </div>
    </Scene>
  );
}
