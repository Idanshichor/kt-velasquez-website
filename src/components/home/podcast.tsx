"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { Scene } from "./scene";

const BARS = Array.from({ length: 28 }, (_, i) => ({ h: 24 + ((i * 37) % 56), d: (i % 7) * 0.17 }));

export function Podcast() {
  const { language, t } = useLanguage();
  return (
    <Scene className="py-24 md:py-32 px-6 md:px-16 bg-[var(--color-brand-pink-light)]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Podcast image */}
        <div data-mask className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated">
          <div data-mask-img className="absolute inset-0">
            <Image src="/images/ktspacepodcast.webp" alt="KT.360 - Sin Pelos en la Lengua — Podcast de Katherine Velasquez" fill className="object-cover" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-24 flex items-end justify-center gap-1.5 px-8 pb-5 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true">
            {BARS.map((b, i) => (
              <span key={i} className="wave-bar w-1 rounded-full bg-white/80" style={{ height: `${b.h}%`, animationDelay: `${b.d}s` }} />
            ))}
          </div>
        </div>

        {/* Podcast content */}
        <div className="flex flex-col text-center md:text-left">
          <p data-reveal className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-brand-black)] mb-4 opacity-70">{t("podcast.tag")}</p>
          <h2 data-reveal className="mb-6 relative w-full max-w-[280px] md:max-w-[340px] aspect-[671/351] mx-auto md:mx-0">
            <span className="sr-only">
              {t("podcast.title_p1")} {t("podcast.title_p2")}
            </span>
            <Image src="/images/kt-360-bw.webp" alt="KT.360 - Sin Pelos en la Lengua Podcast Logo" fill className="object-contain" />
          </h2>
          <p data-reveal className="font-body text-base md:text-lg text-[var(--color-brand-black)] font-medium mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
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
          <div data-reveal className="flex justify-center md:justify-start">
            <Link data-cursor href="/podcast" className="bg-transparent border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-colors cursor-pointer hover:bg-[var(--color-brand-black)] hover:text-white inline-block text-center">
              {t("podcast.cta")}
            </Link>
          </div>
        </div>
      </div>
    </Scene>
  );
}
