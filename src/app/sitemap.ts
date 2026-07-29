import { MetadataRoute } from "next";

const SITE_URL = "https://www.ktvelasquez.com";

// Public, production-visible routes only.
// `/logos` is excluded because `src/app/logos/page.tsx` returns notFound() in production.
const ROUTES = ["", "/sobre-mi", "/podcast", "/privacidad", "/gracias"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
}
