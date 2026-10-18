import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getAllProducts, getRooms } from '@/lib/store'

const HERO = 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=2000&q=75&auto=format&fit=crop'
const STORY = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=75&auto=format&fit=crop'

export default function Home() {
  const rooms = getRooms()
  const products = getAllProducts()
  const loved = [...products].filter((p) => p.stock !== 'out_of_stock').sort((a, b) => b.reviews - a.reviews).slice(0, 4)
  const sale = products.filter((p) => p.compareAt).slice(0, 4)

  return (
    <>
      <section className="relative h-[78vh] min-h-[520px]">
        <Image src={HERO} alt="A warm living room with a linen sofa and wooden furniture" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark/60 via-bark/20 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-20 sm:px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80">The Autumn Edit</p>
          <h1 className="mt-3 max-w-xl font-serif text-5xl leading-[1.05] text-white md:text-6xl">Slow-made furniture for homes that are lived in.</h1>
          <div className="mt-8 flex gap-3">
            <Link href="/rooms/living-room" className="rounded-full bg-linen px-7 py-3 text-sm font-medium">
              Shop living room
            </Link>
            <Link href="/rooms/lighting" className="rounded-full border border-white/60 px-7 py-3 text-sm font-medium text-white">
              New lighting
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
        <h2 className="font-serif text-3xl">Shop by room</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {rooms.map((r) => (
            <Link key={r.slug} href={`/rooms/${r.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image src={`${r.image}?w=700&q=75&auto=format&fit=crop`} alt="" fill sizes="20vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-3 font-serif text-lg">{r.name}</p>
              <p className="text-xs text-stone">{r.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl">Most loved</h2>
          <Link href="/rooms/living-room" className="text-sm underline underline-offset-4">Shop all</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
          {loved.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={STORY} alt="Our workshop-made furniture in a bright room" fill sizes="50vw" className="object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-clay">Made in India</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight">Built by hand, in small batches, by people we know by name.</h2>
          <p className="mt-5 text-stone">
            We work with family-run workshops in Jodhpur, Saharanpur and Channapatna. Solid woods, natural finishes and honest
            construction, so your sofa still feels right in ten years.
          </p>
          <Link href="/about" className="mt-6 inline-block text-sm underline underline-offset-4">Read our story</Link>
        </div>
      </section>

      {sale.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
          <h2 className="font-serif text-3xl">Seasonal offers</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {sale.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </>
  )
}
