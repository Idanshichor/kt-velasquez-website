"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Scene } from "@/components/home/scene";
import { KtCta } from "@/components/home/scrub";
import { useLanguage } from "@/context/language-context";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20le%C3%AD%20tu%20historia%20en%20sobre-mi%20y%20me%20encantar%C3%ADa%20que%20nos%20tomemos%20un%20caf%C3%A9%20para%20hablar%20de%20negocios%20%3A%29";

/*
 * Built on the KT360 Design System (kt360-design-system@0.1.0, ds-bundle/ in the main checkout).
 * Each chapter is a TitleCard-style scene in one of the four card tones, and short lines ride on
 * the LowerThird strap. In the system, pink-dark is magenta #E01E79: rules and script on light tones.
 */
type Tone = "cream" | "gold" | "pink" | "dark";
const TONES: Record<Tone, { bg: string; fg: string; muted: string; rule: string; script: string }> = {
  cream: { bg: "bg-white", fg: "text-[var(--color-brand-black)]", muted: "text-[var(--color-brand-black)]/70", rule: "bg-[var(--color-brand-gold)]", script: "text-[#E01E79]" },
  gold: { bg: "bg-[var(--color-brand-gold-light)]", fg: "text-[var(--color-brand-black)]", muted: "text-[var(--color-brand-black)]/70", rule: "bg-[var(--color-brand-gold)]", script: "text-[#E01E79]" },
  pink: { bg: "bg-[var(--color-brand-pink-light)]", fg: "text-[var(--color-brand-black)]", muted: "text-[var(--color-brand-black)]/70", rule: "bg-[#E01E79]", script: "text-[#E01E79]" },
  dark: { bg: "bg-[var(--color-brand-black)]", fg: "text-white", muted: "text-white/70", rule: "bg-[var(--color-brand-pink)]", script: "text-[var(--color-brand-pink)]" },
};

const EYEBROW = "font-body text-xs font-bold uppercase tracking-[0.3em]";
const TITLE = "font-heading uppercase leading-[0.95] tracking-tight";
const BODY = "font-body text-base md:text-lg leading-[1.8]";
const SECTION = "py-24 md:py-32 px-6 md:px-16";

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

/** Splits a title so its last word can take the script accent, the TitleCard way. */
function splitLast(title: string) {
  const cut = title.lastIndexOf(" ");
  return cut === -1 ? [title, ""] : [title.slice(0, cut), title.slice(cut + 1)];
}

const pad = (n: number) => String(n).padStart(2, "0");

/** TitleCard anatomy: eyebrow, uppercase title, a short 1px rule. */
function CardHead({ n, title, tone, className = "", size = "text-4xl md:text-6xl" }: { n: number; title: string; tone: Tone; className?: string; size?: string }) {
  const t = TONES[tone];
  return (
    <div className={className}>
      <p data-reveal className={`${EYEBROW} ${t.muted}`}>{pad(n)} / 08</p>
      <h2 data-lines className={`${TITLE} ${size} mt-5 ${t.fg}`}>{title}</h2>
      <span data-reveal className={`block mt-8 h-px w-16 md:w-24 ${t.rule}`} />
    </div>
  );
}

/** The LowerThird strap: a 4px accent bar and a panel with the line in Playfair. */
const LT = {
  light: { bg: "bg-white/95", name: "text-[var(--color-brand-black)]", role: "text-[var(--color-brand-black)]/60", bar: "bg-[#E01E79]" },
  dark: { bg: "bg-[var(--color-brand-black)]/90", name: "text-white", role: "text-white/65", bar: "bg-[var(--color-brand-pink)]" },
  pink: { bg: "bg-[var(--color-brand-pink)]", name: "text-[var(--color-brand-black)]", role: "text-[var(--color-brand-black)]/70", bar: "bg-[var(--color-brand-black)]" },
};
function LowerThird({ name, role, tone = "dark", as: Tag = "p", className = "" }: { name: ReactNode; role?: string; tone?: keyof typeof LT; as?: "p" | "h2"; className?: string }) {
  const t = LT[tone];
  return (
    <div className={`inline-flex items-stretch ${className}`}>
      <span aria-hidden="true" className={`w-1 shrink-0 ${t.bar}`} />
      <div className={`px-6 py-4 ${t.bg}`}>
        <Tag className={`font-heading text-2xl md:text-3xl leading-none tracking-tight ${t.name}`}>{name}</Tag>
        {role && <p className={`font-body mt-2 text-xs font-bold uppercase tracking-[0.25em] ${t.role}`}>{role}</p>}
      </div>
    </div>
  );
}

export default function AboutPageClient() {
  const { language, t } = useLanguage();
  const s = (k: string) => t(`aboutPage.${k}`) as string;
  const [galleryLead, galleryAccent] = splitLast(s("galleryTitle"));

  return (
    <div className="min-h-screen bg-white text-[var(--color-brand-black)] overflow-x-hidden">
      <Navbar />

      {/* HERO: full-screen portrait, a dark TitleCard laid over it (title, script accent, rule, subtitle) */}
      <Scene className="relative min-h-[100svh] flex items-end overflow-hidden bg-[var(--color-brand-black)] text-white">
        <div data-mask className="absolute inset-0 md:left-auto md:w-[66%]">
          <div data-mask-img className="absolute inset-0">
            <Image
              src="/images/KT_About_Hero.webp"
              alt="Katherine Velasquez — Estratega 360 e Ingeniera Civil"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              quality={90}
              className="object-cover object-[center_18%]"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-black)] via-[var(--color-brand-black)]/30 to-transparent md:bg-gradient-to-r md:from-[var(--color-brand-black)] md:via-[var(--color-brand-black)]/10 md:to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pt-[50svh] pb-16 md:pt-40 md:pb-24">
          <p data-reveal className={`${EYEBROW} text-white/60`}>{s("heroTag")}</p>
          <h1 data-lines className={`${TITLE} text-6xl md:text-8xl lg:text-[7.5rem] mt-6 text-white`}>{s("heroTitlePart1")}</h1>
          <p data-reveal className="font-script text-[var(--color-brand-pink)] text-[2.6rem] md:text-6xl lg:text-7xl leading-tight mt-2">{s("heroTitlePart2")}</p>
          <span data-reveal className="block mt-8 h-px w-24 bg-[var(--color-brand-pink)]" />
          <p data-reveal className="font-body text-white/70 text-base md:text-lg leading-relaxed mt-6 max-w-md">{s("heroSubtitle")}</p>
        </div>
      </Scene>

      {/* 01 cream: head left, story right */}
      <Scene className={`${SECTION} ${TONES.cream.bg}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 md:gap-24">
          <CardHead n={1} title={s("ch1Title")} tone="cream" />
          <p data-reveal className={`${BODY} md:text-xl ${TONES.cream.fg} md:pt-12`}>{s("ch1Text")}</p>
        </div>
      </Scene>

      {/* 02 gold: head across, two columns; the thesis line rides the lower-third bar */}
      <Scene className={`${SECTION} ${TONES.gold.bg}`}>
        <div className="max-w-7xl mx-auto">
          <CardHead n={2} title={s("ch2Title")} tone="gold" size="text-5xl md:text-7xl lg:text-8xl" className="mb-14 md:mb-20" />
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <p data-reveal className={`${BODY} ${TONES.gold.fg}`}>{s("ch2Text1")}</p>
            <p data-reveal className={`${BODY} ${TONES.gold.fg} border-l-4 border-[#E01E79] pl-6 self-start`}>{s("ch2Text2")}</p>
          </div>
        </div>
      </Scene>

      {/* 03 dark: centred card, the callout as the title-sized line */}
      <Scene className={`${SECTION} md:py-40 ${TONES.dark.bg}`}>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <CardHead n={3} title={s("ch3Title")} tone="dark" className="flex flex-col items-center" />
          <p data-reveal className={`${BODY} ${TONES.dark.muted} mt-12 max-w-2xl`}>{s("ch3Text")}</p>
          <p data-lines className={`${TITLE} text-4xl md:text-6xl lg:text-7xl text-white mt-16 md:mt-24`}>&ldquo;{s("ch3Callout")}&rdquo;</p>
        </div>
      </Scene>

      {/* 04 pink: the photo carries the chapter title as a lower third */}
      <Scene className={`${SECTION} ${TONES.pink.bg}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative w-full max-w-[480px] pb-10">
            <div data-mask className="relative aspect-[4/5] w-full overflow-hidden shadow-[0_24px_60px_-28px_rgba(26,26,26,0.4)]">
              <div data-mask-img className="absolute inset-0">
                <Image src="/images/KTSecondPhoto.webp" alt="Katherine Velasquez" fill sizes="(max-width: 768px) 90vw, 480px" className="object-cover object-[center_35%]" />
              </div>
            </div>
            <div data-reveal className="absolute left-0 bottom-0 md:-left-6">
              <LowerThird as="h2" tone="light" name={s("ch4Title")} role={`${pad(4)} / 08`} />
            </div>
          </div>
          <p data-reveal className={`${BODY} md:text-xl ${TONES.pink.fg}`}>{s("ch4Text")}</p>
        </div>
      </Scene>

      {/* 05 cream: story left, the life lesson in the readable script */}
      <Scene className={`${SECTION} ${TONES.cream.bg}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 md:gap-24 items-end">
          <div>
            <CardHead n={5} title={s("ch5Title")} tone="cream" className="mb-10" />
            <p data-reveal className={`${BODY} ${TONES.cream.fg}`}>{s("ch5Text")}</p>
          </div>
          <blockquote data-reveal className="font-script-readable text-[#E01E79] text-3xl md:text-[2.6rem] leading-[1.35]">{s("ch5Quote")}</blockquote>
        </div>
      </Scene>

      {/* 06 gold: three beats in three ruled columns */}
      <Scene className={`${SECTION} ${TONES.gold.bg}`}>
        <div className="max-w-7xl mx-auto">
          <CardHead n={6} title={s("ch6Title")} tone="gold" size="text-4xl md:text-6xl lg:text-7xl" className="mb-14 md:mb-20 max-w-4xl" />
          <div data-stagger className="grid md:grid-cols-3 gap-10 md:gap-12">
            {["ch6Text1", "ch6Text2", "ch6Text3"].map((k) => (
              <div key={k} className="border-t border-[var(--color-brand-black)]/25 pt-8">
                <p className={`${BODY} ${TONES.gold.fg}`}>{s(k)}</p>
              </div>
            ))}
          </div>
        </div>
      </Scene>

      {/* 07 dark: the travelers' question in pink script */}
      <Scene className={`${SECTION} md:py-40 ${TONES.dark.bg}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <CardHead n={7} title={s("ch7Title")} tone="dark" className="mb-10" />
            <p data-reveal className={`${BODY} ${TONES.dark.muted}`}>{s("ch7Text1")}</p>
          </div>
          <div className="md:pt-8">
            <p data-reveal className={`${EYEBROW} text-white/60`}>{language === "es" ? "Pregunta Típica" : "Typical Question"}</p>
            <blockquote data-reveal className="font-script-readable text-[var(--color-brand-pink)] text-3xl md:text-[2.5rem] leading-[1.35] mt-6">{s("ch7Dialog")}</blockquote>
            <span data-reveal className="block my-10 h-px w-16 bg-[var(--color-brand-pink)]" />
            <p data-reveal className={`${BODY} ${TONES.dark.muted}`}>{s("ch7Text2")}</p>
          </div>
        </div>
      </Scene>

      {/* GALLERY: a cream TitleCard header, then the photos run edge to edge */}
      <Scene className={`py-24 md:py-32 ${TONES.cream.bg}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-10 md:gap-24 items-end mb-14 md:mb-20">
          <div>
            <p data-reveal className={`${EYEBROW} ${TONES.cream.muted}`}>{s("galleryTag")}</p>
            <h2 data-lines className={`${TITLE} text-5xl md:text-7xl mt-5`}>{galleryLead}</h2>
            {galleryAccent && <p data-reveal className="font-script text-[#E01E79] text-5xl md:text-7xl leading-tight mt-1">{galleryAccent}</p>}
          </div>
          <div data-reveal>
            <span className="block h-px w-16 md:w-24 bg-[var(--color-brand-gold)] mb-6" />
            <p className={`${BODY} ${TONES.cream.muted}`}>{s("gallerySubtitle")}</p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 gallery-marquee-track w-max">
            {[...galleryPhotos, ...galleryPhotos].map((photo, idx) => (
              <div
                key={`${photo.src}-${idx}`}
                className="shrink-0 relative overflow-hidden bg-[var(--color-brand-gold-light)] aspect-[4/5] w-[calc(100vw-5rem)] sm:w-[calc((100vw-4rem)/2)] md:w-[calc((100vw-10rem)/3)] xl:w-[340px]"
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

      {/* 08 pink: the payoff, closing on the KT. VELASQUEZ line as a pink lower third */}
      <Scene className={`${SECTION} md:py-40 ${TONES.pink.bg}`}>
        <div className="max-w-7xl mx-auto">
          <CardHead n={8} title={s("ch8Title")} tone="pink" size="text-5xl md:text-7xl lg:text-8xl" className="mb-14 md:mb-20" />
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            <p data-reveal className={`${BODY} md:text-xl font-medium ${TONES.pink.fg}`}>{s("ch8Text1")}</p>
            <div>
              <p data-reveal className={`${BODY} ${TONES.pink.muted} mb-12`}>{s("ch8Text2")}</p>
              <div data-reveal><LowerThird tone="pink" name={s("ch8Text3")} /></div>
            </div>
          </div>
        </div>
      </Scene>

      {/* CALL TO ACTION: the dark EndCard (logo, pink rule, script, then the invitation) */}
      <Scene className={`${SECTION} md:py-40 ${TONES.dark.bg}`}>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <Image data-reveal src="/images/KT_White_Logo.webp" alt="KT. Velasquez" width={322} height={267} className="h-16 md:h-20 w-auto" />
          <span data-reveal className="block mt-8 h-px w-16 bg-[var(--color-brand-pink)]" />
          <h2 data-reveal className="font-script text-[var(--color-brand-pink)] text-6xl md:text-8xl leading-tight mt-8">{s("ctaTitle")}</h2>
          <p data-reveal className={`${BODY} ${TONES.dark.muted} mt-10`}>{s("ctaText1")}</p>
          <p data-reveal className={`${BODY} text-white mt-6`}>{s("ctaText2")}</p>
          <div data-reveal className="mt-12"><KtCta href={WHATSAPP} tone="pink">{s("ctaButton")}</KtCta></div>
        </div>
      </Scene>

      <Footer />
    </div>
  );
}
