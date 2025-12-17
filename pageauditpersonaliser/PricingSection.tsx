import PricingCard from "./PricingCard";
import { Package } from "lucide-react";

const quickWinFeatures = [
  "5 pages services optimisées (SEO + GEO)",
  "1 page FAQ (15 questions)",
  "3 contenus additionnels",
  "3 rapports mensuels",
  "Support email (<48h)",
  "Garantie résultats M+3",
];

const dominationFeatures = [
  "10 pages services + guides",
  "2 pages études de cas",
  "12 contenus (2/mois)",
  "Stratégie backlinks",
  "Veille mensuelle",
  "6 rapports détaillés",
  "Support prioritaire (<24h)",
  "Garantie résultats M+6",
];

const PricingSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            05 — Formules
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Choisissez votre niveau d'ambition
          </h2>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Package className="w-5 h-5 text-primary" />
            <span>Garantie résultats ou poursuite gratuite jusqu'à atteinte</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <PricingCard 
            title="Quick Win"
            price="2 900€"
            duration="3 mois"
            features={quickWinFeatures}
          />
          <PricingCard 
            title="Domination"
            price="4 900€"
            duration="6 mois"
            features={dominationFeatures}
            recommended
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;