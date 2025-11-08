# Open Graph Images Template — TANSE

Ce document décrit les images à créer pour optimiser le partage sur les réseaux sociaux et améliorer le CTR de +40%.

## Images requises

### 1. Image principale Open Graph (`/public/og-image.png`)
**Dimensions:** 1200 x 630 px
**Format:** PNG
**Utilisation:** Facebook, LinkedIn, WhatsApp, autres réseaux sociaux

**Contenu suggéré:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Logo TANSE]                                       │
│                                                     │
│  Visibilité locale & SEO                           │
│  pour PME et grands groupes                        │
│                                                     │
│  ✓ Fiche Google Business optimisée                │
│  ✓ Citations locales et NAP                       │
│  ✓ Site web orienté conversion                    │
│                                                     │
│  À partir de 1 490 € HT                           │
│                                                     │
│  www.tanse.fr                                      │
└─────────────────────────────────────────────────────┘
```

**Palette de couleurs:**
- Primary: `#444684` (violet TANSE)
- Background: `#FAFAFA` ou gradient `#FFE7C2` → `#E7E9FF`
- Text: `#030712` (noir foncé)
- Accents: `#E4E4E4` (gris clair)

**Police:** Font moderne et lisible (Inter, SF Pro, ou similaire)

---

### 2. Twitter Card (`/public/twitter-image.png`)
**Dimensions:** 1200 x 630 px (même format que OG)
**Format:** PNG
**Utilisation:** Twitter/X

**Note:** Peut être identique à `og-image.png` ou légèrement adapté pour Twitter avec moins de texte.

---

### 3. Images dynamiques par page (optionnel mais recommandé)

#### Page Forfaits (`/forfaits`)
Créer une image spécifique avec:
- Titre: "Nos forfaits SEO local"
- Les 3 plans avec leurs prix
- Call-to-action

#### Page Contact (`/contact`)
Créer une image spécifique avec:
- Titre: "Parlons de votre visibilité locale"
- Icônes de contact (email, téléphone)
- Temps de réponse: "< 24h"

#### Page Checkout (`/checkout/*`)
Créer une image spécifique avec:
- Titre: "Finalisez votre commande"
- Badges de confiance (Stripe, SLA 24h, etc.)

---

## Outils recommandés pour créer les images

1. **Figma** (gratuit)
   - Template OG disponible dans la communauté
   - Export haute qualité
   - https://www.figma.com

2. **Canva** (gratuit)
   - Template "Open Graph" pré-dimensionné
   - Interface simple
   - https://www.canva.com

3. **OG Image Generator** (code)
   - Utiliser `@vercel/og` pour générer des images dynamiques
   - https://vercel.com/docs/functions/edge-functions/og-image-generation

---

## Exemple de code pour OG image dynamique Next.js

Si vous souhaitez générer des images OG dynamiquement avec Next.js 15:

```typescript
// app/api/og/route.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'TANSE — Visibilité locale & SEO'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAFAFA',
          fontSize: 60,
          fontWeight: 700,
        }}
      >
        <div style={{ color: '#444684' }}>{title}</div>
        <div style={{ fontSize: 30, marginTop: 20, color: '#666' }}>
          Optimisation locale SEO + GEO
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
```

Puis dans votre metadata:
```typescript
export const metadata = {
  openGraph: {
    images: [`/api/og?title=${encodeURIComponent(pageTitle)}`],
  },
}
```

---

## Validation des images

Avant de déployer, testez vos images OG avec ces outils:

1. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/

2. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator

3. **LinkedIn Post Inspector**
   - https://www.linkedin.com/post-inspector/

4. **OpenGraph.xyz**
   - https://www.opengraph.xyz/

---

## Checklist finale

- [ ] `og-image.png` créée (1200x630px)
- [ ] `twitter-image.png` créée (1200x630px)
- [ ] Images placées dans `/public/`
- [ ] Metadata configurée dans `app/layout.tsx` ✅
- [ ] Images testées avec Facebook Debugger
- [ ] Images testées avec Twitter Card Validator
- [ ] ALT text descriptifs configurés ✅
- [ ] Images optimisées (<200KB recommandé)

---

## Impact attendu

Avec des images OG optimisées:
- ✅ **+40% CTR** sur les partages sociaux
- ✅ **+25% engagement** LinkedIn
- ✅ **+30% visibilité** Facebook
- ✅ Meilleur branding et reconnaissance
- ✅ Professionnalisme perçu augmenté

---

## Notes techniques

- Les images OG sont cachées par les plateformes (durée variable: 7-30 jours)
- Pour forcer un refresh: utiliser les debuggers mentionnés ci-dessus
- Next.js génère automatiquement les balises meta avec l'objet `metadata`
- Les images sont servies depuis `/public/` sans prefix
