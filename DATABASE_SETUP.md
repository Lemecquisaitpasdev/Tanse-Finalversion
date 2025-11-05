# Configuration de la Base de Données Prisma

Ce guide explique comment configurer la base de données PostgreSQL pour le projet TANSE.

## ⚠️ IMPORTANT

**Le formulaire de contact ne fonctionnera pas tant que la base de données n'est pas correctement configurée.**

Si vous voyez l'erreur *"Une erreur s'est produite"* lors de l'envoi du formulaire, c'est probablement parce que `DATABASE_URL` n'est pas configuré.

---

## Étape 1 : Choisir un fournisseur PostgreSQL

Vous avez besoin d'une base de données PostgreSQL. Voici les options recommandées (toutes ont un plan gratuit) :

### Option A : Vercel Postgres (Recommandé si vous hébergez sur Vercel)

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet **tanse-finalversion**
3. Onglet **"Storage"** → **"Create Database"**
4. Choisissez **"Postgres"**
5. Nommez votre base : `tanse-db`
6. Créez la base de données

Vercel va automatiquement créer les variables d'environnement suivantes :
- `POSTGRES_URL` → copiez cette valeur dans `DATABASE_URL`
- `POSTGRES_URL_NON_POOLING` → copiez cette valeur dans `DIRECT_URL`

### Option B : Neon (Gratuit, excellent pour le développement)

1. Allez sur [neon.tech](https://neon.tech)
2. Créez un compte gratuit
3. Créez un nouveau projet : **tanse-db**
4. Copiez la **Connection String** :
   ```
   postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/tanse?sslmode=require
   ```
5. Utilisez cette URL pour `DATABASE_URL` et `DIRECT_URL`

### Option C : Supabase (Gratuit, avec interface graphique)

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un projet gratuit
3. Allez dans **Settings → Database**
4. Copiez la **Connection String** (mode "Session")
5. Utilisez-la pour `DATABASE_URL` et `DIRECT_URL`

---

## Étape 2 : Configurer les variables d'environnement

### En local (développement)

1. Copiez `.env.example` vers `.env.local` :
   ```bash
   cp .env.example .env.local
   ```

2. Éditez `.env.local` et ajoutez vos URLs de base de données :
   ```env
   DATABASE_URL=postgresql://user:password@host:5432/database
   DIRECT_URL=postgresql://user:password@host:5432/database
   ```

   **Exemple avec Neon :**
   ```env
   DATABASE_URL=postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/tanse?sslmode=require
   DIRECT_URL=postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/tanse?sslmode=require
   ```

   **Exemple avec Vercel Postgres :**
   ```env
   DATABASE_URL=postgres://default:xxx@xxx-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require
   DIRECT_URL=postgres://default:xxx@xxx.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require
   ```

### En production (Vercel)

1. Allez sur votre projet Vercel → **Settings → Environment Variables**
2. Ajoutez les variables suivantes :

| Variable | Valeur | Environnement |
|----------|--------|---------------|
| `DATABASE_URL` | Votre URL de connexion pooling | Production, Preview, Development |
| `DIRECT_URL` | Votre URL de connexion directe | Production, Preview, Development |
| `RESEND_API_KEY` | Votre clé API Resend (pour les emails) | Production, Preview |
| `NOTIFICATION_EMAIL` | Email où recevoir les leads | Production, Preview |

3. **Redéployez** votre application pour appliquer les changements

---

## Étape 3 : Générer Prisma Client et créer les tables

### En local

```bash
# 1. Installer les dépendances
npm install

# 2. Générer Prisma Client
npx prisma generate

# 3. Créer les tables dans la base de données
npx prisma db push

# 4. (Optionnel) Ouvrir Prisma Studio pour voir vos données
npx prisma studio
```

### En production (Vercel)

Vercel exécute automatiquement `prisma generate` lors du build.

Pour créer les tables :
1. Depuis votre terminal local (avec `DATABASE_URL` de production dans `.env.local`) :
   ```bash
   npx prisma db push
   ```

Ou utilisez les commandes Prisma via Vercel CLI :
```bash
vercel env pull .env.local
npx prisma db push
```

---

## Étape 4 : Vérifier que tout fonctionne

### Test en local

1. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

2. Allez sur [http://localhost:3000/contact-audit-gratuit](http://localhost:3000/contact-audit-gratuit)

3. Remplissez le formulaire et soumettez

4. **Résultat attendu :** Message de succès ✅

5. Vérifiez dans Prisma Studio :
   ```bash
   npx prisma studio
   ```
   → Vous devriez voir votre lead dans la table `Lead`

### Test en production

1. Allez sur votre site en production (ex: `https://www.tanse.fr/contact-audit-gratuit`)
2. Remplissez et soumettez le formulaire
3. Vérifiez que vous recevez un email de notification (si `RESEND_API_KEY` est configuré)

---

## Schéma de la base de données

Le projet utilise 4 tables principales :

### 1. Lead
Stocke les contacts généraux (formulaire de contact, newsletter)

| Champ | Type | Description |
|-------|------|-------------|
| id | String | ID unique (cuid) |
| email | String | Email du contact |
| name | String? | Nom |
| company | String? | Entreprise |
| phone | String? | Téléphone |
| message | String? | Message |
| source | String? | Source du lead (contact, newsletter, blog) |
| status | String | Statut (new, contacted, qualified, converted, lost) |
| createdAt | DateTime | Date de création |
| updatedAt | DateTime | Dernière mise à jour |

### 2. Booking
Stocke les prises de rendez-vous

| Champ | Type | Description |
|-------|------|-------------|
| id | String | ID unique |
| email | String | Email |
| name | String | Nom |
| company | String? | Entreprise |
| phone | String | Téléphone |
| service | String | Service demandé (audit, seo-local, geo, pack-complet) |
| preferredDate | DateTime? | Date souhaitée |
| preferredTime | String? | Créneau (matin, après-midi) |
| message | String? | Message |
| status | String | Statut (pending, confirmed, completed, cancelled) |
| createdAt | DateTime | Date de création |
| updatedAt | DateTime | Dernière mise à jour |

### 3. ForfaitRequest
Stocke les demandes de forfaits

| Champ | Type | Description |
|-------|------|-------------|
| id | String | ID unique |
| email | String | Email |
| name | String | Nom |
| company | String? | Entreprise |
| phone | String? | Téléphone |
| forfaitType | String | Type de forfait |
| forfaitName | String | Nom du forfait |
| budget | String? | Budget |
| message | String? | Message |
| status | String | Statut |
| createdAt | DateTime | Date de création |
| updatedAt | DateTime | Dernière mise à jour |

### 4. Newsletter
Stocke les inscriptions newsletter

| Champ | Type | Description |
|-------|------|-------------|
| id | String | ID unique |
| email | String | Email (unique) |
| name | String? | Nom |
| subscribed | Boolean | Abonné ? |
| source | String? | Page d'inscription |
| createdAt | DateTime | Date de création |
| updatedAt | DateTime | Dernière mise à jour |

---

## Commandes Prisma utiles

```bash
# Générer Prisma Client (après modification schema.prisma)
npx prisma generate

# Créer/mettre à jour les tables (sans migration)
npx prisma db push

# Créer une migration (production)
npx prisma migrate dev --name nom_de_la_migration

# Ouvrir Prisma Studio (interface graphique)
npx prisma studio

# Voir le statut des migrations
npx prisma migrate status

# Réinitialiser la base de données (⚠️ SUPPRIME TOUTES LES DONNÉES)
npx prisma migrate reset

# Formater le schema.prisma
npx prisma format
```

---

## Dépannage

### Erreur : "Can't reach database server"

**Cause :** `DATABASE_URL` est invalide ou la base de données est inaccessible.

**Solution :**
1. Vérifiez que `DATABASE_URL` est bien configuré dans `.env.local`
2. Testez la connexion :
   ```bash
   npx prisma db pull
   ```
3. Vérifiez que votre IP est autorisée (si votre provider a un firewall)

### Erreur : "Environment variable not found: DATABASE_URL"

**Cause :** La variable d'environnement n'est pas définie.

**Solution :**
1. Créez `.env.local` à partir de `.env.example`
2. Ajoutez `DATABASE_URL=...`
3. Redémarrez le serveur de dev

### Erreur : "PrismaClient is unable to be run in the browser"

**Cause :** Vous essayez d'utiliser Prisma dans un composant client React.

**Solution :**
- Utilisez Prisma uniquement dans des API Routes (`app/api/**/route.ts`)
- Ou dans des Server Components (sans `"use client"`)

### Le formulaire affiche "Une erreur s'est produite"

**Diagnostic :**
1. Ouvrez la console développeur du navigateur (F12)
2. Regardez la réponse de l'API `/api/contact` dans l'onglet Network
3. Vérifiez les logs de votre serveur

**Causes courantes :**
- `DATABASE_URL` non configuré → Ajoutez-le dans `.env.local`
- `RESEND_API_KEY` non configuré → Les emails échouent (mais le lead est sauvegardé)
- Prisma Client pas généré → Lancez `npx prisma generate`

### Les données ne s'affichent pas dans Prisma Studio

**Solution :**
1. Vérifiez que vous êtes connecté à la bonne base de données
2. Vérifiez que `DATABASE_URL` dans `.env.local` pointe vers la bonne base
3. Actualisez Prisma Studio (⌘+R / Ctrl+R)

---

## Migration vers production

Quand vous êtes prêt à passer en production :

1. **Créez une base de données de production** (Vercel Postgres, Neon, Supabase)

2. **Ajoutez les variables d'environnement sur Vercel** :
   - `DATABASE_URL` (production)
   - `DIRECT_URL` (production)
   - `RESEND_API_KEY`
   - `NOTIFICATION_EMAIL`

3. **Créez les tables en production** :
   ```bash
   # Depuis votre terminal local
   # Avec DATABASE_URL de production dans .env.local
   npx prisma db push
   ```

4. **Redéployez sur Vercel**

5. **Testez le formulaire en production**

---

## Support

Si vous rencontrez des problèmes :
1. Consultez la [documentation Prisma](https://www.prisma.io/docs)
2. Vérifiez les logs de votre serveur
3. Ouvrez une issue GitHub

**Email :** contact@tanse.fr
