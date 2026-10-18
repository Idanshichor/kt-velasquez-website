"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";
import { KtStar } from "./scrub";

const IN_COMPANY_WHATSAPP =
  "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20consultar%20sobre%20los%20talleres%20y%20capacitaciones%20in-company%20para%20mi%20equipo.";

/** Splits "Label: detail" into its two halves. */
function splitLabel(text: string) {
  const i = text.indexOf(":");
  return i === -1 ? { label: text, detail: "" } : { label: text.slice(0, i), detail: text.slice(i + 1).trim() };
}

/** Full feature list of one service: short name in bold, the sentence under it. */
function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
      {items.map((feature, i) => {
        const { label, detail } = splitLabel(feature);
        return (
          <li key={i} className="flex gap-3">
            <KtStar className="w-3 h-3 mt-1.5 shrink-0 text-[var(--color-brand-pink-dark)]" />
            <div>
              <p className="font-semibold text-[15px] leading-snug text-[var(--color-brand-black)]">{label}</p>
              {detail && <p className="text-[14px] leading-relaxed text-gray-600 mt-1">{detail}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Soluciones Estratégicas as one service at a time. Three tabs on top (name,
 * who it is for, price) and one detailed panel below, so the whole section is
 * about one screen tall instead of three long cards.
 */
export function Services() {
  const { language, t } = useLanguage();
  const [active, setActive] = useState(0);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t1Plans = ((t("services.t1_plans") as any[]) || []);
  const selectedPlan = t1Plans[selectedPlanIndex] || t1Plans[0] || {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t2Plan = (t("services.t2_plan") as any) || {};
  const inclusions = splitLabel((t("services.t3_inclusions") as string) || "");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tiers = [
    { title: t("services.t1_title") as string, subtitle: t("services.t1_subtitle") as string, price: selectedPlan.price as string },
    { title: t("services.t2_title") as string, subtitle: t("services.t2_subtitle") as string, price: t2Plan.price as string, tag: t("services.t2_tag") as string },
    {
      title: t("services.t3_title") as string,
      subtitle: t("services.t3_subtitle") as string,
      price: `${(t("services.t3_price") as string) || "$200.000 COP"} ${(t("services.t3_price_unit") as string) || ""}`.trim(),
    },
  ];
  const desc = [t("services.t1_desc"), t("services.t2_desc"), t("services.t3_desc")][active] as string;
  const features = [t("services.t1_features"), t("services.t2_features"), t("services.t3_features")][active] as string[];
  const label = "text-[11px] font-bold uppercase tracking-[0.18em]";

  return (
    <Scene id="servicios" className="py-28 md:py-40 px-6 md:px-16 bg-[var(--color-brand-black)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-[auto_minmax(0,1fr)] gap-8 md:gap-14 items-center mb-14 md:mb-20">
          <KtStar className="statement-star w-14 md:w-28 text-[var(--color-brand-gold)]" />
          <div>
            <h2 data-lines className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-white mb-5">{t("services.title")}</h2>
            <p data-reveal className="font-heading italic text-white/65 text-xl md:text-2xl">{t("services.desc")}</p>
          </div>
        </div>

        {/* Tabs */}
        <div data-stagger role="tablist" aria-label={t("services.title") as string} className="no-scrollbar flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 pb-1">
          {tiers.map((tier, i) => {
            const on = active === i;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={on}
                aria-controls="svc-panel"
                onClick={() => setActive(i)}
                className={`svc-tab relative shrink-0 w-[78%] sm:w-[46%] md:w-auto text-left rounded-[1.5rem] p-5 md:p-7 border-[1.5px] transition-all duration-500 cursor-pointer ${
                  on
                    ? "bg-[var(--color-brand-pink)] border-[var(--color-brand-pink)] text-[var(--color-brand-black)] md:-translate-y-1.5"
                    : "bg-white/[0.04] border-white/15 text-white hover:bg-white/[0.08] hover:border-white/35"
                }`}
              >
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <span className={`font-heading text-2xl md:text-3xl leading-none ${on ? "text-[var(--color-brand-pink-dark)]" : "text-[var(--color-brand-gold)]"}`}>0{i + 1}</span>
                  {tier.tag && (
                    <span className={`${label} text-[10px] py-1 px-2.5 rounded-full ${on ? "bg-[var(--color-brand-black)] text-white" : "bg-[var(--color-brand-gold)] text-[var(--color-brand-black)]"}`}>{tier.tag}</span>
                  )}
                </div>
                <p className={`${label} mb-2 ${on ? "text-[var(--color-brand-black)]/60" : "text-white/50"}`}>{tier.subtitle}</p>
                <h3 className="font-heading italic text-xl md:text-[1.65rem] leading-[1.15] mb-4 md:mb-6 min-h-[2.3em]">{tier.title}</h3>
                <p className={`text-sm font-bold ${on ? "text-[var(--color-brand-black)]" : "text-white"}`}>{tier.price}</p>
                <span aria-hidden="true" className={`absolute left-7 right-7 -bottom-px h-[3px] rounded-full bg-[var(--color-brand-black)] origin-left transition-transform duration-500 ${on ? "scale-x-100" : "scale-x-0"}`} />
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div id="svc-panel" role="tabpanel" key={active} className="svc-panel mt-4 md:mt-6 bg-white text-[var(--color-brand-black)] rounded-[2rem] grid lg:grid-cols-[minmax(0,1fr)_26rem] overflow-hidden">
          <div className="p-7 md:p-12">
            <p className="font-heading italic text-xl md:text-2xl leading-relaxed text-[var(--color-brand-black)] mb-10 max-w-3xl">{desc}</p>
            <FeatureList items={features} />
          </div>

          <aside className="bg-[var(--color-brand-pink-light)] p-7 md:p-10 flex flex-col justify-center gap-6">
            {active === 0 && (
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
            )}

            {active === 1 && (
              <div>
                <p className={`${label} text-gray-500 mb-2`}>{language === "es" ? "Inversión del Acompañamiento" : "Advisory Investment"}</p>
                <p className="font-heading text-4xl leading-none text-[var(--color-brand-black)] mb-2">{t2Plan.price}</p>
                <p className="text-xs text-gray-600 mb-6 uppercase tracking-wider font-bold">{t2Plan.name}</p>
                <a
                  href={t2Plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs w-full hover:bg-[var(--color-brand-black)] hover:text-white transition-colors cursor-pointer text-center block"
                >
                  {language === "es" ? "Contratar Acompañamiento" : "Start Advisory"}
                </a>
              </div>
            )}

            {active === 2 && (
              <div>
                <div className="bg-white p-4 rounded-2xl text-[13px] text-gray-700 leading-relaxed mb-6">
                  <strong className="font-bold text-[var(--color-brand-black)] block mb-1">
                    {inclusions.detail ? `${inclusions.label}:` : language === "es" ? "Incluido en todas las sesiones:" : "Included in all sessions:"}
                  </strong>
                  {inclusions.detail || inclusions.label}
                </div>
                <p className="text-[13px] italic text-gray-600 mb-6 leading-relaxed">{t("services.t3_question")}</p>
                <p className={`${label} text-gray-500 mb-2`}>
                  {(t("services.t3_price_label") as string) || (language === "es" ? "Inversión" : "Investment")}
                </p>
                <p className="font-heading text-4xl leading-none text-[var(--color-brand-black)] mb-6">
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
            )}
          </aside>
        </div>
      </div>
    </Scene>
  );
}
