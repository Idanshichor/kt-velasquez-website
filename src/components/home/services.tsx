"use client";

import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useServiceTiers } from "@/components/services/service-panel";
import { Scene } from "./scene";

/**
 * Soluciones Estratégicas as a numbered list, like the Mango services index:
 * number, name, who it is for and price on one row. Each row opens its full
 * detail on /servicios, and one button below leads to the whole page.
 */
export function Services() {
  const { language, t } = useLanguage();
  const tiers = useServiceTiers();
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
          {tiers.map((tier, i) => (
            <li key={i} className="border-b border-[var(--color-brand-black)]/15">
              <Link
                href={`/servicios#servicio-${i + 1}`}
                className="group grid grid-cols-[auto_minmax(0,1fr)_auto] md:grid-cols-[6rem_minmax(0,1fr)_12rem_auto] items-center gap-x-5 md:gap-x-10 gap-y-2 py-7 md:py-9 px-2 md:px-6 rounded-2xl transition-colors duration-500 hover:bg-[var(--color-brand-pink)] focus-visible:bg-[var(--color-brand-pink)] focus-visible:outline-none"
              >
                <span className="font-heading text-3xl md:text-5xl leading-none text-[var(--color-brand-black)]/30 group-hover:text-[var(--color-brand-black)] transition-colors duration-500 self-start md:self-center">
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
                  <span className="md:hidden block mt-3 text-sm font-bold text-[var(--color-brand-black)]">{i === 0 ? `${es ? "Desde" : "From"} ${tiers0Min(t)}` : tier.price}</span>
                </span>
                <span className="hidden md:block text-right">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 group-hover:text-[var(--color-brand-black)]/70 transition-colors mb-1">
                    {i === 0 ? (es ? "Desde" : "From") : es ? "Inversión" : "Investment"}
                  </span>
                  <span className="block text-base font-bold text-[var(--color-brand-black)]">{i === 0 ? tiers0Min(t) : tier.price}</span>
                </span>
                <span className="w-11 h-11 md:w-14 md:h-14 rounded-full border-[1.5px] border-[var(--color-brand-black)] grid place-items-center text-[var(--color-brand-black)] transition-all duration-500 group-hover:bg-[var(--color-brand-black)] group-hover:text-[var(--color-brand-pink)] group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                  <span className="sr-only">{es ? "Ver detalles" : "See details"}</span>
                </span>
              </Link>
            </li>
          ))}
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

/** Lowest price among the mentoring plans, so the row reads "Desde $220.000 COP". */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function tiers0Min(t: (key: string) => any) {
  const plans = ((t("services.t1_plans") as { price?: string }[]) || []).filter((p) => p.price);
  if (!plans.length) return "";
  const value = (p: string) => Number(p.replace(/[^\d]/g, ""));
  return plans.reduce((min, p) => (value(p.price!) < value(min.price!) ? p : min)).price;
}
