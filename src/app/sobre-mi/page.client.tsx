"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Scene } from "@/components/home/scene";
import { KtCta, KtStar } from "@/components/home/scrub";
import { useLanguage } from "@/context/language-context";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20le%C3%AD%20tu%20historia%20en%20sobre-mi%20y%20me%20encantar%C3%ADa%20que%20nos%20tomemos%20un%20caf%C3%A9%20para%20hablar%20de%20negocios%20%3A%29";

/*
 * Follows the KT360 Manual de marca v1.3: titles in Inter uppercase 400, script for 1 to 3 words,
 * a 3px bar before every label, a 64px rule, the gold star, and the photo frame (32px corners with a
 * thin outline offset down-right). Each background keeps its colour role and its own text rules:
 * purple = before, gold = builds, black = holds, magenta = breaks, pink = recovers, white = structure.
 */
type Bg = "white" | "black" | "pink" | "gold" | "purple" | "magenta";
const BG: Record<Bg, { cls: string; sub: string; bar: string; rule: string; star: string; line: string }> = {
  white: { cls: "bg-white text-[var(--color-brand-black)]", sub: "text-[var(--color-brand-black)]/75", bar: "bg-[var(--color-brand-pink)]", rule: "bg-[var(--color-brand-gold)]", star: "text-[var(--color-brand-gold)]", line: "border-[var(--color-brand-black)]" },
  black: { cls: "bg-[var(--color-brand-black)] text-white", sub: "text-white/65", bar: "bg-[var(--color-brand-pink)]", rule: "bg-[var(--color-brand-gold)]", star: "text-[var(--color-brand-gold)]", line: "border-white" },
  pink: { cls: "bg-[var(--color-brand-pink)] text-[var(--color-brand-black)]", sub: "text-[var(--color-brand-black)]", bar: "bg-[var(--color-brand-black)]", rule: "bg-[var(--color-brand-black)]", star: "text-[var(--color-brand-black)]", line: "border-[var(--color-brand-black)]" },
  gold: { cls: "bg-[var(--color-brand-gold)] text-[var(--color-brand-black)]", sub: "text-[var(--color-brand-black)]", bar: "bg-[var(--color-brand-black)]", rule: "bg-[var(--color-brand-black)]", star: "text-[var(--color-brand-black)]", line: "border-[var(--color-brand-black)]" },
  purple: { cls: "bg-[var(--color-brand-purple)] text-white", sub: "text-white", bar: "bg-white", rule: "bg-white", star: "text-[var(--color-brand-gold)]", line: "border-white" },
  magenta: { cls: "bg-[#E01E79] text-white", sub: "text-white", bar: "bg-white", rule: "bg-white", star: "text-white", line: "border-white" },
};

const TITLE = "uppercase font-normal tracking-[-0.02em] leading-[0.95] [text-wrap:balance]";
const BODY = "text-base md:text-[17px] leading-[1.7]";
const SECTION = "py-24 md:py-36 px-6 md:px-16";

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

/** Splits a title so its last word can take the script accent. */
function splitLast(title: string) {
  const cut = title.lastIndexOf(" ");
  return cut === -1 ? [title, ""] : [title.slice(0, cut), title.slice(cut + 1)];
}

/** Label: 11px uppercase with the 3px bar in front. */
function Label({ children, bg, className = "" }: { children: ReactNode; bg: Bg; className?: string }) {
  return (
    <p data-reveal className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] ${className}`}>
      <span aria-hidden="true" className={`w-[3px] h-[1.6em] rounded-sm ${BG[bg].bar}`} />
      {children}
    </p>
  );
}

const Rule = ({ bg, className = "" }: { bg: Bg; className?: string }) => <span data-reveal className={`block w-16 h-px ${BG[bg].rule} ${className}`} />;

/** The KT photo frame: 32px corners, a thin outline offset down and to the right. */
function KFrame({ src, alt, bg, pos = "center", className = "" }: { src: string; alt: string; bg: Bg; pos?: string; className?: string }) {
  return (
    <div data-reveal className={`relative mr-7 mb-7 ${className}`}>
      <div aria-hidden="true" className={`absolute inset-0 translate-x-7 translate-y-7 rounded-[32px] border opacity-60 ${BG[bg].line}`} />
      <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-[0_24px_60px_-28px_rgba(26,26,26,0.45)]">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 85vw, 440px" className="object-cover" style={{ objectPosition: pos }} />
      </div>
    </div>
  );
}

/** The four-point star, turning slowly. */
const Star = ({ bg, className = "" }: { bg: Bg; className?: string }) => (
  <KtStar className={`kt-turn ${BG[bg].star} ${className}`} />
);

export default function AboutPageClient() {
  const { language, t } = useLanguage();
  const s = (k: string) => t(`aboutPage.${k}`) as string;
  const [galleryLead, galleryAccent] = splitLast(s("galleryTitle"));
  const [ctaLead, ctaAccent] = splitLast(s("ctaTitle"));

  // The statement block: a 1 to 2 word script lead, the rest in capitals, the last words in gold.
  const quote = s("ch5Quote").replace(/[“”"]/g, "").trim();
  const comma = quote.indexOf(",");
  const lead = comma > 0 && quote.slice(0, comma).split(" ").length <= 2 ? quote.slice(0, comma + 1) : "";
  const main = (lead ? quote.slice(comma + 1) : quote).trim();
  const words = main.split(" ");
  const mainHead = words.slice(0, -3).join(" ");
  const mainGold = words.slice(-3).join(" ");

  // The site-wide --font-body token resolves on :root, before next/font defines --font-inter on body,
  // so it falls back to system sans. Inter is set on this page's wrapper, where the variable exists.
  return (
    <div className="min-h-screen bg-white text-[var(--color-brand-black)] overflow-x-hidden" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      <Navbar />

      {/* HERO: full-screen photo, the name huge in white, script in gold, the star turning, a black label */}
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
        <Star bg="black" className="absolute right-8 md:right-16 top-28 md:top-32 w-12 md:w-16 z-10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pt-[52svh] pb-16 md:pt-40 md:pb-24">
          <h1 data-lines className={`${TITLE} text-[4.2rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.82] tracking-[-0.03em] text-white`}>{s("heroTitlePart1")}</h1>
          <p data-reveal className="font-script text-[var(--color-brand-gold)] text-[2.6rem] md:text-6xl lg:text-7xl leading-none mt-2 md:-mt-2 md:ml-24">{s("heroTitlePart2")}</p>
          <p data-reveal className="mt-8 inline-block bg-[var(--color-brand-pink)] text-[var(--color-brand-black)] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em]">{s("heroTag")}</p>
          <p data-reveal className="text-white text-base md:text-lg leading-relaxed mt-5 max-w-md [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">{s("heroSubtitle")}</p>
        </div>
      </Scene>

      {/* 01 purple, what came before: white type only, few words, lots of air */}
      <Scene className={`${SECTION} md:py-44 ${BG.purple.cls}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-12 md:gap-24 items-end">
          <div>
            <Label bg="purple">01</Label>
            <h2 data-lines className={`${TITLE} text-[8.5vw] sm:text-5xl md:text-7xl mt-8`}>{s("ch1Title")}</h2>
          </div>
          <p data-reveal className={`${BODY} md:text-lg ${BG.purple.sub}`}>{s("ch1Text")}</p>
        </div>
      </Scene>

      {/* 02 gold, building: all black, black rule */}
      <Scene className={`${SECTION} ${BG.gold.cls}`}>
        <div className="max-w-6xl mx-auto">
          <Label bg="gold">02</Label>
          <h2 data-lines className={`${TITLE} text-[8.5vw] sm:text-5xl md:text-7xl lg:text-8xl mt-8 max-w-4xl`}>{s("ch2Title")}</h2>
          <Rule bg="gold" className="mt-10 mb-12 md:mb-16" />
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <p data-reveal className={`${BODY} ${BG.gold.sub}`}>{s("ch2Text1")}</p>
            <p data-reveal className={`${BODY} ${BG.gold.sub} border-l-[3px] border-[var(--color-brand-black)] pl-5 self-start`}>{s("ch2Text2")}</p>
          </div>
        </div>
      </Scene>

      {/* 03 black holds the story, then magenta breaks with one short line */}
      <Scene className={`${SECTION} ${BG.black.cls}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-12 md:gap-24">
          <div>
            <Label bg="black">03</Label>
            <h2 data-lines className={`${TITLE} text-[8.5vw] sm:text-5xl md:text-7xl mt-8`}>{s("ch3Title")}</h2>
            <Rule bg="black" className="mt-10" />
          </div>
          <p data-reveal className={`${BODY} ${BG.black.sub} md:pt-14`}>{s("ch3Text")}</p>
        </div>
      </Scene>
      <Scene className={`py-28 md:py-44 px-6 md:px-16 ${BG.magenta.cls}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <Star bg="magenta" className="w-14 md:w-24 shrink-0" />
          <p data-lines className={`${TITLE} text-[8.5vw] sm:text-5xl md:text-7xl lg:text-[6.5rem]`}>{s("ch3Callout")}</p>
        </div>
      </Scene>

      {/* 04 pink recovers: everything black, framed studio photo with a black outline */}
      <Scene className={`${SECTION} ${BG.pink.cls}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-14 md:gap-24 items-center">
          <KFrame bg="pink" src="/images/KT_Studio_Seated.webp" alt="Katherine Velasquez" pos="center 40%" className="aspect-[4/5] w-full max-w-[400px]" />
          <div>
            <Label bg="pink">04</Label>
            <h2 data-lines className={`${TITLE} text-[8.5vw] sm:text-5xl md:text-7xl mt-8`}>{s("ch4Title")}</h2>
            <Rule bg="pink" className="mt-10 mb-10" />
            <p data-reveal className={`${BODY} ${BG.pink.sub}`}>{s("ch4Text")}</p>
          </div>
        </div>
      </Scene>

      {/* 05 white structure for the story, then the one statement block of the page on black */}
      <Scene className={`${SECTION} ${BG.white.cls}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-12 md:gap-24">
          <div>
            <Label bg="white">05</Label>
            <h2 data-lines className={`${TITLE} text-[8.5vw] sm:text-5xl md:text-7xl mt-8`}>{s("ch5Title")}</h2>
            <Rule bg="white" className="mt-10" />
          </div>
          <p data-reveal className={`${BODY} ${BG.white.sub} md:pt-14`}>{s("ch5Text")}</p>
        </div>
      </Scene>
      <Scene className={`py-24 md:py-36 px-6 md:px-16 ${BG.black.cls}`}>
        <figure className="max-w-6xl mx-auto grid md:grid-cols-[13rem_minmax(0,1fr)] gap-10 md:gap-16 items-center">
          <Star bg="black" className="w-20 md:w-48" />
          <blockquote>
            {lead && <span data-reveal className="block font-script-readable text-[var(--color-brand-pink)] text-5xl md:text-7xl leading-none md:-ml-2">{lead}</span>}
            <span data-lines className={`block ${TITLE} text-4xl md:text-6xl lg:text-7xl mt-3`}>
              {mainHead} <span className="text-[var(--color-brand-gold)]">{mainGold}</span>
            </span>
          </blockquote>
        </figure>
      </Scene>

      {/* 06 gold builds: Mango Creative in three ruled columns */}
      <Scene className={`${SECTION} ${BG.gold.cls}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between gap-8">
            <div>
              <Label bg="gold">06</Label>
              <h2 data-lines className={`${TITLE} text-[8.5vw] sm:text-5xl md:text-7xl mt-8 max-w-4xl`}>{s("ch6Title")}</h2>
            </div>
            <Star bg="gold" className="hidden md:block w-14 shrink-0" />
          </div>
          <div data-stagger className="grid md:grid-cols-3 gap-0 mt-14 md:mt-20 border-t border-[var(--color-brand-black)]">
            {["ch6Text1", "ch6Text2", "ch6Text3"].map((k, i) => (
              <p key={k} className={`${BODY} pt-6 pb-6 md:pb-0 md:pr-8 ${i > 0 ? "md:pl-8 md:border-l border-t md:border-t-0 border-[var(--color-brand-black)]/30" : ""}`}>{s(k)}</p>
            ))}
          </div>
        </div>
      </Scene>

      {/* 07 white: a travel photo in the frame, the travelers' question as a large quote */}
      <Scene className={`${SECTION} ${BG.white.cls}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] gap-14 md:gap-24 items-center">
          <div>
            <Label bg="white">07</Label>
            <h2 data-lines className={`${TITLE} text-[8.5vw] sm:text-5xl md:text-7xl mt-8`}>{s("ch7Title")}</h2>
            <Rule bg="white" className="mt-10 mb-10" />
            <p data-reveal className={`${BODY} ${BG.white.sub}`}>{s("ch7Text1")}</p>
            <figure data-reveal className="mt-12">
              <Label bg="white">{language === "es" ? "Pregunta Típica" : "Typical Question"}</Label>
              <blockquote className="text-2xl md:text-[2rem] leading-[1.25] tracking-[-0.01em] mt-5 [text-wrap:balance]">{s("ch7Dialog")}</blockquote>
            </figure>
            <p data-reveal className={`${BODY} ${BG.white.sub} mt-12`}>{s("ch7Text2")}</p>
          </div>
          <KFrame bg="white" src="/images/gallery/KT_Gallery_07.webp" alt="Katherine Velasquez caminando frente al Templo Blanco de Chiang Rai, Tailandia" className="aspect-[4/5] w-full max-w-[400px] md:sticky md:top-32" />
        </div>
      </Scene>

      {/* GALLERY on black: travel photos run edge to edge */}
      <Scene className={`py-24 md:py-32 ${BG.black.cls}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-16 grid md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] gap-10 md:gap-24 items-end mb-14 md:mb-20">
          <div>
            <Label bg="black">{s("galleryTag")}</Label>
            <h2 data-lines className={`${TITLE} text-[8.5vw] sm:text-5xl md:text-7xl mt-8`}>{galleryLead}</h2>
            {galleryAccent && <p data-reveal className="font-script text-[var(--color-brand-pink)] text-6xl md:text-8xl leading-none mt-1">{galleryAccent}</p>}
          </div>
          <div>
            <Rule bg="black" className="mb-6" />
            <p data-reveal className={`${BODY} ${BG.black.sub}`}>{s("gallerySubtitle")}</p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-3 gallery-marquee-track w-max">
            {[...galleryPhotos, ...galleryPhotos].map((photo, idx) => (
              <div
                key={`${photo.src}-${idx}`}
                className="shrink-0 relative overflow-hidden rounded-xl bg-white/5 aspect-[4/5] w-[calc(100vw-5rem)] sm:w-[calc((100vw-4rem)/2)] md:w-[calc((100vw-10rem)/3)] xl:w-[320px]"
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

      {/* 08 gold builds: the payoff, ending on a black label */}
      <Scene className={`${SECTION} md:py-44 ${BG.gold.cls}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between gap-8">
            <div>
              <Label bg="gold">08</Label>
              <h2 data-lines className={`${TITLE} text-[8.5vw] sm:text-5xl md:text-8xl lg:text-[7rem] mt-8`}>{s("ch8Title")}</h2>
            </div>
            <Star bg="gold" className="w-12 md:w-20 shrink-0" />
          </div>
          <Rule bg="gold" className="mt-10 mb-12" />
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <p data-reveal className="text-xl md:text-2xl leading-[1.45] font-medium">{s("ch8Text1")}</p>
            <div>
              <p data-reveal className={`${BODY} ${BG.gold.sub} mb-10`}>{s("ch8Text2")}</p>
              <p data-reveal className="inline-block bg-[var(--color-brand-black)] text-white px-5 py-3 text-sm md:text-base font-bold uppercase tracking-[0.2em]">{s("ch8Text3")}</p>
            </div>
          </div>
        </div>
      </Scene>

      {/* CALL TO ACTION on pink: all black, black star, black button, no logo */}
      <Scene className={`${SECTION} md:py-40 ${BG.pink.cls}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-12 md:gap-24 items-center">
          <div>
            <Star bg="pink" className="w-12 md:w-16 mb-10" />
            <h2 data-lines className={`${TITLE} text-[13vw] sm:text-6xl md:text-8xl`}>{ctaLead}</h2>
            {ctaAccent && <p data-reveal className="font-script text-[var(--color-brand-black)] text-6xl md:text-8xl leading-none mt-1 md:ml-16">{ctaAccent}</p>}
          </div>
          <div>
            <p data-reveal className={`${BODY} ${BG.pink.sub}`}>{s("ctaText1")}</p>
            <p data-reveal className={`${BODY} ${BG.pink.sub} mt-6 border-l-[3px] border-[var(--color-brand-black)] pl-5`}>{s("ctaText2")}</p>
            <div data-reveal className="mt-10"><KtCta href={WHATSAPP}>{s("ctaButton")}</KtCta></div>
          </div>
        </div>
      </Scene>

      <Footer />
    </div>
  );
}
