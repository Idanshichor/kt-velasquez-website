import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import PageClient from "../page.client";

export const metadata: Metadata = pageMetadata({
  title: "Katherine Velasquez | 360 Strategic Consulting",
  description: "360° strategist for founders and established brands. I bring together business structure, communication and mindset so you can scale with clarity.",
  path: "/",
  lang: "en",
  bilingual: true,
});

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/en/#webpage`,
    "url": `${SITE_URL}/en`,
    "name": "Katherine Velasquez | 360 Strategic Consulting",
    "inLanguage": "en",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "about": { "@id": `${SITE_URL}/#person` }
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
