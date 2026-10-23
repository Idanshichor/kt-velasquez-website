import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import ServicesPageClient from "./page.client";

const TITLE = "Servicios: Mentoría, Consultoría y Talleres | Katherine Velasquez";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: "Mentoría para marca personal y emprendimiento, consultoría 1:1 para empresas y startups, y talleres in-company. Planes, precios y todo lo que incluye cada servicio.",
  path: "/servicios",
  bilingual: true,
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd page="services" lang="es" name={TITLE} />
      <ServicesPageClient />
    </>
  );
}
