# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## Generování obrázku za pomocí GULPu

### Jak geenerovat
npm run
např. npm run build:generated:world-states 

### Typy obrázků
"build:generated:article": "node server/images/generated/articles.js",
"build:generated:brands": "node server/images/generated/brands.js",
"build:generated:default": "node server/images/generated/default.js",
"build:generated:events": "node server/images/generated/events.js",
"build:generated:fauna": "node server/images/generated/fauna.js",
"build:generated:flora": "node server/images/generated/flora.js",
"build:generated:foods": "node server/images/generated/foods.js",
"build:generated:main": "node server/images/generated/main.js",
"build:generated:maps": "node server/images/generated/maps.js",
"build:generated:travel_dictionaries": "node server/images/generated/travel_dictionaries.js",
"build:generated:users": "node server/images/generated/users.js",
"build:generated:videos": "node server/images/generated/videos.js",
"build:generated:world-cities": "node server/images/generated/world-cities.js",
"build:generated:world-continents": "node server/images/generated/world-continents.js",
"build:generated:world-regions": "node server/images/generated/world-regions.js",
"build:generated:world-spots": "node server/images/generated/world-spots.js",
"build:generated:world-states": "node server/images/generated/world-states.js"