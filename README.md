# SurcingIT

Site vitrine de SurcingIT, ESN hybride spécialisée en cybersécurité et en sourcing de talents IT.

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) sur Vite 8
- Tailwind CSS v4 (CSS-first, tokens dans `src/styles.css`), shadcn/radix pour les primitives d'UI
- GSAP + ScrollTrigger, Lenis (scroll fluide) et framer-motion pour les animations
- three.js / `@react-three/fiber` pour les visuels WebGL ponctuels

## Développement

```sh
git clone <this-repository-url>
cd suringit
npm i
npm run dev
```

## Scripts

- `npm run dev` — serveur de développement
- `npm run build` — build de production
- `npm run preview` — prévisualisation du build
- `npm run lint` — ESLint
- `npm run format` — Prettier
