import HeroSection from "@/components/audit/HeroSection";
import ExecutiveSummary from "@/components/audit/ExecutiveSummary";
import DiagnosticSection from "@/components/audit/DiagnosticSection";
import OpportunitySection from "@/components/audit/OpportunitySection";
import TimelineSection from "@/components/audit/TimelineSection";
import ROISection from "@/components/audit/ROISection";
import PricingSection from "@/components/audit/PricingSection";
import CTASection from "@/components/audit/CTASection";
import Footer from "@/components/audit/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ExecutiveSummary />
      <DiagnosticSection />
      <OpportunitySection />
      <TimelineSection />
      <ROISection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
