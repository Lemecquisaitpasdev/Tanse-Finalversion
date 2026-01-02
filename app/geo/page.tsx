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
  // Schema.org structured data for GEO service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Generative Engine Optimization (GEO)",
    "provider": {
      "@type": "Organization",
      "name": "TANSE",
      "url": "https://www.tanse.fr"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "description": "Optimisation de la visibilité sur les moteurs de recherche IA génératives (ChatGPT, Perplexity, Claude). Service pionnier de Generative Engine Optimization pour améliorer votre présence dans les réponses des IA.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le GEO est l'optimisation de votre visibilité sur les moteurs de recherche IA génératives comme ChatGPT, Perplexity et Claude. C'est l'équivalent du SEO mais pour les IA qui recommandent des entreprises et services."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi le GEO est-il important pour mon entreprise ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les IA génératives deviennent la première source d'information pour de nombreux utilisateurs. Être recommandé par ChatGPT ou Perplexity vous permet d'atteindre de nouveaux clients avant vos concurrents."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
