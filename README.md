# TANSE - SEO Local & GEO Nouvelle Génération

Site vitrine professionnel pour TANSE, spécialiste du SEO local et GEO (Generative Engine Optimization) pour le secteur automobile et services locaux.

## 🚀 Quick Start

### 1. Cloner le repository

```bash
git clone <repository-url>
cd Tanse-Finalversion
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

```bash
# Copier le fichier d'exemple
cp .env.example .env.local

# Éditer .env.local et remplir vos clés API
# - STRIPE_SECRET_KEY (Stripe Dashboard)
# - RESEND_API_KEY (Resend Dashboard)
# - etc.
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Stack Technique

- **Framework:** Next.js 15.0.3 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4.1
- **3D Scenes:** Spline (@splinetool/react-spline)
- **Payments:** Stripe
- **Email:** Resend
- **Analytics:** Vercel Analytics + Speed Insights
- **Tests:** Playwright (E2E)
- **Deployment:** Vercel

## 🛠️ Scripts Disponibles

```bash
# Développement
npm run dev              # Démarre le serveur de développement

# Build & Production
npm run build            # Build de production
npm run start            # Démarre le serveur de production
npm run lint             # Lint avec ESLint

# Tests
npm run test:e2e         # Tests E2E avec Playwright
npm run test:e2e:ui      # Tests E2E avec UI Playwright
npm run test:e2e:debug   # Tests E2E en mode debug

# Optimisation d'images
node tools/optimize-images.js  # Optimise les images en WebP
```

## 📁 Structure du Projet

```
Tanse-Finalversion/
├── app/
│   ├── components/          # Composants React réutilisables
│   │   ├── Hero.tsx
│   │   ├── BrainReflexes.tsx
│   │   ├── PricingPlans.tsx
│   │   ├── OptimizationProvider.tsx  # Système adaptatif OS/GPU
│   │   ├── SplineLazy.tsx            # Lazy-loading Spline
│   │   └── ...
│   ├── hooks/               # Custom React hooks
│   │   ├── usePlatform.ts   # Détection OS/GPU
│   │   ├── useThrottle.ts
│   │   └── useDebounce.ts
│   ├── forfaits/            # Page forfaits
│   ├── entreprise/          # Page entreprise
│   ├── contact/             # Page contact
│   ├── api/                 # API Routes
│   │   ├── contact/
│   │   └── checkout/
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Homepage
│   └── globals.css          # Styles globaux
├── public/
│   ├── trust/               # Images témoignages (WebP optimisées)
│   └── entreprise/          # Images page entreprise
├── tests/
│   └── *.spec.ts            # Tests E2E Playwright
├── tools/
│   └── optimize-images.js   # Script d'optimisation images
├── .env.example             # Template variables d'environnement
└── next.config.ts           # Configuration Next.js
```

## ⚡ Optimisations Performance

Le site intègre un système d'optimisation adaptatif qui détecte automatiquement l'OS et les capacités GPU de l'utilisateur :

### Détection Automatique
- **OS Detection:** Windows, macOS, Linux, iOS, Android
- **GPU Tier:** High (RTX, M1), Medium (GTX, Intel Iris), Low (Intel HD)
- **Hardware:** CPU cores, RAM, prefers-reduced-motion

### Optimisations Adaptatives
- **Windows Low-End:** Animations 40% plus rapides, lazy-loading agressif, shadows simplifiées
- **Windows Mid-Range:** Animations 20% plus rapides, blur désactivé
- **macOS:** Qualité maximale préservée (aucun compromis)

### Résultats
- **Lighthouse Performance:** 92/100
- **FCP:** 1.2s (desktop), 1.8s (mobile)
- **LCP:** 2.0s (desktop), 2.8s (mobile)
- **Scroll:** 60fps garanti (Windows & macOS)
- **Images:** 97.9% réduction (WebP)

## 🧪 Tests

### E2E Tests (Playwright)

```bash
# Lancer tous les tests
npm run test:e2e

# Tests avec UI
npm run test:e2e:ui

# Tests en debug
npm run test:e2e:debug
```

**Couverture actuelle:**
- ✅ Homepage navigation & sections
- ✅ Checkout flow (Stripe)
- ✅ Contact form submission

## 🔒 Sécurité

- TypeScript strict mode
- Input validation
- HTTPS obligatoire (Vercel)
- Cookie consent RGPD
- Environment variables sécurisées

## 📊 Analytics & Monitoring

- **Vercel Analytics:** Page views, visitors
- **Vercel Speed Insights:** Core Web Vitals
- **Cookie Consent:** RGPD compliant

## 🚀 Déploiement

Le site est automatiquement déployé sur Vercel à chaque push sur la branche principale.

```bash
# Déployer manuellement
vercel

# Déployer en production
vercel --prod
```

## 📄 License

Propriétaire - TANSE © 2025

## 🤝 Contact

- **Email:** contact@tanse.fr
- **Site:** https://www.tanse.fr

---

Built with ❤️ by TANSE team
