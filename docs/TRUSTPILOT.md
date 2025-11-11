# Widget Trustpilot - Configuration

## Vue d'ensemble

Le widget Trustpilot est intégré dans le composant `TestimonialsMarquee.tsx` et affiche un carousel d'avis clients vérifiés.

## Fonctionnalités implémentées

✅ **Widget Carousel Trustpilot** - Affichage dynamique des avis en carousel
✅ **Synchronisation automatique** - Les avis sont automatiquement récupérés depuis Trustpilot
✅ **Filtrage par étoiles** - Seuls les avis 4 et 5 étoiles sont affichés
✅ **Langue française** - Interface et avis en français uniquement
✅ **Thème clair** - Design adapté au thème clair du site

## Configuration actuelle

### Paramètres du widget

- **Business Unit ID**: `675c07a7f40e16c45da82764`
- **Template ID**: `53aa8912dec7e10d38f59f36` (Carousel)
- **Locale**: `fr-FR`
- **Étoiles affichées**: `4,5` (uniquement 4 et 5 étoiles)
- **Langue des avis**: `fr` (français)
- **Thème**: `light`
- **Hauteur**: `240px`
- **Largeur**: `100%`

### Liens

- Page Trustpilot: [https://fr.trustpilot.com/review/tanse.fr](https://fr.trustpilot.com/review/tanse.fr)
- Documentation Trustpilot: [https://support.trustpilot.com/hc/en-us/articles/115011421468](https://support.trustpilot.com/hc/en-us/articles/115011421468)

## Emplacement dans le code

### Composant principal
- **Fichier**: `/app/components/TestimonialsMarquee.tsx`
- **Section**: `#trust` dans `/app/page.tsx` (ligne 33)

### Fonctionnement technique

1. Le script Trustpilot est chargé via `next/script` avec la stratégie `lazyOnload`
2. Une fois le script chargé, `window.Trustpilot.loadFromElement()` initialise le widget
3. Le widget se met à jour automatiquement via l'API Trustpilot

### TypeScript

Le type `Window.Trustpilot` est déclaré dans le composant pour assurer la compatibilité TypeScript.

## Personnalisation

### Modifier les paramètres d'affichage

Pour modifier les paramètres du widget, éditez les attributs `data-*` dans le composant:

```tsx
<div
  ref={trustboxRef}
  className="trustpilot-widget"
  data-locale="fr-FR"                    // Langue de l'interface
  data-template-id="..."                  // Type de widget
  data-businessunit-id="..."              // ID Trustpilot
  data-stars="4,5"                        // Filtrage par étoiles
  data-review-languages="fr"              // Langue des avis
  data-theme="light"                      // Thème (light/dark)
/>
```

### Templates disponibles

- **Carousel**: `53aa8912dec7e10d38f59f36` (actuellement utilisé)
- **Grid**: `539ad0ffdec7e10e686debd7`
- **List**: `539adbd6dec7e10e686debca`
- **Mini**: `53aa8807dec7e10d38f59f32`

## Maintenance

### Vérifier le bon fonctionnement

1. Ouvrir la page principale du site
2. Naviguer vers la section "Témoignages clients" (#trust)
3. Vérifier que le carousel d'avis s'affiche correctement
4. Confirmer que seuls les avis 4-5 étoiles sont affichés
5. Vérifier que les avis sont en français

### Déboguer

Si le widget ne s'affiche pas:

1. Vérifier que le Business Unit ID est correct
2. Vérifier que le script Trustpilot se charge (console réseau)
3. Vérifier qu'il n'y a pas d'erreurs dans la console
4. Vérifier que le composant est bien monté (useEffect)

### Mettre à jour le Business Unit ID

Si vous changez de compte Trustpilot, mettez à jour la valeur de `data-businessunit-id` dans le composant `TestimonialsMarquee.tsx`.

## Performance

- Le script Trustpilot est chargé avec la stratégie `lazyOnload` pour optimiser le temps de chargement initial
- Le composant utilise `useRef` pour éviter les re-renders inutiles
- Le widget est chargé côté client uniquement (`"use client"`)

## Accessibilité

- Le widget inclut un lien de fallback vers la page Trustpilot
- Les couleurs respectent le contraste WCAG
- Le widget est navigable au clavier (natif Trustpilot)

---

**Dernière mise à jour**: 11 novembre 2025
**Statut**: ✅ Opérationnel
