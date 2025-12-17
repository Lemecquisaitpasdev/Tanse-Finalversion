/**
 * Données mockées pour l'audit personnalisé
 * À remplacer plus tard par des données réelles depuis la base de données
 */

export interface AuditData {
  client: {
    name: string;
    company: string;
    date: string;
  };
  summary: {
    monthlyLoss: string;
    monthlySearches: string;
    yearlyOpportunity: string;
    currentPosition: string;
  };
  opportunities: {
    searchVolume: number;
    conversionRate: number;
    averageOrderValue: number;
  };
  roi: {
    investment: number;
    monthlyReturn: number;
    breakEvenMonths: number;
  };
  pricing: {
    monthly: number;
    setup: number;
    features: string[];
  };
}

export const getMockAuditData = (userId: string): AuditData => {
  // Pour l'instant, retourner des données mockées identiques
  // Plus tard, cela pourra être basé sur userId pour récupérer les vraies données

  return {
    client: {
      name: "Mouss",
      company: "Unlimited Scaling",
      date: "Décembre 2025"
    },
    summary: {
      monthlyLoss: "47k€",
      monthlySearches: "4 480",
      yearlyOpportunity: "566k€",
      currentPosition: "0"
    },
    opportunities: {
      searchVolume: 4480,
      conversionRate: 2.5,
      averageOrderValue: 1200
    },
    roi: {
      investment: 15000,
      monthlyReturn: 47000,
      breakEvenMonths: 1
    },
    pricing: {
      monthly: 2500,
      setup: 5000,
      features: [
        "Architecture de contenu SEO & GEO",
        "Optimisation pour modèles de langage",
        "Suivi et rapports mensuels",
        "Support prioritaire"
      ]
    }
  };
};
