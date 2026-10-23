// English pages share the root layout (one <html> for the whole site), so the root
// renders lang="es". This flips it to "en" before paint for screen readers and translators.
// Search engines get the language from hreflang and the page text.
const setLang = `document.documentElement.lang="en"`;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: setLang }} />
      {children}
    </>
  );
}
