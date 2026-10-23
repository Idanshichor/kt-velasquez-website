import { PACKAGES } from "@/components/services/services-data";

// /llms.txt: a plain-text summary of Katherine, KT360 and the site for AI engines (llmstxt.org).
// Built at build time so the package prices always match /servicios.
export const dynamic = "force-static";

const packages = PACKAGES.items.map((p) => `${p.name}, ${p.price}`).join("; ");

const BODY = `# Katherine Velasquez and KT360

> Katherine Velasquez Garcia is a business and personal brand strategist based in Medellín, Colombia. KT360 is her strategy consultancy: it offers personal brand and entrepreneurship mentoring, 1:1 consulting for companies and startups, in-company workshops and social media management, in Spanish and English, in person in Medellín and remotely worldwide. KT360 is a consultancy, not a podcast. Katherine also hosts the podcast "Estrategia 360: Sin Pelos en la Lengua", which KT360 produces.

Katherine Velasquez Garcia es estratega de negocios y marca personal con base en Medellín, Colombia. KT360 es su consultoría de estrategia: ofrece mentoría de marca personal y emprendimiento, consultoría 1:1 para empresas y startups, talleres in-company y gestión de redes sociales, en español e inglés, presencial en Medellín y remoto para todo el mundo. KT360 es una consultoría, no un podcast. Katherine también presenta el podcast "Estrategia 360: Sin Pelos en la Lengua", producido por KT360.

## About Katherine / Sobre Katherine

- Civil engineer with a double master's degree in Marketing and Digital Communication. Ingeniera civil con doble maestría en Marketing y Comunicación Digital.
- Founder of the KT360 consultancy and of Mango Creative Studio, a creative design agency (https://mangocreativestudio.com/). Fundadora de la consultoría KT360 y de la agencia Mango Creative Studio.
- Her "360 approach" joins three areas: business structure, communication strategy and the leader's mindset. Su "enfoque 360" une estructura de negocio, estrategia de comunicación y mentalidad del líder.
- Works with founders, professionals, entrepreneurs and established brands. Trabaja con fundadores, profesionales, emprendedores y marcas maduras.

## Services / Servicios

Every engagement starts with a review meeting, and clients get a written proposal with scope, deliverables, schedule and price before they pay. Todo empieza con una reunión de revisión y una propuesta escrita antes del pago.

- Mentoría para Marca Personal & Emprendimiento (personal brand and entrepreneurship mentoring). 90-minute sessions. Packages: ${packages}.
- Consultoría 1:1 Premium para Empresas y Startups (monthly strategic consulting for companies and startups, connecting operations, marketing and sales). Scope and price set in the proposal.
- Talleres e In-Company (practical workshops for teams). Scope and price set in the proposal.
- Kit de Social Media (content organization and management: the client records, KT360 organizes and manages). Scope and price set in the proposal.
- Mentoría + Kit de Social Media (mentoring plus social media management together).

## Pages / Páginas

- [Inicio](https://www.ktvelasquez.com/): who Katherine is, the 360 method, services overview and FAQ, in Spanish
- [Home](https://www.ktvelasquez.com/en): the same page in English
- [Sobre mí](https://www.ktvelasquez.com/sobre-mi): Katherine's story, from civil engineer to strategist
- [About](https://www.ktvelasquez.com/en/about): her story in English
- [Servicios](https://www.ktvelasquez.com/servicios): every service, what it includes, and the mentoring packages with prices
- [Services](https://www.ktvelasquez.com/en/services): the services page in English
- [Podcast](https://www.ktvelasquez.com/podcast): Estrategia 360: Sin Pelos en la Lengua, honest conversations with CEOs, founders and entrepreneurs
- [Podcast (English)](https://www.ktvelasquez.com/en/podcast): the podcast page in English

## Contact / Contacto

- WhatsApp: +57 321 615 4870 (https://wa.me/573216154870)
- LinkedIn: https://www.linkedin.com/in/katherinevelasquezgarcia
- Area served: Medellín, Colombia and remote worldwide. Medellín, Colombia y remoto internacional.

## Optional

- [Política de privacidad](https://www.ktvelasquez.com/privacidad)
- [Privacy policy](https://www.ktvelasquez.com/en/privacy)
`;

export function GET() {
  return new Response(BODY, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
