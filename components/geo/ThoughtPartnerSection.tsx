'use client';

import React, { useState } from "react";

interface TabItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
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
    id: "tutor",
    icon: <GearIcon />,
    title: "A tutor",
    description: "Highlight anything — a paragraph, a timestamp, a confusing chart — and ask Dia for explanations and answers, directly in your tab."
  },
  {
    id: "buddy",
    icon: <ScreenIcon />,
    title: "A study buddy",
    description: "Your notes, lectures, and readings are already open — Dia helps you turn them into flashcards, quizzes, and custom study guides."
  },
  {
    id: "coach",
    icon: <PenIcon />,
    title: "A writing coach",
    description: "Outline essays, tighten drafts, and pull in the right references — no messy copy-paste, no losing your voice."
  },
  {
    id: "coding",
    icon: <TypewriterIcon />,
    title: "A coding partner",
    description: "Debug, review, and get unstuck faster with feedback right in your flow."
  }
];

const ThoughtPartnerSection = () => {
  const [activeTab, setActiveTab] = useState("tutor");

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-center mb-16 leading-tight">
          A true thought<br />partner, in your tabs.
        </h2>

        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left accordion menu */}
          <div className="w-full lg:w-[350px] flex-shrink-0">
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
                  <span className="font-mono text-xl font-medium">{tab.title}</span>
                </div>
                {activeTab === tab.id && (
                  <div className="px-6 pb-6">
                    <p className="font-mono text-sm leading-relaxed opacity-90">
                      {tab.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right mockup area */}
          <div className="flex-1 relative min-h-[400px]">
            <div className="absolute left-0 top-8 w-[65%] h-[350px] bg-muted rounded-lg shadow-lg overflow-hidden">
              <div className="h-8 bg-muted-foreground/10 flex items-center px-3 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4">
                  <div className="flex gap-1">
                    <div className="px-3 py-1 bg-primary/20 rounded text-xs font-mono">School</div>
                    <div className="px-3 py-1 bg-muted rounded text-xs font-mono">History</div>
                    <div className="px-3 py-1 bg-muted rounded text-xs font-mono">MIT</div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-background h-full">
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-2/3" />
                  <div className="mt-4 h-32 bg-muted/50 rounded" />
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-0 w-[45%] h-[380px] bg-background border border-border rounded-lg shadow-xl overflow-hidden">
              <div className="h-10 border-b border-border flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-muted rounded text-xs font-mono">/ Recap</span>
                  <span className="px-2 py-1 bg-muted rounded text-xs font-mono">/ Top Quotes</span>
                  <span className="px-2 py-1 bg-muted rounded text-xs font-mono">+ New Skill</span>
                </div>
                <div className="mt-8 flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">How to Speak</p>
                    <p className="text-xs text-muted-foreground">youtube.com/watch...</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-mono text-sm">what is w</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 p-3 bg-muted rounded-full">
                <span className="text-muted-foreground">+</span>
                <div className="flex-1" />
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19V5M5 12l7-7 7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtPartnerSection;
