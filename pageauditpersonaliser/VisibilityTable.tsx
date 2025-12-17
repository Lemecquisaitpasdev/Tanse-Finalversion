import { XCircle } from "lucide-react";

const data = [
  { requete: "remonter feedback score facebook", volume: "880", position: "Non classé", concurrents: "uproas.io, bir.ch" },
  { requete: "débloquer business manager", volume: "720", position: "Non classé", concurrents: "anbluxury.com" },
  { requete: "compte pub facebook désactivé", volume: "1 900", position: "Non classé", concurrents: "dodropshipping.com" },
  { requete: "aide dmca dropshipping", volume: "590", position: "Non classé", concurrents: "Guides génériques" },
  { requete: "agence facebook ads urgence", volume: "390", position: "Non classé", concurrents: "ComeUp, Fiverr" },
];

const VisibilityTable = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border overflow-x-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="font-semibold text-foreground mb-1">Visibilité actuelle</h4>
          <p className="text-muted-foreground text-sm">Positionnement sur les requêtes cibles</p>
        </div>
      </div>
      
      <div className="space-y-3">
        {data.map((row, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex-1 min-w-0">
              <div className="font-medium text-foreground truncate">{row.requete}</div>
              <div className="text-muted-foreground text-sm mt-1">
                Concurrents : {row.concurrents}
              </div>
            </div>
            <div className="flex items-center gap-6 flex-shrink-0 ml-4">
              <div className="text-right">
                <div className="font-semibold text-foreground stat-number">{row.volume}</div>
                <div className="text-muted-foreground text-xs">recherches/mois</div>
              </div>
              <div className="flex items-center gap-2 text-destructive bg-destructive/10 px-3 py-1.5 rounded-full">
                <XCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{row.position}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisibilityTable;