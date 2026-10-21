"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { KtStar } from "@/components/home/scrub";
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

export type Tone = "white" | "pink" | "black";

const eyebrow = "text-[11px] font-bold uppercase tracking-[0.18em]";

/** Pill pay button with the KT star dot. Takes the full card width. */
function PayButton({ href, children }: { href?: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="kt-btn kt-btn-dark w-full justify-between">
      <span className="py-2.5">{children}</span>
      <span className="kt-btn-dot"><KtStar className="w-3.5 h-3.5" /></span>
    </a>
  );
}

/** "What's included" for one service, as a numbered two-column list. */
export function ServiceIncludes({ index, tone }: { index: number; tone: Tone }) {
  const { language, t } = useLanguage();
  const es = language === "es";
  const dark = tone === "black";
  const features = ([t("services.t1_features"), t("services.t2_features"), t("services.t3_features")][index] as string[]) || [];
  const line = dark ? "border-white/20" : "border-[var(--color-brand-black)]/15";
  return (
    <div>
      <p className={`${eyebrow} mb-2`}>{es ? "Qué incluye" : "What's included"}</p>
      <ol className="grid md:grid-cols-2 gap-x-10">
        {features.map((feature, i) => {
          const { label, detail } = splitLabel(feature);
          return (
            <li key={i} className={`flex gap-4 py-5 border-b ${line}`}>
              <Check className={`w-4 h-4 mt-1 shrink-0 ${dark ? "text-[var(--color-brand-gold)]" : "text-[var(--color-brand-black)]"}`} aria-hidden="true" />
              <div>
                <p className="font-semibold text-[15px] leading-snug">{label}</p>
                {detail && <p className={`text-[14px] leading-relaxed mt-1.5 ${dark ? "text-white/70" : "text-[var(--color-brand-black)]/75"}`}>{detail}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/**
 * The buy card for one service: price, the plan picker for the mentorship,
 * and the Wompi or WhatsApp button. Always a white card with black text.
 */
export function ServiceBuy({ index, tone }: { index: number; tone: Tone }) {
  const { language, t } = useLanguage();
  const es = language === "es";
  const [planIndex, setPlanIndex] = useState(0);
  const t1Plans = (t("services.t1_plans") as Plan[]) || [];
  const plan = t1Plans[planIndex] || t1Plans[0] || {};
  const t2Plan = (t("services.t2_plan") as Plan) || {};
  const inclusions = splitLabel((t("services.t3_inclusions") as string) || "");
  const label = `${eyebrow} text-[var(--color-brand-black)]/60`;

  return (
    <aside className={`rounded-[1.75rem] bg-white text-[var(--color-brand-black)] p-6 md:p-8 ${tone === "white" ? "border-[1.5px] border-[var(--color-brand-black)]" : ""}`}>
      {index === 0 && (
        <>
          <p className={`${label} mb-4`}>{es ? "Elige tu programa" : "Choose your program"}</p>
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
                    on ? "bg-[var(--color-brand-pink)] border-[var(--color-brand-black)]" : "border-[var(--color-brand-black)]/15 hover:border-[var(--color-brand-black)]/50"
                  }`}
                >
                  <span className={`mt-0.5 w-5 h-5 rounded-full border-[1.5px] border-[var(--color-brand-black)] grid place-items-center shrink-0 ${on ? "bg-[var(--color-brand-black)]" : ""}`}>
                    {on && <Check className="w-3 h-3 text-white" aria-hidden="true" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="text-sm font-bold leading-snug">{p.name}</span>
                      <span className="text-sm font-bold whitespace-nowrap">{p.price}</span>
                    </span>
                    <span className="block text-xs mt-1 text-[var(--color-brand-black)]/70">{p.desc}</span>
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
          <p className={`${label} mb-3`}>{es ? "Inversión del Acompañamiento" : "Advisory Investment"}</p>
          <p className="text-4xl md:text-5xl font-normal tracking-[-0.02em] leading-none mb-2">{t2Plan.price}</p>
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-black)]/70 mb-8">{t2Plan.name}</p>
          <PayButton href={t2Plan.link}>{es ? "Contratar Acompañamiento" : "Start Advisory"}</PayButton>
        </>
      )}

      {index === 2 && (
        <>
          <p className={`${label} mb-3`}>{(t("services.t3_price_label") as string) || (es ? "Inversión" : "Investment")}</p>
          <p className="text-4xl md:text-5xl font-normal tracking-[-0.02em] leading-none mb-6">
            {(t("services.t3_price") as string) || "$200.000 COP"}{" "}
            <span className="text-xs font-semibold text-[var(--color-brand-black)]/60 uppercase tracking-wider">{(t("services.t3_price_unit") as string) || (es ? "por hora" : "per hour")}</span>
          </p>
          <div className="bg-[var(--color-brand-pink-light)] rounded-2xl p-4 text-[13px] leading-relaxed mb-5">
            <strong className="font-bold block mb-1">
              {inclusions.detail ? `${inclusions.label}:` : es ? "Incluido en todas las sesiones:" : "Included in all sessions:"}
            </strong>
            {inclusions.detail || inclusions.label}
          </div>
          <p className="text-[13px] italic text-[var(--color-brand-black)]/70 mb-7 leading-relaxed">{t("services.t3_question")}</p>
          <PayButton href={IN_COMPANY_WHATSAPP}>{es ? "Diseñar sesión a mi medida" : "Customize my session"}</PayButton>
        </>
      )}
    </aside>
  );
}
