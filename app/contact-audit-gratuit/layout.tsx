import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Réserver un appel — TANSE",
  description:
    "Échangez avec notre équipe d'experts en visibilité sur les moteurs IA. Choisissez le créneau qui vous convient. Réponse garantie sous 24h.",
  keywords: [
    "réserver appel TANSE",
    "consultation GEO",
    "experts SEO local",
    "rendez-vous visibilité IA",
    "contact TANSE"
  ],
  openGraph: {
    title: "Réserver un appel avec TANSE",
    description: "Discutez de vos objectifs GEO avec nos experts. Réponse sous 24h.",
    type: "website",
  },
  alternates: {
    canonical: "/contact-audit-gratuit"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
