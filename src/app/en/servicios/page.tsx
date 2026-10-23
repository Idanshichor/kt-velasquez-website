import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ServicesPageClient from "../../servicios/page.client";

export const metadata: Metadata = pageMetadata({
  title: "Services: Mentorship, Consulting and Workshops | Katherine Velasquez",
  description: "Personal brand and entrepreneurship mentorship, 1:1 consulting for companies and startups, and in-company workshops. Plans, prices and everything each service includes.",
  path: "/servicios",
  lang: "en",
  bilingual: true,
});

export default function ServicesPage() {
  return <ServicesPageClient />;
}
