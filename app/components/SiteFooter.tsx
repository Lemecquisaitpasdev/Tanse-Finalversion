"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Mail, MapPin, ArrowUpRight, Cookie, Settings } from "lucide-react";
import { useState } from "react";
import { usePerformance } from "../contexts/PerformanceContext";

export default function SiteFooter(): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const { mode, setMode } = usePerformance();
  const [showPerformanceModal, setShowPerformanceModal] = useState(false);
  const normalize = (p?: string | null) => (p && p.endsWith("/") && p !== "/" ? p.slice(0, -1) : p) || "";

  const legalLinks = [
    { href: "/cgv", label: "CGV" },
    { href: "/conditions", label: "CGU" },
    { href: "/confidentialite", label: "Politique de confidentialité" },
    { href: "/cookies", label: "Politique cookies" },
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/ia", label: "Politique IA" },
  ];
  const isActive = (href: string) => normalize(pathname) === normalize(href);

  const manageCookies = () => {
    localStorage.removeItem("tanse-cookie-consent");
    router.refresh(); // Rafraîchir sans perdre l'état
  };

  const handleModeChange = (newMode: "quality" | "performance") => {
    setMode(newMode);
    setShowPerformanceModal(false);
    router.refresh(); // Rafraîchir pour appliquer le changement sans perdre l'état
  };

  return (
    <>
      {/* Modal de changement de mode Performance/Qualité */}
      {showPerformanceModal && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPerformanceModal(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
              <h2 className="mb-6 text-center text-2xl font-semibold text-slate-900">
                Modifier le mode de navigation
              </h2>
              <p className="mb-6 text-center text-sm text-slate-600">
                Choisissez le mode qui correspond le mieux à votre appareil
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => handleModeChange("quality")}
                  className={`w-full rounded-xl border-2 p-4 text-left transition ${
                    mode === "quality"
                      ? "border-[#444684] bg-[#444684]/5"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">Mode Qualité</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Animations 3D interactives (appareils modernes)
                      </p>
                    </div>
                    {mode === "quality" && (
                      <div className="ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#444684] text-white">
                        ✓
                      </div>
                    )}
                  </div>
                </button>
                <button
                  onClick={() => handleModeChange("performance")}
                  className={`w-full rounded-xl border-2 p-4 text-left transition ${
                    mode === "performance"
                      ? "border-[#444684] bg-[#444684]/5"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">Mode Performance</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Images statiques optimisées (appareils plus anciens)
                      </p>
                    </div>
                    {mode === "performance" && (
                      <div className="ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#444684] text-white">
                        ✓
                      </div>
                    )}
                  </div>
                </button>
              </div>
              <button
                onClick={() => setShowPerformanceModal(false)}
                className="mt-6 w-full rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Annuler
              </button>
            </div>
          </div>
        </>
      )}

      <footer className="relative mt-28 text-slate-900">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F2F3F5] via-[#E4E4E4] to-[#F7F8FA]" />
        <div className="absolute -top-16 -left-24 h-72 w-72 rounded-full bg-[#444684]/10 blur-3xl" />
        <div className="absolute -bottom-8 -right-24 h-96 w-96 rounded-full bg-[#444684]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 md:py-18">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Image
            src="/brand/tanse-logo.png?v=3"
            alt="TANSE"
            width={960}
            height={240}
            priority
            className="h-[96px] md:h-[160px] lg:h-[192px] w-auto select-none"
          />
          <div className="flex items-center gap-3">
            <Link
              href="mailto:contact@tanse.fr"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#444684]/30"
            >
              <Image src="/brand/tanse-mark.png?v=3" alt="" width={20} height={20} className="h-5 w-5" />
              Nous contacter
            </Link>
            <Link
              href="/forfaits-geo-seo"
              className="inline-flex items-center gap-2 rounded-full bg-[#444684] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#444684]/40"
            >
              Forfaits <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Entreprise</h3>
            <ul className="space-y-2 text-sm text-slate-800">
              <li><Link href="/agence-geo-paris-lyon" className="hover:text-slate-950 transition">À propos</Link></li>
              <li><Link href="/agence-geo-paris-lyon#method" className="hover:text-slate-950 transition">Notre méthode</Link></li>
              <li><Link href="/agence-geo-paris-lyon#equipe" className="hover:text-slate-950 transition">Équipe</Link></li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-600" />
                <span>Paris & Lyon</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Produits</h3>
            <ul className="space-y-2 text-sm text-slate-800">
              <li><Link href="/forfaits-geo-seo" className="hover:text-slate-950 transition">Forfaits</Link></li>
              <li>
                <Link href="/offre-5-places" className="inline-flex items-center gap-1 hover:text-slate-950 transition font-medium text-[#FF5757]">
                  🎁 Offre 5 places
                </Link>
              </li>
              <li>
                <Link href="/audit-offert" className="inline-flex items-center gap-1 hover:text-slate-950 transition font-medium text-[#444684]">
                  📊 Audit SEO + GEO offert
                </Link>
              </li>
              <li><Link href="/geo" className="hover:text-slate-950 transition">GEO - Optimisation IA</Link></li>
              <li><Link href="/blog" className="hover:text-slate-950 transition">Blog Lead Generation</Link></li>
              <li><Link href="/blog-seo-geo" className="hover:text-slate-950 transition">Blog SEO & GEO</Link></li>
              <li><Link href="/#stats" className="hover:text-slate-950 transition">Résultats & chiffres</Link></li>
              <li><Link href="/#insights" className="hover:text-slate-950 transition">Insights trafic & conversions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Ressources</h3>
            <ul className="space-y-2 text-sm text-slate-800">
              <li><Link href="/#faq" className="hover:text-slate-950 transition">FAQ</Link></li>
              <li><Link href="/blog-seo-geo#newsletter" className="hover:text-slate-950 transition">Newsletter</Link></li>
              <li>
                <Link href="mailto:contact@tanse.fr" className="inline-flex items-center gap-2 hover:text-slate-950 transition">
                  <Mail className="h-4 w-4 text-slate-600" /> contact@tanse.fr
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Légal & politique</h3>
            <ul className="space-y-2 text-sm text-slate-800">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`transition hover:text-slate-950 ${isActive(href) ? "font-semibold underline decoration-slate-400 underline-offset-4" : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-300/70 pt-6 text-xs text-slate-700">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} TANSE — Tous droits réservés. | TVA & Immatriculation sur la facture.</p>
            <p>Contact : <Link href="mailto:contact@tanse.fr" className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900">contact@tanse.fr</Link></p>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <button
              onClick={manageCookies}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            >
              <Cookie className="h-3.5 w-3.5" />
              Gérer les cookies
            </button>
            <button
              onClick={() => setShowPerformanceModal(true)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            >
              <Settings className="h-3.5 w-3.5" />
              Mode navigation ({mode === "quality" ? "Qualité" : "Performance"})
            </button>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}