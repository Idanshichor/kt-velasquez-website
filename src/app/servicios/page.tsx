import type { Metadata } from "next";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import ServicesPageClient from "./page.client";

export const metadata: Metadata = pageMetadata({
  title: "Servicios — Mentoría, Consultoría y Talleres | Katherine Velasquez",
  description: "Mentoría para marca personal y emprendimiento, consultoría 1:1 para empresas y startups, y talleres in-company. Planes, precios y todo lo que incluye cada servicio.",
  path: "/servicios",
});

export default function ServicesPage() {
  return <ServicesPageClient />;
}
