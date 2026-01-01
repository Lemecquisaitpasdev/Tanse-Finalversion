const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight">
          Pourquoi TANSE<br />est différent.
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto font-sans">
          Il y a des agences qui font du SEO et qui ont ajouté 'GEO' à leur site. Et il y a TANSE.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* La Recherche Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative bg-[#E8E4DF] rounded-2xl overflow-hidden flex-1 min-h-[350px]">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#FF4D4D]" />
              <div className="p-6 pl-20">
                <div className="bg-background rounded-lg shadow-lg p-4 max-w-sm">
                  <div className="space-y-2 text-xs font-mono">
                    <p className="text-muted-foreground">✓ Reverse-engineering ChatGPT citation patterns</p>
                    <p className="text-muted-foreground">✓ Claude & Perplexity source selection analysis</p>
                    <p className="text-muted-foreground">✓ 1000+ tests sur structured data impact</p>
                    <p className="text-muted-foreground">✓ Frameworks propriétaires GEO</p>
                  </div>
                  <div className="mt-3 bg-muted rounded-lg p-3 text-xs">
                    <span className="font-medium">R&D Timeline</span>
                    <p className="text-muted-foreground">Nov 2023 → Mai 2025: 18 mois d'expertise</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 mt-4">
              <h3 className="font-display text-2xl font-bold mb-2">18 Mois de R&D Pure</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                On n'a pas attendu que le GEO soit mainstream. On a passé 18 mois à reverse-engineer ChatGPT, Claude, et Perplexity. Ce n'est pas du marketing, c'est de la recherche appliquée.
              </p>
            </div>
          </div>

          {/* Les Outils Card */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-background border border-border rounded-2xl p-6 mb-4">
              <h3 className="font-display text-2xl font-bold mb-2">Stack Propriétaire</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                On a développé nos propres outils : GEO Score analyzer, Citation Tracker, Intent Mapping tool. Aucune autre agence en France n'a ça.
              </p>
            </div>
            <div className="bg-[#FFB800] rounded-2xl overflow-hidden flex-1 min-h-[300px] p-6">
              <div className="bg-background rounded-lg shadow-lg p-4">
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-primary/20 text-primary rounded text-[10px] font-mono">GEO Score</span>
                  <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">Citation Tracker</span>
                  <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">Intent Map</span>
                </div>
                <div className="border border-border rounded-lg p-3">
                  <p className="text-sm font-mono text-foreground mb-2">Analyse en cours...</p>
                  <div className="space-y-1">
                    <div className="h-2 bg-gradient-to-r from-orange-400 to-blue-400 rounded w-3/4"></div>
                    <div className="h-2 bg-gradient-to-r from-orange-400 to-blue-400 rounded w-full"></div>
                    <div className="h-2 bg-gradient-to-r from-orange-400 to-blue-400 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data & Résultats Card */}
          <div className="lg:col-span-3 bg-[#FFB8D9] rounded-2xl overflow-hidden p-6 min-h-[500px] flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-pink-900">Metrics &gt; Opinions</h3>
              <p className="font-mono text-sm text-pink-900 mb-6">
                Chaque recommandation vient de nos propres tests, de notre propre data. On documente tout, on mesure tout, on prouve tout.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-white/50 rounded-lg p-3">
                <p className="font-mono text-xs font-bold text-pink-900">Track Record Prouvé</p>
                <p className="font-mono text-2xl font-bold text-pink-900 mt-1">+240%</p>
                <p className="font-mono text-xs text-pink-900/70">Citations moyenne en 6 mois</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <p className="font-mono text-xs font-bold text-pink-900">Cas d'excellence</p>
                <p className="font-mono text-2xl font-bold text-pink-900 mt-1">+500%</p>
                <p className="font-mono text-xs text-pink-900/70">Niches moins compétitives</p>
              </div>
            </div>
          </div>

          {/* Okurai Collaboration Card */}
          <div className="lg:col-span-12 rounded-2xl overflow-hidden p-8 border-2" style={{
            background: 'linear-gradient(135deg, #17B9BE 0%, #444684 100%)',
            borderColor: 'rgba(23, 185, 190, 0.3)'
          }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold mb-3 text-white">Collaboration avec Okurai</h3>
                <p className="font-mono text-sm text-white/90 leading-relaxed">
                  En partenariat stratégique avec Okurai, Le 1<sup className="text-xs">er</sup> Observatoire de recherche sur L'IA, nous intégrons leurs insights scientifiques pour la stratégie digitale de nos clients. Cette collaboration nous permet d'offrir des approches holistiques très poussées, combinant la compréhension comportementale des LLM et une data précieuse, pour des stratégies qui transcendent le simple référencement.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-6">
                  <img src="/brand/okurai-logo.svg" alt="Okurai" className="w-16 h-16" />
                  <img src="/brand/tanse-logo.png" alt="TANSE" className="w-16 h-16 object-contain" />
                </div>
                <div className="text-center">
                  <p className="font-mono text-sm text-white font-semibold">Okurai × TANSE</p>
                  <p className="font-mono text-xs text-white/80">Stratégie unifiée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
