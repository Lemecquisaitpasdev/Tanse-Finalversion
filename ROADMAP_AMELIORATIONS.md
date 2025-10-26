# 🎯 ROADMAP - CE QUI RESTE À FAIRE

**Date:** 26 Octobre 2025
**Status actuel:** Site optimisé (+45% perf Windows), production-ready
**Objectif:** Site ultra-professionnel, optimisé au maximum

---

## ✅ DÉJÀ FAIT (Excellentes bases)

### Performance ⚡
- ✅ Optimisations Windows (+45% performance)
- ✅ Lazy-loading Spline scenes
- ✅ Images optimisées WebP (97.9% réduction)
- ✅ Throttling/debouncing event listeners
- ✅ Système adaptatif OS/GPU
- ✅ Lighthouse Performance: 92/100
- ✅ Scroll 60fps garanti

### SEO 🔍
- ✅ Metadata Next.js complets
- ✅ Open Graph images
- ✅ Sitemap.xml dynamique
- ✅ Robots.txt configuré
- ✅ Structured data (Schema.org)

### Tests 🧪
- ✅ Playwright E2E configuré (3 test files)
- ✅ Tests homepage, checkout, contact

### Analytics 📊
- ✅ Vercel Analytics intégré
- ✅ Vercel Speed Insights
- ✅ Cookie consent RGPD

---

## 🔴 CRITIQUES (À faire en priorité)

### 1. **MONITORING & ERROR TRACKING** (Impact: 🔴 Très élevé)

**Problème:**
Aucun système de monitoring d'erreurs en production. Si le site crash, vous ne le saurez pas.

**Solution:**
```bash
# Option 1: Sentry (Recommandé)
npm install @sentry/nextjs

# Option 2: LogRocket
npm install logrocket logrocket-react
```

**Configuration Sentry:**
```typescript
// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1, // 10% des transactions
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

**Bénéfices:**
- ✅ Alertes temps réel sur erreurs
- ✅ Stack traces complètes
- ✅ Session replay (voir ce que l'user a fait)
- ✅ Performance monitoring
- ✅ Release tracking

**Temps:** 30 minutes
**Priorité:** 🔴 CRITIQUE

---

### 2. **VARIABLES D'ENVIRONNEMENT DOCUMENTÉES** (Impact: 🔴 Élevé)

**Problème:**
Pas de `.env.example` = impossible de setup le projet facilement.

**Solution:**
```bash
# Créer .env.example
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_BASE_URL=https://www.tanse.fr
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...
NEXT_PUBLIC_SENTRY_DSN=...
RESEND_API_KEY=...
NEXT_PUBLIC_SPLINE_URL_HERO=...
NEXT_PUBLIC_BRAIN_URL=...
```

**Ajouter README.md section Setup:**
```markdown
## 🚀 Quick Start

1. Clone le repo
2. Copier `.env.example` → `.env.local`
3. Remplir les variables d'environnement
4. `npm install`
5. `npm run dev`
```

**Temps:** 15 minutes
**Priorité:** 🔴 CRITIQUE

---

### 3. **CI/CD PIPELINE** (Impact: 🔴 Élevé)

**Problème:**
Pas de GitHub Actions = pas de tests automatiques, pas de checks qualité.

**Solution:**
```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - run: npx playwright install --with-deps
      - run: npm run test:e2e

      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30

  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            https://preview-url.vercel.app/
          budgetPath: ./budget.json
          uploadArtifacts: true
```

**Bénéfices:**
- ✅ Tests automatiques sur chaque PR
- ✅ Build validation
- ✅ Lighthouse checks automatiques
- ✅ Prévient les régressions

**Temps:** 1 heure
**Priorité:** 🔴 CRITIQUE

---

## 🟠 IMPORTANTES (À faire rapidement)

### 4. **SÉCURITÉ HEADERS** (Impact: 🟠 Élevé)

**Problème:**
Headers de sécurité manquants.

**Solution:**
```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

export default {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

**Vérification:**
```bash
curl -I https://www.tanse.fr | grep -i "x-frame\|strict-transport"
```

**Temps:** 20 minutes
**Priorité:** 🟠 IMPORTANTE

---

### 5. **RATE LIMITING API ROUTES** (Impact: 🟠 Élevé)

**Problème:**
API routes `/api/contact` et `/api/checkout` non protégées contre spam/abuse.

**Solution:**
```bash
npm install @upstash/ratelimit @upstash/redis
```

```typescript
// lib/rate-limit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 m"), // 5 requests per minute
  analytics: true,
});

// app/api/contact/route.ts
import { ratelimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return Response.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  // ... rest of code
}
```

**Bénéfices:**
- ✅ Protection contre spam
- ✅ Protection contre DDoS
- ✅ Coûts API réduits

**Temps:** 45 minutes
**Priorité:** 🟠 IMPORTANTE

---

### 6. **VALIDATION ZOD** (Impact: 🟠 Moyen)

**Problème:**
Validation formulaires basique, pas de type safety côté server.

**Solution:**
```bash
npm install zod
```

```typescript
// lib/validations.ts
import { z } from "zod";

export const contactSchema = z.object({
  nom: z.string().min(2, "Nom trop court").max(100),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  entreprise: z.string().max(200).optional(),
  sujet: z.enum(["rdv", "devis", "question"]),
  message: z.string().max(2000).optional(),
});

export const checkoutSchema = z.object({
  plan: z.enum(["seo-geo", "pack-complet", "grand-groupes"]),
  email: z.string().email(),
  // ...
});

// app/api/contact/route.ts
import { contactSchema } from "@/lib/validations";

export async function POST(req: Request) {
  const body = await req.json();

  // Validation
  const validation = contactSchema.safeParse(body);
  if (!validation.success) {
    return Response.json(
      { error: "Invalid data", details: validation.error.errors },
      { status: 400 }
    );
  }

  const data = validation.data; // Type-safe!
  // ... rest
}
```

**Bénéfices:**
- ✅ Type safety côté server
- ✅ Meilleurs messages d'erreur
- ✅ Protection contre injections

**Temps:** 30 minutes
**Priorité:** 🟠 IMPORTANTE

---

### 7. **LOGS STRUCTURÉS** (Impact: 🟠 Moyen)

**Problème:**
Console.logs éparpillés (8 trouvés), pas de logging structuré.

**Solution:**
```bash
npm install pino pino-pretty
```

```typescript
// lib/logger.ts
import pino from 'pino';

export const logger = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  transport: process.env.NODE_ENV !== 'production'
    ? { target: 'pino-pretty' }
    : undefined,
});

// Usage
logger.info({ userId: 123, action: 'checkout' }, 'User started checkout');
logger.error({ err, email }, 'Failed to send email');
```

**Remplacer tous les console.log:**
```bash
# Trouver et remplacer
grep -r "console.log" app --include="*.tsx" --include="*.ts"
# → Remplacer par logger.info() ou logger.debug()
```

**Temps:** 30 minutes
**Priorité:** 🟠 IMPORTANTE

---

## 🟡 AMÉLIORATIONS (Nice to have)

### 8. **STORYBOOK** (Impact: 🟡 Moyen)

**Pourquoi:**
Documentation visuelle des composants, facilite développement.

**Solution:**
```bash
npx storybook@latest init
```

**Créer stories:**
```typescript
// app/components/PricingPlans.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import PricingPlans from './PricingPlans';

const meta: Meta<typeof PricingPlans> = {
  title: 'Components/PricingPlans',
  component: PricingPlans,
};

export default meta;
type Story = StoryObj<typeof PricingPlans>;

export const Default: Story = {};
```

**Temps:** 2 heures
**Priorité:** 🟡 NICE TO HAVE

---

### 9. **UNIT TESTS** (Impact: 🟡 Moyen)

**Problème:**
Seulement E2E tests, pas de unit tests.

**Solution:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

```typescript
// app/hooks/usePlatform.test.ts
import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePlatform } from './usePlatform';

describe('usePlatform', () => {
  it('should detect Windows', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Windows NT 10.0',
      configurable: true,
    });

    const { result } = renderHook(() => usePlatform());
    expect(result.current.os).toBe('windows');
  });
});
```

**Tests prioritaires:**
- usePlatform hook
- useOptimizationConfig hook
- Validation schemas
- Utils functions

**Temps:** 3 heures
**Priorité:** 🟡 NICE TO HAVE

---

### 10. **BUNDLE ANALYZER** (Impact: 🟡 Faible)

**Pourquoi:**
Identifier opportunités tree-shaking, code splitting.

**Solution:**
```bash
npm install -D @next/bundle-analyzer
```

```typescript
// next.config.ts
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer({
  // ... existing config
});
```

```bash
# Analyser
ANALYZE=true npm run build
```

**Temps:** 15 minutes
**Priorité:** 🟡 NICE TO HAVE

---

### 11. **PERFORMANCE BUDGET** (Impact: 🟡 Faible)

**Solution:**
```json
// budget.json
{
  "budget": [
    {
      "path": "/*",
      "timings": [
        {
          "metric": "first-contentful-paint",
          "budget": 1500
        },
        {
          "metric": "largest-contentful-paint",
          "budget": 2500
        },
        {
          "metric": "interactive",
          "budget": 3500
        }
      ],
      "resourceSizes": [
        {
          "resourceType": "script",
          "budget": 300
        },
        {
          "resourceType": "total",
          "budget": 500
        }
      ]
    }
  ]
}
```

**Intégrer dans CI:**
```yaml
# .github/workflows/performance.yml
- uses: treosh/lighthouse-ci-action@v10
  with:
    budgetPath: ./budget.json
```

**Temps:** 30 minutes
**Priorité:** 🟡 NICE TO HAVE

---

### 12. **ACCESSIBILITÉ (A11Y) AUDIT** (Impact: 🟡 Moyen)

**Vérifications:**
```bash
# Installer axe
npm install -D @axe-core/playwright

# Test a11y
npx playwright test --grep a11y
```

**À vérifier:**
- [ ] Tous les boutons ont aria-label si icône seule
- [ ] Images ont alt text descriptif
- [ ] Contraste couleurs WCAG AA (4.5:1)
- [ ] Navigation clavier complète
- [ ] Focus visible sur tous éléments interactifs
- [ ] Landmarks ARIA (header, nav, main, footer)

**Test automatisé:**
```typescript
// tests/a11y.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have accessibility violations', async ({ page }) => {
  await page.goto('/');

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
```

**Temps:** 2 heures
**Priorité:** 🟡 IMPORTANTE (selon public cible)

---

### 13. **SITEMAP DYNAMIQUE AMÉLIORÉ** (Impact: 🟡 Faible)

**Amélioration:**
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.tanse.fr';

  // Pages statiques
  const routes = [
    '',
    '/forfaits',
    '/entreprise',
    '/contact',
    // ...
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Si vous avez du contenu dynamique (blog, etc.)
  // const posts = await fetchBlogPosts();
  // const postUrls = posts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly',
  //   priority: 0.6,
  // }));

  return routes;
}
```

**Temps:** 15 minutes
**Priorité:** 🟡 NICE TO HAVE

---

### 14. **ANALYTICS AVANCÉS** (Impact: 🟡 Moyen)

**Au-delà de Vercel Analytics:**

```typescript
// Tracking événements business
import { track } from '@vercel/analytics';

// Bouton CTA cliqué
track('cta_clicked', {
  location: 'hero',
  plan: 'seo-geo'
});

// Formulaire soumis
track('contact_form_submitted', {
  sujet: 'rdv'
});

// Checkout initié
track('checkout_started', {
  plan: 'pack-complet',
  value: 2490
});
```

**Google Analytics 4:**
```typescript
// app/components/GoogleAnalytics.tsx
import Script from 'next/script';

export default function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}
```

**Temps:** 1 heure
**Priorité:** 🟡 IMPORTANTE (selon besoins business)

---

### 15. **DOCUMENTATION API** (Impact: 🟡 Faible)

**Pour /api/contact et /api/checkout:**

```typescript
// docs/api.md
## API Endpoints

### POST /api/contact

Envoie un email de contact.

**Rate limit:** 5 requests / minute / IP

**Body:**
```json
{
  "nom": "string (2-100 chars)",
  "email": "string (email valid)",
  "telephone": "string (optional)",
  "entreprise": "string (optional, max 200)",
  "sujet": "rdv" | "devis" | "question",
  "message": "string (optional, max 2000)"
}
```

**Response 200:**
```json
{
  "success": true,
  "message": "Email envoyé"
}
```

**Response 400:**
```json
{
  "error": "Invalid data",
  "details": [...]
}
```

**Temps:** 30 minutes
**Priorité:** 🟡 NICE TO HAVE

---

### 16. **COMPRESSION BROTLI** (Impact: 🟡 Faible)

**Vercel fait déjà, mais vérifier:**
```typescript
// next.config.ts
export default {
  compress: true, // Activé par défaut
  // Vercel gère automatiquement Brotli
}
```

**Vérification:**
```bash
curl -H "Accept-Encoding: br" -I https://www.tanse.fr
# Doit retourner: Content-Encoding: br
```

**Temps:** 5 minutes
**Priorité:** 🟡 VÉRIFICATION

---

### 17. **CACHE STRATEGIES** (Impact: 🟡 Moyen)

**Next.js 15 - Optimiser cache:**
```typescript
// app/api/contact/route.ts
export const runtime = 'edge'; // Plus rapide
export const revalidate = false; // Pas de cache pour API

// Page statiques
export const revalidate = 3600; // 1 heure
```

**Images:**
```typescript
// next.config.ts
export default {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 an
    formats: ['image/webp', 'image/avif'],
  },
}
```

**Temps:** 20 minutes
**Priorité:** 🟡 NICE TO HAVE

---

## 🔵 FONCTIONNALITÉS FUTURES

### 18. **BLOG / RESSOURCES** (Impact: 🔵 Business)

**Pourquoi:**
SEO boost massif + autorité + lead generation.

**Stack recommandée:**
- MDX pour contenu
- Contentlayer ou Velite pour typage
- Recherche avec Algolia ou Pagefind

**Structure:**
```
app/
  blog/
    page.tsx (liste articles)
    [slug]/
      page.tsx (article individuel)

content/
  posts/
    seo-local-2025.mdx
    google-business-profile.mdx
```

**Temps:** 1-2 jours
**Priorité:** 🔵 BUSINESS DECISION

---

### 19. **DASHBOARD CLIENT** (Impact: 🔵 Business)

**Fonctionnalités:**
- Login sécurisé (NextAuth.js)
- Tableau de bord métriques SEO
- Rapports mensuels
- Factures
- Support tickets

**Stack:**
- NextAuth.js pour auth
- Prisma + PostgreSQL
- tRPC ou Server Actions
- Recharts pour graphs

**Temps:** 2-3 semaines
**Priorité:** 🔵 BUSINESS DECISION

---

### 20. **CALCULATEUR ROI INTERACTIF** (Impact: 🔵 Business)

**Idée:**
Widget qui calcule ROI potentiel selon taille entreprise.

```typescript
// app/components/ROICalculator.tsx
export default function ROICalculator() {
  const [chiffreAffaires, setCA] = useState(500000);
  const [tauxConversion, setTaux] = useState(2);

  const potentielLeads = Math.round(chiffreAffaires * 0.15 / 100);
  const roi = potentielLeads * tauxConversion * 1490;

  return (
    <div>
      <h3>Calculez votre ROI</h3>
      <input type="range" value={chiffreAffaires} onChange={...} />
      <p>Leads potentiels: {potentielLeads}</p>
      <p>ROI estimé: {roi}€</p>
    </div>
  );
}
```

**Temps:** 4 heures
**Priorité:** 🔵 BUSINESS DECISION

---

## 📊 PRIORISATION RECOMMANDÉE

### SEMAINE 1 - Fondations Critiques (10h)
```
Jour 1-2:
✓ Monitoring (Sentry)          [30 min]
✓ .env.example + README         [15 min]
✓ Security headers              [20 min]
✓ Rate limiting                 [45 min]
✓ Validation Zod                [30 min]
✓ Logs structurés               [30 min]

Jour 3-4:
✓ CI/CD Pipeline                [1h]
✓ Supprimer console.logs        [30 min]
✓ Bundle analyzer               [15 min]
✓ Performance budget            [30 min]

Jour 5:
✓ Tests + validation            [2h]
```

### SEMAINE 2 - Qualité & Analytics (6h)
```
✓ Accessibilité audit           [2h]
✓ Analytics avancés             [1h]
✓ Unit tests critiques          [3h]
```

### SEMAINE 3 - Polish & Docs (4h)
```
✓ Documentation API             [30 min]
✓ Storybook setup               [2h]
✓ Cache optimization            [20 min]
✓ Final audit                   [1h]
```

---

## 🎯 CHECKLIST FINALE

### Sécurité
- [ ] Security headers configurés
- [ ] Rate limiting sur APIs
- [ ] Validation Zod côté server
- [ ] HTTPS forcé (Vercel auto)
- [ ] Environment variables sécurisées
- [ ] Pas de secrets dans code

### Performance
- [ ] Lighthouse > 90 sur toutes pages
- [ ] Images toutes optimisées WebP/AVIF
- [ ] Lazy-loading actif
- [ ] Bundle < 500KB
- [ ] FCP < 1.5s
- [ ] TTI < 3.5s

### Monitoring
- [ ] Sentry configuré
- [ ] Logs structurés
- [ ] Analytics tracking
- [ ] Error boundaries React
- [ ] Uptime monitoring

### Testing
- [ ] E2E tests passent
- [ ] Unit tests critiques
- [ ] A11y tests
- [ ] CI pipeline actif

### SEO
- [ ] Metadata complets
- [ ] Sitemap à jour
- [ ] Robots.txt configuré
- [ ] Open Graph images
- [ ] Structured data

### Code Quality
- [ ] Pas de console.logs
- [ ] ESLint passe
- [ ] TypeScript strict
- [ ] Pas de any types
- [ ] Documentation à jour

---

## 🚀 APRÈS TOUT ÇA

Le site sera:
- ✅ **Ultra-performant** (Lighthouse 95+)
- ✅ **Sécurisé** (Headers + rate limiting + validation)
- ✅ **Monitoré** (Sentry + logs + analytics)
- ✅ **Testé** (E2E + unit + a11y)
- ✅ **Maintenable** (CI/CD + docs + Storybook)
- ✅ **Production-ready** à 100%

**Temps total estimé:** 20-25 heures
**ROI:** Site professionnel niveau enterprise 🚀

---

## 💡 NOTES FINALES

### Déjà excellent:
Le site est déjà très bon (Lighthouse 92, optimisations Windows, tests E2E).

### Quick wins (< 2h):
1. Sentry monitoring (30 min)
2. .env.example (15 min)
3. Security headers (20 min)
4. Validation Zod (30 min)

### Impact maximum:
- Monitoring = savoir quand ça casse
- CI/CD = prévenir bugs
- Rate limiting = économies + sécurité
- Analytics = comprendre users

### Optional mais nice:
- Storybook = meilleur DX
- Unit tests = confiance code
- Blog = SEO boost

**Prêt à passer au niveau supérieur!** 🎯
