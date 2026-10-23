import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import PrivacyPageClient from "./page.client";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidad | Katherine Velasquez",
  description: "Política de Tratamiento de Datos Personales de Katherine Velasquez, en cumplimiento de la Ley 1581 de 2012 de Colombia.",
  path: "/privacidad",
  bilingual: true,
});

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
