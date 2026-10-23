import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import PodcastPageClient from "../../podcast/page.client";

export const metadata: Metadata = pageMetadata({
  title: "Estrategia 360: The Podcast | Katherine Velasquez",
  description: "Honest conversations and strategic tools for CEOs, founders and entrepreneurs. No sugarcoating.",
  path: "/podcast",
  lang: "en",
  bilingual: true,
});

export default function PodcastPage() {
  // Same show as the Spanish page (same @id); only the page around it is in English.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "@id": `${SITE_URL}/podcast/#podcast`,
    "name": "Estrategia 360 - Sin Pelos en la Lengua",
    "description": "Honest conversations and strategic tools for CEOs, founders and entrepreneurs. No sugarcoating.",
    "url": `${SITE_URL}/en/podcast`,
    "author": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`
    },
    "inLanguage": ["es", "en"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PodcastPageClient />
    </>
  );
}
