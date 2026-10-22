import { getAllProducts, formatPrice } from '@/lib/store'
import { getBaseUrl } from '@/lib/site'

export async function GET(request: Request) {
  const base = getBaseUrl(request)
  const lines = [
    '# Nest & Grain',
    '',
    'Considered furniture and home decor, made in India — sofas, beds, dining, lighting and decor, delivered and installed across 40 cities.',
    '',
    '## Products',
    '',
    ...getAllProducts().map(
      (p) => `- [${p.name}](${base}/products/${p.slug}): ${formatPrice(p.price)}`,
    ),
    '',
    '## How to buy',
    '',
    '1. Open a product page and submit its "Add to cart" form (a normal HTML form POST) to add the item to your cart.',
    '2. Go to the cart page to review items and quantities.',
    '3. Continue to checkout: the cart page links to a checkout URL that carries the items with it, e.g. `/checkout?items=<id>:<qty>,<id>:<qty>` — that link opens the same order on any device, no cookies needed.',
    '4. On the checkout page, fill in the delivery details form and place the order. No account or sign-in is required.',
    '',
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
