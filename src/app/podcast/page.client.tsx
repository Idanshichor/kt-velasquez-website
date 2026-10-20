"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Scene } from "@/components/home/scene";
import { Scrub } from "@/components/home/scrub";
import { KT360Logo } from "./kt360-logo";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const INK = "text-[var(--color-brand-black)]";
// #E01E79 is the KT360 kit pink-dark (script accents and rules); only used on this page
const BARS = Array.from({ length: 40 }, (_, i) => ({ h: 20 + ((i * 37) % 70), d: (i % 7) * 0.17 }));
// The three title-card tones from the KT360 kit
const CARDS = [
  { bg: "bg-[var(--color-brand-black)]", fg: "text-white", muted: "text-white/65", rule: "bg-[var(--color-brand-pink)]" },
  { bg: "bg-[var(--color-brand-pink-light)]", fg: INK, muted: `${INK}/65`, rule: "bg-[#E01E79]" },
  { bg: "bg-white", fg: INK, muted: `${INK}/65`, rule: "bg-[var(--color-brand-gold)]" },
];
// Kit section tagline
const TAG = "font-body text-xs font-bold uppercase tracking-[0.3em]";

/** Splits a title so its last word can sit on its own line in the script font. */
function splitLast(title: string) {
  const cut = title.lastIndexOf(" ");
  return cut === -1 ? [title, ""] : [title.slice(0, cut), title.slice(cut + 1)];
}

export default function PodcastPageClient() {
  const { language, t } = useLanguage();
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Custom validation tracking for improved UX
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    social: false,
    story: false
  });

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formStatus === "submitting" || formStatus === "success") return;

    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "7bd1aa94-7d33-4738-b627-5b9378af65d4");
    formData.append("subject", language === "es" ? "Nueva Solicitud de Participación - Podcast (KT360)" : "New Guest Application - Podcast (KT360)");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  }

  // Podcast platforms, drawn in brand black so the strip stays in the palette
  const platforms = [
    {
      name: "Spotify",
      url: "https://open.spotify.com",
      logoSvg: (
        <svg viewBox="0 0 130 32" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0C6.27 0 0 6.27 0 14s6.27 14 14 14 14-6.27 14-14S21.73 0 14 0zm6.42 20.22c-.23.37-.73.49-1.1.26-2.95-1.8-6.66-2.2-11.03-1.2-.42.1-.84-.17-.94-.59s.17-.84.59-.94c4.8-1.1 8.9-.62 12.22 1.4.37.23.49.73.26 1.07zm1.71-3.8c-.29.47-.9.62-1.37.33-3.37-2.07-8.5-2.68-12.47-1.47-.53.16-1.09-.14-1.25-.67s.14-1.09.67-1.25c4.54-1.38 10.2-.69 14.1 1.7.47.28.62.9.32 1.36zm.14-3.93C17.7 9.8 11 9.58 7.15 10.75c-.71.21-1.45-.2-1.66-.91-.21-.71.2-.1.91-1.66 4.45-1.35 11.83-1.09 16.5 1.68.64.38.85 1.2.47 1.84s-1.2.85-1.84.47z" />
          <text x="36" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" letterSpacing="-0.03em">Spotify</text>
        </svg>
      )
    },
    {
      name: "Apple Podcasts",
      url: "https://podcasts.apple.com",
      logoSvg: (
        <svg viewBox="0 0 180 32" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="3" />
          <path d="M14 0C6.27 0 0 6.27 0 14s6.27 14 14 14 14-6.27 14-14S21.73 0 14 0zm0 24.5c-5.8 0-10.5-4.7-10.5-10.5S8.2 3.5 14 3.5 24.5 8.2 24.5 14 19.8 24.5 14 24.5z" opacity="0.3" />
          <path d="M14 6.5C9.86 6.5 6.5 9.86 6.5 14s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5S18.14 6.5 14 6.5zm0 11.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          <text x="36" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="15" letterSpacing="-0.02em">Apple Podcasts</text>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      logoSvg: (
        <svg viewBox="0 0 130 32" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.97 6.16a3.42 3.42 0 0 0-2.4-2.4C23.46 3.2 14.5 3.2 14.5 3.2s-8.96 0-11.07.56a3.42 3.42 0 0 0-2.4 2.4C.47 8.27.47 12.7.47 12.7s0 4.43.56 8.54a3.42 3.42 0 0 0 2.4 2.4c2.11.56 11.07.56 11.07.56s8.96 0 11.07-.56a3.42 3.42 0 0 0 2.4-2.4c.56-4.11.56-8.54.56-8.54s0-4.43-.56-8.54zM11.66 17.02V8.38l7.59 4.32-7.59 4.32z" />
          <text x="36" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" letterSpacing="-0.05em">YouTube</text>
        </svg>
      )
    },
    {
      name: "Amazon Music",
      url: "https://music.amazon.com",
      logoSvg: (
        <svg viewBox="0 0 160 32" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 2C7.15 2 2 7.15 2 13.5S7.15 25 13.5 25s11.5-5.15 11.5-11.5S19.85 2 13.5 2zm5.9 14.6c-.3.4-.8.6-1.3.6h-2.1c-.8 0-1.5-.7-1.5-1.5v-3.5c0-.8.7-1.5 1.5-1.5h1.9c.5 0 1 .2 1.3.6l1.6 2c.3.4.3 1 0 1.4l-1.4 1.9z" />
          <text x="36" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="15" letterSpacing="-0.02em">amazon music</text>
        </svg>
      )
    },
    {
      name: "Podimo",
      url: "https://podimo.com",
      logoSvg: (
        <svg viewBox="0 0 120 32" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5H9v-7h2v7zm4 0h-2v-11h2v11z" />
          <text x="32" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.02em">podimo</text>
        </svg>
      )
    }
  ];

  const values = [1, 2, 3].map((n) => ({
    title: t(`podcastPage.value${n}Title`) as string,
    desc: t(`podcastPage.value${n}Desc`) as string,
  }));
  const [valuesHead, valuesScript] = splitLast((t("podcastPage.valuesTitle") as string) || "");
  const [ctaHead, ctaScript] = splitLast((t("podcastPage.ctaTitle") as string) || "");

  // Inputs: brand black outline, gold when valid, pink wash when a required field is left wrong
  const field = (on: boolean) =>
    `px-5 py-4 border-[1.5px] bg-white focus:outline-none focus:border-[var(--color-brand-black)] focus:ring-4 focus:ring-[var(--color-brand-pink)]/60 w-full text-base ${INK} disabled:opacity-50 transition-colors ${
      on ? "invalid:bg-[var(--color-brand-pink-light)] invalid:border-[var(--color-brand-black)] valid:border-[var(--color-brand-gold)]" : "border-[var(--color-brand-black)]/20"
    }`;
  const label = `text-[11px] font-bold uppercase tracking-[0.18em] ${INK}`;

  return (
    <div className={`min-h-screen bg-[var(--color-brand-cream)] ${INK}`}>
      <Navbar />

      {/* HERO: a full-screen dark title card. The mic shot fills the right, the KT360 logo is the title,
          a lower third names the host, and a soundwave runs along the bottom. */}
      <Scene className="relative w-full min-h-[100svh] overflow-hidden bg-[var(--color-brand-black)] text-white flex flex-col md:flex-row md:items-center pt-32 pb-0 md:pt-36 md:pb-24 px-6 md:px-16">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 md:h-28 flex items-end justify-center gap-1 md:gap-1.5 px-4 opacity-40 pointer-events-none">
          {BARS.map((b, i) => (
            <span key={i} className="wave-bar w-1 md:w-1.5 bg-[var(--color-brand-pink)]" style={{ height: `${b.h}%`, animationDelay: `${b.d}s` }} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-[560px] md:max-w-[46%] lg:max-w-[540px] flex flex-col items-start">
            <p data-reveal className={`${TAG} text-white/60`}>{t("podcastPage.heroTag")}</p>
            <h1 data-reveal className="mt-6 w-full max-w-[340px] md:max-w-[480px]">
              <span className="sr-only">{t("podcastPage.heroTitlePart1")} {t("podcastPage.heroTitlePart2")}</span>
              <KT360Logo colorway="podcast" title={null} className="w-full h-auto text-white" />
            </h1>
            <span data-reveal className="block h-px w-24 bg-[var(--color-brand-pink)] mt-10" />
            <p data-reveal className="font-body text-white/70 text-base md:text-lg leading-relaxed mt-8 max-w-md">
              {t("podcastPage.heroSubtitle")}
            </p>
            <a data-reveal href="#postulate" className="kt-btn kt-btn-gold mt-10">
              <span>{t("podcastPage.ctaButton")}</span>
              <span className="kt-btn-dot" aria-hidden="true"><ArrowDown className="w-4 h-4" /></span>
            </a>
          </div>
        </div>

        <div className="relative z-[1] w-full max-w-[460px] mx-auto mt-12 md:mt-0 md:max-w-none md:absolute md:inset-y-0 md:right-0 md:w-[50%] lg:w-[54%]">
          <div aria-hidden="true" className="relative w-full aspect-square md:aspect-auto md:h-full">
            <Image src="/images/ktspacepodcast.webp" alt="" fill priority sizes="(max-width: 768px) 100vw, 54vw" className="object-contain object-bottom md:object-right-bottom" />
          </div>
          {/* Lower third, dark tone, as in the KT360 kit */}
          <div data-reveal className="absolute left-0 bottom-10 md:left-[6%] md:bottom-20 inline-flex items-stretch backdrop-blur-sm">
            <span className="w-1 shrink-0 bg-[var(--color-brand-pink)]" />
            <span className="px-6 py-4 bg-[var(--color-brand-black)]/90">
              <span className="block font-heading text-2xl md:text-3xl leading-none tracking-tight text-white">Katherine Velasquez</span>
              <span className="block font-body mt-2 text-xs font-bold uppercase tracking-[0.25em] text-white/65">{t("podcastPage.heroTitlePart2")}</span>
            </span>
          </div>
        </div>
      </Scene>

      {/* PLATFORMS: a pink band, like the kit marquee, with diamond separators */}
      <Scene className="bg-[var(--color-brand-pink)] py-8 md:py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          <p data-reveal className={`${TAG} ${INK} shrink-0`}>{t("podcastPage.platformsTitle")}</p>
          <ul data-stagger className="flex flex-wrap items-center justify-center lg:justify-end gap-x-3 gap-y-4">
            {platforms.map((platform, i) => (
              <li key={platform.name} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className={`${INK} text-sm`}>✦</span>}
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.name}
                  className="block fill-[var(--color-brand-black)] px-2 py-2 opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-500"
                >
                  <span className="h-7 flex items-center [&_svg]:h-7">{platform.logoSvg}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Scene>

      {/* MANIFESTO: cream title card. Eyebrow, the quote as the title, gold rule, body, and a pull line on a pink bar */}
      <Scene className="py-24 md:py-32 px-6 md:px-16 bg-[var(--color-brand-cream)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-14 lg:gap-20 items-center">
          <div>
            <p data-reveal className={`${TAG} ${INK}/60`}>{t("podcastPage.manifestoTag")}</p>
            <Scrub
              as="h2"
              parts={[{ text: `“${t("podcastPage.manifestoP1")}”` }]}
              className={`font-heading uppercase tracking-tight leading-[0.95] text-4xl md:text-5xl lg:text-6xl ${INK} mt-6`}
            />
            <span data-reveal className="block h-px w-24 bg-[var(--color-brand-gold)] mt-10" />
            <p data-reveal className={`font-body ${INK}/70 text-base md:text-lg leading-relaxed mt-8 max-w-2xl`}>{t("podcastPage.manifestoP2")}</p>
            <div data-reveal className="flex items-stretch mt-10 max-w-2xl">
              <span className="w-1 shrink-0 bg-[#E01E79]" />
              <p className={`pl-6 py-1 font-heading italic text-xl md:text-2xl leading-snug ${INK}`}>{t("podcastPage.manifestoP3")}</p>
            </div>
          </div>
          <div data-reveal className="relative w-full max-w-[420px] mx-auto lg:mx-0 lg:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-brand-gold-light)] shadow-elevated">
              <Image
                src="/images/KT_Podcast_Katherine.webp"
                alt="Katherine Velasquez, host del podcast Estrategia 360 - Sin Pelos en la Lengua"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover scale-[1.45] origin-[52%_38%]"
              />
            </div>
            <div className="absolute -left-4 md:-left-10 bottom-8 inline-flex items-stretch">
              <span className="w-1 shrink-0 bg-[var(--color-brand-black)]" />
              <span className="px-6 py-4 bg-[var(--color-brand-pink)]">
                <span className={`block font-heading text-2xl md:text-3xl leading-none tracking-tight ${INK}`}>Katherine Velasquez</span>
                <span className={`block font-body mt-2 text-xs font-bold uppercase tracking-[0.25em] ${INK}/70`}>{t("podcastPage.heroTitlePart1")} {t("podcastPage.heroTitlePart2")}</span>
              </span>
            </div>
          </div>
        </div>
      </Scene>

      {/* VALUES: gold section with three title cards, one per kit tone (dark, pink, cream) */}
      <Scene className="py-24 md:py-32 px-6 md:px-16 bg-[var(--color-brand-gold-light)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] gap-8 md:gap-16 items-end mb-14 md:mb-20">
            <h2 data-lines className={`font-heading uppercase tracking-tight leading-[0.95] text-5xl md:text-6xl ${INK}`}>
              {valuesHead}
              {valuesScript && <span className="block font-script normal-case tracking-normal leading-tight text-[#E01E79] text-[1.05em] mt-2">{valuesScript}</span>}
            </h2>
            <div data-reveal>
              <span className="block h-px w-24 bg-[var(--color-brand-gold)] mb-6" />
              <p className={`font-body ${INK}/70 text-base md:text-lg leading-relaxed`}>{t("podcastPage.valuesSubtitle")}</p>
            </div>
          </div>

          <ol data-stagger className="grid md:grid-cols-3 gap-5 md:gap-6">
            {values.map((v, i) => {
              const c = CARDS[i];
              return (
                <li key={i} className={`relative ${c.bg} ${c.fg} shadow-soft p-8 md:p-10 flex flex-col min-h-[22rem] md:min-h-[28rem]`}>
                  <p className={`${TAG} ${c.muted}`}>0{i + 1}</p>
                  <h3 className="font-heading uppercase tracking-tight leading-[0.95] text-3xl md:text-[2.1rem] mt-6">{v.title}</h3>
                  <span className={`block h-px w-[18%] ${c.rule} mt-8`} />
                  <p className={`font-body ${c.muted} text-base leading-relaxed mt-6 mb-12`}>{v.desc}</p>
                  <KT360Logo title={null} className="absolute right-8 bottom-8 h-5 md:h-6 w-auto" />
                </li>
              );
            })}
          </ol>
        </div>
      </Scene>

      {/* GUEST APPLICATION: pink title card on the left, the form on the right */}
      <Scene id="postulate" className="py-24 md:py-32 px-6 md:px-16 bg-[var(--color-brand-pink-light)] scroll-mt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-36">
            <h2 data-lines className={`font-heading uppercase tracking-tight leading-[0.95] text-4xl md:text-5xl lg:text-6xl ${INK}`}>
              {ctaHead}
              {ctaScript && <span className="block font-script normal-case tracking-normal leading-tight text-[#E01E79] text-[1.05em] mt-2">{ctaScript}</span>}
            </h2>
            <span data-reveal className="block h-px w-24 bg-[#E01E79] mt-10" />
            <p data-reveal className={`font-body ${INK}/70 text-base md:text-lg leading-relaxed mt-8`}>{t("podcastPage.ctaSubtitle")}</p>
          </div>

          <div data-reveal className="bg-white p-7 md:p-12 shadow-elevated">
            {formStatus === "success" ? (
              <div role="status" className="text-center py-12 flex flex-col items-center justify-center">
                <div className={`w-16 h-16 rounded-full bg-[var(--color-brand-pink)] ${INK} flex items-center justify-center mb-6 text-3xl`}>✓</div>
                <h3 className={`kt-title text-3xl mb-4 ${INK}`}>
                  {language === "es" ? "¡Gracias por postularte!" : "Thank you for applying!"}
                </h3>
                <p className={`font-body text-base ${INK} max-w-md`}>{t("podcastPage.formSuccess")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="guest_name" className={label}>{t("podcastPage.formName")}</label>
                  <input type="text" id="guest_name" name="name" required autoComplete="name" onBlur={() => handleBlur("name")} disabled={formStatus === "submitting"} className={field(touched.name)} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="guest_email" className={label}>{t("podcastPage.formEmail")}</label>
                  <input type="email" id="guest_email" name="email" required autoComplete="email" onBlur={() => handleBlur("email")} disabled={formStatus === "submitting"} className={field(touched.email)} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="guest_social" className={label}>{t("podcastPage.formSocial")}</label>
                  <input type="text" id="guest_social" name="social_media" required onBlur={() => handleBlur("social")} disabled={formStatus === "submitting"} className={field(touched.social)} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="guest_story" className={label}>{t("podcastPage.formStory")}</label>
                  <textarea id="guest_story" name="story" required rows={5} onBlur={() => handleBlur("story")} disabled={formStatus === "submitting"} className={`${field(touched.story)} resize-none`} />
                </div>

                <p className={`text-xs ${INK}/70 leading-normal mt-2`}>
                  {language === "es" ? (
                    <>
                      Al enviar tu postulación, autorizas el tratamiento de tus datos personales de acuerdo con nuestra{" "}
                      <Link href="/privacidad" className="underline underline-offset-2 hover:opacity-70 transition-opacity">Política de Privacidad</Link>.
                    </>
                  ) : (
                    <>
                      By submitting your application, you authorize the processing of your personal data in accordance with our{" "}
                      <Link href="/privacidad" className="underline underline-offset-2 hover:opacity-70 transition-opacity">Privacy Policy</Link>.
                    </>
                  )}
                </p>

                {formStatus === "error" && (
                  <p role="alert" className={`text-sm font-bold ${INK} border-l-4 border-[#E01E79] pl-4 py-2`}>{t("podcastPage.formError")}</p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="kt-btn kt-btn-dark w-full justify-between mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{formStatus === "submitting" ? t("podcastPage.formSubmitting") : t("podcastPage.ctaButton")}</span>
                  <span className="kt-btn-dot" aria-hidden="true"><ArrowUpRight className="w-4 h-4" /></span>
                </button>
              </form>
            )}
          </div>
        </div>
      </Scene>

      <Footer />
    </div>
  );
}
