import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/data/types'
import { formatPrice } from '@/lib/store'

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link href={`/products/${p.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-sand">
        <Image
          src={`${p.image}?w=800&q=75&auto=format&fit=crop`}
          alt={p.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        {p.compareAt && <span className="absolute left-3 top-3 rounded bg-clay px-2 py-1 text-xs text-white">Sale</span>}
        {p.stock !== 'in_stock' && (
          <span className="absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-xs">
            {p.stock === 'made_to_order' ? 'Made to order' : 'Sold out'}
          </span>
        )}
      </div>
      <p className="mt-3 font-serif text-lg leading-snug">{p.name}</p>
      <p className="text-sm text-stone">{p.material.split(',')[0]}</p>
      <p className="mt-1 text-sm">
        <span className={p.compareAt ? 'text-clay' : ''}>{formatPrice(p.price)}</span>
        {p.compareAt && <span className="ml-2 text-stone line-through">{formatPrice(p.compareAt)}</span>}
      </p>
    </Link>
  )
}
