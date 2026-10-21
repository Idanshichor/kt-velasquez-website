"use client";

import { Check } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/home/final-cta";
import { KtCta, KtStar } from "@/components/home/scrub";
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
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-[var(--color-brand-black)]">
      <Navbar />

      <main>
        <header className="pt-40 md:pt-52 pb-20 md:pb-28 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="kt-eyebrow mb-6">{t("nav.servicios")}</p>
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-10 lg:gap-16 items-end mb-16 md:mb-24">
              <h1 className={`${TITLE} text-5xl md:text-7xl`}><Accent text={INTRO.title} n={2} /></h1>
              <div>
                <span className="kt-rule mb-5" />
                {INTRO.paragraphs.map((p) => <p key={p} className={`${BODY} mb-4 last:mb-0`}>{p}</p>)}
              </div>
            </div>

            <nav aria-label="Servicios" className="border-t-[1.5px] border-[var(--color-brand-black)]">
              <ol className="grid md:grid-cols-2 gap-x-12">
                {SERVICES.map((s, i) => (
                  <li key={s.title} className="border-b border-[var(--color-brand-black)]/15">
                    <a href={`#servicio-${i + 1}`} className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 py-6 md:py-7">
                      <span className="text-sm font-bold pt-1">0{i + 1}</span>
                      <span>
                        <span className={`${TITLE} block text-xl md:text-2xl mb-2 underline-offset-[6px] decoration-[var(--color-brand-pink)] decoration-2 group-hover:underline`}>{s.title}</span>
                        <span className="block text-[15px] leading-snug text-[var(--color-brand-black)]/75">{s.tagline}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </header>

        {SERVICES.map((s, i) => {
          const tone = TONES[i];
          const c = TONE[tone];
          return (
            <div key={s.title}>
              <section id={`servicio-${i + 1}`} className={`scroll-mt-20 py-24 md:py-36 px-6 md:px-16 ${c.cls}`}>
                <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] gap-14 lg:gap-24 items-start">
                  <div className="lg:sticky lg:top-28">
                    <p className="text-sm font-bold mb-6">0{i + 1}</p>
                    <h2 className={`${TITLE} text-4xl md:text-5xl mb-6`}>{s.title}</h2>
                    <p className="text-lg md:text-xl font-semibold leading-snug mb-6">{s.tagline}</p>
                    {s.intro.map((p) => <p key={p} className={`${BODY} ${c.sub} mb-4`}>{p}</p>)}
                    <div className="mt-8">
                      <KtCta href={whatsapp(s.title)} tone={c.cta}>{s.button}</KtCta>
                    </div>
                  </div>
                  <div className="space-y-12">
                    {s.blocks.map((b) => <ServiceBlock key={b.title} block={b} tone={tone} />)}
                  </div>
                </div>
              </section>

              {i === 0 && (
                <>
                  <section className="py-24 md:py-32 px-6 md:px-16 bg-[var(--color-brand-purple)] text-white">
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
                            <p className="mt-auto pt-5 border-t border-[var(--color-brand-black)]/15 text-xl font-bold">{p.price}</p>
                          </li>
                        ))}
                      </ol>
                      <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <p className={`${BODY} max-w-2xl`}>{PACKAGES.note}</p>
                        <KtCta href={whatsapp(SERVICES[0].title)}>{SERVICES[0].button}</KtCta>
                      </div>
                    </div>
                  </section>
                </>
              )}
            </div>
          );
        })}

        <section className="py-24 md:py-36 px-6 md:px-16 bg-[var(--color-brand-black)] text-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] gap-12 lg:gap-24 items-start">
            <div>
              <p className="kt-eyebrow on-dark mb-6">Mango Creative Studio</p>
              <h2 className={`${TITLE} text-4xl md:text-6xl mb-8`}><Accent text={MANGO.title} n={3} /></h2>
              <p className="text-lg md:text-xl font-semibold leading-snug">{MANGO.question}</p>
            </div>
            <div>
              {MANGO.paragraphs.map((p) => <p key={p} className={`${BODY} text-white/75 mb-5`}>{p}</p>)}
              <div className="mt-8"><KtCta href={MANGO.href} tone="gold">{MANGO.link}</KtCta></div>
            </div>
          </div>
        </section>
      </main>

      <FinalCta />
      <Footer />
    </div>
  );
}
