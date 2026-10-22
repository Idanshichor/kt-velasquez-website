import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import AboutPageClient from "./page.client";

export const metadata: Metadata = pageMetadata({
  title: "Quién es Katherine Velasquez — Mi Historia | Estratega 360",
  description: "Conoce la historia, trayectoria e hitos de Katherine Velasquez. De ingeniera civil y emprendedora a estratega de negocios y marcas personales.",
  path: "/sobre-mi",
});

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/sobre-mi/#profile`,
        "url": `${SITE_URL}/sobre-mi`,
        "mainEntity": {
          "@id": `${SITE_URL}/#person`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/sobre-mi/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": `${SITE_URL}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Sobre Mí",
            "item": `${SITE_URL}/sobre-mi`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPageClient />
    </>
  );
}
