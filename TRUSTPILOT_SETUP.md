# Configuration du Widget Trustpilot

Ce guide explique comment activer et configurer le widget Trustpilot sur les pages TANSE.

## 🎯 Où est le widget ?

Le widget Trustpilot est intégré sur la page **`/audit-gratuit`** dans la section "Pourquoi TANSE?".

Il affiche un **carousel interactif des 5 derniers avis clients**.

---

## ⚙️ Configuration rapide

### Étape 1 : Obtenir votre Business Unit ID

1. Connectez-vous à votre compte Trustpilot Business : https://businessapp.b2b.trustpilot.com/
2. Allez dans **Integrations > TrustBox**
3. Copiez votre **Business Unit ID** (format : `xxxxxxxxxxxxxxxxxxxxxxxx`)

### Étape 2 : Configurer la variable d'environnement

Ajoutez cette ligne à votre fichier `.env.local` (ou `.env` sur Vercel) :

```bash
NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=votre_business_unit_id_ici
```

**Exemple :**
```bash
NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=5d7d8c9e0000000001a2b3c4
```

### Étape 3 : Redémarrer le serveur de développement

```bash
npm run dev
```

Le widget s'affichera automatiquement ! 🎉

---

## 🎨 Personnalisation du widget

Le composant `TrustpilotWidget` accepte plusieurs options :

### Options disponibles

| Option | Type | Défaut | Description |
|--------|------|--------|-------------|
| `templateId` | string | `53aa8912dec7e10d38f59f36` | ID du template (voir ci-dessous) |
| `businessUnitId` | string | `process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` | Votre Business Unit ID |
| `theme` | `'light'` \| `'dark'` | `'light'` | Thème clair ou sombre |
| `stars` | `'1'` à `'5'` | `'5'` | Filtrer par nombre d'étoiles |
| `reviewLanguages` | string | `'fr'` | Langues des avis (ex: `'fr,en'`) |
| `height` | string | `'400px'` | Hauteur du widget |
| `width` | string | `'100%'` | Largeur du widget |

### Templates Trustpilot populaires

Vous pouvez changer le `templateId` pour modifier le style du widget :

| Template ID | Nom | Description |
|-------------|-----|-------------|
| `53aa8912dec7e10d38f59f36` | **Carousel** (par défaut) | Carrousel de 5 avis qui défilent automatiquement |
| `539ad60defb9600b94d7df2c` | **Horizontal** | Liste horizontale d'avis avec défilement manuel |
| `5419b6a8b0d04a076446a9ad` | **Mini** | Affichage compact avec étoiles et note moyenne |
| `54ad5defc6454f065c28af8b` | **Slider** | Défilement automatique d'avis individuels |
| `56278e9abfbbba0bdcd568bc` | **Grid** | Grille d'avis en cartes |

**Exemple de changement de template :**

```tsx
<TrustpilotWidget
  templateId="539ad60defb9600b94d7df2c" // Liste horizontale
  theme="light"
  stars="5"
  reviewLanguages="fr"
  height="300px"
  width="100%"
/>
```

---

## 📍 Utiliser le widget ailleurs

Le composant `TrustpilotWidget` est réutilisable sur n'importe quelle page.

### Exemple d'intégration

```tsx
import TrustpilotWidget from "@/app/components/TrustpilotWidget";

export default function MaPage() {
  return (
    <div>
      <h2>Nos avis clients</h2>

      <TrustpilotWidget
        templateId="53aa8912dec7e10d38f59f36"
        theme="light"
        stars="5"
        reviewLanguages="fr"
        height="400px"
        width="100%"
      />
    </div>
  );
}
```

---

## 🚨 Dépannage

### Le widget n'apparaît pas

**Problème :** Vous voyez un placeholder gris avec "Widget Trustpilot - Configurez NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID"

**Solution :**
1. Vérifiez que la variable d'environnement est bien définie dans `.env.local` ou sur Vercel
2. Redémarrez votre serveur de développement : `npm run dev`
3. Videz le cache de votre navigateur (Ctrl+Maj+R ou Cmd+Shift+R)

### Le widget affiche "Voir nos avis sur Trustpilot"

**Problème :** Le script Trustpilot ne se charge pas

**Solution :**
1. Vérifiez votre connexion internet
2. Vérifiez que votre Business Unit ID est correct
3. Désactivez temporairement les bloqueurs de publicité/scripts
4. Vérifiez la console du navigateur pour voir d'éventuelles erreurs

### Le widget ne montre que des avis en anglais

**Problème :** La langue n'est pas correctement configurée

**Solution :**
- Changez la prop `reviewLanguages` à `"fr"` pour le français uniquement
- Ou `"fr,en"` pour français ET anglais

---

## 📚 Ressources Trustpilot

- Documentation officielle : https://support.trustpilot.com/hc/en-us/articles/115011421468-Add-a-TrustBox-to-your-website
- TrustBox Generator (choisir un template) : https://businessapp.b2b.trustpilot.com/#/integrations/trustbox
- Support Trustpilot : https://support.trustpilot.com/

---

## ✅ Checklist de déploiement

Avant de déployer sur Vercel, assurez-vous que :

- [ ] La variable `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` est configurée dans les variables d'environnement Vercel
- [ ] Vous avez testé le widget en local et il s'affiche correctement
- [ ] Le widget charge bien les avis en français (si configuré)
- [ ] Le widget est responsive (fonctionne sur mobile/tablette/desktop)

---

## 💡 Conseil

Pour maximiser l'impact des avis :
1. **Demandez régulièrement des avis** à vos clients satisfaits via Trustpilot
2. **Répondez aux avis** (positifs ET négatifs) pour montrer votre engagement
3. **Mettez en avant votre note** sur votre site web et vos supports marketing

---

**🎉 C'est tout ! Le widget Trustpilot est maintenant configuré et prêt à afficher vos avis clients.**
