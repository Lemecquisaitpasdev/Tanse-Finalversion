# 📸 Team Photos

Ce dossier contient les photos de profil de l'équipe TANSE.

## 🖼️ Images Requises

Placez les 2 images suivantes dans ce dossier :

1. **`raphpro.png`** → Photo de Raphael
2. **`rayane.png`** → Photo de Rayane (renommez `output 2.PNG`)

## 📏 Spécifications

- **Format** : PNG ou JPG
- **Taille recommandée** : 300x300px minimum
- **Ratio** : Carré (1:1)
- **Qualité** : Haute résolution pour éviter le flou

## ✂️ Cadrage

Les photos seront affichées en **cercle de 80x80px** sur la page équipe.

Le code utilise :
- `object-cover` : La photo remplira le cercle
- `object-center` : Le visage sera centré automatiquement

**Si le visage n'est pas centré**, vous pouvez ajuster manuellement dans le code en changeant :
- `object-center` → `object-top` (centrer en haut)
- `object-center` → `object-[50%_30%]` (position custom)

## 🎨 Design

Les photos ont :
- Bordure ronde avec `ring-2 ring-[#444684]/20`
- Ombre portée
- Intégration dans les cartes blanches de l'équipe

## 📍 Utilisation

Les images sont automatiquement chargées par Next.js Image :
- Optimisation automatique
- Lazy loading
- Responsive

---

**Une fois les images placées ici, elles s'afficheront automatiquement sur la page `/agence-geo-paris-lyon` ! 🎉**
