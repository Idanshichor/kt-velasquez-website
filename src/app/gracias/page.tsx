import type { Metadata } from "next";
import GraciasPageClient from "./page.client";

export const metadata: Metadata = {
  title: "¡Gracias por tu compra! / Thank you! | Katherine Velasquez",
  description: "Tu transacción ha sido procesada correctamente. Bienvenido(a) a esta nueva etapa de transformación.",
  alternates: {
    canonical: "https://www.ktvelasquez.com/gracias",
  },
};

export default function GraciasPage() {
  return <GraciasPageClient />;
}
