"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { shouldTreatAsBot } from "@/lib/bot-detection";

type PerformanceMode = "quality" | "performance" | null;

interface PerformanceContextType {
  mode: PerformanceMode;
  setMode: (mode: "quality" | "performance") => void;
  hasSelected: boolean;
  isBot: boolean;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<PerformanceMode>(null);
  const [hasSelected, setHasSelected] = useState(false);
  const [isBot, setIsBot] = useState(false);

  // Charger la préférence depuis localStorage au montage + détecter les bots
  useEffect(() => {
    // Détecter si c'est un bot
    const botDetected = shouldTreatAsBot();
    setIsBot(botDetected);

    if (botDetected) {
      // Si c'est un bot, forcer le mode performance et marquer comme sélectionné
      setModeState("performance");
      setHasSelected(true);
      return;
    }

    // Pour les humains, charger la préférence du localStorage
    const saved = localStorage.getItem("tanse-performance-mode");
    if (saved === "quality" || saved === "performance") {
      setModeState(saved);
      setHasSelected(true);
    }
  }, []);

  const setMode = (newMode: "quality" | "performance") => {
    setModeState(newMode);
    setHasSelected(true);
    localStorage.setItem("tanse-performance-mode", newMode);
  };

  return (
    <PerformanceContext.Provider value={{ mode, setMode, hasSelected, isBot }}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformance() {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error("usePerformance must be used within a PerformanceProvider");
  }
  return context;
}
