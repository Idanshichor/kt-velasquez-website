"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useServiceTiers } from "@/components/services/service-panel";
import { KtCta } from "./scrub";
import { Scene } from "./scene";

const TITLE = "uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance]";

/**
 * Soluciones Estratégicas on the home page: one row per service with who it
 * is for, the name, the short description and the price. Each row goes
 * straight to that service on /servicios, where the plans and payment are.
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
          {tiers.map((tier, i) => (
            <li key={i} className="border-b border-[var(--color-brand-black)]/15">
              <Link
                href={`/servicios#servicio-${i + 1}`}
                className="group grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,20rem)_auto] gap-x-6 md:gap-x-10 gap-y-3 items-start py-8 md:py-10 px-2 md:px-6 -mx-2 md:-mx-6 rounded-2xl transition-colors duration-500 hover:bg-[var(--color-brand-pink)] focus-visible:bg-[var(--color-brand-pink)] focus-visible:outline-none"
              >
                <span className="hidden md:block text-sm font-bold pt-1.5 text-[var(--color-brand-black)]">0{i + 1}</span>
                <span className="min-w-0">
                  <span className="flex items-center gap-3 flex-wrap mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-black)]/60">{tier.subtitle}</span>
                    {tier.tag && <span className="text-[10px] font-bold uppercase tracking-[0.18em] py-1 px-2.5 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)]">{tier.tag}</span>}
                  </span>
                  <span className={`${TITLE} block text-2xl md:text-[2rem] text-[var(--color-brand-black)]`}>{tier.title}</span>
                  <span className="mt-4 block text-lg font-bold text-[var(--color-brand-black)]">{tier.price}</span>
                </span>
                <span className="col-span-2 md:col-span-1 row-start-2 md:row-start-auto text-[15px] leading-relaxed text-[var(--color-brand-black)]/75 line-clamp-4 md:pt-1">{tier.desc}</span>
                <span className="row-start-1 col-start-2 md:col-start-auto w-12 h-12 md:w-14 md:h-14 rounded-full border-[1.5px] border-[var(--color-brand-black)] grid place-items-center text-[var(--color-brand-black)] transition-colors duration-500 group-hover:bg-[var(--color-brand-black)] group-hover:text-white">
                  <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-12 md:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-lg md:text-xl text-[var(--color-brand-black)] max-w-xl">
            {es ? "Planes, precios y todo lo que incluye cada servicio." : "Plans, prices and everything each service includes."}
          </p>
          <KtCta href="/servicios" external={false}>{es ? "Ver todos los servicios" : "See all services"}</KtCta>
        </div>
      </div>
    </Scene>
  );
}
