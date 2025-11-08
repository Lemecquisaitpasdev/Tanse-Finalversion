"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Calendar, Mail, ArrowRight } from "lucide-react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState<any>(null);

  useEffect(() => {
    // Dans une vraie implémentation, on récupérerait les détails de la session
    // via une route API sécurisée
    if (sessionId) {
      // Simuler un délai de chargement
      setTimeout(() => {
        setLoading(false);
        setSessionData({
          customerEmail: "client@example.com",
          amount: 1490,
        });
      }, 1000);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#E7E9FF] to-[#FFE7C2]">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#444684] border-t-transparent" />
          <p className="mt-4 text-neutral-600">Vérification du paiement...</p>
        </div>
      </main>
    );
  }

  if (!sessionId) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#E7E9FF] to-[#FFE7C2]">
        <div className="mx-auto max-w-md rounded-3xl border border-black/10 bg-white p-8 text-center shadow-xl">
          <h1 className="text-2xl font-semibold text-neutral-900">Session introuvable</h1>
          <p className="mt-2 text-neutral-600">
            Aucune session de paiement n'a été trouvée.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#444684] px-6 py-3 text-white hover:opacity-90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E7E9FF] to-[#FFE7C2] py-12 px-6">
      <div className="mx-auto max-w-2xl">
        {/* Confetti effect */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 h-3 w-3 animate-bounce rounded-full bg-[#444684]" style={{ animationDelay: "0s" }} />
          <div className="absolute top-10 left-1/2 h-2 w-2 animate-bounce rounded-full bg-[#FFE79A]" style={{ animationDelay: "0.2s" }} />
          <div className="absolute top-5 right-1/4 h-3 w-3 animate-bounce rounded-full bg-[#444684]" style={{ animationDelay: "0.4s" }} />
        </div>

        {/* Success card */}
        <div className="relative rounded-3xl border border-black/10 bg-white p-8 md:p-12 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>

            <h1 className="mt-6 text-3xl font-semibold text-neutral-900">
              Paiement confirmé !
            </h1>

            <p className="mt-3 text-lg text-neutral-600">
              Votre commande a été enregistrée avec succès.
            </p>
          </div>

          {/* Next steps */}
          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-neutral-50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#444684] text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900">Confirmation par e-mail</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Vous allez recevoir un e-mail de confirmation avec votre reçu et les détails de votre commande sous quelques minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-neutral-50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#444684] text-white">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900">Votre premier appel</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Nous vous contacterons sous 24-48h pour confirmer le créneau de votre premier appel de lancement. Préparez vos assets !
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-neutral-50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#444684] text-white">
                <ArrowRight className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900">Démarrage rapide</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Nous lançons votre projet sous 24-48h. Premiers signaux de visibilité locale attendus sous 30 jours.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#444684] px-6 py-3 font-medium text-white shadow-lg hover:opacity-90"
            >
              Retour à l'accueil
            </Link>
            <a
              href="mailto:contact@tanse.fr"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Nous contacter
            </a>
          </div>

          {/* Session ID (pour debug) */}
          {sessionId && (
            <p className="mt-8 text-center text-xs text-neutral-400">
              Session ID: {sessionId}
            </p>
          )}
        </div>

        {/* Help */}
        <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 p-6 text-center backdrop-blur">
          <p className="text-sm text-neutral-600">
            Besoin d'aide ? Écrivez-nous à{" "}
            <a href="mailto:contact@tanse.fr" className="font-medium text-[#444684] underline">
              contact@tanse.fr
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#E7E9FF] to-[#FFE7C2]">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#444684] border-t-transparent" />
            <p className="mt-4 text-neutral-600">Chargement...</p>
          </div>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
