import type { Metadata } from "next";
import ServicesPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Servicios — Mentoría, Consultoría y Talleres | Katherine Velasquez",
  description: "Mentoría para marca personal y emprendimiento, consultoría 1:1 para empresas y startups, y talleres in-company. Planes, precios y todo lo que incluye cada servicio.",
  alternates: {
    canonical: "https://www.ktvelasquez.com/servicios",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
