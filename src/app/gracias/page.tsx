import type { Metadata } from "next";
import GraciasPageClient from "./page.client";

export const metadata: Metadata = {
  title: "¡Gracias por tu compra! / Thank you! | Katherine Velasquez",
  description: "Tu transacción ha sido procesada correctamente. Bienvenido(a) a esta nueva etapa de transformación.",
  // Thank-you page after payment: keep it out of search results.
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return <GraciasPageClient />;
}
