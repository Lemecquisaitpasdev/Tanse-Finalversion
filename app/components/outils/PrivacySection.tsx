'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * PrivacySection - The Browser Company (Dia) style
 * macOS system window aesthetic with glassmorphism and blue checkboxes
 */
export default function PrivacySection() {
  const [activeTab, setActiveTab] = useState('confidentialite');

  // Individual checkbox states for each tab
  const [confidentialiteChecks, setConfidentialiteChecks] = useState([true, true, true, true]);
  const [securiteChecks, setSecuriteChecks] = useState([true, true, true, true]);
  const [donneesChecks, setDonneesChecks] = useState([true, true, true, true]);

  const tabs = [
    { id: 'confidentialite', label: 'Confidentialité' },
    { id: 'securite', label: 'Sécurité' },
    { id: 'donnees', label: 'Données' },
  ];

  // Different content for each tab
  const tabContent = {
    confidentialite: [
      {
        title: 'Chiffrement de bout en bout',
        description: 'Vos données sont chiffrées avec AES-256',
      },
      {
        title: 'Aucune vente de données',
        description: 'Nous ne vendons jamais vos informations',
      },
      {
        title: 'Analyse anonyme',
        description: 'Toutes les analyses sont anonymisées',
      },
      {
        title: 'Conformité RGPD',
        description: 'Conforme aux normes européennes',
      },
    ],
    securite: [
      {
        title: 'Authentification à deux facteurs',
        description: 'Protection renforcée de votre compte',
      },
      {
        title: 'Surveillance 24/7',
        description: 'Détection des activités suspectes en temps réel',
      },
      {
        title: 'Backups automatiques',
        description: 'Sauvegarde quotidienne de vos données',
      },
      {
        title: 'Certificat SSL/TLS',
        description: 'Connexion sécurisée en permanence',
      },
    ],
    donnees: [
      {
        title: 'Exportation libre',
        description: 'Téléchargez vos données à tout moment',
      },
      {
        title: 'Suppression à la demande',
        description: 'Effacez votre compte et vos données en un clic',
      },
      {
        title: 'Portabilité garantie',
        description: 'Format standard pour transférer vos données',
      },
      {
        title: 'Transparence totale',
        description: 'Accès complet à l\'historique de vos données',
      },
    ],
  };

  // Get current features and checkbox states based on active tab
  const getCurrentFeatures = () => {
    return tabContent[activeTab as keyof typeof tabContent];
  };

  const getCurrentChecks = () => {
    switch (activeTab) {
      case 'confidentialite':
        return confidentialiteChecks;
      case 'securite':
        return securiteChecks;
      case 'donnees':
        return donneesChecks;
      default:
        return confidentialiteChecks;
    }
  };

  const setCurrentChecks = (index: number, value: boolean) => {
    switch (activeTab) {
      case 'confidentialite':
        setConfidentialiteChecks((prev) => prev.map((check, i) => (i === index ? value : check)));
        break;
      case 'securite':
        setSecuriteChecks((prev) => prev.map((check, i) => (i === index ? value : check)));
        break;
      case 'donnees':
        setDonneesChecks((prev) => prev.map((check, i) => (i === index ? value : check)));
        break;
    }
  };

  const features = getCurrentFeatures();
  const checkStates = getCurrentChecks();

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
                {features.map((feature, index) => {
                  const isChecked = checkStates[index];
                  return (
                    <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 * index }} className="flex items-start gap-4 group">
                      {/* Custom Blue Checkbox - macOS style - Functional */}
                      <div className="relative flex-shrink-0 mt-1">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setCurrentChecks(index, !isChecked)}
                          className="peer sr-only"
                          id={`checkbox-${activeTab}-${index}`}
                        />
                        <label
                          htmlFor={`checkbox-${activeTab}-${index}`}
                          className={`block w-5 h-5 rounded-md flex items-center justify-center shadow-sm cursor-pointer transition-all duration-200 ${
                            isChecked
                              ? 'bg-blue-500 group-hover:bg-blue-600'
                              : 'bg-gray-200 group-hover:bg-gray-300 border border-gray-300'
                          }`}
                        >
                          {isChecked && (
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </label>
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
                  );
                })}
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
