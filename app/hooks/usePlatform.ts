import { useEffect, useState, useMemo } from 'react';

export type OS = 'windows' | 'macos' | 'linux' | 'ios' | 'android' | 'unknown';
export type GPUTier = 'high' | 'medium' | 'low';

interface PlatformInfo {
  os: OS;
  gpuTier: GPUTier;
  isLowEnd: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  cores: number;
  memory: number; // GB estimate
}

/**
 * Hook de détection OS et capabilities GPU
 *
 * USAGE:
 * const { os, isLowEnd, gpuTier } = usePlatform();
 *
 * OPTIMISATIONS WINDOWS:
 * - Détecte Windows pour appliquer optimisations spécifiques
 * - Détecte GPU low-end pour réduire qualité
 * - Respecte prefers-reduced-motion
 */
export function usePlatform(): PlatformInfo {
  const [platform, setPlatform] = useState<PlatformInfo>({
    os: 'unknown',
    gpuTier: 'medium',
    isLowEnd: false,
    isMobile: false,
    prefersReducedMotion: false,
    cores: 4,
    memory: 8,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Détection OS
    const userAgent = window.navigator.userAgent.toLowerCase();
    let os: OS = 'unknown';

    if (userAgent.includes('win')) os = 'windows';
    else if (userAgent.includes('mac')) os = 'macos';
    else if (userAgent.includes('linux')) os = 'linux';
    else if (userAgent.includes('iphone') || userAgent.includes('ipad')) os = 'ios';
    else if (userAgent.includes('android')) os = 'android';

    // Détection mobile
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    // Détection GPU tier
    const canvas = document.createElement('canvas');
    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    let gpuTier: GPUTier = 'medium';

    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();

        // GPU high-end (NVIDIA RTX, AMD RX, Apple M1/M2)
        if (renderer.includes('rtx') ||
            renderer.includes('rx 6') ||
            renderer.includes('rx 7') ||
            renderer.includes('apple m1') ||
            renderer.includes('apple m2')) {
          gpuTier = 'high';
        }
        // GPU low-end (Intel HD, vieux GPU)
        else if (renderer.includes('intel') ||
                 renderer.includes('hd graphics') ||
                 renderer.includes('uhd graphics') ||
                 renderer.includes('gt 1030') ||
                 renderer.includes('rx 550')) {
          gpuTier = 'low';
        }
      }
    }

    // Détection CPU cores
    const cores = navigator.hardwareConcurrency || 4;

    // Estimation mémoire (approximatif via deviceMemory API)
    const memory = (navigator as any).deviceMemory || 8;

    // Détection prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Détermination low-end
    // Windows + (GPU low + cores < 4) OU (memory < 4GB) = low-end
    const isLowEnd =
      (os === 'windows' && gpuTier === 'low' && cores < 4) ||
      (os === 'windows' && memory < 4) ||
      prefersReducedMotion;

    setPlatform({
      os,
      gpuTier,
      isLowEnd,
      isMobile,
      prefersReducedMotion,
      cores,
      memory,
    });

    // Log pour debug (retirer en prod)
    if (process.env.NODE_ENV === 'development') {
      console.log('🖥️ Platform Detection:', {
        os,
        gpuTier,
        isLowEnd,
        cores,
        memory: `${memory}GB`,
        prefersReducedMotion,
      });
    }
  }, []);

  return platform;
}

/**
 * Hook simplifié pour détecter si on est sur Windows
 */
export function useIsWindows(): boolean {
  const { os } = usePlatform();
  return os === 'windows';
}

/**
 * Hook pour obtenir la configuration d'optimisation
 */
export function useOptimizationConfig() {
  const platform = usePlatform();

  return useMemo(() => {
    const config = {
      // Animations
      enableComplexAnimations: true,
      enableInfiniteAnimations: true,
      animationDuration: 1, // multiplier

      // Effects
      enableBlur: true,
      enableShadows: true,
      enableGradients: true,

      // Performance
      enableContentVisibility: false,
      lazyLoadThreshold: 0.1,
      throttleDelay: 16,
    };

    // Optimisations Windows
    if (platform.os === 'windows') {
      if (platform.isLowEnd) {
        // Windows low-end = optimisations agressives
        config.enableComplexAnimations = false;
        config.enableInfiniteAnimations = false;
        config.animationDuration = 0.6; // Animations 40% plus rapides
        config.enableBlur = false;
        config.enableContentVisibility = true;
        config.lazyLoadThreshold = 0.25; // Lazy-load plus tard
        config.throttleDelay = 33; // 30fps
      } else {
        // Windows mid-range = optimisations modérées
        config.enableInfiniteAnimations = false; // Désactive wave animations
        config.animationDuration = 0.8;
        config.enableBlur = false; // Blur coûteux sur Windows
        config.enableContentVisibility = true;
      }
    }

    // Respecter prefers-reduced-motion
    if (platform.prefersReducedMotion) {
      config.enableComplexAnimations = false;
      config.enableInfiniteAnimations = false;
      config.animationDuration = 0.01; // Instant
    }

    return config;
  }, [platform]);
}
