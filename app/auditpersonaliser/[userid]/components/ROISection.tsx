import ROIChart from "./ROIChart";
import ROITable from "./ROITable";
import { PiggyBank } from "lucide-react";

const ROISection = () => {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            04 — ROI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Retour sur investissement
          </h2>
          <div className="flex items-center gap-3 text-muted-foreground">
            <PiggyBank className="w-5 h-5 text-chart-success" />
            <span>Breakeven dès le 2ème mois avec la formule Quick Win</span>
          </div>
        </div>

        <div className="grid gap-6">
          <ROIChart />
          <ROITable />
        </div>
      </div>
    </section>
  );
};

export default ROISection;