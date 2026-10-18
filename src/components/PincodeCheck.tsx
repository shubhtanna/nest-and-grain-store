'use client'

import { useState } from 'react'

// First digits of PIN codes for cities with our own delivery and installation teams.
const METRO_PREFIXES = ['11', '40', '41', '56', '60', '50', '70', '38']

export default function PincodeCheck() {
  const [pin, setPin] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const check = () => {
    if (!/^\d{6}$/.test(pin)) {
      setResult('Please enter a valid 6-digit PIN code.')
      return
    }
    const metro = METRO_PREFIXES.some((p) => pin.startsWith(p))
    setResult(
      metro
        ? 'Great news: we deliver here with free installation by our own team.'
        : 'We deliver here through our courier partners. Add 3–5 days to the estimate; installation is not included.',
    )
  }

  return (
    <div className="mt-3">
      <div className="flex gap-2">
        <input
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
          inputMode="numeric"
          placeholder="Enter PIN code"
          className="flex-1 rounded-full border border-rule px-4 py-2 text-sm outline-none focus:border-bark"
        />
        <button type="button" onClick={check} className="rounded-full border border-bark px-5 text-sm">
          Check
        </button>
      </div>
      {result && <p className="mt-2 text-xs text-stone">{result}</p>}
    </div>
  )
}
