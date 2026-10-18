import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductCard from '@/components/ProductCard'
import { searchProducts } from '@/lib/store'

export const metadata: Metadata = { title: 'Search' }

export default function SearchPage({ searchParams }: PageProps<'/search'>) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-5xl">Search</h1>
      <Suspense fallback={<SearchForm q="" />}>
        <Results searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

function SearchForm({ q }: { q: string }) {
  return (
    <form action="/search" className="mt-6 flex max-w-xl gap-2">
      <input
        name="q"
        defaultValue={q}
        placeholder="Try “oak”, “pendant” or “velvet sofa”"
        className="flex-1 rounded-full border border-rule bg-white px-5 py-3 outline-none focus:border-bark"
      />
      <button className="rounded-full bg-bark px-6 text-sm font-medium text-white">Search</button>
    </form>
  )
}

async function Results({ searchParams }: { searchParams: PageProps<'/search'>['searchParams'] }) {
  const sp = await searchParams
  const q = typeof sp.q === 'string' ? sp.q : ''
  const results = q ? searchProducts(q) : []
  return (
    <>
      <SearchForm q={q} />
      {q && (
        <p className="mt-8 text-sm text-stone">
          {results.length} {results.length === 1 ? 'result' : 'results'} for “{q}”
        </p>
      )}
      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
        {results.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  )
}
