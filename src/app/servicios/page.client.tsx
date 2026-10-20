"use client";

import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(0);
  const es = language === "es";
  const title = (t("services.title") as string) || "";
  const cut = title.lastIndexOf(" ");

  useEffect(() => {
    function sync() {
      const i = serviceFromHash();
      if (i === null || i > 2) return;
      setOpen(i);
      requestAnimationFrame(() => document.getElementById(`servicio-${i + 1}`)?.scrollIntoView({ block: "start" }));
    }
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function toggle(i: number) {
    setOpen(i);
    history.replaceState(null, "", `#servicio-${i + 1}`);
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

          {/* Service picker: three cards side by side, the open one in logo pink */}
          <div
            role="tablist"
            aria-label={es ? "Servicios" : "Services"}
            className="no-scrollbar flex md:grid md:grid-cols-3 gap-3 md:gap-5 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-2"
          >
            {tiers.map((tier, i) => {
              const on = open === i;
              return (
                <button
                  key={i}
                  id={`servicio-${i + 1}`}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="servicio-detalle"
                  onClick={() => toggle(i)}
                  className={`scroll-mt-28 snap-start shrink-0 w-[82%] sm:w-[48%] md:w-auto text-left rounded-[1.75rem] p-6 md:p-8 flex flex-col cursor-pointer transition-all duration-500 ${
                    on
                      ? "bg-[var(--color-brand-pink)] shadow-[0_24px_60px_-28px_rgba(26,26,26,0.45)] md:-translate-y-1.5"
                      : "bg-white kt-card hover:bg-[var(--color-brand-pink-light)]"
                  }`}
                >
                  <span className="flex items-start justify-between gap-3 mb-8 md:mb-12">
                    <span className="font-heading text-5xl md:text-6xl leading-none text-[var(--color-brand-black)]">0{i + 1}</span>
                    {tier.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] py-1 px-2.5 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-black)]">{tier.tag}</span>
                    )}
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-2 ${on ? "text-[var(--color-brand-black)]/70" : "text-gray-500"}`}>{tier.subtitle}</span>
                  <span className="kt-title text-xl md:text-[1.6rem] leading-[1.05] text-[var(--color-brand-black)] mb-6 min-h-[2.1em]">{tier.title}</span>
                  <span className="mt-auto flex items-center justify-between gap-3 pt-5 border-t border-[var(--color-brand-black)]/15">
                    <span className="text-sm font-bold text-[var(--color-brand-black)]">{tier.price}</span>
                    <span className={`text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-black)] ${on ? "" : "opacity-60"}`}>
                      {on ? (es ? "Viendo" : "Viewing") : es ? "Ver" : "View"}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {(
            <div id="servicio-detalle" role="tabpanel" key={open} className="svc-panel mt-10 md:mt-16">
              <p className="font-heading italic text-xl md:text-2xl leading-relaxed text-[var(--color-brand-black)] max-w-3xl mb-10 md:mb-12">{tiers[open].desc}</p>
              <ServicePanel index={open} />
            </div>
          )}
        </div>
      </main>

      <FinalCta />
      <Footer />
    </div>
  );
}
