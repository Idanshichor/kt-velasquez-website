import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes, Playball } from "next/font/google";
import "./globals.css";
import { SITE_URL, pageMetadata } from "@/lib/seo";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const script = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });
const scriptReadable = Playball({ weight: "400", subsets: ["latin"], variable: "--font-playball" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: "Katherine Velasquez | Consultoría Estratégica 360",
    description: "Estratega 360° para fundadores y marcas maduras. Integro estructura de negocio, comunicación y mentalidad para escalar con claridad.",
    path: "/",
  }),
  // Canonicals are set per page; inheriting "/" would point pages like /gracias at the homepage.
  alternates: undefined,
};

import { LanguageProvider } from "@/context/language-context";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScroll } from "@/components/smooth-scroll";

// Hides animated elements until scene scripts take over. Gives up after 4s if scripts never load.
const motionFlag = `(function(){try{var d=document.documentElement;if(!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("motion-ok");setTimeout(function(){if(!window.__motionReady){d.classList.remove("motion-ok")}},4000)}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${script.variable} ${scriptReadable.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body className={`antialiased bg-[var(--color-brand-cream)] text-[var(--color-brand-black)]`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <SmoothScroll />
        <Analytics />
      </body>
    </html>
  );
}
