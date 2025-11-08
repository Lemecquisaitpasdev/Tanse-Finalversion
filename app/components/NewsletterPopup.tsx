"use client";

import { useState } from "react";
import { X, Mail } from "lucide-react";

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simuler l'envoi (à remplacer par votre API)
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        onClose();
        setEmail("");
        setStatus("idle");
      }, 2000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 animate-fade-in">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
          aria-label="Fermer"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Contenu */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#444684]/10 rounded-full mb-4">
            <Mail className="h-8 w-8 text-[#444684]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            Rejoignez notre <span className="text-[#444684]">newsletter</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base">
            Recevez nos derniers articles <span className="font-semibold text-[#444684]">SEO</span> et{" "}
            <span className="font-semibold text-[#444684]">GEO</span> directement dans votre boîte mail
          </p>
        </div>

        {/* Formulaire */}
        {status === "success" ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✅</div>
            <p className="text-lg font-semibold text-[#444684]">
              Inscription réussie !
            </p>
            <p className="text-sm text-neutral-600 mt-2">
              Vous recevrez bientôt nos actualités
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="newsletter-email" className="sr-only">
                Adresse email
              </label>
              <input
                type="email"
                id="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.fr"
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#444684] focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#444684] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#3d3a66] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Inscription..." : "S'inscrire"}
            </button>

            <p className="text-xs text-neutral-500 text-center">
              En vous inscrivant, vous acceptez de recevoir nos emails. Vous pouvez vous désinscrire à tout moment.
            </p>
          </form>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
