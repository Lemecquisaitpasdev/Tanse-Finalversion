import StatCard from "./StatCard";
import { TrendingUp, AlertCircle, Target, Search } from "lucide-react";

const ExecutiveSummary = () => {
  const stats = [
    { value: "47k€", label: "CA mensuel perdu", icon: AlertCircle, variant: 'highlight' as const },
    { value: "4 480", label: "Recherches/mois", icon: Search, variant: 'default' as const },
    { value: "566k€", label: "Opportunité annuelle", icon: TrendingUp, variant: 'default' as const },
    { value: "0", label: "Position Google actuelle", icon: Target, variant: 'default' as const },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Executive Summary
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Une opportunité de{" "}
            <span className="gradient-text">566k€/an</span>{" "}
            non exploitée
          </h2>
          
          <p className="text-muted-foreground max-w-3xl leading-relaxed text-lg">
            Unlimited Scaling dispose d'une forte autorité sur les canaux sociaux 
            <span className="text-foreground"> (23K followers Instagram, 2000+ membres Discord)</span> mais présente 
            une empreinte quasi inexistante sur les moteurs de recherche.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.label} 
              value={stat.value} 
              label={stat.label}
              delay={index * 100}
              variant={stat.variant}
            />
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border card-glow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">Recommandation stratégique</h3>
              <p className="text-muted-foreground leading-relaxed">
                Déploiement d'une architecture de contenu indexable (SEO) et optimisée pour les modèles de langage (GEO), 
                permettant de capter les flux de recherche à forte intention d'achat sans modifier l'infrastructure commerciale existante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;