# Portfolio Personnel - AMANKWAAH Duah Prince Yao

Portfolio bilingue (FR/EN) construit avec Next.js 14+, TypeScript, Tailwind CSS, Framer Motion et next-intl.

## Stack Technique

- **Framework**: Next.js 14+ (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalisation**: next-intl (routing par locale /fr et /en)
- **Déploiement**: Vercel

## Structure du Projet

```
├── app/
│   ├── [locale]/           # Routes localisées (fr, en)
│   │   ├── layout.tsx      # Layout avec metadata SEO et JSON-LD
│   │   ├── page.tsx        # Page principale (single page scrollable)
│   │   ├── sitemap.ts      # Sitemap dynamique
│   │   └── robots.ts       # Robots.txt
│   ├── globals.css        # Styles globaux et variables CSS
│   └── layout.tsx         # Root layout (redirect vers /fr)
├── components/
│   ├── Header.tsx         # Header avec navigation et sélecteur de langue
│   └── JournalEntry.tsx   # Composant signature "journal de livraison"
├── messages/
│   ├── fr.json            # Traductions françaises
│   └── en.json            # Traductions anglaises
├── i18n.ts                # Configuration next-intl
├── middleware.ts          # Middleware pour routing par locale
└── public/                # Assets statiques (CV.pdf, images)
```

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur. Le site redirigera automatiquement vers `/fr`.

## Construction pour Production

```bash
npm run build
npm start
```

## Déploiement sur Vercel

1. Connectez-vous à [Vercel](https://vercel.com)
2. Importez ce projet depuis GitHub
3. Vercel détectera automatiquement Next.js
4. Configurez les variables d'environnement si nécessaire
5. Déployez

## À Compléter Avant le Déploiement

### 1. Domaine et URLs
Dans les fichiers suivants, remplacez `https://your-domain.com` par votre domaine réel :
- `app/[locale]/layout.tsx` (ligne 28)
- `app/[locale]/sitemap.ts` (ligne 5)
- `app/[locale]/robots.ts` (ligne 5)

### 2. CV PDF
Ajoutez votre fichier CV dans le dossier `public/` :
- Nommez-le `cv.pdf`
- Le lien de téléchargement dans la section Contact pointera vers `/cv.pdf`

### 3. Métadonnées SEO
Vérifiez et ajustez les métadonnées dans `app/[locale]/layout.tsx` :
- Titres et descriptions pour FR et EN
- JSON-LD schema (informations personnelles)

### 4. Images de Partage
Pour un meilleur partage sur les réseaux sociaux, ajoutez une image OG :
- Ajoutez `og-image.jpg` ou `og-image.png` dans `public/`
- Mettez à jour la configuration OpenGraph dans `app/[locale]/layout.tsx`

## Sections du Site

1. **Hero** - Positionnement double (dev + futur PM), aperçu des livraisons récentes
2. **À propos** - Parcours, outils quotidiens, localisation et ambitions
3. **Compétences** - Frontend, intégrations, SEO/i18n, gestion de projet, déploiement
4. **Projets** - 5 projets livrés en production avec statut, stack, rôle et liens
5. **Services** - Offres freelance (sites vitrines, apps Next.js, SEO, intégrations, automatisation, déploiement)
6. **Contact** - Coordonnées, liens sociaux, téléchargement CV

## Internationalisation

Le site utilise next-intl avec routing par locale :
- `/fr` - Version française
- `/en` - Version anglaise

Les traductions sont dans `messages/fr.json` et `messages/en.json`.

## SEO

- Sitemap dynamique couvrant les deux locales
- Robots.txt configuré
- JSON-LD schema Person pour Google
- Balises hreflang pour les versions FR/EN
- Open Graph et Twitter Card configurés

## Design System

**Palette de couleurs** :
- Fond principal : `#14161A`
- Fond cartes/sections : `#1D2024`
- Texte principal : `#EDEAE3`
- Accent primaire (ocre doré) : `#E7B65C`
- Accent secondaire (vert sarcelle, prod) : `#4E8B7C`
- Accent statut (en cours) : `#C4622D`

**Typographie** :
- Titres : Fraunces (serif)
- Corps de texte : Inter (sans-serif)
- Labels techniques/badges : IBM Plex Mono (monospace)

## Composant Signature : Journal de Livraison

Le composant `JournalEntry` est l'élément signature du site. Il présente chaque projet comme une entrée de changelog réelle avec :
- Date en monospace
- Badge de statut (🟢 En prod / 🟡 En cours)
- Titre du projet
- Description
- Rôle
- Stack technique en tags
- Liens live et GitHub

Ce composant est réutilisé dans le hero (aperçu) et la section Projets (version complète).

## Performance et Accessibilité

- Mobile-first, testé jusqu'à 375px
- Focus clavier visible sur tous les éléments interactifs
- Contraste WCAG AA conforme
- Images optimisées via next/image
- Respect de prefers-reduced-motion
- Pas de layout shift au chargement

## Licence

Ce projet est un portfolio personnel.
