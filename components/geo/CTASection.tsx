import { Button } from "./Button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-12 md:p-16 text-center border border-border">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl italic leading-tight mb-6">
            Prêt à dominer<br />le GEO ?
          </h2>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Audit gratuit de 50 requêtes stratégiques. Zéro engagement, résultats concrets en 48h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-audit-gratuit">
              <Button className="px-8 py-6 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all">
                Réserver mon audit gratuit
              </Button>
            </Link>
            <Link href="/forfaits-geo-seo" className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors">
              Voir nos forfaits GEO
            </Link>
          </div>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center gap-8 opacity-50">
            <div className="font-mono text-sm text-foreground/60">ChatGPT</div>
            <div className="font-mono text-sm text-foreground/60">•</div>
            <div className="font-mono text-sm text-foreground/60">Claude</div>
            <div className="font-mono text-sm text-foreground/60">•</div>
            <div className="font-mono text-sm text-foreground/60">Perplexity</div>
            <div className="font-mono text-sm text-foreground/60">•</div>
            <div className="font-mono text-sm text-foreground/60">Gemini</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
