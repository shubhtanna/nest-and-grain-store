import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import CheckoutForm from '@/components/CheckoutForm'
import { cartSummary, itemsParamToCart, summaryForLines } from '@/lib/cart'
import { formatPrice } from '@/lib/store'

export const metadata: Metadata = { title: 'Checkout' }

export default function CheckoutPage({ searchParams }: { searchParams: Promise<{ items?: string }> }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-5xl">Checkout</h1>
      <Suspense fallback={<p className="mt-10 text-stone">Loading…</p>}>
        <Checkout searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

async function Checkout({ searchParams }: { searchParams: Promise<{ items?: string }> }) {
  const { items: itemsParam } = await searchParams
  // A shareable checkout link (?items=<id>:<qty>,…) rebuilds the order from the URL,
  // so it opens the same items on any device with no cookies. Unknown ids are
  // ignored and quantities are clamped to stock limits.
  const cart = itemsParam ? summaryForLines(itemsParamToCart(itemsParam)) : await cartSummary()

  if (cart.count === 0) {
    return (
      <p className="mt-10 text-stone">
        Your cart is empty. <Link href="/" className="underline">Continue shopping</Link>
      </p>
    )
  }
  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
      <CheckoutForm total={formatPrice(cart.total)} itemsParam={itemsParam ?? null} />
      <aside className="h-fit rounded-lg bg-sand p-6">
        <h2 className="font-serif text-xl">In your order</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {cart.items.map((i) => (
            <li key={`${i.id}-${i.option}`} className="flex justify-between gap-3">
              <span>
                {i.product.name}
                {i.option && <span className="text-stone"> · {i.option}</span>} × {i.qty}
              </span>
              <span>{formatPrice(i.lineTotal)}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-5 space-y-2 border-t border-rule pt-4 text-sm">
          <div className="flex justify-between"><dt>Delivery</dt><dd>{cart.delivery ? formatPrice(cart.delivery) : 'Free'}</dd></div>
          <div className="flex justify-between text-base font-medium"><dt>Total</dt><dd>{formatPrice(cart.total)}</dd></div>
        </dl>
      </aside>
    </div>
  )
}
