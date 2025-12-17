"use client";

import { useParams } from "next/navigation";
import HeroSection from "./components/HeroSection";
import ExecutiveSummary from "./components/ExecutiveSummary";
import OpportunitySection from "./components/OpportunitySection";
import TimelineSection from "./components/TimelineSection";
import ROISection from "./components/ROISection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { getMockAuditData } from "./data/mockData";

/**
 * Page d'audit personnalisé - Route dynamique /auditpersonaliser/[userid]
 *
 * Cette page affiche un audit stratégique personnalisé pour chaque client
 * Les données sont actuellement mockées mais seront remplacées par des données réelles
 */
export default function AuditPersonnalisePage() {
  const params = useParams();
  const userId = params.userid as string;

  // Récupérer les données mockées (à remplacer par un appel API plus tard)
  const auditData = getMockAuditData(userId);

  return (
    <div className="audit-theme">
      <main className="min-h-screen bg-black text-white">
        <HeroSection />
        <ExecutiveSummary />
        <OpportunitySection />
        <TimelineSection />
        <ROISection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
