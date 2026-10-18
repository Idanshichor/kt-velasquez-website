"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";

export function Services() {
  const { language, t } = useLanguage();
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const t1Plans = ((t("services.t1_plans") as any[]) || []);
  const selectedPlan = t1Plans[selectedPlanIndex] || t1Plans[0] || {};

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Scene id="servicios" className="py-32 px-6 md:px-16 bg-[var(--color-brand-gold-light)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
            <div data-reveal className="text-center mb-20">
              <h2 className="font-heading italic text-5xl md:text-6xl text-[var(--color-brand-black)] mb-6">{t("services.title")}</h2>
              <p className="font-body text-[var(--color-brand-black)] font-medium text-lg">{t("services.desc")}</p>
            </div>

            <div data-stagger className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Tier 1 - Standard */}
              <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-white mt-0 lg:mt-8 mb-0 lg:-mb-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h3 className="font-heading italic text-3xl mb-2 text-center text-[var(--color-brand-black)]">{t("services.t1_title")}</h3>
                <p className="text-center font-bold text-sm uppercase tracking-widest text-gray-500 mb-6">{t("services.t1_subtitle")}</p>
                <p className="font-body text-sm text-gray-700 mb-8 leading-relaxed text-center">
                  {t("services.t1_desc")}
                </p>
                <ul className="space-y-4 mb-10 text-sm font-medium text-gray-700">
                  {(t("services.t1_features") as string[]).map((feature, i) => {
                    const splitIndex = feature.indexOf(":");
                    return (
                      <li key={i} className="flex gap-2 items-start text-sm leading-relaxed text-gray-700 font-medium">
                        <span className="text-[var(--color-brand-gold-deep)] font-bold shrink-0">✦</span>
                        <span>
                          {splitIndex !== -1 ? (
                            <>
                              <strong className="font-bold text-[var(--color-brand-black)]">
                                {feature.substring(0, splitIndex + 1)}
                              </strong>
                              {feature.substring(splitIndex + 1)}
                            </>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-auto pt-8 border-t border-gray-100 w-full" ref={dropdownRef}>
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
                        {t1Plans.map((plan: any, idx: number) => (
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

              {/* Tier 2 - Featured (Center) */}
              <div className="bg-white p-8 rounded-[2rem] shadow-elevated border-2 border-[var(--color-brand-gold)] gold-sweep relative flex flex-col z-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-brand-black)] text-white text-xs font-bold tracking-widest uppercase py-1 px-4 rounded-full">
                  {t("services.t2_tag")}
                </div>
                <h3 className="font-heading italic text-3xl mb-1 text-center text-[var(--color-brand-black)]">{t("services.t2_title")}</h3>
                <p className="text-center font-bold text-sm uppercase tracking-widest text-[var(--color-brand-gold-deep)] mb-6">{t("services.t2_subtitle")}</p>
                <p className="font-body text-sm text-gray-700 mb-8 leading-relaxed text-center">
                  {t("services.t2_desc")}
                </p>
                <ul className="space-y-4 mb-10 text-sm font-medium text-gray-700">
                  {(t("services.t2_features") as string[]).map((feature, i) => {
                    const splitIndex = feature.indexOf(":");
                    return (
                      <li key={i} className="flex gap-2 items-start text-sm leading-relaxed text-gray-700 font-medium">
                        <span className="text-[var(--color-brand-gold-deep)] font-bold shrink-0">✦</span>
                        <span>
                          {splitIndex !== -1 ? (
                            <>
                              <strong className="font-bold text-[var(--color-brand-black)]">
                                {feature.substring(0, splitIndex + 1)}
                              </strong>
                              {feature.substring(splitIndex + 1)}
                            </>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-auto pt-8 border-t border-gray-100 w-full text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">
                    {language === "es" ? "Inversión del Acompañamiento" : "Advisory Investment"}
                  </p>
                  <p className="text-3xl font-black text-[var(--color-brand-black)] mb-1">
                    {(t("services.t2_plan") as any)?.price}
                  </p>
                  <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-bold">
                    {(t("services.t2_plan") as any)?.name}
                  </p>
                  <a 
                    href={(t("services.t2_plan") as any)?.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs w-full hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer text-center block"
                  >
                    {language === "es" ? "Contratar Acompañamiento" : "Start Advisory"}
                  </a>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-white mt-0 lg:mt-8 mb-0 lg:-mb-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h3 className="font-heading italic text-3xl mb-2 text-center text-[var(--color-brand-black)]">{t("services.t3_title")}</h3>
                <p className="text-center font-bold text-sm uppercase tracking-widest text-gray-500 mb-6">{t("services.t3_subtitle")}</p>
                <p className="font-body text-sm text-gray-700 mb-8 leading-relaxed text-center">
                  {t("services.t3_desc")}
                </p>
                <ul className="space-y-4 mb-10 text-sm font-medium text-gray-700">
                  {(t("services.t3_features") as string[]).map((feature, i) => {
                    const splitIndex = feature.indexOf(":");
                    return (
                      <li key={i} className="flex gap-2 items-start text-sm leading-relaxed text-gray-700 font-medium">
                        <span className="text-[var(--color-brand-gold-deep)] font-bold shrink-0">✦</span>
                        <span>
                          {splitIndex !== -1 ? (
                            <>
                              <strong className="font-bold text-[var(--color-brand-black)]">
                                {feature.substring(0, splitIndex + 1)}
                              </strong>
                              {feature.substring(splitIndex + 1)}
                            </>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-auto pt-8 border-t border-gray-100 w-full flex flex-col">
                  {/* Inclusion Callout Box */}
                  <div className="bg-[var(--color-brand-pink-light)] p-4 rounded-2xl border border-[var(--color-brand-pink-light)] mb-5 text-[13px] text-gray-700 leading-relaxed font-medium text-left">
                    <strong className="font-bold text-[var(--color-brand-black)] block mb-1">
                      {language === "es" ? "Incluido en todas las sesiones:" : "Included in all sessions:"}
                    </strong>
                    {t("services.t3_inclusions")}
                  </div>

                  <p className="text-[13px] italic text-gray-600 mb-5 px-2 leading-relaxed text-center">
                    {t("services.t3_question")}
                  </p>

                  <div className="text-center mb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
                      {(t("services.t3_price_label") as string) || (language === "es" ? "Inversión" : "Investment")}
                    </p>
                    <p className="text-3xl font-black text-[var(--color-brand-black)] mb-1">
                      {(t("services.t3_price") as string) || "$200.000 COP"} <span className="text-sm md:text-sm font-semibold text-gray-500 uppercase tracking-wider">{(t("services.t3_price_unit") as string) || (language === "es" ? "por hora" : "per hour")}</span>
                    </p>
                  </div>

                  <div>
                    <a 
                      href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20consultar%20sobre%20los%20talleres%20y%20capacitaciones%20in-company%20para%20mi%20equipo." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-transparent border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs w-full hover:bg-[var(--color-brand-black)] hover:text-white transition-colors cursor-pointer text-center block"
                    >
                      {language === "es" ? "Diseñar sesión a mi medida" : "Customize my session"}
                    </a>
                  </div>
                </div>
              </div>

            </div>
      </div>
    </Scene>
  );
}
