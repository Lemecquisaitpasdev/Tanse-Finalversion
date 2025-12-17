import { TrendingUp, Clock } from "lucide-react";

const data = [
  { formule: "Quick Win", duree: "3 mois", investissement: "2 900€", ca: "5 600€", roi: "+93%", breakeven: "Mois 2" },
  { formule: "Domination", duree: "6 mois", investissement: "4 900€", ca: "19 200€", roi: "+292%", breakeven: "Mois 3", recommended: true },
];

const ROITable = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="font-semibold text-foreground mb-1">Détail ROI par formule</h4>
          <p className="text-muted-foreground text-sm">Comparaison des deux options proposées</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((row, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-xl ${row.recommended ? 'bg-primary/10 border border-primary/30' : 'bg-secondary/50'}`}
          >
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-semibold text-foreground text-lg">{row.formule}</h5>
              {row.recommended && (
                <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">
                  Recommandé
                </span>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Investissement</span>
                <span className="font-medium text-foreground">{row.investissement}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">CA généré (M1-M6)</span>
                <span className="font-medium text-foreground">{row.ca}</span>
              </div>
              
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-chart-success" />
                  <span className="text-muted-foreground text-sm">ROI</span>
                </div>
                <span className="text-xl font-bold text-chart-success stat-number">{row.roi}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-chart-secondary" />
                  <span className="text-muted-foreground text-sm">Breakeven</span>
                </div>
                <span className="font-medium text-foreground">{row.breakeven}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ROITable;