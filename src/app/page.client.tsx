"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { FloatingIcons, FloatingAccents } from "@/components/floating-icons";
import { ScrollReveal } from "@/components/scroll-reveal";
import FaqAccordion from "@/components/faq-accordion";
import Image from "next/image";
import { Web3Form } from "@/components/web3-form";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

export default function PageClient() {
  const { language, t } = useLanguage();

  const testimonials = [
    {
      text: "I had an excellent experience working with Katherine on design and marketing. I highly recommend her for her creativity and flexibility.",
      name: "Hilit Hochman",
      role: "Marketing VP, BioChange"
    },
    {
      text: language === "es"
        ? "Trabajar con Katherine ha sido una experiencia absolutamente increíble. Su metodología, sus estrategias y su mentalidad empresarial son de otro nivel. Gracias a su dirección estratégica, nos ha ayudado a escalar y superar los $250,000 en ventas. Si de verdad hablas en serio sobre hacer crecer tu negocio, Katherine es la estratega que necesitas a tu lado."
        : "Working with Katherine has been an absolutely incredible experience. Her methodology, strategies, and business mindset are on another level. Thanks to her strategic direction, she helped us scale and surpass $250,000 in sales. If you are truly serious about growing your business, Katherine is the strategist you need by your side.",
      name: "Pnina Shichor",
      role: language === "es" ? "Fundadora, Bound to Travel" : "Founder, Bound to Travel"
    },
    {
      text: language === "es"
        ? "Ha sido una experiencia muy linda y enriquecedora. Desde el primer momento he sentido un acompañamiento muy personalizado, siempre con atención, paciencia y compromiso. Es una persona muy dedicada, apasionada por lo que hace y realmente se preocupa por brindar lo mejor en cada detalle. Me he sentido escuchada, apoyada y muy satisfecha con todo el proceso. Sin duda, recomiendo totalmente su trabajo por la calidad humana y profesional que transmite."
        : "It has been a beautiful and enriching experience. From day one, I felt a highly personalized level of guidance, always delivered with care, patience, and commitment. She is incredibly dedicated, passionate about her work, and truly cares about delivering excellence in every detail. I felt heard, supported, and fully satisfied with the entire process. I highly recommend her for both her human warmth and her professional caliber.",
      name: "Yulieth Mattos",
      role: language === "es" ? "Emprendedora" : "Entrepreneur"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)]">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-start pt-32 pb-6 md:justify-center md:pt-24 md:pb-0 overflow-hidden bg-white">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image src="/images/KT_Hero.webp" alt="Katherine Velasquez Background" fill sizes="100vw" className="object-cover object-[82%_40%] md:object-[75%_center]" priority />
          {/* Mobile dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent md:hidden" />
        </div>

        {/* max-w-[1400px] instead of max-w-7xl to push text further left */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center flex-1 md:flex-none">
          <div className="flex flex-col text-center md:text-left z-20 h-full md:h-auto justify-between md:justify-center md:gap-6">

            {/* Top Text Group */}
            <p className="font-heading text-2xl md:text-3xl text-[var(--color-brand-cream)] mb-2 md:mb-0">
              <span className="italic">{t("hero.consultoria")}</span>
            </p>

            {/* Bottom Text Group - pushed down on mobile */}
            <div className="flex flex-col gap-6 mt-auto md:mt-0 pt-16 md:pt-0 md:pb-0">
              
              <h1 className="order-1 font-heading text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-[var(--color-brand-cream)] mt-4 md:mt-0">
                <span className="block">{t("hero.katherine")}</span>
                <span className="block">{t("hero.velasquez")}</span>
                <span className="sr-only">— {t("hero.h1_keyword")}</span>
              </h1>

              {/* Hidden on mobile, shown on desktop */}
              <div className="order-3 md:order-2 font-script-readable text-2xl md:text-[2.25rem] lg:text-[2.75rem] text-[var(--color-brand-gold)] max-w-[500px] leading-tight text-center md:text-left mx-auto md:mx-0 md:-ml-2 mt-2 md:mt-4 hidden md:block">
                {t("hero.direccion")}
              </div>

              <div className="order-4 md:order-3 flex justify-center md:justify-start max-w-[480px] mx-auto md:mx-0">
                <p className="font-body text-[var(--color-brand-cream)] text-sm font-medium leading-relaxed text-center md:text-left">
                  {t("hero.description")}
                </p>
              </div>
              
              <div className="order-2 md:order-4 flex justify-center md:justify-start max-w-[480px] mx-auto md:mx-0">
                <a href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-gold-light)] transition-colors shadow-none cursor-pointer text-center inline-block">
                  {t("hero.cta")}
                </a>
              </div>

            </div>

          </div>
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* SCRIPT BANNER */}
      <section className="py-32 px-6 md:px-16 bg-[var(--color-brand-pink)] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-tight text-[var(--color-brand-black)]">
            <span className="font-script text-7xl md:text-8xl lg:text-[8rem] block -mb-8 md:-mb-12 text-[var(--color-brand-black)]">{t("banner.para_quienes")}</span>
            {language === "es" ? (
              <>
                están construyendo<br />
                algo <span className="italic font-bold">real.</span>
              </>
            ) : (
              <>
                building something<br />
                <span className="italic font-bold">real.</span>
              </>
            )}
          </h2>
          <p className="font-body text-[var(--color-brand-black)] mt-12 text-sm md:text-base font-medium max-w-2xl mx-auto">
            {t("banner.desc")}
          </p>
        </div>
      </section>

      <Marquee />

      {/* CLIENT LOGOS */}
      <section className="py-24 px-6 md:px-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-12 md:gap-20">
          <p className="text-base font-black uppercase tracking-[0.3em] text-[var(--color-brand-black)] shrink-0 hidden md:block">{t("logos.trust")}</p>
          <div className="w-[1px] h-16 bg-gray-200 hidden md:block" />
          {[
            { src: "/images/BioChange_logo.png", alt: "BioChange", href: "https://biochange.life/" },
            { src: "/images/logo-roma-studio.webp", alt: "Roma Studio Creativo", href: "https://romastudiocreativo.es/" },
            { src: "/images/logo-bound-travel-updated.png", alt: "Bound To Travel", href: "https://www.boundtotravel.com/", scale: "scale-150" },
            { src: "/images/logo-aev.png", alt: "AevArk", href: "https://www.aevark.com/", scale: "scale-110" },
            { src: "/images/logo-lightu-v2.png", alt: "Light U", href: "https://www.lightu.es/" },
          ].map((logo) => (
            <a key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer" className="block hover:-translate-y-1 transition-transform">
              <Image src={logo.src} alt={logo.alt} width={240} height={120} className={`object-contain grayscale opacity-40 hover:opacity-90 hover:grayscale-0 transition-all h-28 w-auto ${logo.scale || ""}`} />
            </a>
          ))}
        </div>
      </section>

      {/* QUIÉN SOY */}
      <ScrollReveal>
        <section id="quien-soy" className="py-32 px-6 md:px-16 bg-[var(--color-brand-gold-light)] relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

            <div className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)]">{t("diagnostic.tag")}</p>
              
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[var(--color-brand-black)]">
                {language === "es" ? (
                  <>Tu negocio o marca está creciendo, pero te quedas preguntándote <span className="italic font-bold">¿qué sigue?</span></>
                ) : (
                  <>Your business or brand is growing, yet you're left wondering: <span className="italic font-bold">what's next?</span></>
                )}
              </h2>

              <p className="text-[var(--color-brand-black)] font-medium text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                {t("diagnostic.desc1")}
                <br /><br />
                {t("diagnostic.desc2")}
              </p>
              <div className="flex justify-center lg:justify-start mt-4">
                <a href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer text-center inline-block">
                  {t("diagnostic.cta")}
                </a>
              </div>
            </div>

            <div className="relative h-[450px] md:h-[600px] w-full p-6 lg:order-2 order-1 flex justify-center">
              {/* Thin gold border frame behind photo */}
              <div className="absolute inset-0 border border-[var(--color-brand-gold)] top-10 bottom-0 left-0 right-10 z-0 hidden lg:block" />

              <div className="relative w-full h-full z-10">
                <Image src="/images/KTSecondPhoto.webp" alt="Katherine Velasquez" fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover object-[center_40%] border-4 border-white shadow-soft" />
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ABOUT PREVIEW */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-pink-light)]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-6">{t("about.tag")}</p>
            <p className="font-body text-[var(--color-brand-black)] text-base md:text-lg leading-relaxed mb-10 text-left md:text-center">
              {language === "es" ? (
                <>
                  Soy Ingeniera Civil con doble maestría en Marketing y Comunicación Digital. Tras fundar mis propias empresas y asesorar proyectos en el ecosistema corporativo y de startups, entendí que un negocio no escala solo con buen marketing o mejores procesos.<br /><br />
                  El verdadero crecimiento ocurre en la intersección de tres áreas: la <span className="font-bold">estructura del negocio</span>, la <span className="font-bold">estrategia de comunicación</span> y la <span className="font-bold">mentalidad del líder</span>. A esto lo llamo mi enfoque <span className="font-script text-3xl">360.</span> Ayudo a fundadores y marcas maduras a operar con sistema, claridad y dirección.
                </>
              ) : (
                <>
                  I am a Civil Engineer with a double master's degree in Marketing and Digital Communication. Having founded my own businesses and advised startups and corporate ventures, I realized that scaling isn't just about clever marketing or optimized workflows.<br /><br />
                  True expansion happens at the intersection of three pillars: <span className="font-bold">business structure</span>, <span className="font-bold">communication strategy</span>, and <span className="font-bold">executive leadership mindset</span>. This is my <span className="font-script text-3xl">360°</span> approach. I help founders and mature brands operate with systematic clarity and strategic direction.
                </>
              )}
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* MI MÉTODO 360 */}
      <ScrollReveal>
        <section id="metodologia" className="py-32 px-6 md:px-16 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h2 className="font-heading italic text-5xl md:text-7xl leading-tight text-[var(--color-brand-black)] mb-6">
              {t("methodology.title")} <span className="not-italic font-black text-[var(--color-brand-gold)] font-script text-6xl md:text-7xl">{t("methodology.title_accent")}</span>
            </h2>
            <p className="font-body text-gray-700 font-medium text-lg md:text-xl mb-20 max-w-2xl mx-auto">
              {t("methodology.desc")}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
              {/* Pillar 1 */}
              <div>
                <p className="font-heading text-6xl text-[var(--color-brand-gold)] opacity-30 mb-4 font-black">01</p>
                <h3 className="font-heading text-2xl mb-4 italic font-bold">
                  {language === "es" ? <>Estructura de<br />Negocio</> : <>Business<br />Structure</>}
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-700">{t("methodology.p1_desc")}</p>
              </div>
              {/* Pillar 2 */}
              <div>
                <p className="font-heading text-6xl text-[var(--color-brand-gold)] opacity-30 mb-4 font-black">02</p>
                <h3 className="font-heading text-2xl mb-4 italic font-bold">
                  {language === "es" ? <>Estrategia &<br />Social Media</> : <>Strategy &<br />Social Media</>}
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-700">{t("methodology.p2_desc")}</p>
              </div>
              {/* Pillar 3 */}
              <div>
                <p className="font-heading text-6xl text-[var(--color-brand-gold)] opacity-30 mb-4 font-black">03</p>
                <h3 className="font-heading text-2xl mb-4 italic font-bold">
                  {language === "es" ? <>Mentalidad<br />Ejecutiva</> : <>Executive<br />Mindset</>}
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-700">{t("methodology.p3_desc")}</p>
              </div>
              {/* Pillar 4 */}
              <div>
                <p className="font-heading text-6xl text-[var(--color-brand-gold)] opacity-30 mb-4 font-black">04</p>
                <h3 className="font-heading text-2xl mb-4 italic font-bold">
                  {language === "es" ? <>Ejecución &<br />Medición</> : <>Execution &<br />Analytics</>}
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-700">{t("methodology.p4_desc")}</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SERVICIOS */}
      <ScrollReveal>
        <section id="servicios" className="py-32 px-6 md:px-16 bg-[var(--color-brand-gold-light)] relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-heading italic text-5xl md:text-6xl text-[var(--color-brand-black)] mb-6">{t("services.title")}</h2>
              <p className="font-body text-[var(--color-brand-black)] font-medium text-lg">{t("services.desc")}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Tier 1 - Standard */}
              <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-white mt-0 lg:mt-8 mb-0 lg:-mb-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h3 className="font-heading italic text-3xl mb-2 text-center text-[var(--color-brand-black)]">{t("services.t1_title")}</h3>
                <p className="text-center font-bold text-sm uppercase tracking-widest text-gray-500 mb-6">{t("services.t1_subtitle")}</p>
                <p className="font-body text-sm text-gray-700 mb-8 leading-relaxed text-center">
                  {t("services.t1_desc")}
                </p>
                <ul className="space-y-4 mb-10 text-xs font-medium text-gray-700">
                  {(t("services.t1_features") as string[]).map((feature, i) => {
                    const splitIndex = feature.indexOf(":");
                    return (
                      <li key={i} className="flex gap-2 items-start text-xs leading-relaxed text-gray-700 font-medium">
                        <span className="text-[var(--color-brand-gold)] font-bold shrink-0">✦</span>
                        <span>
                          {splitIndex !== -1 ? (
                            <>
                              <strong className="font-bold text-[var(--color-brand-black)]">
                                {feature.substring(0, splitIndex + 1)}
                              </strong>
                              {feature.substring(splitIndex + 1)}
                            </>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-auto pt-8 border-t border-gray-100 w-full space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2 text-center">
                    {language === "es" ? "Programas Disponibles" : "Available Programs"}
                  </p>
                  {((t("services.t1_plans") as any[]) || []).map((plan, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all p-4 rounded-2xl flex flex-col justify-between items-start md:flex-row md:items-center gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-xs font-bold text-[var(--color-brand-black)] leading-tight">
                            {plan.name}
                          </h4>
                          {plan.name.includes("Popular") && (
                            <span className="bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                              {language === "es" ? "Más Popular" : "Most Popular"}
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-gray-500 mt-1 leading-snug">
                          {plan.desc}
                        </p>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto border-t md:border-t-0 pt-2 md:pt-0 border-gray-200/50">
                        <span className="text-xs font-black text-[var(--color-brand-black)] shrink-0">
                          {plan.price}
                        </span>
                        <a 
                          href={plan.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-[var(--color-brand-black)] text-white border border-[var(--color-brand-black)] px-4 py-2 rounded-full font-bold uppercase tracking-widest text-[9px] hover:bg-transparent hover:text-[var(--color-brand-black)] transition-colors cursor-pointer text-center inline-block shrink-0"
                        >
                          {language === "es" ? "Pagar" : "Pay"}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier 2 - Featured (Center) */}
              <div className="bg-white p-8 rounded-[2rem] shadow-elevated border-2 border-[var(--color-brand-gold)] relative flex flex-col z-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-brand-black)] text-white text-[10px] font-bold tracking-widest uppercase py-1 px-4 rounded-full">
                  {t("services.t2_tag")}
                </div>
                <h3 className="font-heading italic text-3xl mb-1 text-center text-[var(--color-brand-black)]">{t("services.t2_title")}</h3>
                <p className="text-center font-bold text-sm uppercase tracking-widest text-[var(--color-brand-gold)] mb-6">{t("services.t2_subtitle")}</p>
                <p className="font-body text-sm text-gray-700 mb-8 leading-relaxed text-center">
                  {t("services.t2_desc")}
                </p>
                <ul className="space-y-4 mb-10 text-xs font-medium text-gray-700">
                  {(t("services.t2_features") as string[]).map((feature, i) => {
                    const splitIndex = feature.indexOf(":");
                    return (
                      <li key={i} className="flex gap-2 items-start text-xs leading-relaxed text-gray-700 font-medium">
                        <span className="text-[var(--color-brand-gold)] font-bold shrink-0">✦</span>
                        <span>
                          {splitIndex !== -1 ? (
                            <>
                              <strong className="font-bold text-[var(--color-brand-black)]">
                                {feature.substring(0, splitIndex + 1)}
                              </strong>
                              {feature.substring(splitIndex + 1)}
                            </>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-auto pt-8 border-t border-gray-100 w-full text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">
                    {language === "es" ? "Inversión del Acompañamiento" : "Advisory Investment"}
                  </p>
                  <p className="text-3xl font-black text-[var(--color-brand-black)] mb-1">
                    {(t("services.t2_plan") as any)?.price}
                  </p>
                  <p className="text-[10px] text-gray-500 mb-6 uppercase tracking-wider font-bold">
                    {(t("services.t2_plan") as any)?.name}
                  </p>
                  <a 
                    href={(t("services.t2_plan") as any)?.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[var(--color-brand-gold)] border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] w-full hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer text-center block"
                  >
                    {language === "es" ? "Contratar Acompañamiento" : "Start Advisory"}
                  </a>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="bg-white p-8 rounded-[2rem] shadow-soft border border-white mt-0 lg:mt-8 mb-0 lg:-mb-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <h3 className="font-heading italic text-3xl mb-2 text-center text-[var(--color-brand-black)]">{t("services.t3_title")}</h3>
                <p className="text-center font-bold text-sm uppercase tracking-widest text-gray-500 mb-6">{t("services.t3_subtitle")}</p>
                <p className="font-body text-sm text-gray-700 mb-8 leading-relaxed text-center">
                  {t("services.t3_desc")}
                </p>
                <ul className="space-y-4 mb-10 text-xs font-medium text-gray-700">
                  {(t("services.t3_features") as string[]).map((feature, i) => {
                    const splitIndex = feature.indexOf(":");
                    return (
                      <li key={i} className="flex gap-2 items-start text-xs leading-relaxed text-gray-700 font-medium">
                        <span className="text-[var(--color-brand-gold)] font-bold shrink-0">✦</span>
                        <span>
                          {splitIndex !== -1 ? (
                            <>
                              <strong className="font-bold text-[var(--color-brand-black)]">
                                {feature.substring(0, splitIndex + 1)}
                              </strong>
                              {feature.substring(splitIndex + 1)}
                            </>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-auto pt-8 border-t border-gray-100 w-full flex flex-col">
                  {/* Inclusion Callout Box */}
                  <div className="bg-[var(--color-brand-pink-light)] p-4 rounded-2xl border border-[var(--color-brand-pink-light)] mb-5 text-[11px] text-gray-700 leading-relaxed font-medium text-left">
                    <strong className="font-bold text-[var(--color-brand-black)] block mb-1">
                      {language === "es" ? "Incluido en todas las sesiones:" : "Included in all sessions:"}
                    </strong>
                    {t("services.t3_inclusions")}
                  </div>

                  <p className="text-[11px] italic text-gray-600 mb-5 px-2 leading-relaxed text-center">
                    {t("services.t3_question")}
                  </p>

                  <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex flex-col justify-between items-start md:flex-row md:items-center gap-4">
                    <div className="flex-grow text-left">
                      <h4 className="text-xs font-bold text-[var(--color-brand-black)] leading-tight">
                        {(t("services.t3_plan") as any)?.name}
                      </h4>
                      <span className="text-[10px] text-gray-500 mt-1 block">
                        {language === "es" ? "1 Hora Puntual" : "1 Advisory Hour"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto border-t md:border-t-0 pt-2 md:pt-0 border-gray-200/50">
                      <span className="text-xs font-black text-[var(--color-brand-black)] shrink-0">
                        {(t("services.t3_plan") as any)?.price}
                      </span>
                      <a 
                        href={(t("services.t3_plan") as any)?.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-[var(--color-brand-black)] text-white border border-[var(--color-brand-black)] px-4 py-2 rounded-full font-bold uppercase tracking-widest text-[9px] hover:bg-transparent hover:text-[var(--color-brand-black)] transition-colors cursor-pointer text-center inline-block shrink-0"
                      >
                        {language === "es" ? "Pagar" : "Pay"}
                      </a>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a 
                      href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20consultar%20sobre%20los%20talleres%20y%20capacitaciones%20in-company%20para%20mi%20equipo." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-transparent border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] w-full hover:bg-[var(--color-brand-black)] hover:text-white transition-colors cursor-pointer text-center block"
                    >
                      {language === "es" ? "Diseñar sesión a mi medida" : "Customize my session"}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* NEWSLETTER SECTION */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-cream)]">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[2rem] border border-[var(--color-brand-gold-light)] shadow-elevated text-center flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-brand-gold)] mb-4">{t("newsletter.tag")}</p>
            <h2 className="font-heading italic text-4xl text-[var(--color-brand-black)] mb-6">{t("newsletter.title")}</h2>
            <p className="font-body text-[var(--color-brand-black)] mb-10 leading-relaxed max-w-lg mx-auto">
              {t("newsletter.desc")}
            </p>
            <Web3Form subject={language === "es" ? "Nuevo Suscriptor - Newsletter (Sección Principal)" : "New Subscriber - Newsletter (Main Section)"} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto w-full" variant="main" />
          </div>
        </section>
      </ScrollReveal>

      {/* PODCAST SECTION */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-[var(--color-brand-pink-light)]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Podcast Image */}
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated">
              <Image src="/images/ktspacepodcast.webp" alt="KT.360 - Sin Pelos en la Lengua — Podcast de Katherine Velasquez" fill className="object-cover" />
            </div>

            {/* Podcast Content */}
            <div className="flex flex-col text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-4 opacity-70">{t("podcast.tag")}</p>
              <h2 className="mb-6 relative w-full max-w-[280px] md:max-w-[340px] aspect-[671/351] mx-auto md:mx-0">
                <span className="sr-only">
                  {t("podcast.title_p1")} {t("podcast.title_p2")}
                </span>
                <Image
                  src="/images/kt-360-bw.webp"
                  alt="KT.360 - Sin Pelos en la Lengua Podcast Logo"
                  fill
                  className="object-contain"
                />
              </h2>
              <p className="font-body text-base text-[var(--color-brand-black)] font-medium mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
                {language === "es" ? (
                  <>
                    Conversaciones honestas, análisis de negocio y herramientas de crecimiento personal para líderes que prefieren la sustancia por encima del <em className="italic">hype</em>. <strong className="font-bold">A través de historias reales de líderes reales</strong>, descubrimos el camino detrás del éxito y la mentalidad necesaria para sostenerlo.
                  </>
                ) : (
                  <>
                    Honest conversations, deep-dive business analysis, and growth tools for leaders who prioritize substance over <em className="italic">hype</em>. <strong className="font-bold">Through real stories of real founders</strong>, we explore the mindset and systems required to sustain success.
                  </>
                )}
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/podcast" className="bg-transparent border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-colors cursor-pointer hover:bg-[var(--color-brand-black)] hover:text-white inline-block text-center">
                  {t("podcast.cta")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <ScrollReveal>
        <section className="py-24 px-6 md:px-16 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-heading italic text-3xl md:text-4xl text-[var(--color-brand-black)] mb-16">
              {t("testimonials.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-[var(--color-brand-cream)] p-10 rounded-[2rem] border border-[var(--color-brand-gold-light)] shadow-soft text-left flex flex-col">
                  <div className="text-[var(--color-brand-gold)] font-heading text-4xl mb-4 leading-none">"</div>
                  <p className="font-body text-gray-700 leading-relaxed mb-8 flex-grow">
                    {testimonial.text}
                  </p>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-[10px] text-[var(--color-brand-black)]">{testimonial.name}</p>
                    <p className="text-[10px] text-gray-600 mt-1">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-32 px-6 md:px-16 bg-[var(--color-brand-gold-light)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading italic text-4xl md:text-6xl text-[var(--color-brand-black)]">
                {t("faq.title")} <span className="font-script text-5xl md:text-7xl">{t("faq.accent")}</span>
              </h2>
            </div>
            <FaqAccordion />
          </div>
        </section>
      </ScrollReveal>

      {/* FINAL CTA */}
      <ScrollReveal>
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div id="contacto" className="p-14 md:p-20 bg-[var(--color-brand-pink-light)] border-2 border-[var(--color-brand-gold)] text-[var(--color-brand-black)] text-center relative overflow-hidden shadow-none rounded-[2rem]">
              <div className="relative z-10">
                <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-[var(--color-brand-black)]">
                  {t("cta.title")} <span className="italic font-script text-5xl md:text-7xl text-[var(--color-brand-black)]">{t("cta.accent")}</span> {t("cta.suffix")}
                </h3>
                <p className="font-body font-medium mb-10 text-base md:text-lg max-w-xl mx-auto text-[var(--color-brand-black)]">
                  {t("cta.desc")}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-gold)] text-[var(--color-brand-black)] border-2 border-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[var(--color-brand-gold-light)] transition-colors cursor-pointer text-center inline-block">
                    {t("cta.button")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
