'use client';

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Skill {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
}

const CheckIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="12" y="8" width="24" height="32" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
  </svg>
);

const DollarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="32" height="24" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="14" y="8" width="4" height="8" fill="currentColor"/>
    <rect x="30" y="8" width="4" height="8" fill="currentColor"/>
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 20V28M22 22H26M22 26H26" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const CiteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="32" height="40" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="12" y="8" width="24" height="32" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 16H32M16 22H32M16 28H28" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const BagIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="32" height="28" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M16 16V12C16 8 20 4 24 4C28 4 32 8 32 12V16" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="16" y="22" width="16" height="10" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const skills: Skill[] = [
  { id: "fact-check", icon: <CheckIcon />, name: "/fact-check", description: "A one-click fact-checker for students." },
  { id: "job-fit", icon: <DollarIcon />, name: "/job-fit", description: "See if your resume fits this job listing." },
  { id: "cite", icon: <CiteIcon />, name: "/cite", description: "Cite this source in APA, MLA, and Chicago formats." },
  { id: "budget-buddy", icon: <BagIcon />, name: "/budget-buddy", description: "Suggest budget-friendly alternatives for this item." }
];

const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSkill = () => setCurrentIndex((prev) => (prev + 1) % skills.length);
  const prevSkill = () => setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);

  const currentSkill = skills[currentIndex];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight">
          Skills are your<br />shortcut to staying one<br />step ahead in class.
        </h2>

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
                    <div className="px-2 py-1 bg-primary/20 rounded text-[10px] font-mono">School</div>
                    <div className="px-2 py-1 bg-muted-foreground/10 rounded text-[10px] font-mono">Résumé</div>
                    <div className="px-2 py-1 bg-muted-foreground/10 rounded text-[10px] font-mono">Research</div>
                  </div>
                </div>
                <div className="p-6 min-h-[350px]">
                  <div className="flex gap-6">
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded w-full" />
                      <div className="h-4 bg-muted rounded w-2/3" />
                      <div className="mt-6 h-40 bg-muted/50 rounded" />
                    </div>
                    <div className="w-48 border-l border-border pl-4">
                      <div className="flex gap-1 mb-4">
                        <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">/ {currentSkill?.id}</span>
                        <span className="px-2 py-1 bg-muted rounded text-[10px] font-mono">+ New</span>
                      </div>
                      <div className="p-3 bg-muted rounded-lg text-xs">
                        <p className="text-muted-foreground">Ask a question about this page...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={prevSkill} className="p-2 hover:bg-muted rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-[220px] h-[280px]">
              <div className="absolute top-2 left-2 w-full h-full border-2 border-border bg-background rounded-lg" />
              <div className="absolute top-1 left-1 w-full h-full border-2 border-border bg-background rounded-lg" />
              <div className="relative w-full h-full border-2 border-foreground bg-background rounded-lg p-6 flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-foreground">{currentSkill?.icon}</span>
                </div>
                <div className="mt-auto">
                  <h3 className="font-mono text-xl font-bold mb-2">{currentSkill?.name}</h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{currentSkill?.description}</p>
                </div>
              </div>
            </div>

            <button onClick={nextSkill} className="p-2 hover:bg-muted rounded-full transition-colors border-2 border-primary">
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <div
            className="py-3 flex items-center gap-4 animate-marquee"
            style={{ background: 'linear-gradient(90deg, #FF00FF 0%, #FF6B4A 25%, #FFD700 50%, #00FFFF 75%, #FF00FF 100%)' }}
          >
            <span className="font-mono text-lg font-bold text-black whitespace-nowrap flex items-center gap-2">
              Get our Student Pack! ➜ ➜ ➜ Get started
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
