import { ArrowRight } from "lucide-react";

const data = [
  { etape: "Recherches mensuelles", resultat: "4 480", unit: "requêtes" },
  { etape: "Clics potentiels (35% CTR)", resultat: "1 568", unit: "clics" },
  { etape: "Leads générés (15%)", resultat: "235", unit: "leads" },
  { etape: "Clients convertis (25%)", resultat: "59", unit: "clients" },
];

const ConversionTable = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="font-semibold text-foreground mb-1">Tunnel de conversion</h4>
          <p className="text-muted-foreground text-sm">Estimation basée sur les taux moyens du secteur</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-stretch gap-2">
        {data.map((row, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex-1 p-4 rounded-xl bg-secondary/50 text-center">
              <div className="text-2xl font-bold text-foreground stat-number">{row.resultat}</div>
              <div className="text-muted-foreground text-sm mt-1">{row.unit}</div>
              <div className="text-muted-foreground text-xs mt-2">{row.etape}</div>
            </div>
            {index < data.length - 1 && (
              <ArrowRight className="w-5 h-5 text-muted-foreground mx-2 hidden md:block flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
      
      {/* Final result */}
      <div className="mt-6 p-6 rounded-xl gradient-primary">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-primary-foreground/80 text-sm">CA mensuel additionnel estimé</div>
            <div className="text-primary-foreground text-xs mt-1">59 clients × 800€ panier moyen</div>
          </div>
          <div className="text-4xl font-bold text-primary-foreground stat-number">47 200€</div>
        </div>
      </div>
    </div>
  );
};

export default ConversionTable;