import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, Observable } from '@apollo/client';
import { brands, catalog } from '../demo/catalog';

export const demoMode = import.meta.env.VITE_DEMO_MODE === 'true';
const demoLink = new ApolloLink((operation) => new Observable((observer) => {
  const { id, brandId, modelId, name } = operation.variables;
  let data;
  switch (operation.operationName) {
    case 'GetBrands': data = { findAllBrands: brands }; break;
    case 'GetModels': data = { findBrandModels: catalog[id] ?? [] }; break;
    case 'SearchModels': data = { searchModels: (catalog[brandId] ?? []).filter(model => model.name.toLowerCase().includes(String(name).trim().toLowerCase())) }; break;
    case 'GetModel': data = { findUniqueModel: (catalog[brandId] ?? []).find(model => model.id === modelId) ?? null }; break;
    default: observer.error(new Error('Unknown demo operation')); return;
  }
  observer.next({ data });
  observer.complete();
}));

export const client = new ApolloClient({
  link: demoMode ? demoLink : new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_URL || 'https://graphql-api-brown.vercel.app/api/graphql' }),
  cache: new InMemoryCache(),
});
