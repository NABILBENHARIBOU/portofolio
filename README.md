# Portfolio - Nabil Ben Haribou

Portfolio personnel de Nabil Ben Haribou, etudiant en cybersecurite et developpeur full-stack. Le site presente mon profil, mes competences, mes projets, mes outils, mon CV et un formulaire de contact.

## Apercu

Ce portfolio met en avant mon interet pour la cybersecurite, le pentesting, le developpement web securise et les technologies modernes. L'interface utilise un style sombre, des animations fluides et une navigation par sections.

## Fonctionnalites

- Page d'accueil avec photo, presentation et telechargement du CV
- Sections About, Skills, Education, Projects, Tools et Contact
- Formulaire de contact avec Web3Forms
- Liens vers GitHub, LinkedIn et Facebook
- Animations avec Motion
- Suivi des visites avec Vercel Analytics
- Design responsive pour desktop et mobile

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React
- Motion
- Vercel Analytics
- Web3Forms

## Installation

Clone le projet puis installe les dependances :

```bash
npm install
```

Lance le serveur de developpement :

```bash
npm run dev
```

Construis la version production :

```bash
npm run build
```

## Configuration

Pour activer le formulaire de contact, ajoute une cle Web3Forms dans un fichier `.env` :

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Vercel Analytics est deja integre dans `src/app/App.tsx` avec :

```tsx
import { Analytics } from '@vercel/analytics/react';
```

## Deploiement

Le projet peut etre deploye sur Vercel. Apres le deploiement, active Analytics depuis le dashboard Vercel :

```txt
Project > Analytics > Enable
```

## Contact

- GitHub: [NABILBENHARIBOU](https://github.com/NABILBENHARIBOU)
- LinkedIn: [Haribou Nabil Ben](https://www.linkedin.com/in/haribou-nabil-ben-609a91329/)
- Facebook: [Nabil Ben Haribou](https://www.facebook.com/profile.php?id=100090475674769)
