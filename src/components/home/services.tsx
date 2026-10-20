"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useServiceTiers } from "@/components/services/service-panel";
import { Scene } from "./scene";

/**
 * Soluciones Estratégicas as a numbered list, like the Mango services index.
 * Pressing a row opens a bubble under it with the service description and a
 * link to its full detail on /servicios. One bubble open at a time.
 */
export function Services() {
  const { language, t } = useLanguage();
  const tiers = useServiceTiers();
  const [open, setOpen] = useState<number | null>(null);
  const title = (t("services.title") as string) || "";
  const cut = title.lastIndexOf(" ");
  const es = language === "es";

  return (
    <Scene id="servicios" className="py-28 md:py-40 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-8 md:gap-16 items-end mb-14 md:mb-20">
          <div>
            <p className="kt-eyebrow mb-6">{t("nav.servicios")}</p>
            <h2 data-lines className="kt-title text-5xl md:text-7xl lg:text-[5.5rem] text-[var(--color-brand-black)]">
              {cut === -1 ? title : title.slice(0, cut)}
              {cut !== -1 && (
                <span className="block font-script normal-case tracking-normal text-[0.8em] leading-[1.1] mt-1">{title.slice(cut + 1)}</span>
              )}
            </h2>
          </div>
          <div data-reveal>
            <span className="kt-rule mb-5" />
            <p className="font-body text-gray-600 text-lg leading-relaxed">{t("services.desc")}</p>
          </div>
        </div>

        <ol data-stagger className="border-t border-[var(--color-brand-black)]/15">
          {tiers.map((tier, i) => {
            const on = open === i;
            return (
              <li key={i} className="border-b border-[var(--color-brand-black)]/15">
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`svc-bubble-${i}`}
                  onClick={() => setOpen(on ? null : i)}
                  className={`group w-full text-left grid grid-cols-[auto_minmax(0,1fr)_auto] md:grid-cols-[6rem_minmax(0,1fr)_12rem_auto] items-center gap-x-5 md:gap-x-10 gap-y-2 py-7 md:py-9 px-2 md:px-6 rounded-2xl cursor-pointer transition-colors duration-500 hover:bg-[var(--color-brand-pink)] focus-visible:bg-[var(--color-brand-pink)] focus-visible:outline-none ${on ? "bg-[var(--color-brand-pink)]" : ""}`}
                >
                  <span className={`font-heading text-3xl md:text-5xl leading-none transition-colors duration-500 self-start md:self-center ${on ? "text-[var(--color-brand-black)]" : "text-[var(--color-brand-black)]/30 group-hover:text-[var(--color-brand-black)]"}`}>
                    0{i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-3 flex-wrap mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 group-hover:text-[var(--color-brand-black)]/70 transition-colors">{tier.subtitle}</span>
                      {tier.tag && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] py-1 px-2.5 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)]">{tier.tag}</span>
                      )}
                    </span>
                    <span className="kt-title block text-xl md:text-[2rem] leading-[1.05] text-[var(--color-brand-black)]">{tier.title}</span>
                    <span className="md:hidden block mt-3 text-sm font-bold text-[var(--color-brand-black)]">{tier.price}</span>
                  </span>
                  <span className="hidden md:block text-right text-base font-bold text-[var(--color-brand-black)]">{tier.price}</span>
                  <span className={`w-11 h-11 md:w-14 md:h-14 rounded-full border-[1.5px] border-[var(--color-brand-black)] grid place-items-center transition-all duration-500 ${on ? "bg-[var(--color-brand-black)] text-[var(--color-brand-pink)] rotate-45" : "text-[var(--color-brand-black)]"}`}>
                    <Plus className="w-5 h-5" aria-hidden="true" />
                  </span>
                </button>

                {/* Bubble: grows open with a grid-rows transition */}
                <div id={`svc-bubble-${i}`} className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="md:ml-[8.5rem] mt-3 mb-8 relative bg-[var(--color-brand-pink-light)] rounded-[1.75rem] p-6 md:p-9 shadow-[0_24px_60px_-28px_rgba(26,26,26,0.35)]">
                      <span aria-hidden="true" className="absolute -top-2 left-10 w-4 h-4 rotate-45 bg-[var(--color-brand-pink-light)]" />
                      <p className="font-heading italic text-lg md:text-2xl leading-relaxed text-[var(--color-brand-black)] max-w-3xl mb-7">{tier.desc}</p>
                      <Link href={`/servicios#servicio-${i + 1}`} tabIndex={on ? 0 : -1} className="kt-btn kt-btn-dark">
                        {es ? "Leer más" : "Read more"}
                        <span className="kt-btn-dot"><ArrowUpRight className="w-4 h-4" aria-hidden="true" /></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div data-reveal className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="font-heading italic text-xl md:text-2xl text-[var(--color-brand-black)] max-w-xl">
            {es ? "Planes, precios y todo lo que incluye cada servicio." : "Plans, prices and everything each service includes."}
          </p>
          <Link href="/servicios" className="kt-btn kt-btn-dark self-start sm:self-auto shrink-0">
            {es ? "Ver todos los servicios" : "See all services"}
            <span className="kt-btn-dot"><Plus className="w-4 h-4" aria-hidden="true" /></span>
          </Link>
        </div>
      </div>
    </Scene>
  );
}
