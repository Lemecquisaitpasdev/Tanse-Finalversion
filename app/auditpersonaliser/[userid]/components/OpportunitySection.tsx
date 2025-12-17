import ProjectionChart from "./ProjectionChart";
import ConversionTable from "./ConversionTable";
import { TrendingUp } from "lucide-react";

const OpportunitySection = () => {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            02 — Opportunité
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Projection financière sur 12 mois
          </h2>
          <div className="flex items-center gap-3 text-muted-foreground">
            <TrendingUp className="w-5 h-5 text-chart-success" />
            <span>Estimation conservatrice basée sur les volumes de recherche actuels</span>
          </div>
        </div>

        <div className="grid gap-6">
          <ProjectionChart />
          <ConversionTable />
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;