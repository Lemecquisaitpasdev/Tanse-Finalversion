'use client';

import React from "react";

interface Pillar {
  id: string;
  title: string;
  description: string;
  mockupContent: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    id: "authority",
    title: "Construire la Crédibilité",
    description: "Les LLMs analysent des centaines de signaux de confiance : qui vous cite, votre historique de contenu, vos certifications, votre présence dans des publications de référence. Comme E-E-A-T pour Google, mais en 10x plus profond. Vous devez prouver que vous êtes une source fiable.",
    mockupContent: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs font-mono">E-E-A-T Score: 94/100</span>
        </div>
        <div className="bg-muted rounded p-2">
          <div className="text-xs font-mono mb-2">✓ 50+ publications citées</div>
          <div className="text-xs font-mono mb-2">✓ Schema.org validé</div>
          <div className="text-xs font-mono">✓ Présence média établie</div>
        </div>
      </div>
    )
  },
  {
    id: "structured",
    title: "Parler le Langage des Machines",
    description: "Les LLMs adorent les données structurées. Schema.org avancé, knowledge graphs, metadata sémantique. Plus votre contenu est 'compréhensible' par une machine, plus vous avez de chances d'être cité. C'est technique, c'est précis, c'est mesurable.",
    mockupContent: (
      <div className="space-y-2">
        <div className="bg-muted rounded p-2 font-mono text-[10px]">
          <div className="text-blue-600">&lt;script type=&quot;application/ld+json&quot;&gt;</div>
          <div className="pl-2">{`{`}</div>
          <div className="pl-4">&quot;@type&quot;: &quot;Organization&quot;,</div>
          <div className="pl-4">&quot;name&quot;: &quot;TANSE&quot;</div>
          <div className="pl-2">{`}`}</div>
          <div className="text-blue-600">&lt;/script&gt;</div>
        </div>
      </div>
    )
  },
  {
    id: "content",
    title: "Créer du Contenu Citation-Worthy",
    description: "Ce n'est pas du SEO writing. Les LLMs cherchent des insights uniques, des données propriétaires, des explications claires et complètes. Votre contenu doit être la MEILLEURE réponse à une question, pas juste 'assez bon pour ranker'. Standards beaucoup plus élevés.",
    mockupContent: (
      <div className="space-y-2">
        <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded p-3">
          <div className="text-xs font-mono font-bold mb-1">Guide Expert</div>
          <div className="text-[10px] font-mono text-muted-foreground">2500 mots • 15 sources • Données 2025</div>
        </div>
        <div className="flex gap-1">
          <div className="text-xs">⭐</div>
          <div className="text-xs">⭐</div>
          <div className="text-xs">⭐</div>
          <div className="text-xs">⭐</div>
          <div className="text-xs">⭐</div>
        </div>
      </div>
    )
  },
  {
    id: "intent",
    title: "Comprendre les Vraies Requêtes",
    description: "Les gens ne cherchent pas de la même manière sur ChatGPT et sur Google. C'est conversationnel, contextuel, nuancé. Il faut mapper ces nouveaux patterns de recherche et adapter votre stratégie de contenu en conséquence. Data > intuition.",
    mockupContent: (
      <div className="space-y-2">
        <div className="bg-muted rounded p-2 text-[10px] font-mono">
          <div className="mb-1">🔍 &quot;Je cherche un CRM pour...&quot;</div>
          <div className="mb-1">💬 &quot;Quel est le meilleur...&quot;</div>
          <div>🎯 &quot;Comment choisir...&quot;</div>
        </div>
        <div className="text-xs font-mono text-green-600">✓ 127 requêtes mappées</div>
      </div>
    )
  }
];

const ThoughtPartnerSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight">
          Comment fonctionne<br />réellement la citation<br />par les LLMs.
        </h2>

        <p className="text-center text-lg text-foreground/70 mb-16 max-w-2xl mx-auto">
          Les 4 Piliers
        </p>

        <div className="space-y-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`grid md:grid-cols-[200px_1fr_300px] gap-6 items-start p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow ${
                index === 0 ? 'bg-gradient-to-r from-orange-50/50 to-blue-50/50' : ''
              }`}
            >
              {/* Left: Title */}
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground sticky top-24">
                  {pillar.title}
                </h3>
              </div>

              {/* Center: Description */}
              <div>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Right: Mockup */}
              <div className="bg-background border border-border rounded-lg shadow-lg overflow-hidden">
                <div className="h-8 bg-muted flex items-center px-3 gap-2 border-b border-border">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="p-4">
                  {pillar.mockupContent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThoughtPartnerSection;
