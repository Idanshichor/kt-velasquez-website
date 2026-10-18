"use client";

import { useLanguage } from "@/context/language-context";
import { gsap } from "@/lib/gsap";
import { enablePin, pinStack } from "@/lib/motion";
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
    <Scene
      className="testi pin-wrap bg-white"
      build={({ root, desktop }) => {
        const cards = Array.from(root.querySelectorAll<HTMLElement>(".testi-card"));
        if (desktop) {
          const undo = enablePin(root, 340);
          pinStack(root, cards);
          return undo;
        }
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: cards[0], start: "top 88%", once: true } },
        );
      }}
    >
      <div className="pin-stage">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 lg:py-0 lg:pt-28 lg:h-full lg:flex lg:flex-col lg:justify-center text-center">
          <h2 data-lines className="font-heading italic text-3xl md:text-4xl text-[var(--color-brand-black)] mb-16 lg:mb-0">
            {t("testimonials.title")}
          </h2>
          <div className="testi-list grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testi-card bg-[var(--color-brand-cream)] p-10 rounded-[2rem] border border-[var(--color-brand-gold-light)] shadow-soft text-left flex flex-col">
                <div className="text-[var(--color-brand-gold-deep)] font-heading text-5xl mb-4 leading-none">&ldquo;</div>
                <p className="testi-text font-body text-gray-700 leading-relaxed mb-8 flex-grow">{testimonial.text}</p>
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs text-[var(--color-brand-black)]">{testimonial.name}</p>
                  <p className="text-xs text-gray-600 mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Scene>
  );
}
