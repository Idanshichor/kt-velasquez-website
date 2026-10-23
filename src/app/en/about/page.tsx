import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import AboutPageClient from "../../sobre-mi/page.client";

export const metadata: Metadata = pageMetadata({
  title: "Who Is Katherine Velasquez: My Story | 360 Strategist",
  description: "Discover the story, career and milestones of Katherine Velasquez. From civil engineer and entrepreneur to business and personal brand strategist.",
  path: "/sobre-mi",
  lang: "en",
  bilingual: true,
});

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/en/about/#profile`,
        "url": `${SITE_URL}/en/about`,
        "inLanguage": "en",
        "mainEntity": {
          "@id": `${SITE_URL}/#person`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/en/about/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/en`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Me",
            "item": `${SITE_URL}/en/about`
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
