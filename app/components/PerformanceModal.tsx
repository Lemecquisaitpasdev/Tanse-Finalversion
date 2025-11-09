"use client";

import { useEffect, useState } from "react";
import { usePerformance } from "../contexts/PerformanceContext";
import { Zap, Gauge, Sparkles, MonitorSmartphone } from "lucide-react";

export default function PerformanceModal() {
  const { mode, setMode, hasSelected } = usePerformance();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Afficher la modale si l'utilisateur n'a pas encore choisi
    if (!hasSelected) {
      // Petit délai pour l'animation d'entrée
      setTimeout(() => setIsOpen(true), 500);
    }
  }, [hasSelected]);

  if (!isOpen || hasSelected) return null;

  const handleSelect = (selectedMode: "quality" | "performance") => {
    setMode(selectedMode);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
        {/* Header avec gradient TANSE */}
        <div className="relative px-8 pt-10 pb-8 bg-gradient-to-br from-[#444684] to-[#6366f1] text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Première visite</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Choisissez votre expérience
            </h2>
            <p className="text-white/90 text-base md:text-lg">
              Sélectionnez le mode d'affichage adapté à votre appareil pour profiter au mieux du site TANSE.
            </p>
          </div>
        </div>

        {/* Options de sélection */}
        <div className="p-8 grid md:grid-cols-2 gap-6">
          {/* Mode Qualité */}
          <button
            onClick={() => handleSelect("quality")}
            className="group relative overflow-hidden rounded-2xl border-2 border-[#444684]/20 hover:border-[#444684] bg-gradient-to-br from-white to-[#f8fafc] p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#444684]/10 to-[#6366f1]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#444684] to-[#6366f1] shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Mode Qualité
              </h3>

              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                Animations 3D interactives en temps réel. Expérience immersive complète.
              </p>

              <div className="space-y-2 text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>Animations Spline 3D</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>Interactions fluides</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Nécessite un appareil récent</span>
                </div>
              </div>
            </div>
          </button>

          {/* Mode Performance */}
          <button
            onClick={() => handleSelect("performance")}
            className="group relative overflow-hidden rounded-2xl border-2 border-[#6366f1]/20 hover:border-[#6366f1] bg-gradient-to-br from-white to-[#f8fafc] p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] shadow-lg mb-4 group-hover:scale-110 transition-transform">
                <Gauge className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Mode Performance
              </h3>

              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                Images statiques optimisées. Chargement ultra-rapide, compatible tous appareils.
              </p>

              <div className="space-y-2 text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>Chargement instantané</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>Compatible tous appareils</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>Économie de batterie</span>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Footer info */}
        <div className="px-8 pb-8">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#f8fafc] border border-neutral-200">
            <MonitorSmartphone className="h-5 w-5 text-[#444684] flex-shrink-0" />
            <p className="text-xs text-neutral-600">
              <strong className="text-neutral-900">Bon à savoir :</strong> Vous pourrez modifier ce choix à tout moment dans les paramètres du site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
