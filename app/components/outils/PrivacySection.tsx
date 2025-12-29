'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * PrivacySection - The Browser Company (Dia) style
 * macOS system window aesthetic with glassmorphism and blue checkboxes
 */
export default function PrivacySection() {
  const [activeTab, setActiveTab] = useState('confidentialite');

  const tabs = [
    { id: 'confidentialite', label: 'Confidentialité' },
    { id: 'securite', label: 'Sécurité' },
    { id: 'donnees', label: 'Données' },
  ];

  const features = [
    {
      title: 'Chiffrement de bout en bout',
      description: 'Vos données sont chiffrées avec AES-256',
      checked: true,
    },
    {
      title: 'Aucune vente de données',
      description: 'Nous ne vendons jamais vos informations',
      checked: true,
    },
    {
      title: 'Analyse anonyme',
      description: 'Toutes les analyses sont anonymisées',
      checked: true,
    },
    {
      title: 'Conformité RGPD',
      description: 'Conforme aux normes européennes',
      checked: true,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4" style={{ letterSpacing: '-0.02em' }}>
            Vos données, votre contrôle
          </h2>
          <p className="text-xl text-gray-600">
            Sécurité et confidentialité au cœur de notre approche
          </p>
        </motion.div>

        {/* macOS Window with Glassmorphism */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
          {/* Window Container */}
          <div className="rounded-[24px] border border-gray-200/60 bg-white/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
            {/* Window Title Bar */}
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-b from-gray-100/80 to-gray-50/80 border-b border-gray-200/60 backdrop-blur-xl">
              {/* macOS Traffic Lights */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* Window Title */}
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-gray-700">
                  Préférences de confidentialité
                </span>
              </div>

              {/* Spacer for symmetry */}
              <div className="w-[52px]" />
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 px-4 py-3 bg-white/60 backdrop-blur-xl border-b border-gray-200/40">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === tab.id ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-black hover:bg-white/50'}`}>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-8 bg-gradient-to-br from-white/90 to-gray-50/50 backdrop-blur-xl">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * index }} className="flex items-start gap-4 group">
                    {/* Custom Blue Checkbox - macOS style */}
                    <div className="relative flex-shrink-0 mt-1">
                      <input type="checkbox" checked={feature.checked} readOnly className="peer sr-only" />
                      <div className="w-5 h-5 rounded-md bg-blue-500 flex items-center justify-center shadow-sm cursor-pointer group-hover:bg-blue-600 transition-colors">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Feature Info */}
                    <div className="flex-1">
                      <h4 className="text-base font-medium text-black mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="mt-10 pt-6 border-t border-gray-200/60 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Dernière mise à jour : Aujourd'hui
                </p>
                <button className="px-6 py-2.5 rounded-[12px] bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md">
                  Enregistrer
                </button>
              </div>
            </div>
          </div>

          {/* Glassmorphism Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20 blur-3xl -z-10 opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}
