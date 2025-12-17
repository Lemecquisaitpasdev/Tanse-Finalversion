import { Calendar, User, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-chart-secondary/20 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-secondary text-muted-foreground text-xs font-medium px-4 py-2 rounded-full mb-8 border border-border">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Document confidentiel
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Audit Stratégique
            <br />
            <span className="gradient-text">d'Acquisition Digitale</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Unlimited Scaling — Analyse GEO & SEO pour capturer{" "}
            <span className="text-foreground font-semibold">47k€/mois</span> de leads organiques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity font-semibold px-8 h-14 text-base">
              Voir les résultats
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary font-semibold px-8 h-14 text-base">
              Planifier un appel
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Calendar className="w-4 h-4 text-foreground" />
              </div>
              <span>Décembre 2025</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <User className="w-4 h-4 text-foreground" />
              </div>
              <span>Mouss — Unlimited Scaling</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Building2 className="w-4 h-4 text-foreground" />
              </div>
              <span>TANSE — Agence GEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;