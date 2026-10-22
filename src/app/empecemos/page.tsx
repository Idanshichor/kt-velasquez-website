import type { Metadata } from "next";
import EmpecemosPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Cuéntame sobre tus proyectos | Katherine Velasquez",
  description: "Formulario para preparar nuestra primera reunión.",
  // Private intake form Katherine sends by link: kept out of search, the sitemap and the menu.
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function EmpecemosPage() {
  return <EmpecemosPageClient />;
}
