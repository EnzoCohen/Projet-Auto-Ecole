# Auto-École de la Réussite - Site Vitrine

Site vitrine moderne pour une auto-école, développé avec React, TypeScript, Tailwind CSS et Supabase.

## 🚀 Technologies

- **React 19** avec **Vite**
- **TypeScript** pour la sécurité du code
- **Tailwind CSS v4** pour le design
- **Framer Motion** pour les animations
- **React Router v6** pour la navigation
- **React Hook Form + Zod** pour la validation des formulaires
- **Supabase** pour la base de données
- **React Helmet Async** pour le SEO

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## ⚙️ Configuration Supabase

### 1. Créer un projet Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet
3. Récupérez l'URL et la clé API (Anon Key) dans Settings > API

### 2. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon
```

### 3. Créer la table appointments

Dans le SQL Editor de Supabase, exécutez le script `supabase-schema.sql` :

```sql
-- Le contenu du fichier supabase-schema.sql
```

## 📄 Pages

- **Accueil** (`/`) - Hero section, présentation des services
- **Qui sommes-nous** (`/about`) - Présentation de l'équipe et des valeurs
- **Tarifs** (`/pricing`) - Toutes les formules et tarifs
- **Réservation** (`/booking`) - Formulaire de prise de rendez-vous
- **FAQ** (`/faq`) - Questions fréquentes avec accordéon
- **Contact** (`/contact`) - Informations de contact et Google Maps

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `src/index.css` :

- **Primaire** : Noir (`#0a0a0a`)
- **Accent** : Orange (`#FD6C30`)

### Ajouter une nouvelle formule

Utilisez le composant `PricingFormula` dans `src/pages/Pricing.tsx` :

```tsx
<PricingFormula
  emoji="📌"
  title="Ma Nouvelle Formule"
  options={[
    { hours: "15 heures", price: "950", popular: true }
  ]}
  features={[
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]}
  columns={1}
/>
```

## 🚢 Déploiement

### Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify

```bash
# Build
npm run build

# Le dossier dist/ contient les fichiers à déployer
```

N'oubliez pas d'ajouter vos variables d'environnement dans les paramètres de déploiement !

## 📝 SEO

Chaque page utilise React Helmet pour les meta tags. Personnalisez-les dans chaque fichier de page.

## 📞 Support

Pour toute question, contactez : contact@auto-ecole-reussite.fr
