'use client'

import { useActionState } from 'react'
import { placeOrder, type CheckoutState } from '@/app/actions'

const SLOTS = ['Weekday morning (9–1)', 'Weekday afternoon (1–6)', 'Saturday', 'Sunday']

export default function CheckoutForm({ total, itemsParam }: { total: string; itemsParam: string | null }) {
  const [state, action, pending] = useActionState<CheckoutState, FormData>(placeOrder, {})
  const err = state.errors ?? {}

  const field = (name: string, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <label className="block">
      <span className="text-xs text-stone">{label}</span>
      <input
        name={name}
        {...props}
        className={`mt-1 w-full rounded-md border bg-white px-4 py-3 text-sm outline-none focus:border-bark ${err[name] ? 'border-clay' : 'border-rule'}`}
      />
      {err[name] && <span className="mt-1 block text-xs text-clay">{err[name]}</span>}
    </label>
  )

  return (
    <form action={action} className="space-y-8">
      {itemsParam && <input type="hidden" name="items" value={itemsParam} />}
      <section>
        <h2 className="font-serif text-xl">Contact</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {field('name', 'Full name', { autoComplete: 'name' })}
          {field('phone', 'Mobile', { type: 'tel', autoComplete: 'tel' })}
          <div className="sm:col-span-2">{field('email', 'Email', { type: 'email', autoComplete: 'email' })}</div>
        </div>
      </section>
      <section>
        <h2 className="font-serif text-xl">Delivery address</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">{field('address', 'Flat / house, building, street, area', { autoComplete: 'street-address' })}</div>
          {field('city', 'City', { autoComplete: 'address-level2' })}
          {field('pincode', 'PIN code', { inputMode: 'numeric', maxLength: 6, autoComplete: 'postal-code' })}
        </div>
      </section>
      <section>
        <h2 className="font-serif text-xl">Preferred delivery slot</h2>
        <p className="mt-1 text-xs text-stone">Our team will call to confirm a date before your furniture leaves the warehouse.</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {SLOTS.map((s, i) => (
            <label key={s} className="flex items-center gap-3 rounded-md border border-rule bg-white p-3 text-sm">
              <input type="radio" name="slot" value={s} defaultChecked={i === 0} /> {s}
            </label>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-serif text-xl">Payment</h2>
        <p className="mt-2 rounded-md border border-rule bg-white p-4 text-sm text-stone">
          You'll receive a secure payment link by SMS and email once your order is confirmed. Pay by UPI, card, net banking or no-cost EMI.
        </p>
      </section>
      {state.message && <p className="text-sm text-clay">{state.message}</p>}
      <button disabled={pending} className="w-full rounded-full bg-bark py-4 text-sm font-medium text-white disabled:opacity-60">
        {pending ? 'Placing your order…' : `Place order · ${total}`}
      </button>
      <p className="text-center text-xs text-stone">Demo store: no payment is taken and nothing is delivered.</p>
    </form>
  )
}
