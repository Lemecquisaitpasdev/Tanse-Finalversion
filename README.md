# Tanse - Visibilité locale & GEO

Site web TANSE pour la visibilité locale et le référencement GEO/SEO.

## Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Base de données**: PostgreSQL avec Prisma ORM
- **Emails**: Resend
- **Animations**: Spline 3D
- **Paiements**: Stripe (à configurer)

## Démarrage Local

### Prérequis

- Node.js 18+ et npm
- PostgreSQL (local ou distant)
- Compte Resend pour les emails

### Installation

1. Cloner le projet et installer les dépendances :

```bash
npm install
```

2. Copier `.env.example` vers `.env` et configurer les variables :

```bash
cp .env.example .env
```

3. Configurer les variables d'environnement dans `.env` :

```env
# Database - Utiliser Vercel Postgres en production
DATABASE_URL="postgresql://user:password@localhost:5432/tanse"

# Resend - Créer un compte sur https://resend.com
RESEND_API_KEY="re_xxxxx"
FROM_EMAIL="noreply@votre-domaine.com"
CONTACT_EMAIL="hello@tanse.io"

# Stripe (optionnel pour l'instant)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_xxxxx"
STRIPE_SECRET_KEY="sk_test_xxxxx"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. Initialiser la base de données Prisma :

```bash
npm run prisma:push
```

5. Lancer le serveur de développement :

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Déploiement sur Vercel

### 1. Base de données PostgreSQL

Dans votre projet Vercel :
1. Aller dans l'onglet **Storage**
2. Créer une nouvelle **Postgres Database**
3. Connecter la base de données à votre projet
4. Vercel ajoutera automatiquement `DATABASE_URL` dans les variables d'environnement

### 2. Configuration Resend

1. Créer un compte sur [Resend](https://resend.com)
2. Vérifier votre domaine (ou utiliser leur domaine de test)
3. Créer une API Key
4. Ajouter dans les variables d'environnement Vercel :
   - `RESEND_API_KEY`
   - `FROM_EMAIL` (ex: noreply@votre-domaine.com)
   - `CONTACT_EMAIL` (ex: hello@tanse.io)

### 3. Variables d'environnement Vercel

Dans **Settings → Environment Variables**, ajouter :

```
DATABASE_URL=<auto-ajouté par Vercel Postgres>
RESEND_API_KEY=re_xxxxx
FROM_EMAIL=noreply@votre-domaine.com
CONTACT_EMAIL=hello@tanse.io
NEXT_PUBLIC_APP_URL=https://votre-domaine.vercel.app
```

### 4. Déploiement

```bash
# Commit et push
git add .
git commit -m "feat: add backend API and email system"
git push -u origin claude/production-vercel-deployment-011CUtEogyWddvNwZSgGJQ7p
```

Vercel déploiera automatiquement votre branche.

### 5. Initialiser la base de données en production

Après le premier déploiement, exécuter :

```bash
# Via Vercel CLI (installer avec: npm i -g vercel)
vercel env pull .env.production
npx prisma db push
```

Ou utiliser le Vercel Dashboard pour exécuter une commande :
- Aller dans **Deployments → [Votre déploiement] → Build Logs**
- La migration Prisma s'exécutera automatiquement via `npm run build`

## Scripts Disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Build de production (inclut `prisma generate`)
- `npm run start` - Démarrer le serveur de production
- `npm run lint` - Linter le code
- `npm run prisma:generate` - Générer le client Prisma
- `npm run prisma:push` - Pousser le schéma vers la base de données
- `npm run prisma:studio` - Ouvrir Prisma Studio (interface admin DB)

## Structure du Projet

```
.
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # API formulaire contact
│   │   └── checkout/route.ts     # API commandes
│   ├── components/               # Composants React
│   ├── contact/page.tsx          # Page contact
│   ├── checkout/[plan]/page.tsx  # Page checkout
│   └── ...
├── lib/
│   ├── prisma.ts                 # Client Prisma
│   └── email.ts                  # Système d'envoi d'emails
├── prisma/
│   └── schema.prisma             # Schéma de base de données
└── .env.example                  # Template variables d'environnement
```

## Fonctionnalités

✅ **Formulaire de contact** - Sauvegarde en DB + emails de confirmation
✅ **Système de commandes** - Enregistrement des commandes avec détails complets
✅ **Emails automatiques** - Confirmations client + notifications équipe
✅ **Validation des données** - Avec Zod pour la sécurité
✅ **Logging des emails** - Traçabilité complète
⏳ **Paiements Stripe** - À implémenter (structure prête)

## TODO

- [ ] Intégrer Stripe Checkout pour les paiements
- [ ] Ajouter un dashboard admin pour voir les commandes
- [ ] Implémenter le système de webhooks Stripe
- [ ] Ajouter des tests automatisés

## Support

Pour toute question : hello@tanse.io
