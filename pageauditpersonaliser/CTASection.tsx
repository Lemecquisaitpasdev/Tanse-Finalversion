import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow-pulse" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-chart-secondary/20 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            Prêt à passer à l'action ?
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">
            Capturez <span className="gradient-text">47k€/mois</span> de leads organiques
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Transformons votre expertise en machine à leads SEO/GEO avec un ROI garanti dès le 3ème mois.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary hover:opacity-90 transition-opacity font-semibold px-10 h-14 text-base"
            >
              Démarrons maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary font-semibold px-10 h-14 text-base"
            >
              Planifier un appel découverte
            </Button>
          </div>
          
          <p className="text-muted-foreground text-sm mt-8">
            Garantie résultats • Sans engagement • Réponse sous 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;