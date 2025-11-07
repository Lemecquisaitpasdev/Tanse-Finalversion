# Guide de Déploiement Vercel - TANSE

Ce guide vous accompagne étape par étape pour déployer TANSE sur Vercel avec PostgreSQL et emails.

## 🚀 Étape 1 : Créer une Base de Données PostgreSQL

### Option A : Vercel Postgres (Recommandé)

1. Connectez-vous à [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet TANSE
3. Allez dans **Storage** (dans le menu de gauche)
4. Cliquez sur **Create Database**
5. Sélectionnez **Postgres**
6. Donnez un nom à votre base (ex: `tanse-production`)
7. Sélectionnez la région (préférablement proche de votre audience)
8. Cliquez sur **Create**

✅ Vercel ajoutera automatiquement `DATABASE_URL` à vos variables d'environnement.

### Option B : Autre fournisseur PostgreSQL

Vous pouvez utiliser :
- **Supabase** : https://supabase.com (gratuit jusqu'à 500 MB)
- **Neon** : https://neon.tech (gratuit)
- **Railway** : https://railway.app

Récupérez votre `DATABASE_URL` (format: `postgresql://user:password@host:5432/dbname`) et ajoutez-la manuellement dans les variables d'environnement Vercel.

---

## 📧 Étape 2 : Configurer Resend pour les Emails

### 2.1 Créer un compte Resend

1. Allez sur https://resend.com
2. Créez un compte (gratuit jusqu'à 100 emails/jour, 3000/mois)
3. Confirmez votre email

### 2.2 Vérifier votre domaine

**Option A : Utiliser votre domaine personnalisé (Recommandé en production)**

1. Dans Resend Dashboard, allez dans **Domains**
2. Cliquez sur **Add Domain**
3. Entrez votre domaine (ex: `tanse.io`)
4. Ajoutez les enregistrements DNS fournis par Resend :
   - Enregistrement **TXT** pour SPF
   - Enregistrement **DKIM**
   - Enregistrement **DMARC** (optionnel mais recommandé)
5. Attendez la vérification (peut prendre quelques minutes)

**Option B : Utiliser le domaine de test Resend (Pour tester uniquement)**

Vous pouvez utiliser `onboarding@resend.dev` pour tester, mais les emails ne seront envoyés qu'aux adresses que vous avez vérifiées.

### 2.3 Créer une API Key

1. Dans Resend Dashboard, allez dans **API Keys**
2. Cliquez sur **Create API Key**
3. Donnez un nom (ex: `TANSE Production`)
4. Sélectionnez les permissions : **Sending access** (Full access)
5. Cliquez sur **Create**
6. **COPIEZ LA CLÉ IMMÉDIATEMENT** (vous ne pourrez plus la voir après)

---

## ⚙️ Étape 3 : Configurer les Variables d'Environnement Vercel

1. Dans votre projet Vercel, allez dans **Settings → Environment Variables**
2. Ajoutez les variables suivantes :

| Nom de la variable | Valeur | Environnement |
|-------------------|--------|---------------|
| `DATABASE_URL` | `postgresql://...` (auto si Vercel Postgres) | Production, Preview, Development |
| `RESEND_API_KEY` | `re_xxxxxxxxx` (votre clé Resend) | Production, Preview, Development |
| `FROM_EMAIL` | `noreply@votre-domaine.com` | Production, Preview, Development |
| `CONTACT_EMAIL` | `hello@tanse.io` | Production, Preview, Development |
| `NEXT_PUBLIC_APP_URL` | `https://tanse.io` (votre URL de prod) | Production |
| `NEXT_PUBLIC_APP_URL` | Auto (Vercel Preview URL) | Preview |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` | Development |

### Détails importants :

- **FROM_EMAIL** : Doit être un email du domaine vérifié dans Resend
  - ✅ Bon : `noreply@tanse.io` (si tanse.io est vérifié)
  - ❌ Mauvais : `hello@gmail.com`

- **CONTACT_EMAIL** : L'email qui recevra les notifications de contact

---

## 🔧 Étape 4 : Déployer sur Vercel

### Via Git Push (Recommandé)

```bash
# Vérifier le statut
git status

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "feat: add backend API, Prisma DB, and email system"

# Push vers la branche de production
git push -u origin claude/production-vercel-deployment-011CUtEogyWddvNwZSgGJQ7p
```

Vercel détectera automatiquement le push et lancera le déploiement.

### Via Vercel CLI (Alternative)

```bash
# Installer Vercel CLI
npm i -g vercel

# Login
vercel login

# Déployer
vercel --prod
```

---

## 🗄️ Étape 5 : Initialiser la Base de Données

### Option A : Automatique (via le build)

Le script `postinstall` dans `package.json` exécutera automatiquement `prisma generate`.

Pour pousser le schéma en production :

1. Dans Vercel Dashboard, allez dans **Settings → General**
2. Trouvez **Build & Development Settings**
3. Ajoutez dans **Install Command** :
   ```
   npm install && npx prisma db push --accept-data-loss
   ```

⚠️ **Note** : `--accept-data-loss` est OK pour la première migration. En production établie, utilisez Prisma Migrate.

### Option B : Manuel (via Vercel CLI)

```bash
# Télécharger les variables d'environnement de production
vercel env pull .env.production

# Pousser le schéma Prisma
npx prisma db push

# OU exécuter une commande sur Vercel
vercel exec -- npx prisma db push
```

---

## ✅ Étape 6 : Vérifier le Déploiement

### 6.1 Vérifier que le site est en ligne

1. Ouvrez votre URL Vercel (ex: `https://tanse-finalversion.vercel.app`)
2. Naviguez vers la page Contact : `/contact`
3. Remplissez le formulaire et soumettez

### 6.2 Vérifier les emails

1. Allez dans votre boîte email (l'email que vous avez utilisé dans le formulaire)
2. Vous devriez recevoir un email de confirmation
3. Vérifiez également que l'équipe TANSE a reçu une notification à `CONTACT_EMAIL`

### 6.3 Vérifier la base de données

**Option A : Prisma Studio Local**

```bash
# Télécharger les variables d'environnement
vercel env pull .env.production

# Ouvrir Prisma Studio
npx prisma studio
```

**Option B : Vercel Postgres Dashboard**

1. Dans Vercel, allez dans **Storage → [Votre DB]**
2. Cliquez sur **Data**
3. Vous devriez voir vos tables : `contacts`, `orders`, `email_logs`

---

## 🐛 Dépannage

### Problème : "Prisma Client not found"

**Solution** :
```bash
# Régénérer le client Prisma
npm run postinstall

# Redéployer
git commit --allow-empty -m "chore: regenerate Prisma client"
git push
```

### Problème : Emails non envoyés

**Vérifications** :
1. ✅ Domaine vérifié dans Resend ?
2. ✅ `FROM_EMAIL` correspond au domaine vérifié ?
3. ✅ `RESEND_API_KEY` correctement configurée ?
4. ✅ Vérifier les logs dans Resend Dashboard → Emails

### Problème : Erreur de connexion à la base de données

**Vérifications** :
1. ✅ `DATABASE_URL` correctement configurée ?
2. ✅ Format valide : `postgresql://user:password@host:5432/dbname` ?
3. ✅ Base de données accessible depuis Vercel ?
4. ✅ Vérifier les logs Vercel : **Deployments → [Dernier déploiement] → View Function Logs**

### Problème : Build échoue

**Vérifier les logs de build** :
1. Dans Vercel Dashboard → **Deployments**
2. Cliquez sur le déploiement qui a échoué
3. Regardez les **Build Logs**

**Erreurs communes** :
- TypeScript errors → Vérifier `tsconfig.json`
- Module not found → Vérifier les imports avec `@/lib/...`
- Prisma errors → Vérifier que `DATABASE_URL` est définie

---

## 📊 Étape 7 : Monitorer et Optimiser

### Logs en temps réel

```bash
# Installer Vercel CLI
npm i -g vercel

# Voir les logs en temps réel
vercel logs --follow
```

### Performance

- **Core Web Vitals** : Vérifier dans Vercel Dashboard → Analytics
- **Database Queries** : Utiliser Prisma Studio pour optimiser
- **Email Delivery** : Monitorer dans Resend Dashboard

---

## 🔐 Sécurité

### Variables sensibles

✅ **À FAIRE** :
- Ne jamais committer `.env` ou `.env.production`
- Utiliser des API keys différentes pour dev/preview/prod
- Régénérer les API keys si exposées

❌ **À NE PAS FAIRE** :
- Committer des secrets dans le code
- Utiliser la même DB pour dev et prod
- Partager les API keys publiquement

---

## 🎉 C'est terminé !

Votre site TANSE est maintenant déployé sur Vercel avec :
- ✅ Base de données PostgreSQL fonctionnelle
- ✅ Système d'emails automatiques
- ✅ Formulaires de contact et checkout opérationnels
- ✅ Logging et traçabilité

Pour toute question : hello@tanse.io
