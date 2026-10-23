import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";
import { LOCALIZED_PATHS, langPath } from "@/lib/i18n-routes";

// Public, production-visible routes only.
// `/gracias` is excluded because it is a noindex thank-you page.
// `/empecemos` is excluded because it is Katherine's private intake form (noindex, sent by link only).
// `/logos` is excluded because `src/app/logos/page.tsx` returns notFound() in production.
// Each page is listed in Spanish and English, both carrying the same hreflang set.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;
  return LOCALIZED_PATHS.flatMap((path) => {
    const languages = { es: abs(path), en: abs(langPath(path, "en")), "x-default": abs(path) };
    return [path, langPath(path, "en")].map((url) => ({
      url: abs(url),
      lastModified: now,
      alternates: { languages },
    }));
  });
}
