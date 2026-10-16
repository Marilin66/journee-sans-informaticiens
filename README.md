# Une journée sans informaticiens

One-page narratif en français, taquin mais bienveillant, réalisé avec **React 18 + Vite + Framer Motion + Tailwind CSS** (aucune autre dépendance).

> « Tu me demandais ce que nous faisons. Maintenant tu sais. »
> — Marilin BADJI, technicien supérieur en informatique et télécommunications

## Arborescence du projet

```
.
├── index.html                    # Point d'entrée HTML (lang fr, favicon inline)
├── package.json
├── vite.config.js
├── tailwind.config.js            # Palette : night / panel / edge / neon / ice / alert
├── postcss.config.js
└── src/
    ├── main.jsx                  # Montage React 18 (createRoot, StrictMode)
    ├── App.jsx                   # Machine à états : home → blackout → journey
    ├── content.js                # ⭐ TOUS les textes centralisés (1 seul fichier à éditer)
    ├── index.css                 # Tailwind, glitch keyframes, prefers-reduced-motion
    └── components/
        ├── Icons.jsx             # Bibliothèque d'icônes SVG dessinées à la main
        ├── Hero.jsx              # Horloge 06:00 + bouton rouge pulsant
        ├── Blackout.jsx          # Glitch, cascade de pannes, signal à 0, écran bleu
        ├── Journey.jsx           # 4 actions qui échouent + compteur « marchent encore »
        ├── Reboot.jsx            # Bouton vert « Rappeler un informaticien »
        ├── Skills.jsx            # Cartes de compétences animées au scroll
        ├── Finale.jsx            # Machine à écrire + bouton WhatsApp
        └── Footer.jsx            # Signature Marilin BADJI
```

## Commandes npm

```bash
npm install     # installer les dépendances
npm run dev     # serveur de développement (http://localhost:5173)
npm run build   # build de production dans dist/
npm run preview # prévisualiser le build de production
```

## Personnalisation

Tout le contenu se modifie dans **`src/content.js`** :
- `whatsappNumber` : votre numéro au format international, sans « + » (ex. `22990123456`)
- `whatsappMessage` : le message pré-rempli du bouton « Me répondre »
- chaque section (hero, blackout, journey, skills, finale) avant / après

## Déploiement sur Vercel

1. **Dépôt Git** (recommandé) :
   ```bash
   git init && git add . && git commit -m "Site : une journée sans informaticiens"
   git remote add origin https://github.com/<votre-compte>/journee-sans-informaticiens.git
   git push -u origin main
   ```
2. Ouvrez [vercel.com/new](https://vercel.com/new), importez le dépôt.
3. Vercel détecte **Vite** automatiquement : Build Command `npm run build`,
   Output Directory `dist`. Cliquez **Deploy**.
4. (Variante sans Git) : `npm i -g vercel && vercel --prod`

## Qualité

- Animations limitées aux propriétés `transform` et `opacity` (60 fps)
- Icônes vectorielles dessinées à la main (aucune image, aucun sticker)
- `prefers-reduced-motion` respecté (accès clavier, `aria-live`, contrastes)
- Sections `Skills` et `Finale` chargées paresseusement (React.lazy)
