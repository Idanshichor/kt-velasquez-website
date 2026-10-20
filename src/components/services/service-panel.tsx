"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const IN_COMPANY_WHATSAPP =
  "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20consultar%20sobre%20los%20talleres%20y%20capacitaciones%20in-company%20para%20mi%20equipo.";

type Plan = { name?: string; desc?: string; price?: string; link?: string };

/** Splits "Label: detail" into its two halves. */
function splitLabel(text: string) {
  const i = text.indexOf(":");
  return i === -1 ? { label: text, detail: "" } : { label: text.slice(0, i), detail: text.slice(i + 1).trim() };
}

/** Lowest price in a list of plans, so a row can read "Desde $220.000 COP". */
export function lowestPrice(plans: Plan[]) {
  const priced = plans.filter((p) => p.price);
  if (!priced.length) return "";
  const value = (p: string) => Number(p.replace(/[^\d]/g, ""));
  return priced.reduce((min, p) => (value(p.price!) < value(min.price!) ? p : min)).price!;
}

/** Name, who it is for, short description and price of the three services. */
export function useServiceTiers() {
  const { language, t } = useLanguage();
  const es = language === "es";
  const t1Plans = (t("services.t1_plans") as Plan[]) || [];
  const t2Plan = (t("services.t2_plan") as Plan) || {};
  return [
    {
      title: t("services.t1_title") as string,
      subtitle: t("services.t1_subtitle") as string,
      desc: t("services.t1_desc") as string,
      price: `${es ? "Desde" : "From"} ${lowestPrice(t1Plans)}`,
    },
    {
      title: t("services.t2_title") as string,
      subtitle: t("services.t2_subtitle") as string,
      desc: t("services.t2_desc") as string,
      price: t2Plan.price || "",
      tag: t("services.t2_tag") as string,
    },
    {
      title: t("services.t3_title") as string,
      subtitle: t("services.t3_subtitle") as string,
      desc: t("services.t3_desc") as string,
      price: `${(t("services.t3_price") as string) || "$200.000 COP"} ${(t("services.t3_price_unit") as string) || ""}`.trim(),
    },
  ];
}

const eyebrow = "text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500";

/** Black pill button with the kit's round arrow dot. */
function PayButton({ href, children }: { href?: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="kt-btn kt-btn-dark w-full justify-between">
      <span className="py-2.5">{children}</span>
      <span className="kt-btn-dot"><ArrowUpRight className="w-4 h-4" aria-hidden="true" /></span>
    </a>
  );
}

/**
 * Full detail of one service. Left: what it includes, as a quiet numbered
 * list. Right: one price card with the plans, the price and the pay or
 * contact button.
 */
export function ServicePanel({ index }: { index: number }) {
  const { language, t } = useLanguage();
  const es = language === "es";
  const [planIndex, setPlanIndex] = useState(0);
  const t1Plans = (t("services.t1_plans") as Plan[]) || [];
  const plan = t1Plans[planIndex] || t1Plans[0] || {};
  const t2Plan = (t("services.t2_plan") as Plan) || {};
  const inclusions = splitLabel((t("services.t3_inclusions") as string) || "");
  const features = ([t("services.t1_features"), t("services.t2_features"), t("services.t3_features")][index] as string[]) || [];

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_24rem] gap-10 lg:gap-14 items-start">
      <div>
        <p className={`${eyebrow} mb-5`}>{es ? "Qué incluye" : "What's included"}</p>
        <ol className="grid md:grid-cols-2 gap-x-10">
          {features.map((feature, i) => {
            const { label, detail } = splitLabel(feature);
            return (
              <li key={i} className="flex gap-4 py-5 border-t border-[var(--color-brand-black)]/10">
                <span className="font-heading text-lg leading-none text-[var(--color-brand-black)]/35 w-7 shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-semibold text-[15px] leading-snug text-[var(--color-brand-black)]">{label}</p>
                  {detail && <p className="text-[14px] leading-relaxed text-gray-600 mt-1.5">{detail}</p>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <aside className="kt-card rounded-[1.75rem] bg-white p-6 md:p-8 lg:sticky lg:top-28">
        {index === 0 && (
          <>
            <p className={`${eyebrow} mb-4`}>{es ? "Elige tu programa" : "Choose your program"}</p>
            <div role="radiogroup" aria-label={es ? "Programas" : "Programs"} className="space-y-2.5 mb-6">
              {t1Plans.map((p, i) => {
                const on = i === planIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setPlanIndex(i)}
                    className={`w-full text-left rounded-2xl border-[1.5px] p-4 flex items-start gap-3 transition-colors duration-300 cursor-pointer ${
                      on ? "bg-[var(--color-brand-pink)] border-[var(--color-brand-black)]" : "border-[var(--color-brand-black)]/12 hover:border-[var(--color-brand-black)]/40"
                    }`}
                  >
                    <span className={`mt-0.5 w-5 h-5 rounded-full border-[1.5px] border-[var(--color-brand-black)] grid place-items-center shrink-0 ${on ? "bg-[var(--color-brand-black)]" : ""}`}>
                      {on && <Check className="w-3 h-3 text-white" aria-hidden="true" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold leading-snug text-[var(--color-brand-black)]">{p.name}</span>
                      <span className={`block text-xs mt-1 ${on ? "text-[var(--color-brand-black)]/70" : "text-gray-500"}`}>{p.desc}</span>
                      <span className="block text-sm font-bold text-[var(--color-brand-black)] mt-2">{p.price}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <PayButton href={plan.link}>{es ? "Pagar Programa" : "Pay Program"} — {plan.price}</PayButton>
          </>
        )}

        {index === 1 && (
          <>
            <p className={`${eyebrow} mb-3`}>{es ? "Inversión del Acompañamiento" : "Advisory Investment"}</p>
            <p className="font-heading text-4xl md:text-5xl leading-none text-[var(--color-brand-black)] mb-2">{t2Plan.price}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-8">{t2Plan.name}</p>
            <PayButton href={t2Plan.link}>{es ? "Contratar Acompañamiento" : "Start Advisory"}</PayButton>
          </>
        )}

        {index === 2 && (
          <>
            <p className={`${eyebrow} mb-3`}>{(t("services.t3_price_label") as string) || (es ? "Inversión" : "Investment")}</p>
            <p className="font-heading text-4xl md:text-5xl leading-none text-[var(--color-brand-black)] mb-6">
              {(t("services.t3_price") as string) || "$200.000 COP"}{" "}
              <span className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider">{(t("services.t3_price_unit") as string) || (es ? "por hora" : "per hour")}</span>
            </p>
            <div className="bg-[var(--color-brand-pink-light)] rounded-2xl p-4 text-[13px] text-[var(--color-brand-black)] leading-relaxed mb-5">
              <strong className="font-bold block mb-1">
                {inclusions.detail ? `${inclusions.label}:` : es ? "Incluido en todas las sesiones:" : "Included in all sessions:"}
              </strong>
              {inclusions.detail || inclusions.label}
            </div>
            <p className="text-[13px] italic text-gray-600 mb-7 leading-relaxed">{t("services.t3_question")}</p>
            <PayButton href={IN_COMPANY_WHATSAPP}>{es ? "Diseñar sesión a mi medida" : "Customize my session"}</PayButton>
          </>
        )}
      </aside>
    </div>
  );
}
