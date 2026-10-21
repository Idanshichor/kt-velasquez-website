"use client";

import Image from "next/image";
import { Web3Form } from "./web3-form";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[var(--color-brand-black)] text-white py-24 px-6 md:px-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        {/* Column 1: Brand Info & Socials */}
        <div className="flex flex-col justify-between gap-8">
          <div>
            <Image 
              src="/images/KT_White_Logo.webp" 
              alt="Katherine Velasquez Logo" 
              width={180} 
              height={70} 
              className="h-12 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 max-w-sm mb-6 font-light leading-relaxed text-sm">
              {t("footer.tagline")}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a 
              href="https://linkedin.com/in/katherinevelasquezgarcia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-widest uppercase text-[var(--color-brand-pink)] hover:text-white transition-colors w-max"
            >
              LinkedIn
            </a>
            <Link 
              href="/privacidad" 
              className="text-xs font-medium tracking-wide text-gray-500 hover:text-white transition-colors w-max"
            >
              {t("footer.privacy_policy")}
            </Link>
          </div>
        </div>
        
        {/* Column 2: Contact & Coverage */}
        <div className="flex flex-col gap-6">
          <h3 className="font-body font-semibold text-xs tracking-widest uppercase text-gray-400">
            {t("footer.contact_title")}
          </h3>
          <div className="flex flex-col gap-4 font-light text-sm text-gray-300">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  {t("footer.contact_whatsapp")}
                </span>
                <a 
                  href={language === "es" ? "https://wa.me/573216154870?text=Hola%20Kathe%2C%20Quiero%20hablar%20contigo%20sobre%20mi%20proyecto%20%3A%29" : "https://wa.me/573216154870?text=Hi%20Kathe%2C%20I%27d%20like%20to%20talk%20to%20you%20about%20my%20project%20%3A%29"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base font-semibold text-[var(--color-brand-gold)] hover:text-white transition-colors"
                >
                  +57 321 615 4870
                </a>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  {t("footer.contact_phone")}
                </span>
                <a 
                  href="tel:+19496259147" 
                  className="text-base font-semibold text-[var(--color-brand-gold)] hover:text-white transition-colors"
                >
                  +1 949 625 9147
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Cobertura
              </span>
              <p className="text-sm">
                {t("footer.service_area")}
              </p>
            </div>
          </div>
        </div>
        
        {/* Column 3: Newsletter */}
        <div>
          <h3 className="font-body font-semibold text-xs tracking-widest uppercase text-gray-400 mb-6">
            {t("footer.newsletter")}
          </h3>
          <Web3Form subject="Nuevo Suscriptor - Newsletter (Footer)" className="flex flex-col gap-6" variant="footer" />
        </div>
      </div>
    </footer>
  );
}
