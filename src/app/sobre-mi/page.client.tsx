"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Scene } from "@/components/home/scene";
import { KtCta, KtStar } from "@/components/home/scrub";
import { useLanguage } from "@/context/language-context";

const WHATSAPP = "https://wa.me/573216154870?text=Hola%20Kathe%2C%20le%C3%AD%20tu%20historia%20en%20sobre-mi%20y%20me%20encantar%C3%ADa%20que%20nos%20tomemos%20un%20caf%C3%A9%20para%20hablar%20de%20negocios%20%3A%29";

/* Kit colour roles for the story: gold builds, purple was before, magenta (#E01E79) breaks,
   pink recovers, white structures, black holds. */
const INK = "text-[var(--color-brand-black)]";
const BODY = "font-body text-base md:text-lg leading-[1.75]";
const SCRIPT = "font-script normal-case tracking-normal leading-[1.1]";

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

/** Splits a title so its last word can take the script font, like the home section titles. */
function splitLast(title: string) {
  const cut = title.lastIndexOf(" ");
  return cut === -1 ? [title, ""] : [title.slice(0, cut), title.slice(cut + 1)];
}

/** The chapter number as a big outlined figure, the way the reels number their beats. */
function Num({ n, className = "" }: { n: number; className?: string }) {
  return (
    <span aria-hidden="true" className={`block font-heading leading-[0.8] select-none text-[7rem] md:text-[11rem] lg:text-[13rem] ${className}`}>
      {String(n).padStart(2, "0")}
    </span>
  );
}

export default function AboutPageClient() {
  const { language, t } = useLanguage();
  const s = (k: string) => t(`aboutPage.${k}`) as string;
  const [galleryLead, galleryAccent] = splitLast(s("galleryTitle"));
  const [ctaLead, ctaAccent] = splitLast(s("ctaTitle"));

  return (
    <div className={`min-h-screen bg-white ${INK} overflow-x-hidden`}>
      <Navbar />

      {/* HERO: full-screen portrait, title over the dark side, the name in script */}
      <Scene className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden bg-[var(--color-brand-black)] text-white">
        <div data-mask className="absolute inset-0 md:left-auto md:w-[64%]">
          <div data-mask-img className="absolute inset-0">
            <Image
              src="/images/KT_About_Hero.webp"
              alt="Katherine Velasquez — Estratega 360 e Ingeniera Civil"
              fill
              sizes="(max-width: 768px) 100vw, 64vw"
              quality={90}
              className="object-cover object-[center_18%]"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-black)] via-[var(--color-brand-black)]/40 to-transparent md:bg-gradient-to-r md:from-[var(--color-brand-black)] md:via-[var(--color-brand-black)]/10 md:to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pt-[52svh] pb-14 md:py-32">
          <div className="max-w-2xl text-center md:text-left">
            <p data-reveal className="kt-eyebrow on-dark text-white mb-6 md:mb-8">{s("heroTag")}</p>
            <h1 data-lines className="kt-title text-5xl md:text-7xl lg:text-[6.5rem] text-white">
              {s("heroTitlePart1")}
              <span className={`block ${SCRIPT} text-[var(--color-brand-pink)] text-[0.44em] mt-4`}>{s("heroTitlePart2")}</span>
            </h1>
            <p data-reveal className="mt-8 font-heading italic text-xl md:text-2xl leading-snug text-white/90 max-w-md mx-auto md:mx-0">{s("heroSubtitle")}</p>
          </div>
        </div>
      </Scene>

      {/* 01 RAÍCES: gold builds. Big number left, story right */}
      <Scene className="py-24 md:py-36 px-6 md:px-16 bg-[var(--color-brand-gold)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-20 items-end">
          <div data-reveal>
            <Num n={1} className={INK} />
            <h2 className={`kt-title text-4xl md:text-6xl mt-4 ${INK}`}>{s("ch1Title")}</h2>
          </div>
          <p data-reveal className={`${BODY} md:text-xl ${INK}`}>{s("ch1Text")}</p>
        </div>
      </Scene>

      {/* 02 LA MARATÓN: white structures. Title across the top, two columns of text */}
      <Scene className="py-24 md:py-36 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end gap-6 md:gap-10 mb-12 md:mb-16 border-b-[1.5px] border-[var(--color-brand-black)] pb-8">
            <Num n={2} className="text-[var(--color-brand-gold)]" />
            <h2 data-lines className={`kt-title text-4xl md:text-6xl lg:text-7xl ${INK}`}>{s("ch2Title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <p data-reveal className={`${BODY} ${INK}`}>{s("ch2Text1")}</p>
            <p data-reveal className={`${BODY} ${INK} self-start border-t-[6px] border-[var(--color-brand-gold)] pt-6`}>{s("ch2Text2")}</p>
          </div>
        </div>
      </Scene>

      {/* 03 EL CHOQUE: magenta breaks. The crash, then the callout as the loudest line on the page */}
      <Scene className="py-24 md:py-40 px-6 md:px-16 bg-[#E01E79] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-20 items-start mb-16 md:mb-24">
            <div data-reveal>
              <Num n={3} className="text-white/35" />
              <h2 className="kt-title text-4xl md:text-6xl mt-4 text-white">{s("ch3Title")}</h2>
            </div>
            <p data-reveal className={`${BODY} text-white md:pt-10`}>{s("ch3Text")}</p>
          </div>
          <p data-lines className="kt-title text-center text-5xl md:text-7xl lg:text-[6.5rem] text-white max-w-5xl mx-auto">
            &ldquo;{s("ch3Callout")}&rdquo;
          </p>
        </div>
      </Scene>

      {/* 04 RESILIENCIA: pink recovers. Photo beside the text */}
      <Scene className="py-24 md:py-36 px-6 md:px-16 bg-[var(--color-brand-pink)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 md:gap-20 items-center">
          <div data-mask className="relative aspect-[4/5] rounded-[28px] overflow-hidden kt-card w-full max-w-[420px] mx-auto order-2 md:order-1">
            <div data-mask-img className="absolute inset-0">
              <Image src="/images/KTSecondPhoto.webp" alt="Katherine Velasquez" fill sizes="(max-width: 768px) 90vw, 420px" className="object-cover object-[center_35%]" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Num n={4} className={`${INK} opacity-25`} />
            <h2 data-lines className={`kt-title text-4xl md:text-6xl mt-4 mb-8 ${INK}`}>{s("ch4Title")}</h2>
            <p data-reveal className={`${BODY} md:text-xl ${INK}`}>{s("ch4Text")}</p>
          </div>
        </div>
      </Scene>

      {/* 05 EMIGRAR: purple, the life left behind. The quote takes the stage */}
      <Scene className="py-24 md:py-36 px-6 md:px-16 bg-[var(--color-brand-purple)] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 md:gap-20 items-center">
          <div>
            <Num n={5} className="text-white/30 mb-6" />
            <h2 data-lines className="kt-title text-4xl md:text-6xl mb-8 text-white">{s("ch5Title")}</h2>
            <p data-reveal className={`${BODY} text-white`}>{s("ch5Text")}</p>
          </div>
          <blockquote data-reveal className="relative">
            <KtStar className="statement-star w-10 h-10 md:w-14 md:h-14 mb-6 text-[var(--color-brand-gold)]" />
            <p className="font-heading italic text-3xl md:text-[2.6rem] leading-[1.2] text-white">{s("ch5Quote")}</p>
          </blockquote>
        </div>
      </Scene>

      {/* 06 CHOCOAVENTURAS: white structures. Three beats as three cards */}
      <Scene className="py-24 md:py-36 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[auto_minmax(0,1fr)] gap-6 md:gap-12 items-end mb-12 md:mb-16">
            <Num n={6} className="text-[var(--color-brand-pink)]" />
            <h2 data-lines className={`kt-title text-4xl md:text-6xl lg:text-7xl ${INK}`}>{s("ch6Title")}</h2>
          </div>
          <ol data-stagger className="grid md:grid-cols-3 border-t-[1.5px] border-[var(--color-brand-black)]">
            {["ch6Text1", "ch6Text2", "ch6Text3"].map((k, i) => (
              <li key={k} className={`pt-8 pb-4 md:pt-10 md:px-8 first:md:pl-0 last:md:pr-0 ${i > 0 ? "border-t md:border-t-0 md:border-l border-[var(--color-brand-black)]/15" : ""}`}>
                <span aria-hidden="true" className="block font-heading text-5xl leading-none text-[var(--color-brand-pink)] mb-6">{["a", "b", "c"][i]}.</span>
                <p className={`${BODY} ${INK}`}>{s(k)}</p>
              </li>
            ))}
          </ol>
        </div>
      </Scene>

      {/* 07 LA PREGUNTA: black holds. A chat exchange: the question in a pink bubble */}
      <Scene className="py-24 md:py-36 px-6 md:px-16 bg-[var(--color-brand-black)] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <Num n={7} className="text-[var(--color-brand-gold)]" />
            <h2 data-lines className="kt-title text-4xl md:text-6xl mt-4 mb-8 text-white">{s("ch7Title")}</h2>
            <p data-reveal className={`${BODY} text-white/85`}>{s("ch7Text1")}</p>
          </div>
          <div className="space-y-10">
            <figure data-reveal>
              <figcaption className="kt-eyebrow on-dark text-white mb-6">{language === "es" ? "Pregunta Típica" : "Typical Question"}</figcaption>
              <blockquote className="font-heading italic text-3xl md:text-[2.5rem] leading-[1.2] text-[var(--color-brand-gold)]">{s("ch7Dialog")}</blockquote>
            </figure>
            <p data-reveal className={`${BODY} text-white/85`}>{s("ch7Text2")}</p>
          </div>
        </div>
      </Scene>

      {/* GALLERY: white, the photos run edge to edge */}
      <Scene className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-16 grid md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-8 md:gap-16 items-end mb-12 md:mb-16">
          <div>
            <p className="kt-eyebrow mb-6">{s("galleryTag")}</p>
            <h2 data-lines className={`kt-title text-4xl md:text-6xl lg:text-7xl ${INK}`}>
              {galleryLead}
              {galleryAccent && <span className={`block ${SCRIPT} text-[0.8em] mt-1`}>{galleryAccent}</span>}
            </h2>
          </div>
          <div data-reveal>
            <span className="kt-rule mb-5" />
            <p className={`${BODY} ${INK}`}>{s("gallerySubtitle")}</p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden pt-4 pb-12">
          <div className="flex gap-5 gallery-marquee-track w-max">
            {[...galleryPhotos, ...galleryPhotos].map((photo, idx) => (
              <div
                key={`${photo.src}-${idx}`}
                className={`shrink-0 relative rounded-[28px] overflow-hidden bg-[var(--color-brand-pink-light)] aspect-[4/5] w-[calc(100vw-5rem)] sm:w-[calc((100vw-4rem)/2)] md:w-[calc((100vw-10rem)/3)] xl:w-[320px] ${idx % 2 ? "md:translate-y-8" : ""}`}
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

      {/* 08 NACE ESTRATEGIA 360: gold builds. The payoff, closing on the KT. VELASQUEZ line */}
      <Scene className="relative overflow-hidden py-24 md:py-40 px-6 md:px-16 bg-[var(--color-brand-gold)]">
        <svg className="kt-turn absolute right-[-30%] md:right-[-12%] top-1/2 w-[120vw] md:w-[52rem] max-w-none opacity-50 pointer-events-none" viewBox="0 0 400 400" aria-hidden="true" style={{ translate: "0 -50%" }}>
          <circle cx="200" cy="200" r="190" fill="none" stroke="var(--color-brand-black)" strokeOpacity="0.3" strokeWidth="0.6" strokeDasharray="2 7" />
          <circle cx="200" cy="10" r="4" fill="var(--color-brand-black)" />
        </svg>
        <div className="relative max-w-6xl mx-auto">
          <Num n={8} className={`${INK} opacity-25`} />
          <h2 data-lines className={`kt-title text-5xl md:text-7xl lg:text-[6rem] mt-4 mb-12 max-w-4xl ${INK}`}>{s("ch8Title")}</h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
            <p data-reveal className={`font-heading italic text-2xl md:text-[1.9rem] leading-[1.3] ${INK}`}>{s("ch8Text1")}</p>
            <div data-reveal>
              <p className={`${BODY} ${INK} mb-10`}>{s("ch8Text2")}</p>
              <p className={`kt-title text-3xl md:text-4xl border-t-[6px] border-[var(--color-brand-black)] pt-5 inline-block ${INK}`}>{s("ch8Text3")}</p>
            </div>
          </div>
        </div>
      </Scene>

      {/* CALL TO ACTION: pink, like the home close */}
      <Scene className="relative overflow-hidden py-24 md:py-40 px-6 md:px-16 bg-[var(--color-brand-pink)]">
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-10 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <KtStar className="statement-star w-12 h-12 md:w-16 md:h-16 mb-8 mx-auto md:mx-0 text-[var(--color-brand-black)]" />
            <h2 data-lines className={`kt-title text-6xl md:text-6xl lg:text-[5rem] ${INK}`}>
              {ctaLead}
              {ctaAccent && <span className={`block ${SCRIPT} text-[0.85em] mt-1`}>{ctaAccent}</span>}
            </h2>
          </div>
          <div data-reveal className="space-y-7">
            <p className={`${BODY} md:text-xl ${INK}`}>{s("ctaText1")}</p>
            <p className={`font-heading italic text-xl md:text-2xl leading-[1.45] ${INK}`}>{s("ctaText2")}</p>
            <div className="pt-2"><KtCta href={WHATSAPP}>{s("ctaButton")}</KtCta></div>
          </div>
        </div>
      </Scene>

      <Footer />
    </div>
  );
}
