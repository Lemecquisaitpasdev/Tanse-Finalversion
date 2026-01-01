'use client';

import React, { useState, useEffect } from "react";

interface TabItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  mockupContent: React.ReactNode;
}

const GearIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 4V8M16 24V28M4 16H8M24 16H28M7.76 7.76L10.59 10.59M21.41 21.41L24.24 24.24M24.24 7.76L21.41 10.59M10.59 21.41L7.76 24.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ScreenIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 26H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 22V26" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const PenIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26L8 20L24 4L28 8L12 24L6 26Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    <path d="M20 8L24 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const TypewriterIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="24" height="14" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="8" y="18" width="16" height="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 4H20V8H12V4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M14 8V14M18 8V14" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const tabs: TabItem[] = [
  {
    id: "authority",
    icon: <GearIcon />,
    title: "Construire la Crédibilité",
    description: "Les LLMs analysent des centaines de signaux de confiance : qui vous cite, votre historique de contenu, vos certifications, votre présence dans des publications de référence. Comme E-E-A-T pour Google, mais en 10x plus profond. Vous devez prouver que vous êtes une source fiable.",
    mockupContent: (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs font-mono">E-E-A-T Score: 94/100</span>
        </div>
        <div className="bg-muted rounded p-3">
          <div className="text-xs font-mono mb-2">✓ 50+ publications citées</div>
          <div className="text-xs font-mono mb-2">✓ Schema.org validé</div>
          <div className="text-xs font-mono">✓ Présence média établie</div>
        </div>
      </div>
    )
  },
  {
    id: "structured",
    icon: <ScreenIcon />,
    title: "Parler le Langage des Machines",
    description: "Les LLMs adorent les données structurées. Schema.org avancé, knowledge graphs, metadata sémantique. Plus votre contenu est 'compréhensible' par une machine, plus vous avez de chances d'être cité. C'est technique, c'est précis, c'est mesurable.",
    mockupContent: (
      <div className="space-y-2">
        <div className="bg-muted rounded p-2 font-mono text-[10px]">
          <div className="text-blue-600">&lt;script type=&quot;application/ld+json&quot;&gt;</div>
          <div className="pl-2">{`{`}</div>
          <div className="pl-4">&quot;@type&quot;: &quot;Organization&quot;,</div>
          <div className="pl-4">&quot;name&quot;: &quot;TANSE&quot;,</div>
          <div className="pl-4">&quot;expertise&quot;: &quot;GEO&quot;</div>
          <div className="pl-2">{`}`}</div>
          <div className="text-blue-600">&lt;/script&gt;</div>
        </div>
      </div>
    )
  },
  {
    id: "content",
    icon: <PenIcon />,
    title: "Créer du Contenu Citation-Worthy",
    description: "Ce n'est pas du SEO writing. Les LLMs cherchent des insights uniques, des données propriétaires, des explications claires et complètes. Votre contenu doit être la MEILLEURE réponse à une question, pas juste 'assez bon pour ranker'. Standards beaucoup plus élevés.",
    mockupContent: (
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded p-3">
          <div className="text-xs font-mono font-bold mb-1">Guide Expert GEO</div>
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
    icon: <TypewriterIcon />,
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
  const [activeTab, setActiveTab] = useState("authority");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [animatedTabs, setAnimatedTabs] = useState<Set<string>>(new Set());
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  // Typewriter animation effect
  useEffect(() => {
    if (!activeTabData?.description) return;

    // Skip animation if this tab was already animated
    if (animatedTabs.has(activeTab)) {
      setDisplayedText(activeTabData.description);
      setIsTyping(false);
      return;
    }

    const fullText = activeTabData.description;
    const typingDuration = 2500; // 2.5 seconds total
    const charactersPerMs = fullText.length / typingDuration;

    setDisplayedText("");
    setIsTyping(true);

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
      } else {
        clearInterval(interval);
        setIsTyping(false);
        // Mark this tab as animated
        setAnimatedTabs(prev => new Set(prev).add(activeTab));
      }
    }, typingDuration / fullText.length);

    return () => clearInterval(interval);
  }, [activeTab, activeTabData?.description, animatedTabs]);

  return (
    <section className="relative py-24 px-6">
      {/* Smooth transition gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/80 via-background/40 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight">
          Comment fonctionne<br />réellement la citation<br />par les LLMs.
        </h2>

        <p className="text-center text-lg text-foreground/70 mb-16 max-w-2xl mx-auto">
          Les 4 Piliers
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8">
          {/* Left: Accordion (titles only) */}
          <div className="w-full">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`border-t border-l border-r transition-all cursor-pointer ${
                  index === tabs.length - 1 ? 'border-b' : ''
                } ${
                  activeTab === tab.id
                    ? 'bg-black text-white'
                    : 'bg-background text-foreground hover:bg-muted'
                } ${
                  activeTab === tab.id ? 'border-black' : 'border-border'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex items-center gap-4 px-6 py-5">
                  <span className={activeTab === tab.id ? 'text-white' : 'text-foreground'}>
                    {tab.icon}
                  </span>
                  <span className="font-mono text-base font-medium">{tab.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Middle: Description text with colorful blush bubble */}
          <div className="relative flex items-start pt-4">
            {/* Deformed bubble blush effect */}
            <div
              className="absolute -inset-8 opacity-20 blur-[80px] rounded-[60%_40%_50%_70%/50%_60%_40%_50%]"
              style={{
                background: 'linear-gradient(135deg, #FF8A4C 0%, #4F7DDE 50%, #FFB8D9 100%)',
                transform: 'rotate(-5deg)'
              }}
            />
            <p className="relative font-mono text-sm text-muted-foreground leading-relaxed">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-[2px] h-[1em] ml-1 bg-foreground animate-pulse" />
              )}
            </p>
          </div>

          {/* Right: Mockup illustration */}
          <div className="bg-background border border-border rounded-lg shadow-xl overflow-hidden">
            <div className="h-10 border-b border-border flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
            </div>
            <div className="p-6">
              {activeTabData?.mockupContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtPartnerSection;
