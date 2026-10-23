"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { translations, Language } from "@/app/translations";
import { basePath, langPath, localizeHref, routeLanguage } from "@/lib/i18n-routes";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string) => any;
  // An internal href in the current language ("/servicios" -> "/en/services" on English pages).
  href: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  // Localized pages take their language from the URL (/en/... is English), so the server renders the right one.
  const routeLang = routeLanguage(pathname);

  // Default to Spanish initially
  const [stateLanguage, setLanguageState] = useState<Language>("es");
  const language = routeLang ?? stateLanguage;

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-lang", lang);
    }
    // On a localized page, switching language means going to the other language's URL.
    if (routeLang && pathname && lang !== routeLang) {
      router.push(langPath(basePath(pathname), lang) + window.location.hash);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  // Run on mount to detect language settings
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Localized pages: the URL decides. Old ?lang=en links are redirected to /en in next.config.ts.
    if (routeLang) return;

    // 1. Detect from URL parameters (?lang=en or ?lang=es)
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang");
    
    if (langParam === "en" || langParam === "es") {
      setLanguage(langParam as Language);
      return;
    }

    // 2. Detect from localStorage cached preference
    const cachedLang = localStorage.getItem("preferred-lang");
    if (cachedLang === "en" || cachedLang === "es") {
      setLanguageState(cachedLang as Language);
      return;
    }
  }, []);

  // Keep <html lang> in step when the language changes without a full page load.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Safe nested key translation resolver
  const t = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to Spanish dictionary if key is missing in English
        let fallback: any = translations["es"];
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path; // Return path if both fail
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, href: (path: string) => localizeHref(path, language) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
