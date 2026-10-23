import type { Metadata } from "next";
import type { Language } from "@/app/translations";
import { langPath } from "@/lib/i18n-routes";

// One source of truth for the site origin. ktvelasquez.com 308s to www in Vercel.
export const SITE_URL = "https://www.ktvelasquez.com";

const SITE_NAME = "Katherine Velasquez";

// hreflang set for a page that exists in both languages. `path` is the Spanish path.
// Spanish is the default (x-default) because it is the site's main market.
export function languageAlternates(path: string) {
  return {
    es: path,
    en: langPath(path, "en"),
    "x-default": path,
  };
}

// Per-page metadata. A page's openGraph replaces the layout's whole object in Next,
// so every page gets the full set here. Share images come from each route's
// opengraph-image.jpg / twitter-image.jpg files (built by scripts/og-images.mjs).
// `path` is always the Spanish path; `lang: "en"` builds the /en page's metadata. `bilingual` adds hreflang.
export function pageMetadata({ title, description, path, lang = "es", bilingual = false }: { title: string; description: string; path: string; lang?: Language; bilingual?: boolean }): Metadata {
  const url = langPath(path, lang);
  return {
    title,
    description,
    alternates: { canonical: url, ...(bilingual ? { languages: languageAlternates(path) } : {}) },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: lang === "en" ? "en_US" : "es_CO",
      ...(bilingual ? { alternateLocale: lang === "en" ? "es_CO" : "en_US" } : {}),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
