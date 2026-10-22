"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Item = { title: string; tag?: string; body: string };

// Mango Creative Studio's services, copied word for word from mangocreativestudio.com (lib/content.ts in the Mango repo).
export const MANGO_OFFERS: Record<"es" | "en", Item[]> = {
  es: [
    { title: "Diseño Web a Medida", body: "Sitios web hechos a medida, con un diseño increíble, que funcionan a la perfección y convierten visitantes en clientes." },
    { title: "Landing Pages", tag: "Páginas de aterrizaje", body: "Páginas enfocadas en un solo objetivo, como una reserva, una llamada o una venta, diseñadas y escritas para convertir." },
    { title: "Branding", tag: "Identidad de marca", body: "Una identidad clara, del logotipo al estilo visual, para que tu negocio se recuerde." },
    { title: "Posicionamiento SEO", body: "Aparece en Google ante las personas que ya buscan lo que ofreces." },
    { title: "AEO", tag: "Optimización para motores de respuesta", body: "Estructura tu contenido para que los asistentes de IA y los cuadros de respuesta te citen." },
    { title: "GEO", tag: "Optimización para motores generativos", body: "Aparece cuando la gente pregunta a ChatGPT, Gemini y Perplexity." },
    { title: "Analítica y Seguimiento de Conversiones", body: "Mide qué funciona y mejóralo, con números claros en lugar de suposiciones." },
    { title: "Hosting y Seguridad", body: "Hosting rápido y seguro con SSL para que tu sitio siga en línea y sea confiable." },
    { title: "Mantenimiento Web", body: "Actualizaciones, copias de seguridad y arreglos, para que tu sitio nunca quede abandonado." },
  ],
  en: [
    { title: "Custom Website Builds", body: "Tailor-made websites designed to look incredible, work flawlessly and convert visitors into customers." },
    { title: "Landing Pages", body: "Focused pages built around one goal, like a booking, a call or a sale, designed and written to convert." },
    { title: "Branding", body: "A clear identity, from logo to look and feel, so your business is remembered." },
    { title: "SEO Optimization", body: "Get found on Google by the people already searching for what you offer." },
    { title: "AEO", tag: "Answer Engine Optimization", body: "Structure your content so AI assistants and answer boxes quote you." },
    { title: "GEO", tag: "Generative Engine Optimization", body: "Show up when people ask ChatGPT, Gemini and Perplexity." },
    { title: "Analytics and Conversion Tracking", body: "See what works and improve it, with clear numbers instead of guesses." },
    { title: "Hosting and Security", body: "Fast, secure hosting with SSL so your site stays up and trusted." },
    { title: "Website Maintenance", body: "Updates, backups and fixes, so your site never gets neglected." },
  ],
};

// Mango's tic-tac service pills, in Katherine's black and white. Press one and it grows into its description.
// Same motion as on the Mango site: clip reveal on the open pill, neighbours slide (FLIP).
export function MangoTags({ items, href, label }: { items: Item[]; href: string; label: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const before = useRef<DOMRect[] | null>(null);

  const toggle = (i: number) => {
    before.current = refs.current.map((el) => (el ? el.getBoundingClientRect() : new DOMRect()));
    setOpen((o) => (o === i ? null : i));
  };

  useLayoutEffect(() => {
    const prev = before.current;
    before.current = null;
    if (!prev || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const opts = { duration: 520, easing: "cubic-bezier(0.22, 1, 0.36, 1)" };
    refs.current.forEach((el, i) => {
      if (!el) return;
      const a = prev[i];
      const b = el.getBoundingClientRect();
      const dx = a.left - b.left;
      const dy = a.top - b.top;
      if (i === open) {
        const r = Math.max(0, b.width - a.width);
        const d = Math.max(0, b.height - a.height);
        el.animate(
          [
            { transform: `translate(${dx}px, ${dy}px)`, clipPath: `inset(0 ${r}px ${d}px 0 round 30px)` },
            { transform: "none", clipPath: "inset(0 0 0 0 round 30px)" },
          ],
          opts,
        );
      } else if (dx || dy) {
        el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], opts);
      }
    });
  }, [open]);

  return (
    <ul className="flex flex-wrap gap-3 md:gap-3.5 list-none p-0 m-0">
      {items.map((o, i) => {
        const isOpen = open === i;
        const dark = i % 2 === 1;
        const tilt = ["-rotate-[1.2deg]", "rotate-[1deg]", "-rotate-[0.6deg]", "rotate-[1.3deg]"][i % 4];
        return (
          <li
            key={o.title}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`border-2 transition-[translate,box-shadow] duration-300 ${dark ? "border-white bg-[var(--color-brand-black)] text-white" : "border-white bg-white text-[var(--color-brand-black)]"} ${isOpen ? "basis-full rounded-[30px]" : `rounded-full ${tilt} hover:-translate-y-1 hover:shadow-[0_8px_0_rgba(255,255,255,0.18)]`}`}
          >
            <button type="button" aria-expanded={isOpen} aria-controls={`mango-svc-${i}`} onClick={() => toggle(i)} className="flex items-center gap-3.5 w-full py-3.5 pl-[18px] pr-5 text-left cursor-pointer rounded-[inherit] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-pink)]">
              <span className="text-[0.72rem] tracking-[0.08em] opacity-70 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1 [font-family:var(--font-mango-cooper)] text-[1.05rem] md:text-[1.35rem] leading-[1.1]">{o.title}</span>
              <span aria-hidden="true" className="relative w-3.5 h-3.5 shrink-0">
                <span className="absolute inset-x-0 top-1.5 h-0.5 bg-current" />
                <span className={`absolute inset-x-0 top-1.5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "" : "rotate-90"}`} />
              </span>
            </button>
            {isOpen && (
              <div id={`mango-svc-${i}`} className="pb-6 md:pb-7 pl-[18px] sm:pl-[52px] pr-5 md:pr-8">
                {o.tag && <span className="block text-xs uppercase tracking-[0.12em] opacity-80">{o.tag}</span>}
                <p className="mt-2 max-w-[62ch] leading-[1.6]">{o.body}</p>
                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 font-bold underline underline-offset-4">{label}</a>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
