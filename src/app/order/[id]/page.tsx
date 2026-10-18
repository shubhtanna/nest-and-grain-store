import type { Metadata } from 'next'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { Suspense } from 'react'
import { formatPrice } from '@/lib/store'

export const metadata: Metadata = { title: 'Order placed' }

export default function OrderPage({ params }: PageProps<'/order/[id]'>) {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-clay">Thank you</p>
      <h1 className="mt-3 font-serif text-5xl">Your order is placed.</h1>
      <Suspense fallback={null}>
        <Details params={params} />
      </Suspense>
      <Link href="/" className="mt-10 inline-block rounded-full bg-bark px-7 py-3 text-sm text-white">
        Back to home
      </Link>
    </div>
  )
}

async function Details({ params }: { params: PageProps<'/order/[id]'>['params'] }) {
  const { id } = await params
  let order: { orderId: string; total: number; email: string; slot: string } | null = null
  try {
    const saved = JSON.parse((await cookies()).get('ng_last_order')?.value ?? 'null')
    if (saved?.orderId === id) order = saved
  } catch {
    /* ignore */
  }
  return (
    <div className="mt-6 space-y-2 text-stone">
      <p>
        Order <span className="font-medium text-bark">{id}</span>
      </p>
      {order && (
        <>
          <p>{formatPrice(order.total)} · payment link sent to {order.email}</p>
          <p>Preferred delivery: {order.slot}. We'll call to confirm a date.</p>
        </>
      )}
    </div>
  )
}
