"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary pour capturer les erreurs React et afficher un fallback UI
 * Empêche le crash complet de l'application
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log l'erreur pour debugging (peut être envoyé à un service de monitoring)
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      // Utiliser le fallback personnalisé ou le fallback par défaut
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-[#E4E4E4] px-6">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-neutral-200/50">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-red-100">
                  <AlertTriangle className="h-12 w-12 text-red-600" />
                </div>
              </div>

              {/* Message */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-gradient-to-r from-[#444684] to-[#524e7d] bg-clip-text text-transparent">
                Une erreur est survenue
              </h2>

              <p className="text-neutral-600 text-center mb-6">
                Nous sommes désolés, une erreur inattendue s'est produite. Veuillez réessayer ou
                contacter notre support si le problème persiste.
              </p>

              {/* Error details (dev mode only) */}
              {process.env.NODE_ENV === "development" && this.state.error && (
                <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-xs font-mono text-red-800 break-all">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={() => window.location.reload()}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#444684] to-[#524e7d] hover:from-[#3d3f75] hover:to-[#4a4770] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#444684]/30 hover:shadow-xl hover:shadow-[#444684]/40 transition-all duration-300"
                >
                  <RefreshCw className="h-5 w-5" />
                  Recharger la page
                </button>
                <a
                  href="/"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white border-2 border-[#444684]/30 hover:border-[#444684]/50 px-6 py-3 text-base font-medium text-neutral-800 hover:bg-neutral-50 transition-all duration-300"
                >
                  Retour à l'accueil
                </a>
              </div>

              {/* Support contact */}
              <p className="text-center text-sm text-neutral-500 mt-6">
                Besoin d'aide ?{" "}
                <a
                  href="mailto:contact@tanse.fr"
                  className="font-semibold text-[#444684] hover:underline"
                >
                  contact@tanse.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
