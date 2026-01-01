'use client';

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

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
    description: "Test de 50-100 requêtes sur ChatGPT, Claude, Perplexity et Gemini.",
    mockupContent: (
      <>
        {/* Header */}
        <div className="mb-4 pb-3 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold font-mono">Phase 1 - Audit 360° Visibilité</h3>
            <span className="px-2 py-1 bg-green-500/20 text-green-700 rounded text-[8px] font-bold">ACTIVE</span>
          </div>
        </div>

        {/* Large Citation Rate Alert */}
        <div className="mb-4 p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg border-2 border-orange-400">
          <div className="text-center">
            <p className="text-[10px] font-mono text-muted-foreground mb-1">Taux citation global</p>
            <p className="text-4xl font-bold text-orange-600">16%</p>
            <div className="mt-2 h-2 bg-white/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-[16%]"></div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-2 mb-4">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-3 border-l-4 border-red-500">
            <p className="text-[10px] font-mono font-bold text-red-700 mb-1">❌ Non cité: 42/50 requêtes</p>
            <p className="text-[9px] font-mono text-muted-foreground">ChatGPT (8/15) • Claude (2/12) • Perplexity (4/13)</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border-l-4 border-green-500">
            <p className="text-[10px] font-mono font-bold text-green-700 mb-1">✅ Cité: 8/50 requêtes</p>
            <p className="text-[9px] font-mono text-muted-foreground">Position moy: #3.2 • Contexte: 87%</p>
          </div>
        </div>

        {/* Competitor Benchmark */}
        <div className="bg-muted/50 rounded-lg p-3">
          <p className="text-[9px] font-mono font-bold mb-2 text-muted-foreground">BENCHMARK CONCURRENTS</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-background rounded p-2 text-center border border-border">
              <p className="text-[8px] font-mono text-muted-foreground mb-1">Concurrent A</p>
              <p className="text-lg font-bold">34%</p>
            </div>
            <div className="bg-background rounded p-2 text-center border border-border">
              <p className="text-[8px] font-mono text-muted-foreground mb-1">Concurrent B</p>
              <p className="text-lg font-bold">28%</p>
            </div>
            <div className="bg-orange-100 rounded p-2 text-center border-2 border-orange-400">
              <p className="text-[8px] font-mono text-orange-700 mb-1">Vous</p>
              <p className="text-lg font-bold text-orange-600">16%</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: "fondations",
    icon: <InfraIcon />,
    name: "Infrastructure Tech",
    description: "Schema.org, structured data et knowledge graph.",
    mockupContent: (
      <>
        {/* Header */}
        <div className="mb-4 pb-3 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold font-mono">Phase 2 - Infrastructure Technique</h3>
            <span className="px-2 py-1 bg-green-500/20 text-green-700 rounded text-[8px] font-bold">ACTIVE</span>
          </div>
        </div>

        {/* Realistic Schema.org/JSON-LD Code */}
        <div className="mb-4 bg-slate-900 rounded-lg p-3 font-mono text-[9px] overflow-x-auto">
          <div className="text-blue-400">&lt;script type="application/ld+json"&gt;</div>
          <div className="text-white pl-2">{`{`}</div>
          <div className="text-purple-400 pl-4">"@context": "https://schema.org",</div>
          <div className="text-purple-400 pl-4">"@type": "Organization",</div>
          <div className="text-green-400 pl-4">"name": "Votre Entreprise",</div>
          <div className="text-green-400 pl-4">"expertise": "SaaS B2B",</div>
          <div className="text-orange-400 pl-4">"score:AI": 94,</div>
          <div className="text-yellow-400 pl-4">"knowledgeGraph": true</div>
          <div className="text-white pl-2">{`}`}</div>
          <div className="text-blue-400">&lt;/script&gt;</div>
        </div>

        {/* 2x2 Status Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-2">
            <p className="text-[8px] font-mono text-green-700 mb-1">✓ Schema.org</p>
            <p className="text-[10px] font-bold text-green-600">Implémenté</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
            <p className="text-[8px] font-mono text-blue-700 mb-1">✓ E-E-A-T</p>
            <p className="text-[10px] font-bold text-blue-600">Score 8.7/10</p>
          </div>
        </div>

        {/* Active Structured Signals */}
        <div className="mb-4 bg-muted/50 rounded-lg p-3">
          <p className="text-[9px] font-mono font-bold mb-2 text-muted-foreground">SIGNAUX STRUCTURÉS ACTIFS</p>
          <div className="flex flex-wrap gap-1">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-[8px] font-mono">Knowledge Graph</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-[8px] font-mono">Metadata Sémantique</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[8px] font-mono">JSON-LD</span>
            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-[8px] font-mono">Markup Rich</span>
            <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-[8px] font-mono">OpenGraph</span>
          </div>
        </div>

        {/* Impact Prediction */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-lg p-3 border-l-4 border-green-500">
          <p className="text-[9px] font-mono text-muted-foreground mb-1">Impact prévu</p>
          <p className="text-xl font-bold text-green-700">+45-60%</p>
          <p className="text-[8px] font-mono text-green-600 mt-1">citation rate</p>
        </div>
      </>
    )
  },
  {
    id: "content",
    icon: <ContentIcon />,
    name: "Création Citations",
    description: "Contenu optimisé pour 50-200 requêtes LLM.",
    mockupContent: (
      <>
        {/* Header */}
        <div className="mb-4 pb-3 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold font-mono">Phase 3 - Création Citations</h3>
            <span className="px-2 py-1 bg-green-500/20 text-green-700 rounded text-[8px] font-bold">ACTIVE</span>
          </div>
        </div>

        {/* Guide Expert Card */}
        <div className="mb-4 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-3 border border-orange-200">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-lg">📄</span>
              <p className="text-[10px] font-mono font-bold">Guide Expert SaaS B2B</p>
            </div>
            <span className="text-[8px] px-2 py-1 bg-green-500 text-white rounded font-bold">LIVE</span>
          </div>
          <p className="text-[9px] font-mono text-muted-foreground mb-2">2500 mots • 15 sources vérifiées</p>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => <div key={i} className="text-sm text-yellow-500">★</div>)}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] px-2 py-1 bg-purple-100 text-purple-700 rounded font-mono">/citation-worthy</span>
            <span className="text-[8px] text-green-600 font-mono">✓ Optimisé LLM</span>
          </div>
        </div>

        {/* Intent Mapping */}
        <div className="mb-4 bg-muted/50 rounded-lg p-3">
          <p className="text-[9px] font-mono font-bold mb-2 text-muted-foreground">INTENT MAPPING</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[8px]">
              <span className="font-mono text-foreground">"Meilleure solution X pour Y"</span>
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded font-bold">87%</span>
            </div>
            <div className="flex items-center justify-between text-[8px]">
              <span className="font-mono text-foreground">"Comment choisir X pour Z"</span>
              <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded font-bold">92%</span>
            </div>
            <div className="flex items-center justify-between text-[8px]">
              <span className="font-mono text-foreground">"Comparatif X vs Y"</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-bold">79%</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-2 border border-blue-200">
            <p className="text-[8px] font-mono text-muted-foreground mb-1">Contenu créé</p>
            <p className="text-xl font-bold text-blue-600">42</p>
            <p className="text-[8px] font-mono text-blue-500">articles</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200">
            <p className="text-[8px] font-mono text-muted-foreground mb-1">Requêtes couvertes</p>
            <p className="text-xl font-bold text-green-600">156/200</p>
            <p className="text-[8px] font-mono text-green-500">78% couverture</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "monitoring",
    icon: <MonitorIcon />,
    name: "Suivi Continu",
    description: "Dashboard temps réel et A/B tests.",
    mockupContent: (
      <>
        {/* Header */}
        <div className="mb-4 pb-3 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold font-mono">Phase 4 - Suivi Continu</h3>
            <span className="px-2 py-1 bg-green-500/20 text-green-700 rounded text-[8px] font-bold">ACTIVE</span>
          </div>
        </div>

        {/* Large Growth Card */}
        <div className="mb-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-4 border-2 border-green-400 shadow-lg">
          <div className="text-center">
            <p className="text-[10px] font-mono text-muted-foreground mb-1">Croissance globale</p>
            <p className="text-5xl font-bold text-green-600">+142%</p>
            <p className="text-[9px] font-mono text-green-700 mt-1">Citations ce mois</p>
          </div>
        </div>

        {/* Per-LLM Breakdown */}
        <div className="mb-4">
          <p className="text-[9px] font-mono font-bold mb-2 text-muted-foreground">BREAKDOWN PAR LLM</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-blue-50 rounded-lg p-2 border border-blue-200 text-center">
              <div className="font-bold text-[10px] font-mono text-blue-700 mb-1">GPT</div>
              <div className="text-lg font-bold text-blue-600">+156%</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-2 border border-purple-200 text-center">
              <div className="font-bold text-[10px] font-mono text-purple-700 mb-1">Claude</div>
              <div className="text-lg font-bold text-purple-600">+128%</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-2 border border-orange-200 text-center">
              <div className="font-bold text-[10px] font-mono text-orange-700 mb-1">Perplexity</div>
              <div className="text-lg font-bold text-orange-600">+142%</div>
            </div>
          </div>
        </div>

        {/* Active A/B Tests */}
        <div className="mb-3 bg-muted/50 rounded-lg p-3">
          <p className="text-[9px] font-mono font-bold mb-2 text-muted-foreground">TESTS A/B ACTIFS</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono text-foreground">Version Title A vs B</span>
              <span className="px-2 py-1 bg-blue-500 text-white rounded text-[8px] font-bold">Running</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono text-foreground">Schema Variant Test</span>
              <span className="px-2 py-1 bg-purple-500 text-white rounded text-[8px] font-bold">Analyzing</span>
            </div>
          </div>
        </div>

        {/* Timestamp */}
        <div className="flex items-center gap-2 text-[9px] font-mono text-muted-foreground">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Mise à jour il y a 5 min
        </div>
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
    <section className="relative py-24 px-6">
      {/* Smooth transition gradients */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background/80 via-background/40 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 via-background/40 to-transparent pointer-events-none z-10" />

      <div className="relative max-w-6xl mx-auto">
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

        <div className="mt-16 flex justify-center">
          <Link href="/forfaits-geo-seo">
            <Button className="px-8 py-6 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl border-2 border-foreground">
              Nos forfaits
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
