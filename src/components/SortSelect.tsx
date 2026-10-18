'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SortSelect({ sort, inStockOnly }: { sort: string; inStockOnly: boolean }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const update = (key: string, value: string | null) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    router.replace(`${pathname}?${next.toString()}`, { scroll: false })
  }

  return (
    <div className="flex items-center gap-4 text-sm">
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={inStockOnly} onChange={(e) => update('stock', e.target.checked ? 'in' : null)} />
        In stock only
      </label>
      <select
        value={sort}
        onChange={(e) => update('sort', e.target.value === 'featured' ? null : e.target.value)}
        className="rounded-full border border-rule bg-white px-4 py-2"
        aria-label="Sort"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: low to high</option>
        <option value="price-desc">Price: high to low</option>
        <option value="rating">Highest rated</option>
      </select>
    </div>
  )
}
