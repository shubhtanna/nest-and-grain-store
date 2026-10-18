# Nest & Grain

Storefront for Nest & Grain, a furniture and home decor brand from Pune.

> This is a demo store. No real orders, payments or deliveries are processed.

Built with Next.js 16 (App Router, Cache Components), React 19 and Tailwind CSS 4.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## How it's put together

| Path | What's there |
|---|---|
| `src/data/catalog.ts` | Rooms and products, exported from the inventory sheet |
| `src/app/rooms/[slug]` | Room listings with sort and in-stock filter |
| `src/app/products/[slug]` | Product pages, statically generated |
| `src/app/search` | Search |
| `src/app/cart`, `src/app/checkout` | Cart and checkout, server-rendered |
| `src/app/actions.ts` | Server actions: add to cart, update, remove, place order |
| `src/lib/cart.ts` | Cart stored in an httpOnly cookie |

Payments are collected after order confirmation through a payment link (not wired up in this demo).

Deployed on Vercel. Product photos from [Unsplash](https://unsplash.com).
