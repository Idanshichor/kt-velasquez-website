import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import PrivacyPageClient from "./page.client";

const TITLE = "Política de Privacidad | Katherine Velasquez";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: "Política de Tratamiento de Datos Personales de Katherine Velasquez, en cumplimiento de la Ley 1581 de 2012 de Colombia.",
  path: "/privacidad",
  bilingual: true,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd page="privacy" lang="es" name={TITLE} />
      <PrivacyPageClient />
    </>
  );
}
