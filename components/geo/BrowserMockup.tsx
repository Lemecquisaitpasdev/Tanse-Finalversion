const TabBadge = ({ icon, label, light }: { icon: string; label: string; light?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
    light
      ? "bg-white/20 text-white"
      : "bg-muted text-foreground/80"
  }`}>
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);

const BrowserMockup = () => {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* 6 Educational Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: GEO 101 */}
          <div className="bg-card rounded-2xl p-6 border border-border min-h-[240px] flex flex-col">
            <h3 className="font-mono text-2xl font-bold text-foreground mb-4">GEO 101</h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Le Generative Engine Optimization : l'ensemble des techniques pour être cité et recommandé par les moteurs de recherche IA comme ChatGPT, Claude, et Perplexity. C'est le référencement, mais pour l'ère des LLMs.
            </p>
          </div>

          {/* Card 2: Le Problème */}
          <div className="bg-card rounded-2xl p-6 border border-border min-h-[240px] flex flex-col">
            <h3 className="font-mono text-2xl font-bold text-foreground mb-4">Votre Vraie Compétition</h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Vos clients ne scrollent plus 10 liens Google. Ils posent une question à ChatGPT, obtiennent UNE réponse avec 2-3 sources citées. Si vous n'êtes pas dans ces sources, le deal est perdu avant même de commencer.
            </p>
          </div>

          {/* Card 3: Comment Ça Marche */}
          <div className="bg-card rounded-2xl p-6 border border-border min-h-[240px] flex flex-col">
            <h3 className="font-mono text-2xl font-bold text-foreground mb-4">Les Mécaniques des LLMs</h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Les LLMs choisissent leurs sources selon des critères précis : structured data, autorité du domaine, fraîcheur du contenu, semantic relevance. Comprendre ces mécaniques = pouvoir les optimiser.
            </p>
          </div>

          {/* Card 4: Pourquoi Maintenant */}
          <div className="bg-card rounded-2xl p-6 border border-border min-h-[240px] flex flex-col">
            <h3 className="font-mono text-2xl font-bold text-foreground mb-4">La Fenêtre d'Opportunité</h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              90% des entreprises ne savent même pas que le GEO existe. Celles qui se positionnent maintenant domineront leurs niches pendant 2-3 ans. First-mover advantage réel.
            </p>
          </div>

          {/* Card 5: Les Enjeux Business */}
          <div className="bg-card rounded-2xl p-6 border border-border min-h-[240px] flex flex-col">
            <h3 className="font-mono text-2xl font-bold text-foreground mb-4">L'Impact Réel</h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Être cité par un LLM = apparaître au moment exact où votre client cherche une solution. Zero waste, maximum intent, qualified leads. C'est du demand capture pur.
            </p>
          </div>

          {/* Card 6: La Solution TANSE */}
          <div
            className="rounded-2xl p-6 min-h-[240px] flex flex-col"
            style={{
              background: "linear-gradient(180deg, #FF8A4C 0%, #E86A47 35%, #4F7DDE 100%)"
            }}
          >
            <h3 className="font-mono text-2xl font-bold text-white mb-4">L'Expertise Française</h3>
            <p className="font-mono text-sm text-white/90 leading-relaxed">
              TANSE est la première agence GEO de France. 18 mois de R&D sur les LLMs, frameworks propriétaires, outils custom. On ne vend pas du SEO rebrandé, on a construit une vraie expertise GEO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowserMockup;
