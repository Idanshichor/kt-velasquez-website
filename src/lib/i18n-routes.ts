import type { Language } from "@/app/translations";

// Pages that exist in both languages. Spanish lives at the bare path, English under /en.
// Other routes (/gracias, /empecemos) are noindex and keep the old toggle (query string / saved choice).
export const LOCALIZED_PATHS = ["/", "/sobre-mi", "/servicios", "/podcast", "/privacidad"];

function isEnglishPath(pathname: string) {
  return pathname === "/en" || pathname.startsWith("/en/");
}

// The Spanish path a URL path stands for: "/en/servicios" -> "/servicios", "/en" -> "/".
export function basePath(pathname: string) {
  if (!isEnglishPath(pathname)) return pathname;
  return pathname.slice(3) || "/";
}

// The language a URL fixes, or null when the route is not localized.
export function routeLanguage(pathname: string | null): Language | null {
  if (!pathname) return null;
  if (!LOCALIZED_PATHS.includes(basePath(pathname))) return null;
  return isEnglishPath(pathname) ? "en" : "es";
}

// A Spanish path in the given language: ("/servicios", "en") -> "/en/servicios".
export function langPath(path: string, lang: Language) {
  return lang === "en" ? (path === "/" ? "/en" : `/en${path}`) : path;
}

// Localizes an internal href, keeping any #hash. Hrefs to non-localized routes pass through.
export function localizeHref(href: string, lang: Language) {
  if (!href.startsWith("/")) return href;
  const i = href.indexOf("#");
  const path = i === -1 ? href : href.slice(0, i);
  const hash = i === -1 ? "" : href.slice(i);
  if (!LOCALIZED_PATHS.includes(path)) return href;
  return langPath(path, lang) + hash;
}
