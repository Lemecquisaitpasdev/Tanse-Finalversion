// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SplineViewerProvider from "./components/SplineViewerProvider";

export const metadata: Metadata = {
  title: "TANSE — Visibilité locale & GEO",
  description: "Rendre votre offre immanquable au moment d’intention.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* Enregistre <spline-viewer> une seule fois pour toute l’app */}
        <SplineViewerProvider />
        {children}
      </body>
    </html>
  );
}