# Online Guitar Shop

A three-page React and TypeScript catalogue that consumes a GraphQL API. It was built from a supplied design assignment.

## Features

- Brand catalogue with navigation to each brand's models
- Model search and type filtering
- Infinite scrolling for model results
- Specification and musician tabs on the model details page
- English, Macedonian, and Albanian translations with i18next

## Technology

React, TypeScript, Vite, Apollo Client, GraphQL, React Router, i18next, styled-components, and CSS Modules.

## Setup

```bash
git clone https://github.com/Ton4ee/Guitar-Shop.git
cd Guitar-Shop
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Validation commands

```bash
npm run lint
npm run build
```

## API

The Apollo client is configured for `https://graphql-api-brown.vercel.app/api/graphql`.

The application requires that service to be available; this repository does not contain the GraphQL server.


