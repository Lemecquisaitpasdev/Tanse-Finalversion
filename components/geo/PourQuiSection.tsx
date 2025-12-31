const PourQuiSection = () => {
  const profiles = [
    {
      title: "SaaS B2B",
      description: "Vos clients sont des professionnels qui utilisent déjà ChatGPT quotidiennement pour leur recherche de solutions. Quand ils cherchent 'outil de X pour Y', vous devez être recommandé. High LTV, long sales cycle, parfait pour le GEO.",
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "E-commerce Premium",
      description: "Vous vous battez sur des Google Ads à 15€ le clic. Sur ChatGPT, ces mêmes clients posent des questions et obtiennent des recommendations. Si vous êtes cité, c'est un lead qualifié gratuit. Le ROI est évident.",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "Agences & Services",
      description: "Vos clients cherchent 'agence de X à [ville]' directement sur Perplexity ou ChatGPT. Être dans les 2-3 recommendations = pipeline constant de leads inbound qualifiés. Game changer pour l'acquisition.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Scale-ups Tech",
      description: "Vous cherchez un nouveau canal d'acquisition avant que vos concurrents le saturent. Le GEO est exactement ça : une opportunité first-mover qui ne sera plus disponible dans 18-24 mois.",
      gradient: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight">
          Le GEO n'est pas<br />pour tout le monde.
        </h2>

        <p className="text-center text-lg text-foreground/70 mb-16 max-w-2xl mx-auto">
          Soyons honnêtes : si vous n'êtes pas dans ces profils, le GEO n'est probablement pas prioritaire pour vous maintenant.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`h-2 bg-gradient-to-r ${profile.gradient}`}></div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                  {profile.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {profile.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-muted-foreground italic">
            Vous vous reconnaissez dans un de ces profils ? Le GEO peut transformer votre acquisition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PourQuiSection;
