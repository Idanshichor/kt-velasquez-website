import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

// Public, production-visible routes only.
// `/gracias` is excluded because it is a noindex thank-you page.
// `/logos` is excluded because `src/app/logos/page.tsx` returns notFound() in production.
const ROUTES = ["", "/sobre-mi", "/servicios", "/podcast", "/privacidad"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
}
