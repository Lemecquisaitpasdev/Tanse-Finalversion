// app/components/SiteFooter.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, MapPin, ArrowUpRight, Twitter, Linkedin, Github } from "lucide-react";

export default function SiteFooter() {
  const pathname = usePathname();
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

  return (
    <footer className="relative mt-28 text-slate-900">
      {/* Fond clair + halos violets doux */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F2F3F5] via-[#E4E4E4] to-[#F7F8FA]" />
        <div className="absolute -top-16 -left-24 h-72 w-72 rounded-full bg-[#444684]/10 blur-3xl" />
        <div className="absolute -bottom-8 -right-24 h-96 w-96 rounded-full bg-[#444684]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 md:py-18">
        {/* Entête marque + CTA */}
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
              href="mailto:hello@tanse.io"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur transition
                         hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#444684]/30"
            >
              <Image src="/brand/tanse-mark.png?v=3" alt="" width={20} height={20} className="h-5 w-5" />
              Nous contacter
            </Link>
            <Link
              href="/forfaits"
              className="inline-flex items-center gap-2 rounded-full bg-[#444684] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition
                         hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#444684]/40"
            >
              Forfaits <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Colonnes */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Entreprise</h3>
            <ul className="space-y-2 text-sm text-slate-800">
              <li><Link href="/entreprise" className="hover:text-slate-950 transition">À propos</Link></li>
              <li><Link href="/entreprise#method" className="hover:text-slate-950 transition">Notre méthode</Link></li>
              <li><Link href="/entreprise#equipe" className="hover:text-slate-950 transition">Équipe</Link></li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-600" />
                <span>Paris & Lyon</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Produits</h3>
            <ul className="space-y-2 text-sm text-slate-800">
              <li><Link href="/forfaits" className="hover:text-slate-950 transition">Forfaits</Link></li>
              <li><Link href="/#stats" className="hover:text-slate-950 transition">Résultats & chiffres</Link></li>
              <li><Link href="/#insights" className="hover:text-slate-950 transition">Insights trafic & conversions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-700">Ressources</h3>
            <ul className="space-y-2 text-sm text-slate-800">
              <li><Link href="/faq" className="hover:text-slate-950 transition">FAQ</Link></li>
              <li>
                <Link href="mailto:hello@tanse.io" className="inline-flex items-center gap-2 hover:text-slate-950 transition">
                  <Mail className="h-4 w-4 text-slate-600" /> hello@tanse.io
                </Link>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Link href="https://twitter.com" aria-label="Twitter" className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-white/70">
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-white/70">
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link href="https://github.com" aria-label="GitHub" className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-white/70">
                  <Github className="h-4 w-4" />
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

        {/* Bas de page */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-300/70 pt-6 text-xs text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TANSE — Tous droits réservés. | TVA & Immatriculation sur la facture.</p>
          <p>Contact : <Link href="mailto:hello@tanse.io" className="underline decoration-slate-400 underline-offset-2 hover:text-slate-900">hello@tanse.io</Link></p>
        </div>
      </div>
    </footer>
  );
}