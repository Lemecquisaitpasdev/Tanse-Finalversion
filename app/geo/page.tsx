import Header from "@/components/geo/Header";
import HeroSection from "@/components/geo/HeroSection";
import BrowserMockup from "@/components/geo/BrowserMockup";
import ThoughtPartnerSection from "@/components/geo/ThoughtPartnerSection";
import SkillsSection from "@/components/geo/SkillsSection";
import FeaturesSection from "@/components/geo/FeaturesSection";
import FAQSection from "@/components/geo/FAQSection";
import CTASection from "@/components/geo/CTASection";
import Footer from "@/components/geo/Footer";

export default function GeoPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <HeroSection />
        <BrowserMockup />
        <ThoughtPartnerSection />
        <SkillsSection />
        <FeaturesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
