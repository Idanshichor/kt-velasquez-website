import { SITE_URL } from "@/lib/seo";
import { langPath } from "@/lib/i18n-routes";
import { translations, type Language } from "@/app/translations";
import { PACKAGES, SERVICES } from "@/components/services/services-data";

// One schema.org @graph for the whole site. Every page ships the same three core
// nodes (Person, the KT360 consultancy, WebSite) plus its own WebPage and extras,
// all linked by @id so search and AI engines read one consistent entity.
//
// KT360 is Katherine's consultancy. The podcast is a separate show she hosts and
// KT360 produces, so it never takes the KT360 name here.

const id = (hash: string) => `${SITE_URL}/#${hash}`;
const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export const PERSON_ID = id("person");
export const ORG_ID = id("kt360");
export const WEBSITE_ID = id("website");
export const PODCAST_ID = `${SITE_URL}/podcast/#podcast`;

// Only links that appear on the site. Katherine's list of profiles (plan step 2.2) goes here when it arrives.
const SAME_AS = ["https://www.linkedin.com/in/katherinevelasquezgarcia"];

const PHONE = "+57 321 615 4870";

const COPY = {
  es: {
    jobTitle: "Estratega de negocios y marca personal, fundadora de KT360",
    personDesc:
      "Katherine Velasquez Garcia es ingeniera civil con doble maestría en Marketing y Comunicación Digital. Es estratega de negocios y marca personal, fundadora de la consultoría KT360 y de la agencia Mango Creative Studio, y presentadora del podcast Estrategia 360: Sin Pelos en la Lengua.",
    orgDesc:
      "KT360 es la consultoría de estrategia 360 de Katherine Velasquez, con base en Medellín, Colombia. Ofrece mentoría de marca personal y emprendimiento, consultoría 1:1 para empresas y startups, talleres in-company y gestión de redes sociales, uniendo estructura de negocio, comunicación y mentalidad.",
    siteDesc: "Sitio oficial de Katherine Velasquez y su consultoría KT360.",
    knowsAbout: ["Estrategia de negocios", "Marca personal", "Emprendimiento", "Consultoría empresarial", "Marketing digital", "Comunicación digital", "Estrategia de redes sociales", "Mentalidad ejecutiva", "Optimización de procesos"],
    podcastDesc:
      "Podcast de Katherine Velasquez, producido por su consultoría KT360. Conversaciones honestas y herramientas estratégicas para CEOs, fundadores y emprendedores. Sin pelos en la lengua.",
    home: "Inicio",
  },
  en: {
    jobTitle: "Business and personal brand strategist, founder of KT360",
    personDesc:
      "Katherine Velasquez Garcia is a civil engineer with a double master's degree in Marketing and Digital Communication. She is a business and personal brand strategist, founder of the KT360 consultancy and the Mango Creative Studio agency, and host of the podcast Estrategia 360: Sin Pelos en la Lengua.",
    orgDesc:
      "KT360 is Katherine Velasquez's 360 strategy consultancy, based in Medellin, Colombia. It offers personal brand and entrepreneurship mentoring, 1:1 consulting for companies and startups, in-company workshops and social media management, bringing together business structure, communication and mindset.",
    siteDesc: "Official site of Katherine Velasquez and her consultancy KT360.",
    knowsAbout: ["Business strategy", "Personal branding", "Entrepreneurship", "Business consulting", "Digital marketing", "Digital communication", "Social media strategy", "Executive mindset", "Process optimization"],
    podcastDesc:
      "Katherine Velasquez's podcast, produced by her consultancy KT360. Honest conversations and strategic tools for CEOs, founders and entrepreneurs. No sugarcoating.",
    home: "Home",
  },
} as const;

const MEDELLIN = { "@type": "City", name: "Medellín", containedInPlace: { "@type": "Country", name: "Colombia" } };

function coreNodes(lang: Language) {
  const c = COPY[lang];
  return [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Katherine Velasquez",
      alternateName: ["Katherine Velasquez Garcia", "Kathe Velasquez"],
      givenName: "Katherine",
      familyName: "Velasquez Garcia",
      jobTitle: c.jobTitle,
      description: c.personDesc,
      url: SITE_URL,
      image: abs("/images/KT_About_Hero.webp"),
      knowsAbout: c.knowsAbout,
      knowsLanguage: ["es", "en"],
      homeLocation: MEDELLIN,
      worksFor: { "@id": ORG_ID },
      sameAs: SAME_AS,
    },
    {
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: "KT360",
      alternateName: ["KT.360", "KT 360", "KT360 Consultoría Estratégica"],
      description: c.orgDesc,
      url: SITE_URL,
      logo: abs("/images/KT_LOGO.webp"),
      image: abs("/images/KT_Stool_Portrait.webp"),
      founder: { "@id": PERSON_ID },
      employee: { "@id": PERSON_ID },
      telephone: PHONE,
      address: { "@type": "PostalAddress", addressLocality: "Medellín", addressCountry: "CO" },
      areaServed: [MEDELLIN, { "@type": "Country", name: "Colombia" }, "Worldwide (remote)"],
      knowsLanguage: ["es", "en"],
      currenciesAccepted: "COP",
      priceRange: "$220.000 - $1.500.000 COP",
      contactPoint: { "@type": "ContactPoint", contactType: "customer service", telephone: PHONE, url: "https://wa.me/573216154870", availableLanguage: ["es", "en"] },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Katherine Velasquez",
      alternateName: "KT360",
      description: c.siteDesc,
      inLanguage: ["es", "en"],
      publisher: { "@id": PERSON_ID },
      about: [{ "@id": PERSON_ID }, { "@id": ORG_ID }],
    },
  ];
}

// The WebPage node for a localized page. `path` is the Spanish path.
function webPage(path: string, lang: Language, name: string, extra: Record<string, unknown> = {}) {
  const url = abs(langPath(path, lang));
  return {
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name,
    inLanguage: lang,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    ...extra,
  };
}

function breadcrumb(path: string, lang: Language, name: string) {
  const url = abs(langPath(path, lang));
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: COPY[lang].home, item: abs(langPath("/", lang)) },
      { "@type": "ListItem", position: 2, name, item: url },
    ],
  };
}

// The FAQ shown on the home page, read from the same translations the accordion renders.
function faqPage(lang: Language) {
  const url = abs(langPath("/", lang));
  return {
    "@type": "FAQPage",
    "@id": `${url}/#faq`,
    inLanguage: lang,
    isPartOf: { "@id": `${url}/#webpage` },
    mainEntity: translations[lang].faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\n/g, " ") },
    })),
  };
}

function priceValue(price: string) {
  return price.replace(/[^\d]/g, "");
}

// The services on /servicios. Their copy is Spanish only for now, so the English page lists the same Spanish names.
function serviceNodes() {
  const base = `${SITE_URL}/servicios/#`;
  const slug = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return SERVICES.map((s, i) => ({
    "@type": "Service",
    "@id": base + slug(s.title),
    name: s.title,
    description: [s.tagline, ...s.intro].join(" "),
    serviceType: s.title,
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
    ...(i === 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: PACKAGES.title,
            itemListElement: PACKAGES.items.map((p) => ({
              "@type": "Offer",
              name: p.name,
              description: p.desc,
              price: priceValue(p.price),
              priceCurrency: "COP",
              url: `${SITE_URL}/servicios`,
            })),
          },
        }
      : {}),
  }));
}

function podcastNode(lang: Language) {
  return {
    "@type": "PodcastSeries",
    "@id": PODCAST_ID,
    name: "Estrategia 360: Sin Pelos en la Lengua",
    alternateName: "360° Strategy: Raw & Unfiltered",
    description: COPY[lang].podcastDesc,
    url: abs(langPath("/podcast", lang)),
    image: abs("/images/KT_Podcast.webp"),
    inLanguage: "es",
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    genre: ["Business", "Entrepreneurship"],
  };
}

export type SchemaPage = "home" | "about" | "services" | "podcast" | "privacy";

const PATHS: Record<SchemaPage, string> = { home: "/", about: "/sobre-mi", services: "/servicios", podcast: "/podcast", privacy: "/privacidad" };

// The full @graph for one page. `name` is the page title (from its metadata).
export function pageGraph(page: SchemaPage, lang: Language, name: string) {
  const path = PATHS[page];
  const nodes: Record<string, unknown>[] = [...coreNodes(lang)];
  if (page === "home") {
    nodes.push(webPage(path, lang, name, { about: [{ "@id": PERSON_ID }, { "@id": ORG_ID }] }), faqPage(lang));
  } else if (page === "about") {
    nodes.push(webPage(path, lang, name, { "@type": "ProfilePage", mainEntity: { "@id": PERSON_ID }, breadcrumb: { "@id": `${abs(langPath(path, lang))}/#breadcrumb` } }), breadcrumb(path, lang, lang === "es" ? "Sobre mí" : "About me"));
  } else if (page === "services") {
    const services = serviceNodes();
    nodes.push(webPage(path, lang, name, { about: { "@id": ORG_ID }, mainEntity: services.map((s) => ({ "@id": s["@id"] })) }), breadcrumb(path, lang, lang === "es" ? "Servicios" : "Services"), ...services);
  } else if (page === "podcast") {
    nodes.push(webPage(path, lang, name, { mainEntity: { "@id": PODCAST_ID } }), breadcrumb(path, lang, "Podcast"), podcastNode(lang));
  } else {
    nodes.push(webPage(path, lang, name), breadcrumb(path, lang, lang === "es" ? "Privacidad" : "Privacy"));
  }
  return { "@context": "https://schema.org", "@graph": nodes };
}
