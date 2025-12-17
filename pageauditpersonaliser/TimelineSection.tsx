import TimelineChart from "./TimelineChart";
import { Clock } from "lucide-react";

const TimelineSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            03 — Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Feuille de route opérationnelle
          </h2>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="w-5 h-5 text-chart-secondary" />
            <span>Montée en charge progressive sur 6 mois</span>
          </div>
        </div>

        <TimelineChart />
      </div>
    </section>
  );
};

export default TimelineSection;