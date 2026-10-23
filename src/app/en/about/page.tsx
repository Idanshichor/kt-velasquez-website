import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import AboutPageClient from "../../sobre-mi/page.client";

const TITLE = "Who Is Katherine Velasquez: My Story | 360 Strategist";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: "Discover the story, career and milestones of Katherine Velasquez. From civil engineer and entrepreneur to business and personal brand strategist.",
  path: "/sobre-mi",
  lang: "en",
  bilingual: true,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd page="about" lang="en" name={TITLE} />
      <AboutPageClient />
    </>
  );
}
