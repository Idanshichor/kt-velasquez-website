"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { Hero } from "@/components/home/hero";
import { Banner } from "@/components/home/banner";
import { Logos } from "@/components/home/logos";
import { Diagnostic } from "@/components/home/diagnostic";
import { AboutPreview } from "@/components/home/about-preview";
import { Method } from "@/components/home/method";
import { Services } from "@/components/home/services";
import { Newsletter } from "@/components/home/newsletter";
import { Podcast } from "@/components/home/podcast";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";

export default function PageClient() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-cream)] text-[var(--color-brand-black)]">
      <Navbar />
      <Hero />
      <Banner />
      <Marquee />
      <Logos />
      <Diagnostic />
      <AboutPreview />
      <Method />
      <Services />
      <Newsletter />
      <Podcast />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
