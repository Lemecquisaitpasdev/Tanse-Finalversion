'use client';

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Phase {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  mockupContent: React.ReactNode;
}

const DiagnosticIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M29 29L40 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 14V20L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const InfraIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M14 14H34M14 22H34M14 30H34" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="10" width="12" height="4" fill="currentColor"/>
  </svg>
);

const ContentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26L8 20L24 4L28 8L12 24L6 26Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none"/>
    <path d="M20 8L24 12" stroke="currentColor" strokeWidth="2"/>
    <rect x="8" y="28" width="32" height="16" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const MonitorIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="24" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M12 18L18 24L32 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 40H32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 32V40" stroke="currentColor" strokeWidth="3"/>
  </svg>
);

const phases: Phase[] = [
  {
    id: "diagnostic",
    icon: <DiagnosticIcon />,
    name: "Audit 360° Visibilité",
    description: "Test de 50-100 requêtes stratégiques sur ChatGPT, Claude, Perplexity et Gemini pour identifier votre visibilité.",
    mockupContent: (
      <>
        <div className="h-3 bg-muted rounded w-2/3 mb-2" />
        <div className="h-3 bg-muted rounded w-full mb-2" />
        <div className="h-3 bg-muted rounded w-1/2 mb-4" />
        <div className="bg-gradient-to-r from-red-100 to-yellow-100 rounded p-3 mb-2">
          <p className="text-xs font-mono">❌ Non cité: 42/50</p>
        </div>
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded p-3">
          <p className="text-xs font-mono">✓ Cité: 8/50</p>
        </div>
      </>
    )
  },
  {
    id: "fondations",
    icon: <InfraIcon />,
    name: "Infrastructure Tech",
    description: "Structured data avancé, Schema.org optimisé et semantic markup pour que les LLMs comprennent votre business.",
    mockupContent: (
      <>
        <div className="bg-muted rounded p-2 mb-3 text-[10px] font-mono">
          <div className="text-blue-600">&lt;script type="application/ld+json"&gt;</div>
          <div className="pl-2">{`{`}</div>
          <div className="pl-3">"@type": "Organization",</div>
          <div className="pl-3">"name": "Votre Entreprise"</div>
          <div className="pl-2">{`}`}</div>
          <div className="text-blue-600">&lt;/script&gt;</div>
        </div>
        <div className="flex gap-1">
          <div className="px-2 py-1 bg-green-100 rounded text-[9px]">✓ Schema.org</div>
          <div className="px-2 py-1 bg-green-100 rounded text-[9px]">✓ E-E-A-T</div>
        </div>
      </>
    )
  },
  {
    id: "content",
    icon: <ContentIcon />,
    name: "Création Citations",
    description: "Contenu optimisé pour les 50-200 requêtes que vos clients font aux LLMs. Ciblé, pas générique.",
    mockupContent: (
      <>
        <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded p-3 mb-3">
          <p className="text-xs font-mono font-bold">Guide Expert</p>
          <p className="text-[9px] font-mono text-muted-foreground">2500 mots • 15 sources</p>
        </div>
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => <div key={i} className="text-xs">⭐</div>)}
        </div>
        <div className="text-[10px] font-mono text-green-600">✓ Citation-worthy</div>
      </>
    )
  },
  {
    id: "monitoring",
    icon: <MonitorIcon />,
    name: "Suivi Continu",
    description: "Dashboard temps réel : citations, positions, share of voice. A/B test permanent pour optimiser.",
    mockupContent: (
      <>
        <div className="bg-muted rounded p-2 mb-3">
          <p className="text-xs font-mono mb-1">Citations ce mois</p>
          <p className="text-2xl font-bold text-green-600">+142%</p>
        </div>
        <div className="h-20 bg-gradient-to-t from-blue-200 to-orange-200 rounded mb-2" />
        <div className="text-[10px] font-mono text-muted-foreground">Mise à jour: il y a 5 min</div>
      </>
    )
  }
];

const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhase = () => setCurrentIndex((prev) => (prev + 1) % phases.length);
  const prevPhase = () => setCurrentIndex((prev) => (prev - 1 + phases.length) % phases.length);

  const currentPhase = phases[currentIndex];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-4 leading-tight">
          Comment TANSE transforme<br />votre présence GEO.
        </h2>

        <p className="text-center text-lg text-foreground/70 mb-16 max-w-2xl mx-auto">
          Notre approche en 4 phases, développée sur 18 mois de R&D.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 relative">
            <div
              className="rounded-2xl p-6 min-h-[500px]"
              style={{ background: 'linear-gradient(135deg, #FF6B4A 0%, #FF8A4C 30%, #4A90D9 100%)' }}
            >
              <div className="bg-background rounded-lg shadow-2xl overflow-hidden">
                <div className="h-10 bg-muted flex items-center px-3 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex gap-1 ml-4">
                    <div className="px-2 py-1 bg-primary/20 rounded text-[10px] font-mono">TANSE</div>
                    <div className="px-2 py-1 bg-muted-foreground/10 rounded text-[10px] font-mono">Dashboard</div>
                    <div className="px-2 py-1 bg-muted-foreground/10 rounded text-[10px] font-mono">Analytics</div>
                  </div>
                </div>
                <div className="p-6 min-h-[350px]">
                  <div className="flex gap-6">
                    <div className="flex-1 space-y-3">
                      {currentPhase?.mockupContent}
                    </div>
                    <div className="w-48 border-l border-border pl-4">
                      <div className="flex gap-1 mb-4">
                        <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">Phase {currentIndex + 1}</span>
                        <span className="px-2 py-1 bg-primary/20 rounded text-[10px] font-mono">Active</span>
                      </div>
                      <div className="p-3 bg-muted rounded-lg text-xs">
                        <p className="text-muted-foreground font-mono">{currentPhase?.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={prevPhase} className="p-2 hover:bg-muted rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-[220px] h-[280px]">
              <div className="absolute top-2 left-2 w-full h-full border-2 border-border bg-background rounded-lg" />
              <div className="absolute top-1 left-1 w-full h-full border-2 border-border bg-background rounded-lg" />
              <div className="relative w-full h-full border-2 border-foreground bg-background rounded-lg p-6 flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-foreground">{currentPhase?.icon}</span>
                </div>
                <div className="mt-auto">
                  <h3 className="font-mono text-xl font-bold mb-2">{currentPhase?.name}</h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{currentPhase?.description}</p>
                </div>
              </div>
            </div>

            <button onClick={nextPhase} className="p-2 hover:bg-muted rounded-full transition-colors border-2 border-primary">
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <div className="py-3 flex items-center gap-4 animate-marquee bg-transparent">
            <span className="font-mono text-lg font-bold text-foreground whitespace-nowrap flex items-center gap-2">
              Audit GEO Gratuit ➜ ➜ ➜ Réservez maintenant ➜ ➜ ➜ Audit GEO Gratuit ➜ ➜ ➜ Réservez maintenant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
