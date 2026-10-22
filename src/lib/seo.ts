import type { Metadata } from "next";

// One source of truth for the site origin. ktvelasquez.com 308s to www in Vercel.
export const SITE_URL = "https://www.ktvelasquez.com";

const SITE_NAME = "Katherine Velasquez";

// Per-page metadata. A page's openGraph replaces the layout's whole object in Next,
// so every page gets the full set here. Share images come from each route's
// opengraph-image.jpg / twitter-image.jpg files (built by scripts/og-images.mjs).
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "es_CO",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
