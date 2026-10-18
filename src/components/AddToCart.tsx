'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { Minus, Plus } from 'lucide-react'
import { addToCart } from '@/app/actions'

function Submit({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={disabled || pending}
      className="mt-6 w-full rounded-full bg-bark py-4 text-sm font-medium text-white transition hover:bg-bark/85 disabled:cursor-not-allowed disabled:bg-stone/50"
    >
      {disabled ? 'Out of stock' : pending ? 'Adding…' : 'Add to cart'}
    </button>
  )
}

export default function AddToCart({
  productId,
  option,
  disabled,
}: {
  productId: string
  option: { name: string; values: string[] } | null
  disabled: boolean
}) {
  const [choice, setChoice] = useState(option?.values[0] ?? '')
  const [qty, setQty] = useState(1)

  return (
    <form action={addToCart} className="mt-6">
      <input type="hidden" name="productId" value={productId} />
      <input type="hidden" name="qty" value={qty} />
      {option && (
        <>
          <input type="hidden" name="option" value={choice} />
          <p className="text-sm">
            {option.name}: <span className="font-medium">{choice}</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {option.values.map((v) => (
              <button
                type="button"
                key={v}
                onClick={() => setChoice(v)}
                className={`rounded-full border px-4 py-2 text-sm ${choice === v ? 'border-bark bg-bark text-white' : 'border-rule bg-white hover:border-bark'}`}
              >
                {v}
              </button>
            ))}
          </div>
        </>
      )}
      <div className="mt-5 flex items-center gap-4">
        <span className="text-sm">Quantity</span>
        <div className="flex items-center rounded-full border border-rule bg-white">
          <button type="button" className="p-2.5" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
            <Minus size={14} />
          </button>
          <span className="w-8 text-center text-sm">{qty}</span>
          <button type="button" className="p-2.5" onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Increase quantity">
            <Plus size={14} />
          </button>
        </div>
      </div>
      <Submit disabled={disabled} />
    </form>
  )
}
