"use client";

import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";

export function Testimonials() {
  const { language, t } = useLanguage();

  const testimonials = [
    {
      text: "I had an excellent experience working with Katherine on design and marketing. I highly recommend her for her creativity and flexibility.",
      name: "Hilit Hochman",
      role: "Marketing VP, BioChange",
    },
    {
      text: language === "es"
        ? "Trabajar con Katherine ha sido una experiencia absolutamente increíble. Su metodología, sus estrategias y su mentalidad empresarial son de otro nivel. Gracias a su dirección estratégica, nos ha ayudado a escalar y superar los $250,000 en ventas. Si de verdad hablas en serio sobre hacer crecer tu negocio, Katherine es la estratega que necesitas a tu lado."
        : "Working with Katherine has been an absolutely incredible experience. Her methodology, strategies, and business mindset are on another level. Thanks to her strategic direction, she helped us scale and surpass $250,000 in sales. If you are truly serious about growing your business, Katherine is the strategist you need by your side.",
      name: "Pnina Shichor",
      role: language === "es" ? "Fundadora, Bound to Travel" : "Founder, Bound to Travel",
    },
    {
      text: language === "es"
        ? "Ha sido una experiencia muy linda y enriquecedora. Desde el primer momento he sentido un acompañamiento muy personalizado, siempre con atención, paciencia y compromiso. Es una persona muy dedicada, apasionada por lo que hace y realmente se preocupa por brindar lo mejor en cada detalle. Me he sentido escuchada, apoyada y muy satisfecha con todo el proceso. Sin duda, recomiendo totalmente su trabajo por la calidad humana y profesional que transmite."
        : "It has been a beautiful and enriching experience. From day one, I felt a highly personalized level of guidance, always delivered with care, patience, and commitment. She is incredibly dedicated, passionate about her work, and truly cares about delivering excellence in every detail. I felt heard, supported, and fully satisfied with the entire process. I highly recommend her for both her human warmth and her professional caliber.",
      name: "Yulieth Mattos",
      role: language === "es" ? "Emprendedora" : "Entrepreneur",
    },
  ];

  return (
    <Scene className="bg-white py-28 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 data-lines className="font-heading italic text-4xl md:text-5xl text-center text-[var(--color-brand-black)] mb-14 md:mb-20">
          {t("testimonials.title")}
        </h2>
        <div data-stagger className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {testimonials.map((testimonial, i) => (
            <figure
              key={i}
              className={`rounded-[1.75rem] p-8 md:p-10 flex flex-col h-full ${
                i === 1
                  ? "bg-[var(--color-brand-black)] text-white lg:-mt-6 lg:pb-14"
                  : "bg-[var(--color-brand-cream)] border border-[var(--color-brand-gold-light)]"
              }`}
            >
              <span aria-hidden="true" className={`font-heading text-6xl leading-[0.6] mb-6 ${i === 1 ? "text-[var(--color-brand-gold)]" : "text-[var(--color-brand-gold-deep)]"}`}>&ldquo;</span>
              <blockquote className={`font-body leading-relaxed mb-10 flex-grow ${i === 1 ? "text-white/85 text-base md:text-[17px]" : "text-gray-700 text-[15px]"}`}>
                {testimonial.text}
              </blockquote>
              <figcaption className={`pt-6 border-t ${i === 1 ? "border-white/15" : "border-[var(--color-brand-black)]/10"}`}>
                <p className={`font-bold uppercase tracking-widest text-xs ${i === 1 ? "text-[var(--color-brand-gold)]" : "text-[var(--color-brand-black)]"}`}>{testimonial.name}</p>
                <p className={`text-xs mt-1 ${i === 1 ? "text-white/60" : "text-gray-600"}`}>{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Scene>
  );
}
