"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { SERVICES } from "@/components/services/services-data";
import { KtCta } from "./scrub";
import { Scene } from "./scene";

const TITLE = "uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance]";

/**
 * Soluciones Estratégicas on the home page: one row per service with its
 * name and one-line promise. Each row goes straight to that service on
 * /servicios, where the details and the button to book are.
 */
export function Services() {
  const { language, t } = useLanguage();
  const title = (t("services.title") as string) || "";
  const cut = title.lastIndexOf(" ");
  const es = language === "es";

  return (
    <Scene id="servicios" className="py-28 md:py-40 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-8 md:gap-16 items-end mb-14 md:mb-20">
          <div>
            <p className="kt-eyebrow mb-6">{t("nav.servicios")}</p>
            <h2 data-lines className={`${TITLE} text-5xl md:text-7xl text-[var(--color-brand-black)]`}>
              {cut === -1 ? title : title.slice(0, cut)}
              {cut !== -1 && <span className="block font-script normal-case tracking-normal text-[0.8em] leading-[1.1] mt-1">{title.slice(cut + 1)}</span>}
            </h2>
          </div>
          <div data-reveal>
            <span className="kt-rule mb-5" />
            <p className="text-lg leading-relaxed text-[var(--color-brand-black)]">{t("services.desc")}</p>
          </div>
        </div>

        <ol data-stagger className="border-t-[1.5px] border-[var(--color-brand-black)]">
          {SERVICES.map((s, i) => (
            <li key={s.title} className="border-b border-[var(--color-brand-black)]/15">
              <Link
                href={`/servicios#servicio-${i + 1}`}
                className="group grid grid-cols-1 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,22rem)_auto] gap-x-6 md:gap-x-10 gap-y-3 items-center py-7 md:py-9 px-2 md:px-6 -mx-2 md:-mx-6 rounded-2xl transition-colors duration-500 hover:bg-[var(--color-brand-pink)] focus-visible:bg-[var(--color-brand-pink)] focus-visible:outline-none"
              >
                <span className="hidden md:block text-sm font-bold text-[var(--color-brand-black)]">0{i + 1}</span>
                <span className={`${TITLE} block text-2xl md:text-[1.9rem] text-[var(--color-brand-black)]`}>{s.title}</span>
                <span className="text-[15px] leading-relaxed text-[var(--color-brand-black)]/75">{s.tagline}</span>
                <span className="justify-self-start mt-2 md:mt-0 inline-flex items-center gap-2 whitespace-nowrap h-11 md:h-12 pl-4 pr-1.5 rounded-full border-[1.5px] border-[var(--color-brand-black)] text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-black)] transition-colors duration-500 group-hover:bg-[var(--color-brand-black)] group-hover:text-white">
                  {es ? "Ver más" : "See more"}
                  <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[var(--color-brand-black)] text-white grid place-items-center transition-colors duration-500 group-hover:bg-white group-hover:text-[var(--color-brand-black)]"><ArrowUpRight className="w-4 h-4" aria-hidden="true" /></span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-lg md:text-xl text-[var(--color-brand-black)] max-w-xl">
            {es ? "Todo lo que incluye cada servicio y cómo empezamos." : "Everything each service includes and how we start."}
          </p>
          <KtCta href="/servicios" external={false}>{es ? "Ver todos los servicios" : "See all services"}</KtCta>
        </div>
      </div>
    </Scene>
  );
}
