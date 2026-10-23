import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PrivacyPageClient from "../../privacidad/page.client";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Katherine Velasquez",
  description: "Katherine Velasquez's Personal Data Processing Policy, in compliance with Colombia's Law 1581 of 2012.",
  path: "/privacidad",
  lang: "en",
  bilingual: true,
});

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
