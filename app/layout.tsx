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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: "#444684",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect and preload Spline for instant 3D loading */}
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link
          rel="modulepreload"
          href="https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Enregistre <spline-viewer> une seule fois pour toute l'app */}
        <SplineViewerProvider />
        {children}
      </body>
    </html>
  );
}