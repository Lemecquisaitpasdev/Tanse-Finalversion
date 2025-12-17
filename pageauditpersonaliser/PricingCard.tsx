import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

const PricingCard = ({ title, price, duration, features, recommended }: PricingCardProps) => {
  return (
    <div className={`relative rounded-2xl p-8 transition-all duration-300 ${
      recommended 
        ? "bg-card border-2 border-primary card-glow" 
        : "bg-secondary border border-border hover:border-muted-foreground/30"
    }`}>
      {recommended && (
        <span className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
          RECOMMANDÉ
        </span>
      )}
      
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6">Durée : {duration}</p>
      
      <div className="mb-8">
        <span className="text-5xl font-bold text-foreground stat-number">{price}</span>
        <span className="text-muted-foreground ml-2">HT</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              recommended ? 'bg-primary/20' : 'bg-muted'
            }`}>
              <Check className={`w-3 h-3 ${recommended ? 'text-primary' : 'text-muted-foreground'}`} />
            </div>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full h-12 font-semibold ${
          recommended 
            ? 'gradient-primary hover:opacity-90' 
            : 'bg-secondary border border-border hover:bg-muted'
        }`}
      >
        Choisir cette formule
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};

export default PricingCard;