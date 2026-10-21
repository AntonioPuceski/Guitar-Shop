import type { Brand, Model } from '../types/graphql';

// Fictional sample data, never a fallback for failed live requests.
export const brands: Brand[] = [
  { id: 'northstar', name: 'Northstar', image: '/demo/northstar.svg' },
  { id: 'echo', name: 'Echo Works', image: '/demo/echo.svg' },
  { id: 'cedar', name: 'Cedar & Co.', image: '/demo/cedar.svg' },
];
export const catalog: Record<string, Model[]> = Object.fromEntries(brands.map((brand) => [brand.id,
  ['Aurora', 'Beacon', 'Canyon', 'Drift', 'Ember', 'Field', 'Grove', 'Horizon'].map((name, i) => ({
    id: `${brand.id}-${i}`, name: `${brand.name} ${name}`,
    type: ['Electric', 'Acoustic', 'Classic', 'Bass'][i % 4],
    image: `/demo/${['amber', 'cherry', 'ocean'][i % 3]}.svg`, price: 499 + i * 120,
    description: 'A fictional instrument for exploring the portfolio demo. Prices, specifications and musicians are sample data; the artwork is an illustration.',
    specs: { bodyWood: 'Alder (sample)', neckWood: 'Maple (sample)', fingerboardWood: 'Rosewood (sample)', pickups: 'Dual humbucker (sample)', tuners: 'Locking (sample)', scaleLength: '25.5 inches (sample)', bridge: 'Fixed (sample)' },
    musicians: ['Alex Rivers', 'Sam Vale', 'Robin Lane', 'Jamie Reed'].map((name, n) => ({ name: `${name} (fictional)`, musicianImage: '/demo/musician.svg', bands: [`Demo Ensemble ${n+1}`] })),
  })),
]));
