import { pageGraph, type SchemaPage } from "@/lib/schema";
import type { Language } from "@/app/translations";

// Renders a page's schema.org @graph (see src/lib/schema.ts). "<" is escaped so copy can never close the script tag.
export function JsonLd({ page, lang, name }: { page: SchemaPage; lang: Language; name: string }) {
  const json = JSON.stringify(pageGraph(page, lang, name)).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
