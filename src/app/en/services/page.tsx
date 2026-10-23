import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import ServicesPageClient from "../../servicios/page.client";

const TITLE = "Services: Mentorship, Consulting and Workshops | Katherine Velasquez";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: "Personal brand and entrepreneurship mentorship, 1:1 consulting for companies and startups, and in-company workshops. Plans, prices and everything each service includes.",
  path: "/servicios",
  lang: "en",
  bilingual: true,
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd page="services" lang="en" name={TITLE} />
      <ServicesPageClient />
    </>
  );
}
