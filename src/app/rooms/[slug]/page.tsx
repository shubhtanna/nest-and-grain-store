import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import ProductCard from '@/components/ProductCard'
import SortSelect from '@/components/SortSelect'
import { getProductsInRoom, getRoom, getRooms, sortProducts, type SortKey } from '@/lib/store'

export function generateStaticParams() {
  return getRooms().map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: PageProps<'/rooms/[slug]'>): Promise<Metadata> {
  const room = getRoom((await params).slug)
  return room ? { title: `${room.name} Furniture`, description: room.blurb } : {}
}

export default async function RoomPage({ params, searchParams }: PageProps<'/rooms/[slug]'>) {
  const room = getRoom((await params).slug)
  if (!room) notFound()
  const all = getProductsInRoom(room.slug)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-clay">Shop</p>
      <h1 className="mt-2 font-serif text-5xl">{room.name}</h1>
      <p className="mt-3 text-stone">{room.blurb}</p>
      <Suspense fallback={<Grid products={all} count={all.length} controls={false} />}>
        <SortedGrid room={room.slug} searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

async function SortedGrid({ room, searchParams }: { room: string; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams
  const sort = (typeof sp.sort === 'string' ? sp.sort : 'featured') as SortKey
  const inStockOnly = sp.stock === 'in'
  let list = sortProducts(getProductsInRoom(room), sort)
  if (inStockOnly) list = list.filter((p) => p.stock === 'in_stock')
  return <Grid products={list} count={list.length} sort={sort} inStockOnly={inStockOnly} />
}

function Grid({ products, count, sort = 'featured', inStockOnly = false, controls = true }: { products: ReturnType<typeof getProductsInRoom>; count: number; sort?: SortKey; inStockOnly?: boolean; controls?: boolean }) {
  return (
    <>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-y border-rule py-4">
        <p className="text-sm text-stone">{count} pieces</p>
        {controls && <SortSelect sort={sort} inStockOnly={inStockOnly} />}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  )
}
