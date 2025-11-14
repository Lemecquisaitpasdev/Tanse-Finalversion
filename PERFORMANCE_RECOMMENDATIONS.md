# Recommandations de Performance - TANSE Landing Pages

Ce document contient les recommandations pour optimiser les performances des landing pages `/offre-5-places` et `/audit-gratuit`.

---

## ✅ Déjà Implémenté

### **SEO & Crawlability**
- ✅ **Schema.org FAQPage** : Balisage structuré JSON-LD sur les 2 pages
- ✅ **`<noscript>` fallback** : Contenu accessible pour les crawlers sans JavaScript
- ✅ **Sitemap.xml** : Les 2 pages incluses avec priority 0.9
- ✅ **robots.txt** : Configuration optimale pour indexation
- ✅ **Meta tags** : Titles, descriptions (à vérifier/optimiser)

### **Performance**
- ✅ **Next.js 15** : Server Components + App Router
- ✅ **Compression Brotli** : Activée dans next.config.ts
- ✅ **Headers de sécurité** : CSP, HSTS, X-Frame-Options, etc.
- ✅ **Lazy loading** : Composants dynamiques avec `next/dynamic`

### **Analytics & Tracking**
- ✅ **Google Analytics 4** : Événements personnalisés (form_start, form_submit, faq_open)
- ✅ **RGPD compliance** : Consentement cookies vérifié avant tracking
- ✅ **Facebook Pixel** : Code prêt (à activer via env var)

---

## 🟡 À Vérifier / Améliorer

### **1. Images & Médias**

**Statut actuel :** Pas d'images lourdes détectées, mais à vérifier en production

**Recommandations :**
- [ ] Vérifier si des images sont chargées (logos, illustrations)
- [ ] Convertir toutes les images en **WebP** ou **AVIF**
- [ ] Utiliser `next/image` avec lazy loading automatique
- [ ] Définir `width` et `height` explicites (éviter CLS)
- [ ] Configurer des breakpoints responsive (`sizes` attribute)

**Exemple d'optimisation :**
```tsx
import Image from 'next/image';

<Image
  src="/images/logo.png"
  alt="TANSE Logo"
  width={180}
  height={60}
  priority // Pour le logo header
  quality={90}
/>

<Image
  src="/images/hero-visual.jpg"
  alt="Audit SEO GEO"
  width={600}
  height={400}
  loading="lazy" // Pour images below fold
  sizes="(max-width: 768px) 100vw, 600px"
  quality={85}
/>
```

---

### **2. Fonts & Typography**

**Statut actuel :** Utilise les fonts système (`-apple-system, BlinkMacSystemFont, 'Segoe UI'`)

**✅ Avantage :** Pas de requêtes externes, chargement instantané

**Option d'amélioration (si besoin de fonts custom) :**
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

---

### **3. Performances JavaScript**

**Recommandations :**

#### **a) Code Splitting Avancé**
Les pages utilisent déjà `"use client"`, mais on peut optimiser :

```tsx
// Lazy load du Trustpilot widget
const TrustpilotWidget = dynamic(
  () => import('@/app/components/TrustpilotWidget'),
  {
    loading: () => <div>Chargement des avis...</div>,
    ssr: false // Widget tiers-party, pas besoin de SSR
  }
);
```

#### **b) Réduire la taille des bundles**
```bash
# Analyser la taille des bundles
ANALYZE=true npm run build

# Résultat : Bundle Analyzer ouvrira automatiquement
```

**Cibles :**
- Main bundle < 200KB (gzipped)
- First Load JS < 100KB (gzipped)

---

### **4. Lighthouse & Core Web Vitals**

**Tests à effectuer :**

```bash
# PageSpeed Insights (en ligne)
https://pagespeed.web.dev/

# Lighthouse CLI (local)
npx lighthouse https://tanse.fr/audit-gratuit --view

# Lighthouse en mode incognito (évite extensions)
npm install -g lighthouse
lighthouse https://tanse.fr/offre-5-places --output html --output-path ./report.html
```

**Objectifs Core Web Vitals :**
| Métrique | Cible | Seuil Acceptable |
|----------|-------|------------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | < 4s |
| **FID** (First Input Delay) | < 100ms | < 300ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | < 0.25 |
| **INP** (Interaction to Next Paint) | < 200ms | < 500ms |

**Si LCP > 2.5s :**
- [ ] Précharger les ressources critiques (fonts, hero image)
- [ ] Utiliser `priority` sur l'image hero
- [ ] Vérifier le TTFB (Time To First Byte) serveur

**Si CLS > 0.1 :**
- [ ] Définir `width` et `height` sur toutes les images
- [ ] Réserver l'espace pour les widgets dynamiques (Trustpilot)
- [ ] Éviter l'injection tardive de contenu above-the-fold

---

### **5. Accessibility (A11y)**

**Tests à effectuer :**

```bash
# axe DevTools (extension Chrome)
# WAVE (extension Chrome)
# Lighthouse Accessibility audit
```

**Points de vérification :**
- [ ] Contraste texte/background > 4.5:1 (WCAG AA)
- [ ] Tous les boutons ont des labels explicites
- [ ] Navigation au clavier fonctionnelle (Tab, Enter, Escape)
- [ ] `aria-label` sur les icônes SVG sans texte
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Formulaires avec `<label>` associés aux `<input>`

**Amélioration formulaires :**
```tsx
// Actuellement OK, mais vérifier :
<label htmlFor="email" className="...">Email *</label>
<input
  id="email"
  type="email"
  name="email"
  aria-required="true"
  aria-describedby="email-error"
  // ...
/>
{error && <span id="email-error" role="alert">{error}</span>}
```

---

### **6. Cache & CDN**

**Recommandations Vercel :**

#### **a) Headers de cache optimaux**
Vérifier dans `next.config.ts` :
```ts
async headers() {
  return [
    {
      source: '/_next/static/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
      ]
    },
    {
      source: '/images/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
      ]
    }
  ];
}
```

#### **b) Vercel Edge Network**
- Déjà activé automatiquement sur Vercel
- Vérifier que les pages sont bien servies depuis l'Edge le plus proche
- Tester avec `curl -I https://tanse.fr/audit-gratuit | grep "x-vercel-cache"`

---

### **7. Scripts Tiers-Party**

**Statut actuel :**
- ✅ GA4 : Chargé conditionnellement (consentement)
- ✅ Facebook Pixel : Code prêt mais non activé
- ✅ Trustpilot : Chargé dynamiquement

**Optimisations possibles :**

#### **a) Utiliser next/script pour priorisation**
```tsx
// app/components/GA4Provider.tsx
import Script from 'next/script';

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
  strategy="afterInteractive" // ou "lazyOnload" pour moins critique
/>
```

**Stratégies :**
- `beforeInteractive` : Critique (pas recommandé pour analytics)
- `afterInteractive` : Après hydration (bon pour GA4)
- `lazyOnload` : Quand le navigateur est idle (bon pour FB Pixel)
- `worker` : Web Worker (expérimental)

#### **b) Éviter les bloqueurs de rendu**
```tsx
// Bon : async loading
<Script src="..." strategy="afterInteractive" />

// Mauvais : bloque le rendu
<script src="..."></script>
```

---

### **8. Prisma & Base de Données**

**Recommandations production :**

#### **a) Connection Pooling**
```ts
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

#### **b) Indexes de performance**
✅ Déjà présents dans le schema :
```prisma
@@index([email])
@@index([status])
@@index([createdAt])
```

#### **c) Requêtes optimisées**
```ts
// Bon : Sélection spécifique
const audits = await prisma.auditGratuit.findMany({
  select: { id: true, email: true, status: true },
  where: { status: 'pending' },
  take: 10
});

// Éviter : Tout sélectionner si pas nécessaire
const audits = await prisma.auditGratuit.findMany(); // ❌
```

---

### **9. Monitoring & Erreurs**

**Recommandations :**

#### **a) Error Tracking (Sentry)**
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

```ts
// sentry.client.config.ts
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});
```

#### **b) Console Errors**
Vérifier en production :
- [ ] Aucune erreur console JavaScript
- [ ] Aucun warning React
- [ ] Aucune 404 sur ressources
- [ ] Aucun CORS error

#### **c) Vercel Analytics**
```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

### **10. SEO Avancé**

**À ajouter :**

#### **a) Open Graph Tags**
```tsx
// app/audit-gratuit/layout.tsx ou page.tsx
export const metadata = {
  title: 'Audit SEO + GEO Gratuit - TANSE',
  description: 'Obtenez un audit complet de votre visibilité sur Google et les IA génératives. Analyse gratuite sous 48h avec benchmark concurrentiel.',
  openGraph: {
    title: 'Audit SEO + GEO Gratuit - TANSE',
    description: 'Analyse complète SEO + GEO sous 48h',
    url: 'https://tanse.fr/audit-gratuit',
    siteName: 'TANSE',
    images: [
      {
        url: 'https://tanse.fr/og-image-audit.jpg',
        width: 1200,
        height: 630,
        alt: 'Audit SEO GEO Gratuit',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audit SEO + GEO Gratuit - TANSE',
    description: 'Analyse complète SEO + GEO sous 48h',
    images: ['https://tanse.fr/og-image-audit.jpg'],
  },
};
```

#### **b) Canonical URLs**
```tsx
// app/audit-gratuit/page.tsx
export const metadata = {
  alternates: {
    canonical: 'https://tanse.fr/audit-gratuit',
  },
};
```

#### **c) LocalBusiness Schema.org**
```tsx
// app/layout.tsx ou composant global
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TANSE",
  "description": "Agence SEO et GEO - Pionniers du Generative Engine Optimization",
  "url": "https://tanse.fr",
  "telephone": "+33-X-XX-XX-XX-XX",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR",
    "addressLocality": "Ville",
    "addressRegion": "Région"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "sameAs": [
    "https://www.linkedin.com/company/tanse",
    "https://twitter.com/tanse"
  ]
};
```

---

## 📊 Checklist de Validation Finale

Avant de mettre en production, vérifier :

### **Performance**
- [ ] PageSpeed Insights mobile > 85
- [ ] PageSpeed Insights desktop > 90
- [ ] LCP < 2.5s sur 3G/4G simulé
- [ ] CLS < 0.1
- [ ] FID/INP < 100ms
- [ ] Bundle JS First Load < 100KB gzipped

### **SEO**
- [ ] Schema.org FAQPage validé (Google Rich Results Test)
- [ ] Schema.org LocalBusiness ajouté
- [ ] Open Graph tags testés (Facebook Debugger)
- [ ] Twitter Cards testées (Twitter Card Validator)
- [ ] Sitemap.xml accessible et valide
- [ ] robots.txt accessible

### **Accessibility**
- [ ] Lighthouse Accessibility score > 90
- [ ] Contraste WCAG AA respecté (4.5:1 minimum)
- [ ] Navigation clavier 100% fonctionnelle
- [ ] Screen readers compatibles (NVDA/JAWS)

### **Fonctionnel**
- [ ] Formulaires fonctionnent (validation + soumission)
- [ ] Emails envoyés correctement (test + prod)
- [ ] Prisma migrations appliquées en prod
- [ ] GA4 events trackés correctement
- [ ] Trustpilot widget s'affiche (après config ID)
- [ ] Pas d'erreurs console en production

### **Sécurité**
- [ ] CSP configuré et testé
- [ ] HTTPS forcé (HSTS)
- [ ] Variables d'environnement sécurisées (Vercel)
- [ ] Prisma Database URL en prod (pas de leak)
- [ ] API keys non exposées côté client

---

## 🚀 Commandes Utiles

```bash
# Build local
npm run build

# Analyze bundle size
ANALYZE=true npm run build

# Lighthouse audit
npx lighthouse https://tanse.fr/audit-gratuit --view

# Test Schema.org
https://validator.schema.org/

# Test Open Graph
https://www.opengraph.xyz/

# Test PageSpeed
https://pagespeed.web.dev/

# Deploy Vercel
vercel --prod
```

---

## 📈 KPIs à Suivre Post-Déploiement

| Métrique | Objectif | Comment mesurer |
|----------|----------|-----------------|
| **Conversion Rate** | > 5% | GA4 Events (form_submit / visitors) |
| **Bounce Rate** | < 40% | GA4 Engagement |
| **Avg Session Duration** | > 2 min | GA4 Engagement |
| **Page Load Time** | < 3s | Vercel Analytics / RUM |
| **Core Web Vitals** | 100% "Good" | Google Search Console |
| **SEO Visibility** | Top 3 pour "audit SEO gratuit" | Google Search Console |

---

**✅ Document mis à jour le :** $(date +%Y-%m-%d)
**🎯 Prochaine révision :** 1 semaine après déploiement production
