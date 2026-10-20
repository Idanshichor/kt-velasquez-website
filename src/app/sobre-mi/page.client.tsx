"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Scene } from "@/components/home/scene";
import { KtCta } from "@/components/home/scrub";
import { useLanguage } from "@/context/language-context";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20le%C3%AD%20tu%20historia%20en%20sobre-mi%20y%20me%20encantar%C3%ADa%20que%20nos%20tomemos%20un%20caf%C3%A9%20para%20hablar%20de%20negocios%20%3A%29";

const INK = "text-[var(--color-brand-black)]";
const BODY = "font-body text-base md:text-lg leading-[1.75] text-[var(--color-brand-black)]/80";
const SCRIPT = "block font-script normal-case tracking-normal leading-[1.1]";
const SHADOW = "shadow-[0_24px_60px_-28px_rgba(26,26,26,0.45)]";

const galleryPhotos = [
  { src: "/images/gallery/KT_Gallery_04.webp", width: 1600, height: 900, alt: "Katherine Velasquez alimentando a un elefante bebé en un santuario en Tailandia" },
  { src: "/images/gallery/KT_Gallery_07.webp", width: 1600, height: 900, alt: "Katherine Velasquez caminando frente al Templo Blanco de Chiang Rai, Tailandia" },
  { src: "/images/gallery/KT_Gallery_08.webp", width: 1600, height: 900, alt: "Katherine Velasquez descansando en un campo de flores rosadas" },
  { src: "/images/gallery/KT_Gallery_17.webp", width: 1200, height: 1600, alt: "Conexión humana y momentos de tranquilidad en los viajes de Katherine Velasquez" },
  { src: "/images/gallery/KT_Gallery_16.webp", width: 1200, height: 1600, alt: "Detalles de los paisajes y momentos reales que marcaron la historia de Katherine Velasquez" },
  { src: "/images/gallery/KT_Gallery_06.webp", width: 1600, height: 900, alt: "Vista panorámica del Templo Blanco de Chiang Rai, Tailandia" },
  { src: "/images/gallery/KT_Gallery_13.webp", width: 1200, height: 1600, alt: "Experiencias de viaje que dieron origen al enfoque y metodología de Estrategia 360" },
  { src: "/images/gallery/KT_Gallery_09.webp", width: 1600, height: 902, alt: "Katherine Velasquez jugando con la perspectiva de una jirafa en un safari" },
  { src: "/images/gallery/KT_Gallery_11.webp", width: 1600, height: 899, alt: "Momentos de viaje de Katherine Velasquez inspirados en el autodescubrimiento y crecimiento" },
  { src: "/images/gallery/KT_Gallery_20.webp", width: 1200, height: 1600, alt: "Estilo de vida independiente y nómada de Katherine Velasquez en el extranjero" },
  { src: "/images/gallery/KT_Gallery_10.webp", width: 800, height: 1600, alt: "Recuerdo en cámara 360 de Katherine Velasquez en una cascada durante sus viajes" },
  { src: "/images/gallery/KT_Gallery_14.webp", width: 1600, height: 1200, alt: "Katherine Velasquez disfrutando de su tiempo y libertad como nómada digital" },
  { src: "/images/gallery/KT_Gallery_19.webp", width: 1200, height: 1600, alt: "Katherine Velasquez explorando nuevos horizontes y consolidando su visión empresarial" },
  { src: "/images/gallery/KT_Gallery_02.webp", width: 1600, height: 900, alt: "Retrato de Katherine Velasquez junto al río en las montañas de Rishikesh, India" },
  { src: "/images/gallery/KT_Gallery_15.webp", width: 1200, height: 1600, alt: "Katherine Velasquez en uno de los pintorescos destinos durante sus viajes internacionales" },
  { src: "/images/gallery/KT_Gallery_03.webp", width: 900, height: 1600, alt: "Detalle de la mano de Katherine Velasquez con arena en la playa" },
  { src: "/images/gallery/KT_Gallery_18.webp", width: 1200, height: 1600, alt: "Momentos de reflexión de Katherine Velasquez durante su recorrido por el mundo" },
  { src: "/images/gallery/KT_Gallery_21.webp", width: 1200, height: 1600, alt: "Katherine Velasquez en una de las chocoaventuras memorables de su viaje" },
  { src: "/images/gallery/KT_Gallery_12.webp", width: 1600, height: 899, alt: "Katherine Velasquez conectando con nuevas culturas y paisajes" },
  { src: "/images/gallery/KT_Gallery_01.webp", width: 1600, height: 900, alt: "Katherine Velasquez recorriendo un mercado nocturno durante sus viajes por Asia" },
  { src: "/images/gallery/KT_Gallery_05.webp", width: 900, height: 1600, alt: "Katherine Velasquez entre los detalles arquitectónicos del Templo Blanco, Tailandia" }
];

/** Splits a title so its last word can sit on its own line in the script font, like the home section titles. */
function splitLast(title: string) {
  const cut = title.lastIndexOf(" ");
  return cut === -1 ? [title, ""] : [title.slice(0, cut), title.slice(cut + 1)];
}

/** One chapter of the story as a row in a numbered list, like the services index on the home page. */
function Chapter({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <li data-reveal className="grid grid-cols-[auto_minmax(0,1fr)] md:grid-cols-[6rem_minmax(0,5fr)_minmax(0,7fr)] gap-x-5 md:gap-x-10 gap-y-6 py-12 md:py-16 border-b border-[var(--color-brand-black)]/15">
      <span aria-hidden="true" className="font-heading text-3xl md:text-5xl leading-none text-[var(--color-brand-black)]/30">
        {String(n).padStart(2, "0")}
      </span>
      <h2 className={`kt-title text-2xl md:text-[2.1rem] leading-[1.05] ${INK}`}>{title}</h2>
      <div className="col-span-2 md:col-span-1 space-y-6">{children}</div>
    </li>
  );
}

export default function AboutPageClient() {
  const { language, t } = useLanguage();
  const [galleryLead, galleryAccent] = splitLast(t("aboutPage.galleryTitle") as string);
  const [ctaLead, ctaAccent] = splitLast(t("aboutPage.ctaTitle") as string);

  return (
    <div className={`min-h-screen bg-[var(--color-brand-cream)] ${INK} overflow-x-hidden`}>
      <Navbar />

      {/* HERO: Hola, soy Katherine, with the portrait and its pink lower-third label */}
      <Scene className="pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-14 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h1 data-lines className={`kt-title text-5xl md:text-7xl lg:text-[5.5rem] ${INK}`}>
              {t("aboutPage.heroTitlePart1")}
              <span className={`${SCRIPT} text-[0.8em] mt-2`}>{t("aboutPage.heroTitlePart2")}</span>
            </h1>
            <span className="kt-rule mt-10 mb-6 mx-auto lg:mx-0" />
            <p data-reveal className={`${BODY} md:text-xl max-w-xl mx-auto lg:mx-0`}>{t("aboutPage.heroSubtitle")}</p>
          </div>

          <div data-reveal className="relative mx-auto w-full max-w-[420px] pb-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] kt-card">
              <Image
                src="/images/KT_About_Hero.webp"
                alt="Katherine Velasquez — Estratega 360 e Ingeniera Civil"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                quality={90}
                className="object-cover object-[center_25%]"
                priority
              />
            </div>
            <div className={`absolute left-0 right-6 bottom-0 md:-left-6 bg-[var(--color-brand-pink)] rounded-2xl px-6 py-5 ${SHADOW}`}>
              <p className={`kt-title text-[2rem] md:text-[2.6rem] ${INK}`}>{t("aboutPage.heroTag")}</p>
            </div>
          </div>
        </div>
      </Scene>

      {/* CHAPTERS 1 to 7 */}
      <Scene className="pb-20 md:pb-28 px-6 md:px-16 bg-white">
        <ol className="max-w-6xl mx-auto border-t border-[var(--color-brand-black)]/15">
          <Chapter n={1} title={t("aboutPage.ch1Title") as string}>
            <p className={BODY}>{t("aboutPage.ch1Text")}</p>
          </Chapter>

          <Chapter n={2} title={t("aboutPage.ch2Title") as string}>
            <p className={BODY}>{t("aboutPage.ch2Text1")}</p>
            <p className={`${BODY} border-l-[3px] border-[var(--color-brand-pink-dark)] pl-6`}>{t("aboutPage.ch2Text2")}</p>
          </Chapter>

          <Chapter n={3} title={t("aboutPage.ch3Title") as string}>
            <p className={BODY}>{t("aboutPage.ch3Text")}</p>
            <p className={`inline-block bg-[var(--color-brand-pink)] rounded-2xl px-6 py-5 ${SHADOW} kt-title text-2xl md:text-[2.1rem] leading-[1.05] ${INK}`}>
              &ldquo;{t("aboutPage.ch3Callout")}&rdquo;
            </p>
          </Chapter>

          <Chapter n={4} title={t("aboutPage.ch4Title") as string}>
            <p className={BODY}>{t("aboutPage.ch4Text")}</p>
          </Chapter>

          <Chapter n={5} title={t("aboutPage.ch5Title") as string}>
            <p className={BODY}>{t("aboutPage.ch5Text")}</p>
            <blockquote className={`bg-[var(--color-brand-pink-light)] rounded-[1.75rem] p-6 md:p-9 ${SHADOW}`}>
              <p className={`font-heading italic text-lg md:text-2xl leading-relaxed ${INK}`}>{t("aboutPage.ch5Quote")}</p>
            </blockquote>
          </Chapter>

          <Chapter n={6} title={t("aboutPage.ch6Title") as string}>
            <p className={BODY}>{t("aboutPage.ch6Text1")}</p>
            <p className={BODY}>{t("aboutPage.ch6Text2")}</p>
            <p className={BODY}>{t("aboutPage.ch6Text3")}</p>
          </Chapter>

          <Chapter n={7} title={t("aboutPage.ch7Title") as string}>
            <p className={BODY}>{t("aboutPage.ch7Text1")}</p>
            {/* The travelers' question as a speech bubble, the same bubble as the home services rows */}
            <div className={`relative mt-10 bg-[var(--color-brand-pink-light)] rounded-[1.75rem] p-6 md:p-9 ${SHADOW}`}>
              <span aria-hidden="true" className="absolute -top-2 left-10 w-4 h-4 rotate-45 bg-[var(--color-brand-pink-light)]" />
              <p className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-3 ${INK}`}>
                {language === "es" ? "Pregunta Típica" : "Typical Question"}
              </p>
              <p className={`font-heading italic text-lg md:text-2xl leading-relaxed ${INK}`}>{t("aboutPage.ch7Dialog")}</p>
            </div>
            <p className={BODY}>{t("aboutPage.ch7Text2")}</p>
          </Chapter>
        </ol>
      </Scene>

      {/* TRAVEL GALLERY: LA VIDA DETRÁS DE LA ESTRATEGIA */}
      <Scene className="py-24 md:py-32 bg-[var(--color-brand-pink-light)]">
        <div className="max-w-6xl mx-auto px-6 md:px-16 grid md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-8 md:gap-16 items-end mb-12 md:mb-16">
          <div>
            <p className="kt-eyebrow mb-6">{t("aboutPage.galleryTag")}</p>
            <h2 data-lines className={`kt-title text-4xl md:text-6xl lg:text-7xl ${INK}`}>
              {galleryLead}
              {galleryAccent && <span className={`${SCRIPT} text-[0.8em] mt-1`}>{galleryAccent}</span>}
            </h2>
          </div>
          <div data-reveal>
            <span className="kt-rule mb-5" />
            <p className={BODY}>{t("aboutPage.gallerySubtitle")}</p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden py-6">
          <div className="hidden sm:block absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[var(--color-brand-pink-light)] to-transparent z-10 pointer-events-none" />
          <div className="hidden sm:block absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[var(--color-brand-pink-light)] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-5 gallery-marquee-track w-max">
            {[...galleryPhotos, ...galleryPhotos].map((photo, idx) => (
              <div
                key={`${photo.src}-${idx}`}
                className="shrink-0 relative rounded-[28px] overflow-hidden border border-[var(--color-brand-black)]/10 bg-white aspect-[4/5] w-[calc(100vw-5rem)] sm:w-[calc((100vw-4rem)/2)] md:w-[calc((100vw-10rem)/3)] xl:w-[320px]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover ${photo.src.endsWith("KT_Gallery_11.webp") ? "object-left" : "object-center"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </Scene>

      {/* CHAPTER 8: NACE ESTRATEGIA 360 */}
      <Scene className="py-12 md:py-16 px-6 md:px-16 bg-white">
        <ol start={8} className="max-w-6xl mx-auto">
          <Chapter n={8} title={t("aboutPage.ch8Title") as string}>
            <p className={`font-heading italic text-xl md:text-[1.7rem] leading-[1.35] ${INK}`}>{t("aboutPage.ch8Text1")}</p>
            <p className={BODY}>{t("aboutPage.ch8Text2")}</p>
            <div className="pt-2">
              <span className="kt-rule mb-5" />
              <p className={`kt-title text-2xl md:text-3xl ${INK}`}>{t("aboutPage.ch8Text3")}</p>
            </div>
          </Chapter>
        </ol>
      </Scene>

      {/* CALL TO ACTION: HABLEMOS CLARO */}
      <Scene className="py-24 md:py-36 px-6 md:px-16 bg-[var(--color-brand-pink)]">
        <div className="max-w-3xl mx-auto">
          <h2 data-lines className={`kt-title text-center text-5xl md:text-7xl mb-12 md:mb-16 ${INK}`}>
            {ctaLead}
            {ctaAccent && <span className={`${SCRIPT} text-[0.85em] mt-1`}>{ctaAccent}</span>}
          </h2>
          <div data-reveal className="bg-white rounded-[28px] kt-card p-8 md:p-12 space-y-8">
            <p className={BODY}>{t("aboutPage.ctaText1")}</p>
            <p className={`${BODY} italic border-l-[3px] border-[var(--color-brand-pink-dark)] pl-6`}>{t("aboutPage.ctaText2")}</p>
            <div className="pt-2">
              <KtCta href={WHATSAPP}>{t("aboutPage.ctaButton")}</KtCta>
            </div>
          </div>
        </div>
      </Scene>

      <Footer />
    </div>
  );
}
