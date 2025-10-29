"use client";

import { createContext, useContext, ReactNode } from 'react';
import { useOptimizationConfig } from '../hooks/usePlatform';

type OptimizationConfig = ReturnType<typeof useOptimizationConfig>;

const OptimizationContext = createContext<OptimizationConfig | null>(null);

/**
 * Provider de configuration d'optimisation
 *
 * Fournit une configuration uniforme à tous les composants,
 * garantissant une expérience identique sur tous les OS.
 *
 * USAGE:
 * <OptimizationProvider>
 *   <App />
 * </OptimizationProvider>
 *
 * 🎯 CONFIGURATION ACTUELLE : Windows = macOS = Linux
 * Tous les utilisateurs reçoivent la même expérience optimale,
 * sans dégradation sur Windows.
 *
 * Note : Le hook useOptimizationConfig() existe mais n'est pas utilisé.
 * Pour activer les optimisations adaptatives Windows, décommenter ligne 28.
 */
export function OptimizationProvider({ children }: { children: ReactNode }) {
  // 🎯 CONFIG UNIFORME : Même expérience pour Windows, macOS et Linux
  // Décommenter la ligne suivante pour activer les optimisations adaptatives Windows :
  // const config = useOptimizationConfig();

  // ✅ Configuration identique pour tous les OS
  const config = {
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
