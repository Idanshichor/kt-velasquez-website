"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  // The page you are on: black text with a pink bar under it. "Metodología" is a section of the home page, so it never lights up.
  const links = [
    { href: "/", label: t("nav.inicio"), page: true },
    { href: "/sobre-mi", label: t("nav.sobre_mi"), page: true },
    { href: "/#metodologia", label: t("nav.metodologia"), page: false },
    { href: "/servicios", label: t("nav.servicios"), page: true },
    { href: "/podcast", label: t("nav.podcast"), page: true },
  ];
  const isActive = (l: { href: string; page: boolean }) => l.page && (l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href));
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-brand-cream)]/90 backdrop-blur-xl border-b border-gray-200 h-20 md:h-24 flex items-center justify-between px-6 md:px-16 transition-all duration-300">
      <Link href="/" className="flex items-center shrink-0 z-50">
        <Image
          src="/images/KT_LOGO.webp"
          alt="Katherine Velasquez Logo"
          width={350}
          height={120}
          className="h-12 md:h-16 lg:h-20 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8 lg:gap-12 text-sm font-semibold tracking-widest uppercase text-gray-600">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={isActive(l) ? "page" : undefined}
            className={`relative py-2 transition-colors hover:text-[var(--color-brand-black)] ${isActive(l) ? "text-[var(--color-brand-black)] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[3px] after:rounded-full after:bg-[var(--color-brand-pink)]" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-4 lg:gap-6 shrink-0">
        {/* Sliding Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-gray-100 border border-gray-200 rounded-full p-1 transition-all relative w-[68px] h-9 cursor-pointer shadow-inner shrink-0"
          aria-label="Change language"
        >
          <div
            className={`absolute top-0.5 bottom-0.5 w-[30px] rounded-full bg-[var(--color-brand-black)] transition-all duration-300 ${
              language === "en" ? "left-[34px]" : "left-1"
            }`}
          />
          <span className={`flex-1 text-[10px] font-black uppercase text-center relative z-10 select-none tracking-widest ${language === "es" ? "text-white" : "text-gray-400"}`}>ES</span>
          <span className={`flex-1 text-[10px] font-black uppercase text-center relative z-10 select-none tracking-widest ${language === "en" ? "text-white" : "text-gray-400"}`}>EN</span>
        </button>

        <Link href={language === "es" ? "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" : "https://wa.me/573216154870?text=Hi%20Kathe%2C%20I%27d%20like%20to%20talk%20to%20you%20about%20my%20project%20%3A%29"} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="rounded-full shrink-0">
            {t("nav.contacto")}
          </Button>
        </Link>
      </div>

      {/* Mobile Actions (Language Switch + Hamburger) */}
      <div className="flex lg:hidden items-center gap-3 z-50">
        {/* Sliding Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-gray-100 border border-gray-200 rounded-full p-1 transition-all relative w-[68px] h-9 cursor-pointer shadow-inner shrink-0"
          aria-label="Change language"
        >
          <div
            className={`absolute top-0.5 bottom-0.5 w-[30px] rounded-full bg-[var(--color-brand-black)] transition-all duration-300 ${
              language === "en" ? "left-[34px]" : "left-1"
            }`}
          />
          <span className={`flex-1 text-[10px] font-black uppercase text-center relative z-10 select-none tracking-widest ${language === "es" ? "text-white" : "text-gray-400"}`}>ES</span>
          <span className={`flex-1 text-[10px] font-black uppercase text-center relative z-10 select-none tracking-widest ${language === "en" ? "text-white" : "text-gray-400"}`}>EN</span>
        </button>

        {/* Hamburger Toggle */}
        <button 
          className="text-[var(--color-brand-black)] p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--color-brand-cream)] flex flex-col pt-12 px-6 pb-6 shadow-xl border-t border-gray-100 lg:hidden overflow-y-auto" data-lenis-prevent style={{ height: "calc(100vh - 5rem)" }}>
          <div className="flex flex-col gap-8 text-lg font-semibold tracking-widest uppercase text-[var(--color-brand-black)] text-center mb-12">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setIsMobileMenuOpen(false)} aria-current={isActive(l) ? "page" : undefined} className={isActive(l) ? "self-center border-b-[3px] border-[var(--color-brand-pink)] pb-1" : "text-[var(--color-brand-black)]/60"}>
                {l.label}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto mb-10 flex flex-col gap-6 items-center">
            <Link href={language === "es" ? "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" : "https://wa.me/573216154870?text=Hi%20Kathe%2C%20I%27d%20like%20to%20talk%20to%20you%20about%20my%20project%20%3A%29"} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
              <Button variant="outline" className="rounded-full w-full py-6 text-base tracking-widest border-2">
                {t("nav.contacto")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
