import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Ruler, Star, Truck } from 'lucide-react'
import AddToCart from '@/components/AddToCart'
import PincodeCheck from '@/components/PincodeCheck'
import ProductCard from '@/components/ProductCard'
import { STOCK_LABEL, formatPrice, getAllProducts, getProduct, getProductsInRoom, getRoom } from '@/lib/store'
import { getBaseUrl } from '@/lib/site'

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/products/[slug]'>): Promise<Metadata> {
  const p = getProduct((await params).slug)
  if (!p) return {}
  return {
    title: p.name,
    description: p.description,
    openGraph: { title: p.name, description: p.description, images: [`${p.image}?w=1200&q=75&auto=format&fit=crop`] },
  }
}

export default async function ProductPage({ params }: PageProps<'/products/[slug]'>) {
  const p = getProduct((await params).slug)
  if (!p) notFound()
  const room = getRoom(p.room)!
  const related = getProductsInRoom(p.room).filter((x) => x.id !== p.id).slice(0, 4)
  const productUrl = `/products/${p.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    image: [`${p.image}?w=1200&q=75&auto=format&fit=crop`],
    sku: p.id,
    url: productUrl,
    offers: {
      '@type': 'Offer',
      price: p.price,
      priceCurrency: 'INR',
      availability: p.stock === 'out_of_stock' ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
      url: productUrl,
    },
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="mb-6 flex items-center gap-1 text-xs text-stone">
        <Link href="/">Home</Link>
        <ChevronRight size={12} />
        <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
        <ChevronRight size={12} />
        <span className="text-bark">{p.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-sand">
          <Image src={`${p.image}?w=1400&q=80&auto=format&fit=crop`} alt={p.name} fill priority sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
        </div>

        <div>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">{p.name}</h1>
          <p className="mt-2 flex items-center gap-1 text-sm text-stone">
            <Star size={14} className="fill-clay text-clay" /> {p.rating.toFixed(1)} · {p.reviews} reviews
          </p>
          <p className="mt-6 text-2xl">
            <span className={p.compareAt ? 'text-clay' : ''}>{formatPrice(p.price)}</span>
            {p.compareAt && <span className="ml-3 text-base text-stone line-through">{formatPrice(p.compareAt)}</span>}
          </p>
          <p className="text-xs text-stone">Inclusive of all taxes · EMI from {formatPrice(Math.round(p.price / 12))}/month</p>

          <p className={`mt-6 text-sm font-medium ${p.stock === 'out_of_stock' ? 'text-clay' : 'text-olive'}`}>
            {STOCK_LABEL[p.stock]}
            {p.stock !== 'out_of_stock' && <span className="font-normal text-stone"> · Ships in {p.deliveryDays} days</span>}
          </p>

          <AddToCart productId={p.id} option={p.option} disabled={p.stock === 'out_of_stock'} />

          <div className="mt-8 rounded-lg border border-rule bg-white p-5">
            <p className="flex items-center gap-2 text-sm font-medium"><Truck size={16} /> Check delivery</p>
            <PincodeCheck />
          </div>

          <div className="mt-8 space-y-4 text-sm">
            <p className="leading-relaxed text-bark/85">{p.description}</p>
            <dl className="grid grid-cols-[120px_1fr] gap-y-2 border-t border-rule pt-4">
              <dt className="text-stone">Material</dt>
              <dd>{p.material}</dd>
              <dt className="flex items-center gap-1 text-stone"><Ruler size={13} /> Dimensions</dt>
              <dd>{p.dimensions}</dd>
              <dt className="text-stone">Product code</dt>
              <dd>{p.id}</dd>
            </dl>
            <ul className="list-disc space-y-1 pl-5 text-bark/85">
              {p.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-serif text-3xl">More from {room.name}</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((r) => <ProductCard key={r.id} product={r} />)}
          </div>
        </section>
      )}
    </div>
  )
}
