import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import AboutPageClient from "./page.client";

const TITLE = "Quién es Katherine Velasquez: Mi Historia | Estratega 360";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: "Conoce la historia, trayectoria e hitos de Katherine Velasquez. De ingeniera civil y emprendedora a estratega de negocios y marcas personales.",
  path: "/sobre-mi",
  bilingual: true,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd page="about" lang="es" name={TITLE} />
      <AboutPageClient />
    </>
  );
}
