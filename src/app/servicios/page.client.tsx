"use client";

import { ArrowDown } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/home/final-cta";
import { ServiceBuy, ServiceIncludes, useServiceTiers, type Tone } from "@/components/services/service-panel";
import { useLanguage } from "@/context/language-context";

const TITLE = "uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance]";

/** Each service gets its own full-strength background and layout side. */
const SECTIONS: { tone: Tone; cls: string; sub: string; flip: boolean }[] = [
  { tone: "white", cls: "bg-white text-[var(--color-brand-black)]", sub: "text-[var(--color-brand-black)]/75", flip: false },
  { tone: "pink", cls: "bg-[var(--color-brand-pink)] text-[var(--color-brand-black)]", sub: "text-[var(--color-brand-black)]", flip: true },
  { tone: "black", cls: "bg-[var(--color-brand-black)] text-white", sub: "text-white/70", flip: false },
];

/**
 * Services page. The top shows the three services side by side with who each
 * is for and the price, so the choice is clear at a glance. Below, every
 * service has its own section with what it includes and how to pay.
 * /servicios#servicio-2 still lands on the second one.
 */
export default function ServicesPageClient() {
  const { language, t } = useLanguage();
  const tiers = useServiceTiers();
  const es = language === "es";
  const title = (t("services.title") as string) || "";
  const cut = title.lastIndexOf(" ");

  return (
    <div className="min-h-screen bg-white text-[var(--color-brand-black)]">
      <Navbar />

      <main>
        <header className="pt-40 md:pt-52 pb-20 md:pb-28 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-8 md:gap-16 items-end mb-16 md:mb-24">
              <div>
                <p className="kt-eyebrow mb-6">{t("nav.servicios")}</p>
                <h1 className={`${TITLE} text-5xl md:text-8xl`}>
                  {cut === -1 ? title : title.slice(0, cut)}
                  {cut !== -1 && <span className="block font-script normal-case tracking-normal text-[0.8em] leading-[1.1] mt-1">{title.slice(cut + 1)}</span>}
                </h1>
              </div>
              <div>
                <span className="kt-rule mb-5" />
                <p className="text-lg leading-relaxed">{t("services.desc")}</p>
              </div>
            </div>

            {/* At a glance: who it is for, what it is, what it costs */}
            <nav aria-label={es ? "Servicios" : "Services"} className="grid md:grid-cols-3 border-t-[1.5px] border-[var(--color-brand-black)]">
              {tiers.map((tier, i) => (
                <a
                  key={i}
                  href={`#servicio-${i + 1}`}
                  className="group flex flex-col py-7 md:py-9 md:px-7 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-l first:md:border-l-0 border-[var(--color-brand-black)]/15"
                >
                  <span className="flex items-center gap-3 mb-5">
                    <span className="text-sm font-bold">0{i + 1}</span>
                    {tier.tag && <span className="text-[10px] font-bold uppercase tracking-[0.18em] py-1 px-2.5 rounded-full bg-[var(--color-brand-gold)]">{tier.tag}</span>}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-black)]/60 mb-2">{tier.subtitle}</span>
                  <span className={`${TITLE} text-2xl md:text-[1.7rem] mb-8`}>{tier.title}</span>
                  <span className="mt-auto flex items-end justify-between gap-4">
                    <span className="text-lg font-bold">{tier.price}</span>
                    <span className="w-11 h-11 rounded-full border-[1.5px] border-[var(--color-brand-black)] grid place-items-center shrink-0 transition-colors duration-300 group-hover:bg-[var(--color-brand-pink)]">
                      <ArrowDown className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </header>

        {tiers.map((tier, i) => {
          const s = SECTIONS[i];
          return (
            <section key={i} id={`servicio-${i + 1}`} className={`scroll-mt-20 py-24 md:py-36 px-6 md:px-16 ${s.cls}`}>
              <div className="max-w-6xl mx-auto">
                <div className={`grid gap-12 lg:gap-20 items-start ${s.flip ? "lg:grid-cols-[24rem_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_24rem]"}`}>
                  <div className={s.flip ? "lg:order-2" : ""}>
                    <p className="flex items-center gap-3 mb-6">
                      <span className="text-sm font-bold">0{i + 1}</span>
                      <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${s.sub}`}>{tier.subtitle}</span>
                    </p>
                    <h2 className={`${TITLE} text-4xl md:text-6xl mb-8`}>{tier.title}</h2>
                    <p className={`text-base md:text-[17px] leading-[1.7] max-w-2xl mb-14 ${s.sub}`}>{tier.desc}</p>
                    <ServiceIncludes index={i} tone={s.tone} />
                  </div>
                  <div className={`lg:sticky lg:top-28 ${s.flip ? "lg:order-1" : ""}`}>
                    <ServiceBuy index={i} tone={s.tone} />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <FinalCta />
      <Footer />
    </div>
  );
}
