"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Scene } from "@/components/home/scene";
import { KtCta, KtStar, Scrub, type ScrubPart } from "@/components/home/scrub";
import { KT360Logo } from "./kt360-logo";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const INK = "text-[var(--color-brand-black)]";

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
  // The manifesto line, with its last two words in gold ("the word that matters", per the brand guide)
  const p1 = ((t("podcastPage.manifestoP1") as string) || "").split(" ");
  const manifestoParts: ScrubPart[] = [
    { text: p1.slice(0, -2).join(" ") },
    { text: p1.slice(-2).join(" "), className: "text-[var(--color-brand-gold)]" },
  ];
  // "Business + digital + mindset ... Sin filtros, ...": the first sentence becomes the big line with black "+"
  // badges between the three parts; the rest is the script line underneath
  const together = (() => {
    const all = (t("podcastPage.manifestoP3") as string) || "";
    const cut = all.indexOf(". ");
    return cut === -1 ? { main: all, rest: "" } : { main: all.slice(0, cut + 1), rest: all.slice(cut + 2) };
  })();
  const PLUS = "inline-grid place-items-center align-middle w-[1.15em] h-[1.15em] rounded-full bg-[var(--color-brand-black)] text-[var(--color-brand-gold)] text-[0.7em] leading-none mx-[0.35em] -translate-y-[0.06em]";
  const togetherParts: ScrubPart[] = together.main
    .split(" + ")
    .flatMap((chunk, i) => (i === 0 ? [{ text: chunk }] : [{ text: "+", className: PLUS }, { text: chunk }]));
  const [valuesHead, valuesScript] = splitLast((t("podcastPage.valuesTitle") as string) || "");
  const [ctaHead, ctaScript] = splitLast((t("podcastPage.ctaTitle") as string) || "");

  // Inputs on black: a white underline, gold when valid, magenta when a required field is left wrong
  const field = (on: boolean) =>
    `px-0 py-3 bg-transparent border-0 border-b-[1.5px] focus:outline-none focus:border-[var(--color-brand-gold)] w-full text-base text-white placeholder:text-white/40 disabled:opacity-50 transition-colors ${
      on ? "invalid:border-[#E01E79] valid:border-[var(--color-brand-gold)]" : "border-white/35"
    }`;
  const label = "text-[11px] font-bold uppercase tracking-[0.18em] text-white/80";

  return (
    <div className={`min-h-screen bg-[var(--color-brand-cream)] ${INK}`}>
      <Navbar />

      {/* HERO (pink, the podcast's colour in the brand guide): full screen. Logo, title, where to listen,
          the button, and the mic shot filling the right with the gold star turning above it. */}
      <Scene className="relative w-full min-h-[100svh] overflow-hidden bg-[var(--color-brand-pink)] flex flex-col md:flex-row md:items-center pt-32 pb-0 md:pt-36 md:pb-20 px-6 md:px-16">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-[580px] md:max-w-[48%] lg:max-w-[580px] flex flex-col items-start">
            <p data-reveal className={`kt-eyebrow ${INK} [&::before]:bg-[var(--color-brand-black)]`}>{t("podcastPage.heroTag")}</p>
            <h1 data-reveal className="mt-8 w-full max-w-[360px] md:max-w-[500px]">
              <span className="sr-only">{t("podcastPage.heroTitlePart1")} {t("podcastPage.heroTitlePart2")}</span>
              <KT360Logo title={null} accent="#FFFFFF" className={`w-full h-auto ${INK}`} />
            </h1>
            <p data-reveal className={`font-body ${INK} text-base md:text-lg leading-relaxed mt-8 max-w-md`}>{t("podcastPage.heroSubtitle")}</p>

            <div data-reveal className="mt-10">
              <KtCta href="#postulate" external={false}>{t("podcastPage.ctaButton")}</KtCta>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="relative z-[1] w-full max-w-[440px] mx-auto mt-12 md:mt-0 md:max-w-none md:absolute md:inset-y-0 md:right-0 md:w-[48%] lg:w-[52%] pointer-events-none">
          <div className="relative w-full aspect-square md:aspect-auto md:h-full">
            <Image src="/images/ktspacepodcast.webp" alt="" fill priority sizes="(max-width: 768px) 100vw, 52vw" className="object-contain object-bottom md:object-right-bottom grayscale contrast-[1.3] mix-blend-multiply" />
          </div>
          <KtStar className="kt-turn absolute right-6 top-4 md:right-16 md:top-36 w-14 md:w-20 text-[var(--color-brand-gold)]" />
        </div>
      </Scene>

      {/* PLATFORMS: a white bar under the hero, built like the home page's client logo strip */}
      <Scene className="py-12 md:py-14 px-6 md:px-16 bg-white border-b-[1.5px] border-[var(--color-brand-black)]">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-8 xl:gap-16">
          <p data-reveal className={`text-[11px] font-bold uppercase tracking-[0.3em] ${INK} shrink-0`}>{t("podcastPage.platformsTitle")}</p>
          <ul data-stagger className="flex flex-wrap items-center justify-center md:justify-between gap-x-10 gap-y-6 flex-1 w-full">
            {platforms.map((platform) => (
              <li key={platform.name}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.name}
                  className="block fill-[var(--color-brand-black)] opacity-80 hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300"
                >
                  <span className="h-8 flex items-center [&_svg]:h-8">{platform.logoSvg}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Scene>

      {/* STATEMENT (black): the manifesto line, built like the brand guide's featured phrase.
          Script lead in pink, the line in capitals, the words that matter in gold, a gold rule, short support text. */}
      <Scene className="statement relative overflow-hidden bg-[var(--color-brand-black)] text-white py-28 md:py-44 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_minmax(0,1fr)] gap-10 md:gap-20 items-center">
          <KtStar className="statement-star w-20 md:w-48 lg:w-52 text-[var(--color-brand-gold)]" />
          <div>
            <h2>
              <span data-reveal className="block font-script-readable text-[var(--color-brand-pink)] text-5xl md:text-7xl leading-none -ml-1">{t("podcastPage.manifestoTag")}</span>
              <Scrub
                as="span"
                parts={manifestoParts}
                className="block kt-title text-3xl md:text-5xl lg:text-[3.6rem] leading-[1.02] mt-4"
              />
            </h2>
            <span data-reveal className="kt-rule mt-10" />
            <p data-reveal className="font-body text-white/65 mt-6 text-sm md:text-base font-medium max-w-xl leading-relaxed">{t("podcastPage.manifestoP2")}</p>
          </div>
        </div>
      </Scene>

      {/* VALUES (white, structure): the framed photo on the left, a numbered list on the right */}
      <Scene className="py-28 md:py-40 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-16 lg:gap-24 items-center">
          <div data-reveal className="relative w-full max-w-[380px] mx-auto lg:mx-0 pr-7 pb-7">
            {/* The KT frame: rounded photo with a thin outline set off down and to the right */}
            <div aria-hidden="true" className="absolute inset-0 top-7 left-7 rounded-[32px] border border-[var(--color-brand-black)]" />
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-[var(--color-brand-gold-light)] shadow-[0_24px_60px_-28px_rgba(26,26,26,0.45)]">
              <Image
                src="/images/KT_Podcast_Katherine.webp"
                alt="Katherine Velasquez, host del podcast Estrategia 360 - Sin Pelos en la Lengua"
                fill
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover scale-[1.9] origin-[52%_30%]"
              />
            </div>
            <span className="absolute left-0 bottom-14 -translate-x-3 bg-[var(--color-brand-pink)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em]">Katherine Velasquez</span>
          </div>

          <div>
            <h2 data-lines className={`kt-title text-4xl md:text-6xl ${INK}`}>
              {valuesHead}
              {valuesScript && <span className="block font-script normal-case tracking-normal leading-tight text-[1.1em] mt-1">{valuesScript}</span>}
            </h2>
            <span data-reveal className="kt-rule mt-8 mb-6" />
            <p data-reveal className={`font-body ${INK}/70 text-base md:text-lg leading-relaxed max-w-xl`}>{t("podcastPage.valuesSubtitle")}</p>

            <ol data-stagger className="mt-12 border-t border-[var(--color-brand-black)]">
              {values.map((v, i) => (
                <li key={i} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 py-6 border-b border-[var(--color-brand-black)]/25">
                  <span className="font-body text-base font-bold pt-1">0{i + 1}</span>
                  <div>
                    <h3 className="kt-title text-xl md:text-2xl leading-[1.05]">{v.title}</h3>
                    <p className={`font-body ${INK}/70 text-base leading-relaxed mt-2`}>{v.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Scene>

      {/* HOW WE SEE IT (gold, builds): the three things that go together, joined by black "+" badges that
          light up word by word, the gold star turning on a black disc, and the "sin filtros" line in script */}
      <Scene className="relative overflow-hidden py-24 md:py-36 px-6 md:px-16 bg-[var(--color-brand-gold)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_minmax(0,1fr)] gap-10 md:gap-16 items-center">
          <div aria-hidden="true" className="w-24 h-24 md:w-44 md:h-44 rounded-full bg-[var(--color-brand-black)] grid place-items-center shadow-[0_24px_60px_-28px_rgba(26,26,26,0.6)]">
            <KtStar className="kt-turn w-12 md:w-24 text-[var(--color-brand-gold)]" />
          </div>
          <div>
            <Scrub parts={togetherParts} className={`kt-title text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.08] ${INK}`} />
            {together.rest && (
              <p data-reveal className={`font-script-readable text-3xl md:text-[2.6rem] leading-[1.25] ${INK} mt-10 max-w-3xl`}>{together.rest}</p>
            )}
          </div>
        </div>
      </Scene>

      {/* GUEST APPLICATION (black, holds): title and invite on the left, a quiet form on the right */}
      <Scene id="postulate" className="py-28 md:py-40 px-6 md:px-16 bg-[var(--color-brand-black)] text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-36">
            <p data-reveal className="kt-eyebrow on-dark text-white">{t("podcastPage.heroTag")}</p>
            <h2 data-lines className="kt-title text-4xl md:text-5xl lg:text-6xl mt-6">
              {ctaHead}
              {ctaScript && <span className="block font-script normal-case tracking-normal leading-tight text-[var(--color-brand-pink)] text-[1.1em] mt-1">{ctaScript}</span>}
            </h2>
            <span data-reveal className="kt-rule mt-8 mb-6" />
            <p data-reveal className="font-body text-white/65 text-base md:text-lg leading-relaxed">{t("podcastPage.ctaSubtitle")}</p>
          </div>

          <div data-reveal>
            {formStatus === "success" ? (
              <div role="status" className="text-center py-12 flex flex-col items-center justify-center">
                <div className={`w-16 h-16 rounded-full bg-[var(--color-brand-pink)] ${INK} flex items-center justify-center mb-6 text-3xl`}>✓</div>
                <h3 className="kt-title text-3xl mb-4 text-white">
                  {language === "es" ? "¡Gracias por postularte!" : "Thank you for applying!"}
                </h3>
                <p className="font-body text-base text-white/70 max-w-md">{t("podcastPage.formSuccess")}</p>
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

                <p className="text-xs text-white/60 leading-normal mt-2">
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
                  <p role="alert" className="text-sm font-bold text-white border-l-4 border-[#E01E79] pl-4 py-2">{t("podcastPage.formError")}</p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="kt-btn kt-btn-gold w-full justify-between mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
