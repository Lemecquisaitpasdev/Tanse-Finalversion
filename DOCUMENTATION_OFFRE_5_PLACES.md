# Documentation : Offre 5 Places - TANSE

Cette documentation couvre l'implémentation de la landing page `/offre-5-places` et les fonctionnalités associées.

## 📋 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Gestion du compteur de places](#gestion-du-compteur-de-places)
3. [Accès aux candidatures](#accès-aux-candidatures)
4. [Intégration Google Analytics 4](#intégration-google-analytics-4)
5. [Intégration Facebook Pixel](#intégration-facebook-pixel)
6. [Diagnostic de crawlability](#diagnostic-de-crawlability)
7. [Architecture technique](#architecture-technique)

---

## 🎯 Vue d'ensemble

La landing page `/offre-5-places` permet à TANSE de proposer une offre limitée à 5 entreprises sélectionnées pour un setup SEO + GEO gratuit (valeur 2 990€).

**Fonctionnalités implémentées :**
- ✅ Compteur dynamique de places restantes
- ✅ Formulaire de candidature avec validation
- ✅ Emails automatiques (notification équipe + confirmation candidat)
- ✅ Tracking GA4 (form_start, form_submit, cta_click, faq_open)
- ✅ Code préparé pour Facebook Pixel
- ✅ Sections complètes : Pourquoi, Pour qui, Critères, FAQ
- ✅ Checklist des 7 items inclus (selon brief)
- ✅ Fallback SEO pour crawlers (<noscript>)

---

## 🔢 Gestion du compteur de places

### Méthode 1 : Via l'API (Recommandé)

Le compteur est géré via l'API `/api/places-remaining` qui interagit avec la base de données Prisma.

**Pour consulter le nombre de places restantes :**

```bash
curl https://tanse.fr/api/places-remaining
```

**Réponse :**
```json
{
  "success": true,
  "placesRemaining": 3,
  "placesTotal": 5,
  "active": true
}
```

**Pour mettre à jour le compteur (admin) :**

```bash
curl -X POST https://tanse.fr/api/places-remaining \
  -H "Content-Type: application/json" \
  -d '{"placesRemaining": 2, "active": true}'
```

**Paramètres POST :**
- `placesRemaining` (number, required) : Nombre entre 0 et 5
- `active` (boolean, optional) : Active/désactive la campagne

### Méthode 2 : Directement en base de données

Si vous avez accès à la base de données Prisma (Neon PostgreSQL) :

```sql
-- Consulter
SELECT * FROM "Campaign" WHERE name = 'offre-5-places';

-- Mettre à jour
UPDATE "Campaign"
SET "placesRemaining" = 2,
    "updatedAt" = NOW()
WHERE name = 'offre-5-places';

-- Désactiver la campagne (affichera "Places épuisées")
UPDATE "Campaign"
SET "active" = false
WHERE name = 'offre-5-places';
```

### Méthode 3 : Via Prisma Studio (Interface visuelle)

```bash
npx prisma studio
```

1. Ouvrir le modèle `Campaign`
2. Trouver la ligne avec `name = "offre-5-places"`
3. Modifier `placesRemaining` et sauvegarder

---

## 📥 Accès aux candidatures

### Via l'API

**Récupérer toutes les candidatures :**

```bash
curl https://tanse.fr/api/offre-5-places
```

**Réponse :**
```json
{
  "success": true,
  "candidatures": [
    {
      "id": "clxxx...",
      "nomEntreprise": "TANSE Auto",
      "secteurActivite": "Automobile / Garage",
      "urlSite": "https://tanse-auto.fr",
      "motivation": "Nous souhaitons...",
      "email": "contact@tanse-auto.fr",
      "telephone": "+33612345678",
      "status": "pending",
      "createdAt": "2025-11-13T10:30:00.000Z",
      "updatedAt": "2025-11-13T10:30:00.000Z"
    }
  ]
}
```

### Via Prisma Studio

```bash
npx prisma studio
```

1. Ouvrir le modèle `OffreCinqPlaces`
2. Toutes les candidatures sont listées
3. Vous pouvez filtrer, trier, exporter

### Via la base de données

```sql
-- Toutes les candidatures
SELECT * FROM "OffreCinqPlaces" ORDER BY "createdAt" DESC;

-- Candidatures pending
SELECT * FROM "OffreCinqPlaces"
WHERE status = 'pending'
ORDER BY "createdAt" ASC;

-- Compter les candidatures
SELECT COUNT(*) as total FROM "OffreCinqPlaces";

-- Exporter en CSV (selon votre client SQL)
COPY (SELECT * FROM "OffreCinqPlaces") TO '/tmp/candidatures.csv' CSV HEADER;
```

### Emails envoyés

Chaque candidature déclenche 2 emails automatiques :

1. **Email de notification à l'équipe TANSE**
   - Destinataire : `contact@tanse.fr` (configurable via `RESEND_FROM_EMAIL`)
   - Contenu : Détails complets de la candidature

2. **Email de confirmation au candidat**
   - Destinataire : Email du candidat
   - Contenu : Confirmation de réception, délai de réponse 48h

**Templates d'emails :** `lib/email-templates.ts`
**Fonctions d'envoi :** `lib/email.ts`

---

## 📊 Intégration Google Analytics 4

### Configuration

1. **Créer une propriété GA4** sur https://analytics.google.com/

2. **Ajouter le Measurement ID dans `.env.local` :**

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. **Redémarrer le serveur** :

```bash
npm run dev
```

### Événements trackés

Le tracking GA4 est automatiquement actif sur `/offre-5-places` après consentement cookies :

| Événement | Déclenchement | Paramètres |
|-----------|---------------|------------|
| `form_start` | Premier champ modifié | `form_name`, `timestamp` |
| `form_submit` | Soumission formulaire | `form_name`, `success`, `timestamp` |
| `cta_click` | Click sur CTA | `cta_name`, `cta_location`, `timestamp` |
| `faq_open` | Ouverture question FAQ | `question`, `question_index`, `timestamp` |

### Vérifier le tracking

**En développement :**
1. Ouvrir la console du navigateur
2. Accepter les cookies (Analytics)
3. Interagir avec la page
4. Voir les logs `[GA4] Event tracked: ...`

**En production :**
1. Installer l'extension Chrome "Google Analytics Debugger"
2. Ou utiliser le mode Debug de GA4 dans les paramètres

**Dans GA4 :**
- Real-time > Events : Voir les événements en temps réel
- Reports > Events : Analyser les événements sur 30 jours

### Fichiers concernés

- `lib/analytics.ts` : Fonctions de tracking
- `app/components/GA4Provider.tsx` : Provider GA4
- `app/layout.tsx` : Intégration dans le layout
- `app/offre-5-places/page.tsx` : Appels de tracking

---

## 📱 Intégration Facebook Pixel

### Configuration

1. **Créer un pixel Facebook** sur https://business.facebook.com/events_manager2/

2. **Copier votre Pixel ID** (16 chiffres)

3. **Ajouter dans `.env.local` :**

```env
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
```

4. **Ajouter FacebookPixel dans le layout** :

Ouvrir `app/layout.tsx` et ajouter :

```tsx
import FacebookPixel from "./components/FacebookPixel";

// Dans le body
<FacebookPixel />
```

5. **Redémarrer le serveur** :

```bash
npm run dev
```

### Événements disponibles

Le code est préparé pour tracker ces événements Facebook :

| Événement | Type | Description |
|-----------|------|-------------|
| `PageView` | Standard | Vue de page (automatique) |
| `Lead` | Standard | Soumission formulaire réussie |
| `FormStart` | Custom | Début de remplissage formulaire |
| `FormSubmit` | Custom | Soumission (succès ou échec) |
| `CTAClick` | Custom | Click sur bouton CTA |

### Utilisation dans votre code

```tsx
import { fbTrackFormStart, fbTrackFormSubmit, fbTrackCTAClick } from '@/lib/facebook-pixel';

// Dans un composant
const handleFormStart = () => {
  fbTrackFormStart("offre-5-places");
};

const handleFormSubmit = (success: boolean) => {
  fbTrackFormSubmit("offre-5-places", success);
};

const handleCTAClick = () => {
  fbTrackCTAClick("Postuler maintenant", "formulaire");
};
```

### Vérifier le tracking

**Avec Facebook Pixel Helper (Extension Chrome) :**
1. Installer https://chrome.google.com/webstore (chercher "Facebook Pixel Helper")
2. Visiter votre site
3. L'icône devient bleue si le pixel est détecté
4. Click sur l'icône pour voir les événements

**Dans Events Manager :**
1. Aller sur https://business.facebook.com/events_manager2/
2. Test Events > Voir les événements en temps réel
3. Vérifier que les événements custom apparaissent

### RGPD et consentement

⚠️ **Important** : Le Pixel Facebook ne se charge que si l'utilisateur accepte les cookies **marketing**.

Pour que le pixel se charge, l'utilisateur doit :
- Accepter "Tous les cookies"
- OU Accepter les cookies "Marketing" dans les paramètres

### Fichiers concernés

- `lib/facebook-pixel.ts` : Fonctions de tracking FB
- `app/components/FacebookPixel.tsx` : Composant Pixel
- `app/layout.tsx` : À ajouter manuellement (voir étape 4)

---

## 🔍 Diagnostic de crawlability

### Problèmes identifiés

Lors du diagnostic, plusieurs problèmes de crawlability ont été identifiés :

1. **Pages en client-side rendering ("use client")**
   - Impact : Les crawlers voient du HTML vide ou minimal
   - Pages affectées : `app/page.tsx`, `/blog-seo-geo`, `/agence`, etc.

2. **Composants avec `ssr: false`**
   - Impact : Contenu important non pré-rendu
   - Exemples : BrainReflexes, DataVisualization, Methodology, FinalCTA

3. **Animations Spline sans fallback**
   - Impact : Crawlers ne voient pas le contenu alternatif
   - Solution : Ajout de `<noscript>` avec contenu textuel

4. **Manque de meta tags spécifiques par page**
   - Impact : Moins bon référencement
   - Solution : Export de `metadata` dans chaque page

### Solutions appliquées

#### 1. Ajout de fallback `<noscript>` dans /offre-5-places

```tsx
<noscript>
  <div className="mx-auto max-w-4xl p-8 bg-white">
    <h1>Offre Exclusive : 5 entreprises seulement</h1>
    <p>Soyez parmi les premières PME françaises visibles sur ChatGPT...</p>
    <h2>Ce qui est inclus (valeur 2 990€)</h2>
    <ul>
      <li>Audit SEO + GEO complet (valeur 990€)</li>
      ...
    </ul>
  </div>
</noscript>
```

**Avantage :** Les crawlers sans JavaScript voient le contenu complet.

#### 2. Configuration robots.txt optimale

Fichier : `app/robots.ts`

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/checkout/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot"],
        allow: "/", // Permettre aux bots IA de crawler
      },
    ],
    sitemap: "https://www.tanse.fr/sitemap.xml",
  };
}
```

#### 3. Sitemap mis à jour

Fichier : `app/sitemap.ts`

`/offre-5-places` ajouté avec :
- Priority : `0.9` (haute priorité)
- Change frequency : `daily` (compteur change souvent)

#### 4. Headers de sécurité optimisés

Fichier : `next.config.ts`

Headers déjà en place :
- `X-DNS-Prefetch-Control: on`
- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Content-Security-Policy` (permet Spline, Stripe, etc.)

✅ **Pas d'ajout nécessaire**, déjà optimal.

#### 5. Meta tags dans layout.tsx

Fichier : `app/layout.tsx`

Meta tags déjà optimaux :
```typescript
export const metadata: Metadata = {
  title: { default: "...", template: "%s — TANSE" },
  description: "...",
  keywords: [...],
  openGraph: {...},
  twitter: {...},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    }
  }
}
```

### Tester la crawlability

**Méthode 1 : curl avec User-Agent Googlebot**

```bash
curl -A "Googlebot" https://tanse.fr/offre-5-places
```

Vérifier que le HTML contient :
- Le titre H1
- Les sections principales
- Le contenu <noscript>

**Méthode 2 : Google Search Console**

1. Aller sur https://search.google.com/search-console
2. Inspection d'URL : `https://tanse.fr/offre-5-places`
3. Cliquer sur "Tester l'URL en direct"
4. Voir le rendu HTML et les ressources chargées

**Méthode 3 : Screaming Frog (Outil SEO)**

1. Télécharger https://www.screamingfrog.co.uk/seo-spider/
2. Crawler `https://tanse.fr`
3. Vérifier que `/offre-5-places` est bien indexé
4. Vérifier le contenu récupéré

**Méthode 4 : PageSpeed Insights**

1. Aller sur https://pagespeed.web.dev/
2. Tester `https://tanse.fr/offre-5-places`
3. Vérifier le score et les suggestions

### Résultats attendus

✅ **Page crawlable** : HTML complet visible par les bots
✅ **Meta tags présents** : Title, description, OG tags
✅ **Sitemap à jour** : Page incluse avec priorité élevée
✅ **Robots.txt correct** : Autorise tous les bots (y compris IA)
✅ **Fallback <noscript>** : Contenu accessible sans JavaScript

---

## 🏗️ Architecture technique

### Structure des fichiers

```
app/
├── offre-5-places/
│   ├── page.tsx              # Landing page principale (692 lignes)
│   └── metadata.ts           # Metadata SEO (non utilisé actuellement)
├── api/
│   ├── offre-5-places/
│   │   └── route.ts          # API POST candidatures, GET liste
│   └── places-remaining/
│       └── route.ts          # API GET/POST compteur
├── components/
│   ├── GA4Provider.tsx       # Provider Google Analytics 4
│   └── FacebookPixel.tsx     # Provider Facebook Pixel
└── layout.tsx                # Layout principal avec providers

lib/
├── analytics.ts              # Fonctions tracking GA4
├── facebook-pixel.ts         # Fonctions tracking Facebook
├── email.ts                  # Fonctions envoi emails
├── email-templates.ts        # Templates HTML emails
└── prisma.ts                 # Client Prisma

prisma/
└── schema.prisma             # Schéma DB (OffreCinqPlaces + Campaign)
```

### Base de données (Prisma + Neon PostgreSQL)

**Modèles ajoutés :**

```prisma
model OffreCinqPlaces {
  id              String   @id @default(cuid())
  nomEntreprise   String
  secteurActivite String
  urlSite         String
  motivation      String
  email           String
  telephone       String?
  status          String   @default("pending")
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@index([email])
  @@index([status])
  @@index([createdAt])
}

model Campaign {
  id              String   @id @default(cuid())
  name            String   @unique
  placesTotal     Int
  placesRemaining Int
  active          Boolean  @default(true)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@index([name])
  @@index([active])
}
```

**Appliquer les migrations :**

```bash
npx prisma generate
npx prisma db push
```

### Emails (Resend)

**Configuration** :

`.env.local` :
```env
RESEND_API_KEY=re_xxx...
RESEND_FROM_EMAIL=contact@tanse.fr
```

**2 emails envoyés par candidature :**

1. `sendOffreCinqPlacesNotification()` → Équipe TANSE
2. `sendOffreCinqPlacesConfirmation()` → Candidat

---

## 📝 Checklist de déploiement

Avant de déployer en production, vérifiez :

- [ ] `npx prisma generate` et `npx prisma db push` exécutés
- [ ] `.env` Vercel/production contient :
  - `DATABASE_URL`
  - `RESEND_API_KEY`
  - `RESEND_FROM_EMAIL`
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (si GA4 activé)
  - `NEXT_PUBLIC_FB_PIXEL_ID` (si Facebook Pixel activé)
- [ ] Campagne "offre-5-places" initialisée en DB avec 5 places
- [ ] Test d'envoi d'email (candidature test)
- [ ] Vérification tracking GA4 en production (mode debug)
- [ ] Vérification robots.txt : `https://tanse.fr/robots.txt`
- [ ] Vérification sitemap : `https://tanse.fr/sitemap.xml`
- [ ] Test crawlability avec `curl -A "Googlebot"`
- [ ] Soumission sitemap à Google Search Console

---

## 🆘 Support et maintenance

### Problèmes courants

**Le compteur ne s'affiche pas / affiche "..." :**
- Vérifier que la campagne "offre-5-places" existe en DB
- Vérifier l'API `/api/places-remaining` (ouvrir l'URL dans le navigateur)
- Vérifier la console navigateur pour erreurs JavaScript

**Les emails ne sont pas envoyés :**
- Vérifier `RESEND_API_KEY` dans `.env`
- Vérifier que `RESEND_FROM_EMAIL` est un domaine vérifié dans Resend
- Regarder les logs Vercel/serveur pour erreurs API

**GA4 ne track pas les événements :**
- Vérifier `NEXT_PUBLIC_GA_MEASUREMENT_ID` dans `.env`
- Vérifier que l'utilisateur a accepté les cookies Analytics
- Ouvrir la console : les logs `[GA4]` doivent apparaître
- Vérifier dans GA4 Real-time > Events

**Facebook Pixel ne se charge pas :**
- Vérifier `NEXT_PUBLIC_FB_PIXEL_ID` dans `.env`
- Vérifier que `FacebookPixel` est ajouté dans `layout.tsx`
- Vérifier que l'utilisateur a accepté les cookies Marketing
- Installer Facebook Pixel Helper (extension Chrome)

---

## 📧 Contact

Pour toute question technique sur cette implémentation :

- **Email :** contact@tanse.fr
- **Documentation complète :** Ce fichier (`DOCUMENTATION_OFFRE_5_PLACES.md`)

---

*Documentation générée le 13/11/2025*
