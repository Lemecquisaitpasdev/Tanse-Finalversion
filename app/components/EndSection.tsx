"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function EndSection() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-neutral-50/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-18">
        {/* entête marque + CTA */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Logo image depuis /public/brand, avec bust de cache */}
          <Image
            src={"/brand/tanse-logo.png?v=2"}
            alt="TANSE"
            width={260}
            height={60}
            priority
            className="h-12 md:h-14 w-auto"
            onError={(e) => {
              // petit fallback texte si jamais le PNG ne charge pas
              (e.currentTarget.parentElement as HTMLElement).innerHTML =
                '<div class="text-xl font-semibold text-neutral-900">TANSE</div>';
            }}
          />

          <div className="flex items-center gap-3">
            <Link
              href="mailto:hello@tanse.io"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-black/10 hover:bg-white/80"
            >
              <Image
                src={"/brand/tanse-mark.png?v=2"}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              Nous contacter
            </Link>
            <Link
              href="/forfaits"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFE79A] px-4 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-black/10 hover:bg-[#ffe27f]"
            >
              Forfaits <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* colonnes */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-800">Entreprise</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><Link href="/entreprise" className="hover:underline">À propos</Link></li>
              <li><Link href="/entreprise#method" className="hover:underline">Notre méthode</Link></li>
              <li><Link href="/entreprise#equipe" className="hover:underline">Équipe</Link></li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 opacity-60" /> Paris & Lyon
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-800">Produits</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><Link href="/forfaits" className="hover:underline">Forfaits</Link></li>
              <li><Link href="/geo" className="hover:underline">GEO - Optimisation IA</Link></li>
              <li><Link href="/#stats" className="hover:underline">Résultats & chiffres</Link></li>
              <li><Link href="/#insights" className="hover:underline">Insights trafic & conversions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-800">Ressources</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li>
                <Link href="mailto:hello@tanse.io" className="inline-flex items-center gap-2 hover:underline">
                  <Mail className="h-4 w-4 opacity-60" /> hello@tanse.io
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-800">Légal</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><Link href="/cgv" className="hover:underline">CGV</Link></li>
              <li><Link href="/conditions" className="hover:underline">CGU</Link></li>
              <li><Link href="/confidentialite" className="hover:underline">Politique de confidentialité</Link></li>
              <li><Link href="/cookies" className="hover:underline">Politique cookies</Link></li>
              <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
              <li><Link href="/ia" className="hover:underline">Politique IA</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} TANSE — Tous droits réservés. | TVA & Immatriculation sur la facture.
        </div>
      </div>
    </footer>
  );
}