import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import PodcastPageClient from "./page.client";

export const metadata: Metadata = pageMetadata({
  title: "Estrategia 360 - Sin Pelos en la Lengua | Katherine Velasquez",
  description: "Conversaciones honestas y herramientas estratégicas para CEOs, fundadores y emprendedores. Sin pelos en la lengua.",
  path: "/podcast",
});

export default function PodcastPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "@id": `${SITE_URL}/podcast/#podcast`,
    "name": "Estrategia 360 - Sin Pelos en la Lengua",
    "description": "Conversaciones honestas y herramientas estratégicas para CEOs, fundadores y emprendedores. Sin pelos en la lengua.",
    "url": `${SITE_URL}/podcast`,
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
