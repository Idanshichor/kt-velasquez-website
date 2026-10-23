import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import PodcastPageClient from "./page.client";

const TITLE = "Estrategia 360 - Sin Pelos en la Lengua | Katherine Velasquez";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: "Conversaciones honestas y herramientas estratégicas para CEOs, fundadores y emprendedores. Sin pelos en la lengua.",
  path: "/podcast",
  bilingual: true,
});

export default function PodcastPage() {
  return (
    <>
      <JsonLd page="podcast" lang="es" name={TITLE} />
      <PodcastPageClient />
    </>
  );
}
