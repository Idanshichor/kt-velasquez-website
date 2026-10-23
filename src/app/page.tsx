import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import PageClient from "./page.client";

const TITLE = "Katherine Velasquez | Consultoría Estratégica 360";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: "Estratega 360° para fundadores y marcas maduras. Integro estructura de negocio, comunicación y mentalidad para escalar con claridad.",
  path: "/",
  bilingual: true,
});

export default function Page() {
  return (
    <>
      <JsonLd page="home" lang="es" name={TITLE} />
      <PageClient />
    </>
  );
}
