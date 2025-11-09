"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type PerformanceMode = "quality" | "performance" | null;

interface PerformanceContextType {
  mode: PerformanceMode;
  setMode: (mode: "quality" | "performance") => void;
  hasSelected: boolean;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<PerformanceMode>(null);
  const [hasSelected, setHasSelected] = useState(false);

  // Charger la préférence depuis localStorage au montage
  useEffect(() => {
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
    <PerformanceContext.Provider value={{ mode, setMode, hasSelected }}>
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
