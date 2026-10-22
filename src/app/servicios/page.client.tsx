"use client";

import Image from "next/image";
import { ArrowDown, Check } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/home/final-cta";
import { KtCta, KtStar } from "@/components/home/scrub";
import { mangoCooper, mangoGothic } from "./mango-fonts";
import { MangoTags, MANGO_OFFERS } from "@/components/services/mango-tags";
import { CLARITY, INTRO, MANGO, PACKAGES, SERVICES, whatsapp, type Block } from "@/components/services/services-data";
import { useLanguage } from "@/context/language-context";

const TITLE = "uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance]";
const BODY = "text-base md:text-[17px] leading-[1.7]";
const LABEL = "text-[11px] font-bold uppercase tracking-[0.18em]";

type Tone = "white" | "black" | "pink" | "gold";
const TONE: Record<Tone, { cls: string; sub: string; line: string; check: string; cta: "dark" | "gold" }> = {
  white: { cls: "bg-white text-[var(--color-brand-black)]", sub: "text-[var(--color-brand-black)]/75", line: "border-[var(--color-brand-black)]/15", check: "text-[var(--color-brand-black)]", cta: "dark" },
  black: { cls: "bg-[var(--color-brand-black)] text-white", sub: "text-white/70", line: "border-white/20", check: "text-[var(--color-brand-gold)]", cta: "gold" },
  pink: { cls: "bg-[var(--color-brand-pink)] text-[var(--color-brand-black)]", sub: "text-[var(--color-brand-black)]", line: "border-[var(--color-brand-black)]/20", check: "text-[var(--color-brand-black)]", cta: "dark" },
  gold: { cls: "bg-[var(--color-brand-gold)] text-[var(--color-brand-black)]", sub: "text-[var(--color-brand-black)]", line: "border-[var(--color-brand-black)]/20", check: "text-[var(--color-brand-black)]", cta: "dark" },
};
/** Background of each service, in order. The mentorship's packages sit on pink right after it. */
const TONES: Tone[] = ["white", "black", "gold", "white", "pink"];

/** Splits "Label: detail" so the label can be bold. */
function splitLabel(text: string) {
  const i = text.indexOf(":");
  return i === -1 ? { label: "", detail: text } : { label: text.slice(0, i), detail: text.slice(i + 1).trim() };
}

/** Script accent on the last `n` words of a title. */
function Accent({ text, n = 1 }: { text: string; n?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.slice(0, -n).join(" ")}
      <span className="block font-script normal-case tracking-normal text-[0.8em] leading-[1.1] mt-1">{words.slice(-n).join(" ")}</span>
    </>
  );
}

function ServiceBlock({ block, tone }: { block: Block; tone: Tone }) {
  const t = TONE[tone];
  return (
    <div className={`border-t ${t.line} pt-8`}>
      <h3 className={`${LABEL} mb-6`}>{block.title}</h3>
      {block.items && (
        <ul className="space-y-4 mb-2">
          {block.items.map((item) => {
            const { label, detail } = splitLabel(item);
            return (
              <li key={item} className="flex gap-4">
                <Check className={`w-4 h-4 mt-1.5 shrink-0 ${t.check}`} aria-hidden="true" />
                <p className={BODY}>
                  {label && <strong className="font-semibold">{label}: </strong>}
                  <span className={label ? t.sub : ""}>{detail}</span>
                </p>
              </li>
            );
          })}
        </ul>
      )}
      {block.text?.map((p) => (
        <p key={p} className={`${BODY} ${t.sub} mt-5 first:mt-0`}>{p}</p>
      ))}
    </div>
  );
}

/**
 * Services page. A short intro and an index of the five services, then one
 * full-colour section per service: on the left what it is and the button to
 * book the review meeting, on the right everything it covers. The mentorship
 * is followed by its "Claridad" note and the four session packages, and the
 * page ends with the Mango Creative Studio block.
 * /servicios#servicio-3 lands on the third service.
 */
export default function ServicesPageClient() {
  const { language, t } = useLanguage();
  const verMas = language === "es" ? "Ver más" : "See more";

  return (
    <div className="min-h-screen bg-white text-[var(--color-brand-black)]">
      <Navbar />

      <main>
        <header className="pt-36 md:pt-44 pb-24 md:pb-32 px-6 md:px-16 bg-[var(--color-brand-purple)] text-white overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] gap-14 lg:gap-20 items-center">
            <div>
              <p className="kt-eyebrow on-dark mb-6">{t("nav.servicios")}</p>
              <h1 className={`${TITLE} text-[2.25rem] sm:text-5xl md:text-7xl mb-10`}><Accent text={INTRO.title} n={2} /></h1>
              <span className="block w-16 h-px bg-white mb-6" />
              {INTRO.paragraphs.map((p) => <p key={p} className={`${BODY} max-w-xl mb-4 last:mb-0`}>{p}</p>)}
            </div>
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none">
              <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 rounded-[32px] border border-white opacity-60" />
              <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                <Image src="/images/KTSecondPhoto.webp" alt="Katherine Velasquez" fill sizes="(min-width: 1024px) 24rem, 90vw" className="object-cover" priority />
              </div>
              <KtStar className="absolute -top-5 -left-5 w-10 h-10 text-[var(--color-brand-gold)]" />
            </div>
          </div>
        </header>

        {/* The five services at a glance, each row jumps to its section */}
        <nav aria-label="Servicios" className="py-20 md:py-28 px-6 md:px-16 bg-[var(--color-brand-gold)] text-[var(--color-brand-black)]">
          <ol className="max-w-6xl mx-auto border-t-[1.5px] border-[var(--color-brand-black)]">
            {SERVICES.map((s, i) => (
              <li key={s.title} className="border-b border-[var(--color-brand-black)]/25">
                <a
                  href={`#servicio-${i + 1}`}
                  className="group grid grid-cols-[3.5rem_minmax(0,1fr)] md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,22rem)_auto] items-start md:items-center gap-x-4 md:gap-x-10 gap-y-2 py-6 md:py-8 px-2 md:px-6 -mx-2 md:-mx-6 rounded-2xl transition-colors duration-500 hover:bg-white focus-visible:bg-white focus-visible:outline-none"
                >
                  <span className="text-4xl md:text-6xl font-normal leading-none tracking-[-0.03em]">0{i + 1}</span>
                  <span className={`${TITLE} text-xl md:text-[1.75rem]`}>{s.title}</span>
                  <span className="col-start-2 md:col-start-auto text-[15px] leading-snug">{s.tagline}</span>
                  <span className="col-start-2 md:col-start-auto justify-self-start mt-2 md:mt-0 inline-flex items-center gap-2 whitespace-nowrap h-11 md:h-12 pl-4 pr-1.5 rounded-full border-[1.5px] border-[var(--color-brand-black)] text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-black)] transition-colors duration-500 group-hover:bg-[var(--color-brand-black)] group-hover:text-white">
                    {verMas}
                    <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[var(--color-brand-black)] text-white grid place-items-center transition-colors duration-500 group-hover:bg-white group-hover:text-[var(--color-brand-black)]"><ArrowDown className="w-4 h-4" aria-hidden="true" /></span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {SERVICES.map((s, i) => {
          const tone = TONES[i];
          const c = TONE[tone];
          return (
            <div key={s.title}>
              <section id={`servicio-${i + 1}`} className={`scroll-mt-20 py-24 md:py-36 px-6 md:px-16 ${c.cls}`}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] gap-14 lg:gap-24 items-start">
                  <div className="lg:sticky lg:top-28">
                    <p className="text-sm font-bold mb-6">0{i + 1}</p>
                    <h2 className={`${TITLE} text-[min(2.25rem,calc((100vw_-_3rem)_/_9.2))] sm:text-4xl md:text-5xl mb-6`}>{s.title}</h2>
                    <p className="text-lg md:text-xl font-semibold leading-snug mb-6">{s.tagline}</p>
                    {s.intro.map((p) => <p key={p} className={`${BODY} ${c.sub} mb-4`}>{p}</p>)}
                    <div className="mt-8">
                      <KtCta href={whatsapp(s.title, language)} tone={c.cta}>{s.button}</KtCta>
                    </div>
                  </div>
                  <div className="space-y-12">
                    {s.blocks.map((b) => <ServiceBlock key={b.title} block={b} tone={tone} />)}
                  </div>
                </div>
              </section>

              {i === 0 && (
                <>
                  <section className="py-24 md:py-32 px-6 md:px-16 bg-[#E01E79] text-white">
                    <div className="max-w-6xl mx-auto">
                      <h2 className={`${TITLE} text-4xl md:text-6xl max-w-4xl mb-14 md:mb-20 flex gap-5`}>
                        <KtStar className="w-7 h-7 md:w-10 md:h-10 text-[var(--color-brand-gold)] shrink-0 mt-1" />
                        {CLARITY.title}
                      </h2>
                      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {CLARITY.paragraphs.map((p) => <p key={p} className={`${BODY} border-t border-white/40 pt-6`}>{p}</p>)}
                      </div>
                    </div>
                  </section>

                  <section className="py-24 md:py-32 px-6 md:px-16 bg-[var(--color-brand-pink)] text-[var(--color-brand-black)]">
                    <div className="max-w-6xl mx-auto">
                      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] gap-8 lg:gap-16 items-end mb-12 md:mb-16">
                        <h2 className={`${TITLE} text-4xl md:text-6xl`}>{PACKAGES.title}</h2>
                        <p className={BODY}>{PACKAGES.intro}</p>
                      </div>
                      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {PACKAGES.items.map((p, k) => (
                          <li key={p.name} className="bg-white rounded-[1.75rem] p-6 md:p-7 flex flex-col">
                            <span className="text-sm font-bold mb-8">0{k + 1}</span>
                            <p className="text-lg font-semibold leading-tight mb-3">{p.name}</p>
                            <p className="text-[15px] leading-relaxed text-[var(--color-brand-black)]/75 mb-8">{p.desc}</p>
                            <p className="mt-auto pt-5 border-t border-[var(--color-brand-black)]/15 text-xl font-bold mb-5">{p.price}</p>
                            <a
                              href={whatsapp(`${p.name} (${p.price})`, language)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/pk inline-flex items-center justify-between gap-2 h-11 pl-4 pr-1.5 rounded-full border-[1.5px] border-[var(--color-brand-black)] text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-[var(--color-brand-black)] hover:text-white"
                            >
                              {language === "es" ? "Me interesa" : "I'm interested"}
                              <span className="w-8 h-8 rounded-full bg-[var(--color-brand-black)] text-white grid place-items-center transition-colors duration-300 group-hover/pk:bg-white group-hover/pk:text-[var(--color-brand-black)]"><KtStar className="w-3.5 h-3.5" /></span>
                            </a>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <p className={`${BODY} max-w-2xl`}>{PACKAGES.note}</p>
                        <KtCta href={whatsapp(SERVICES[0].title, language)}>{SERVICES[0].button}</KtCta>
                      </div>
                    </div>
                  </section>
                </>
              )}
            </div>
          );
        })}

        {/* Mango Creative Studio: a different company, so it wears Mango's own system (yellow, charcoal, Cooper + Century Gothic, the mango mark) */}
        <section className={`${mangoCooper.variable} ${mangoGothic.variable} py-24 md:py-32 px-6 md:px-16 bg-[var(--color-brand-black)] text-white [font-family:var(--font-mango-gothic)]`}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] gap-12 lg:gap-24 items-start">
            <div>
              <a href={MANGO.href} target="_blank" rel="noopener noreferrer" className="inline-block mb-10 group" aria-label="Mango Creative Studio">
                <img src="/images/mango-mark.svg" alt="" className="w-14 md:w-16 h-auto transition-transform duration-500 group-hover:-rotate-6" />
              </a>
              <h2 className="[font-family:var(--font-mango-cooper)] text-4xl md:text-6xl leading-[1.05] mb-8 [text-wrap:balance]">{MANGO.title}</h2>
              <p className="text-lg md:text-xl font-bold leading-snug">{MANGO.question}</p>
            </div>
            <div className="lg:pt-24">
              {MANGO.paragraphs.map((p) => <p key={p} className="text-base md:text-lg leading-[1.7] mb-5 text-white/80">{p}</p>)}
              <a href={MANGO.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFCC00] text-[var(--color-brand-black)] px-7 py-4 text-sm md:text-base font-bold transition-colors duration-300 hover:bg-white">
                {MANGO.link}
                <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-16 md:mt-24">
            <MangoTags items={MANGO_OFFERS[language === "es" ? "es" : "en"]} href={MANGO.href} label={verMas} />
          </div>
        </section>
      </main>

      <FinalCta />
      <Footer />
    </div>
  );
}
