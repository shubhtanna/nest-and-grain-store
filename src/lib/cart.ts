import { cookies } from 'next/headers'
import type { CartLine } from '@/data/types'
import { DELIVERY_FEE, FREE_DELIVERY_FROM, getProductById } from './store'

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

export async function cartSummary() {
  const lines = await readCart()
  const items = lines.map((l) => {
    const product = getProductById(l.id)!
    return { ...l, product, lineTotal: product.price * l.qty }
  })
  const subtotal = items.reduce((s, i) => s + i.lineTotal, 0)
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE
  return { items, count: items.reduce((s, i) => s + i.qty, 0), subtotal, delivery, total: subtotal + delivery }
}
