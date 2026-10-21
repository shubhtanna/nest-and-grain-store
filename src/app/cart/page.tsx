import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { removeLine, updateQty } from '@/app/actions'
import { cartSummary, cartToItemsParam } from '@/lib/cart'
import { FREE_DELIVERY_FROM, formatPrice } from '@/lib/store'

export const metadata: Metadata = { title: 'Your cart' }

export default function CartPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-5xl">Your cart</h1>
      <Suspense fallback={<p className="mt-10 text-stone">Loading your cart…</p>}>
        <CartContents />
      </Suspense>
    </div>
  )
}

async function CartContents() {
  const cart = await cartSummary()

  if (cart.count === 0) {
    return (
      <div className="mt-10 rounded-lg border border-dashed border-rule p-12 text-center">
        <p className="text-stone">Your cart is empty.</p>
        <Link href="/rooms/living-room" className="mt-5 inline-block rounded-full bg-bark px-6 py-3 text-sm text-white">
          Start shopping
        </Link>
      </div>
    )
  }

  const toFree = Math.max(0, FREE_DELIVERY_FROM - cart.subtotal)

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
      <ul className="divide-y divide-rule border-y border-rule">
        {cart.items.map((i) => (
          <li key={`${i.id}-${i.option}`} className="flex gap-5 py-6">
            <Link href={`/products/${i.product.slug}`} className="relative h-32 w-28 shrink-0 overflow-hidden rounded-md bg-sand">
              <Image src={`${i.product.image}?w=300&q=70&auto=format&fit=crop`} alt={i.product.name} fill sizes="112px" className="object-cover" />
            </Link>
            <div className="flex flex-1 flex-col">
              <div className="flex justify-between gap-4">
                <div>
                  <Link href={`/products/${i.product.slug}`} className="font-serif text-lg">{i.product.name}</Link>
                  {i.option && <p className="text-sm text-stone">{i.product.option?.name}: {i.option}</p>}
                  <p className="text-sm text-stone">Ships in {i.product.deliveryDays} days</p>
                </div>
                <p className="font-medium">{formatPrice(i.lineTotal)}</p>
              </div>
              <div className="mt-auto flex items-center gap-4 pt-3 text-sm">
                <form action={updateQty} className="flex items-center gap-2">
                  <input type="hidden" name="productId" value={i.id} />
                  <input type="hidden" name="option" value={i.option ?? ''} />
                  <label htmlFor={`qty-${i.id}-${i.option}`} className="text-stone">Qty</label>
                  <select id={`qty-${i.id}-${i.option}`} name="qty" defaultValue={i.qty} className="rounded border border-rule bg-white px-2 py-1">
                    {Array.from({ length: 10 }, (_, n) => n + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                  <button className="underline underline-offset-2">Update</button>
                </form>
                <form action={removeLine}>
                  <input type="hidden" name="productId" value={i.id} />
                  <input type="hidden" name="option" value={i.option ?? ''} />
                  <button className="text-stone underline underline-offset-2">Remove</button>
                </form>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit rounded-lg bg-sand p-6">
        <h2 className="font-serif text-xl">Order summary</h2>
        <dl className="mt-5 space-y-2 text-sm">
          <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(cart.subtotal)}</dd></div>
          <div className="flex justify-between"><dt>Delivery</dt><dd>{cart.delivery ? formatPrice(cart.delivery) : 'Free'}</dd></div>
          <div className="flex justify-between border-t border-rule pt-3 text-base font-medium"><dt>Total</dt><dd>{formatPrice(cart.total)}</dd></div>
        </dl>
        {toFree > 0 && <p className="mt-3 text-xs text-stone">Add {formatPrice(toFree)} more for free delivery and installation.</p>}
        <Link href={`/checkout?items=${cartToItemsParam(cart.items)}`} className="mt-6 block rounded-full bg-bark py-4 text-center text-sm font-medium text-white">
          Continue to checkout
        </Link>
      </aside>
    </div>
  )
}
