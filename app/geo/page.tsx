"use client";

import Header from "@/components/geo/Header";
import HeroSection from "@/components/geo/HeroSection";
import BrowserMockup from "@/components/geo/BrowserMockup";
import ThoughtPartnerSection from "@/components/geo/ThoughtPartnerSection";
import CRMMockupSection from "@/components/geo/CRMMockupSection";
import SkillsSection from "@/components/geo/SkillsSection";
import FeaturesSection from "@/components/geo/FeaturesSection";
import FAQSection from "@/components/geo/FAQSection";
import GeoFinalCta from "@/components/geo/GeoFinalCta";
import BrowserCompanyFooter from "@/app/components/outils/BrowserCompanyFooter";

export default function GeoPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <HeroSection />
        <BrowserMockup />
        <ThoughtPartnerSection />
        <CRMMockupSection />
        <SkillsSection />
        <FeaturesSection />
        <FAQSection />
        <GeoFinalCta />

        <BrowserCompanyFooter />
      </main>
    </>
  );
}
