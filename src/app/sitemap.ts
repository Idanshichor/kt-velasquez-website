import { MetadataRoute } from "next";

const SITE_URL = "https://www.ktvelasquez.com";

// Public, production-visible routes only.
// `/gracias` is excluded because it is a noindex thank-you page.
// `/empecemos` is excluded because it is Katherine's private intake form (noindex, sent by link only).
// `/logos` is excluded because `src/app/logos/page.tsx` returns notFound() in production.
const ROUTES = ["", "/sobre-mi", "/servicios", "/podcast", "/privacidad"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
}
