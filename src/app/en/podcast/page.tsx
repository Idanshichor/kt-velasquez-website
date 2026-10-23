import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import PodcastPageClient from "../../podcast/page.client";

const TITLE = "Estrategia 360: The Podcast | Katherine Velasquez";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: "Honest conversations and strategic tools for CEOs, founders and entrepreneurs. No sugarcoating.",
  path: "/podcast",
  lang: "en",
  bilingual: true,
});

export default function PodcastPage() {
  return (
    <>
      <JsonLd page="podcast" lang="en" name={TITLE} />
      <PodcastPageClient />
    </>
  );
}
