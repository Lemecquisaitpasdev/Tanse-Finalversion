// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SplineViewerProvider from "./components/SplineViewerProvider";

export const metadata: Metadata = {
  title: "TANSE — Visibilité locale & GEO",
  description: "Rendre votre offre immanquable au moment d'intention.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect to Spline CDN for faster 3D loading */}
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
      </head>
      <body>
        {/* Enregistre <spline-viewer> une seule fois pour toute l'app */}
        <SplineViewerProvider />
        {children}
      </body>
    </html>
  );
}