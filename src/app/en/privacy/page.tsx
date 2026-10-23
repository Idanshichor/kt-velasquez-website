import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import PrivacyPageClient from "../../privacidad/page.client";

const TITLE = "Privacy Policy | Katherine Velasquez";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: "Katherine Velasquez's Personal Data Processing Policy, in compliance with Colombia's Law 1581 of 2012.",
  path: "/privacidad",
  lang: "en",
  bilingual: true,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd page="privacy" lang="en" name={TITLE} />
      <PrivacyPageClient />
    </>
  );
}
