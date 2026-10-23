import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import PageClient from "./page.client";

export const metadata: Metadata = pageMetadata({
  title: "Katherine Velasquez | Consultoría Estratégica 360",
  description: "Estratega 360° para fundadores y marcas maduras. Integro estructura de negocio, comunicación y mentalidad para escalar con claridad.",
  path: "/",
  bilingual: true,
});

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": `${SITE_URL}`,
        "name": "Katherine Velasquez",
        "description": "Consultoría Estratégica 360"
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": "Katherine Velasquez",
        "jobTitle": "Consultora de Estrategia & Marca Personal",
        "url": `${SITE_URL}`,
        "sameAs": [
          "https://www.linkedin.com/in/katherine-velasquez/"
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
      <PageClient />
    </>
  );
}
