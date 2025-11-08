"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type ConsentType = "all" | "essential" | "custom" | null;

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem("tanse-cookie-consent");
    if (!consent) {
      // Délai de 1s pour laisser la page se charger
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const saveConsent = (type: ConsentType, customPrefs?: CookiePreferences) => {
    const consentData = {
      type,
      timestamp: new Date().toISOString(),
      preferences: customPrefs || preferences,
    };

    localStorage.setItem("tanse-cookie-consent", JSON.stringify(consentData));
    setShowBanner(false);
    setShowCustomize(false);

    // Déclencher événement pour analytics si accepté
    if (type === "all" || (customPrefs?.analytics || preferences.analytics)) {
      window.dispatchEvent(new Event("cookiesAccepted"));
    }
  };

  const acceptAll = () => {
    saveConsent("all", {
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptEssential = () => {
    saveConsent("essential", {
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustom = () => {
    saveConsent("custom", preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay sombre */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] transition-opacity duration-300"
        onClick={() => !showCustomize && setShowBanner(false)}
      />

      {/* Bannière principale */}
      {!showCustomize ? (
        <div className="fixed bottom-0 left-0 right-0 z-[1000] animate-in slide-in-from-bottom duration-500">
          <div className="mx-auto max-w-7xl p-4">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl">
              <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                {/* Texte */}
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    🍪 Respect de votre vie privée
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site,
                    analyser le trafic et personnaliser le contenu. Vous pouvez choisir d'accepter
                    tous les cookies, uniquement les cookies essentiels, ou personnaliser vos préférences.
                  </p>
                  <Link
                    href="/cookies"
                    className="mt-2 inline-flex items-center text-sm font-medium text-[#444684] hover:underline"
                  >
                    En savoir plus sur notre politique cookies →
                  </Link>
                </div>

                {/* Boutons */}
                <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
                  <button
                    onClick={acceptAll}
                    className="whitespace-nowrap rounded-full bg-[#444684] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#444684]"
                  >
                    Tout accepter
                  </button>
                  <button
                    onClick={() => setShowCustomize(true)}
                    className="whitespace-nowrap rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                  >
                    Personnaliser
                  </button>
                  <button
                    onClick={acceptEssential}
                    className="whitespace-nowrap rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                  >
                    Refuser
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Panneau de personnalisation */
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
              <h2 className="text-xl font-semibold text-slate-900">
                Personnaliser les cookies
              </h2>
              <button
                onClick={() => setShowCustomize(false)}
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-6 p-6">
              {/* Cookies essentiels */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-slate-900">
                      Cookies essentiels
                    </h3>
                    <p className="text-sm text-slate-600">
                      Nécessaires au bon fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="ml-4 flex items-center">
                    <span className="rounded-full bg-slate-300 px-3 py-1 text-xs font-medium text-slate-700">
                      Toujours actifs
                    </span>
                  </div>
                </div>
              </div>

              {/* Cookies analytics */}
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-slate-900">
                      Cookies analytiques
                    </h3>
                    <p className="text-sm text-slate-600">
                      Nous aident à comprendre comment les visiteurs interagissent avec notre site
                      en collectant des informations de manière anonyme.
                    </p>
                  </div>
                  <div className="ml-4 flex items-center">
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                      />
                      <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#444684] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#444684]/30"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Cookies marketing */}
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-1 font-semibold text-slate-900">
                      Cookies marketing
                    </h3>
                    <p className="text-sm text-slate-600">
                      Utilisés pour suivre les visiteurs sur les sites web afin d'afficher
                      des publicités pertinentes et engageantes.
                    </p>
                  </div>
                  <div className="ml-4 flex items-center">
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences({ ...preferences, marketing: e.target.checked })
                        }
                      />
                      <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#444684] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#444684]/30"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm text-blue-900">
                  ℹ️ <strong>Bon à savoir :</strong> Vous pouvez modifier vos préférences à tout moment
                  en cliquant sur le lien "Gérer les cookies" dans le footer de notre site.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 flex flex-col gap-3 border-t border-slate-200 bg-white px-6 py-4 sm:flex-row sm:justify-end">
              <button
                onClick={() => setShowCustomize(false)}
                className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                Annuler
              </button>
              <button
                onClick={saveCustom}
                className="rounded-full bg-[#444684] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Enregistrer mes préférences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
