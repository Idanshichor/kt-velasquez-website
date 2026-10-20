"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/home/final-cta";
import { ServicePanel, useServiceTiers } from "@/components/services/service-panel";
import { useLanguage } from "@/context/language-context";

/** Which service a "#servicio-2" link points at, or null. */
function serviceFromHash() {
  const m = window.location.hash.match(/^#servicio-(\d)$/);
  return m ? Number(m[1]) - 1 : null;
}

/**
 * Full services page, after the Mango services page: a big title, then the
 * services as a numbered list where only one is open at a time. A link like
 * /servicios#servicio-2 opens that one.
 */
export default function ServicesPageClient() {
  const { language, t } = useLanguage();
  const tiers = useServiceTiers();
  const [open, setOpen] = useState<number | null>(0);
  const es = language === "es";
  const title = (t("services.title") as string) || "";
  const cut = title.lastIndexOf(" ");

  useEffect(() => {
    function sync() {
      const i = serviceFromHash();
      if (i === null) return;
      setOpen(i);
      requestAnimationFrame(() => document.getElementById(`servicio-${i + 1}`)?.scrollIntoView({ block: "start" }));
    }
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function toggle(i: number) {
    const next = open === i ? null : i;
    setOpen(next);
    if (next !== null) {
      history.replaceState(null, "", `#servicio-${next + 1}`);
      // Wait for the other service to close, then bring this one to the top.
      setTimeout(() => document.getElementById(`servicio-${next + 1}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)]">
      <Navbar />

      <main className="pt-40 md:pt-48 pb-24 md:pb-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <header className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-8 md:gap-16 items-end mb-14 md:mb-20">
            <div>
              <p className="kt-eyebrow mb-6">{t("nav.servicios")}</p>
              <h1 className="kt-title text-5xl md:text-8xl lg:text-[7rem] text-[var(--color-brand-black)]">
                {cut === -1 ? title : title.slice(0, cut)}
                {cut !== -1 && (
                  <span className="block font-script normal-case tracking-normal text-[0.75em] leading-[1.1] mt-1">{title.slice(cut + 1)}</span>
                )}
              </h1>
            </div>
            <div>
              <span className="kt-rule mb-5" />
              <p className="font-body text-gray-600 text-lg leading-relaxed">{t("services.desc")}</p>
            </div>
          </header>

          <ol className="border-t border-[var(--color-brand-black)]/15">
            {tiers.map((tier, i) => {
              const on = open === i;
              return (
                <li key={i} id={`servicio-${i + 1}`} className="scroll-mt-24 border-b border-[var(--color-brand-black)]/15">
                  <h2>
                    <button
                      type="button"
                      aria-expanded={on}
                      aria-controls={`servicio-${i + 1}-detalle`}
                      onClick={() => toggle(i)}
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
                  </h2>

                  {on && (
                    <div id={`servicio-${i + 1}-detalle`} className="svc-panel px-2 md:px-6 pt-8 md:pt-10 pb-12 md:pb-16">
                      <p className="font-heading italic text-xl md:text-2xl leading-relaxed text-[var(--color-brand-black)] max-w-3xl mb-10 md:mb-12">{tier.desc}</p>
                      <ServicePanel index={i} />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          <p className="mt-10 text-sm text-gray-500">
            {es ? "Toca un servicio para ver qué incluye y sus precios." : "Tap a service to see what it includes and its prices."}
          </p>
        </div>
      </main>

      <FinalCta />
      <Footer />
    </div>
  );
}
