import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import PageClient from "../page.client";

const TITLE = "Katherine Velasquez | 360 Strategic Consulting";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: "360° strategist for founders and established brands. I bring together business structure, communication and mindset so you can scale with clarity.",
  path: "/",
  lang: "en",
  bilingual: true,
});

export default function Page() {
  return (
    <>
      <JsonLd page="home" lang="en" name={TITLE} />
      <PageClient />
    </>
  );
}
