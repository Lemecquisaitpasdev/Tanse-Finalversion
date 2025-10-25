"use client";

import { createContext, useContext, ReactNode } from 'react';
import { useOptimizationConfig } from '../hooks/usePlatform';

type OptimizationConfig = ReturnType<typeof useOptimizationConfig>;

const OptimizationContext = createContext<OptimizationConfig | null>(null);

/**
 * Provider de configuration d'optimisation
 *
 * Détecte l'OS et GPU, puis fournit la config optimale
 * à tous les composants enfants via Context
 *
 * USAGE:
 * <OptimizationProvider>
 *   <App />
 * </OptimizationProvider>
 */
export function OptimizationProvider({ children }: { children: ReactNode }) {
  const config = useOptimizationConfig();

  return (
    <OptimizationContext.Provider value={config}>
      {children}
    </OptimizationContext.Provider>
  );
}

/**
 * Hook pour accéder à la configuration d'optimisation
 *
 * USAGE:
 * const config = useOptimization();
 * const animDuration = config.animationDuration * 2.5; // 2.5s sur macOS, 1.5s sur Windows low-end
 */
export function useOptimization(): OptimizationConfig {
  const context = useContext(OptimizationContext);

  if (!context) {
    // Fallback si pas de provider (ne devrait jamais arriver)
    return {
      enableComplexAnimations: true,
      enableInfiniteAnimations: true,
      animationDuration: 1,
      enableBlur: true,
      enableShadows: true,
      enableGradients: true,
      enableContentVisibility: false,
      lazyLoadThreshold: 0.1,
      throttleDelay: 16,
    };
  }

  return context;
}
