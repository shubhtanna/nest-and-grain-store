import { cookies } from 'next/headers'
import type { CartLine } from '@/data/types'
import { DELIVERY_FEE, FREE_DELIVERY_FROM, getProduct, getProductById } from './store'

export const CART_COOKIE = 'ng_cart'

export async function readCart(): Promise<CartLine[]> {
  const raw = (await cookies()).get(CART_COOKIE)?.value
  if (!raw) return []
  try {
    const lines = JSON.parse(raw) as CartLine[]
    return lines.filter((l) => getProductById(l.id) && l.qty > 0)
  } catch {
    return []
  }
}

export async function writeCart(lines: CartLine[]) {
  ;(await cookies()).set(CART_COOKIE, JSON.stringify(lines), {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })
}

export function summaryForLines(lines: CartLine[]) {
  const items = lines.map((l) => {
    const product = getProductById(l.id)!
    return { ...l, product, lineTotal: product.price * l.qty }
  })
  const subtotal = items.reduce((s, i) => s + i.lineTotal, 0)
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE
  return { items, count: items.reduce((s, i) => s + i.qty, 0), subtotal, delivery, total: subtotal + delivery }
}

export async function cartSummary() {
  return summaryForLines(await readCart())
}

// Serialises cart lines for a shareable checkout link: /checkout?items=<id>:<qty>,<id>:<qty>.
// Carries product ids and quantities only — never prices.
export function cartToItemsParam(lines: CartLine[]): string {
  return lines.map((l) => `${l.id}:${l.qty}`).join(',')
}

// Rebuilds cart lines from an ?items=… parameter. Unknown ids are ignored and
// quantities are clamped to 1–10, matching the cart's own limits.
export function itemsParamToCart(raw: string | undefined): CartLine[] {
  if (!raw) return []
  const lines: CartLine[] = []
  for (const part of raw.split(',')) {
    const [id, qtyRaw] = part.split(':')
    const product = getProductById(id) ?? getProduct(id)
    if (!product || product.stock === 'out_of_stock') continue
    const qty = Math.max(1, Math.min(10, Math.floor(Number(qtyRaw))))
    if (!Number.isFinite(qty)) continue
    lines.push({ id: product.id, option: null, qty })
  }
  return lines
}
