import { Mail, Globe, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-bold text-2xl mb-4 gradient-text">TANSE</h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Première agence française spécialisée en visibilité sur les moteurs de recherche IA (GEO) et traditionnels (SEO).
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:contact@tanse.fr" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Mail className="w-4 h-4" />
                contact@tanse.fr
              </a>
              <a href="https://tanse.fr" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Globe className="w-4 h-4" />
                tanse.fr
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Validité</h4>
            <div className="text-muted-foreground text-sm space-y-2">
              <p>Émis : 15 décembre 2025</p>
              <p>Valable : 30 jours</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Lock className="w-3 h-3" />
            Document confidentiel — Destiné exclusivement à Mouss (Unlimited Scaling)
          </div>
          <div className="text-muted-foreground text-xs">
            © 2025 TANSE. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;