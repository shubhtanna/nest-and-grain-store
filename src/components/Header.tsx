import Link from 'next/link'
import { Suspense } from 'react'
import { Search } from 'lucide-react'
import { getRooms } from '@/lib/store'
import CartLink from './CartLink'
import MobileMenu from './MobileMenu'

export default function Header() {
  const rooms = getRooms()
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-linen/95 backdrop-blur">
      <div className="bg-olive px-4 py-2 text-center text-xs text-white">
        Free delivery and installation on orders over ₹15,000 · 30-day returns
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
        <MobileMenu rooms={rooms.map((r) => ({ slug: r.slug, name: r.name }))} />
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
          Nest <span className="text-clay">&amp;</span> Grain
        </Link>
        <nav className="ml-6 hidden gap-6 text-sm lg:flex">
          {rooms.map((r) => (
            <Link key={r.slug} href={`/rooms/${r.slug}`} className="hover:text-clay">
              {r.name}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <form action="/search" className="hidden items-center gap-2 rounded-full border border-rule bg-white px-3 py-1.5 md:flex">
            <Search size={16} className="text-stone" />
            <input name="q" placeholder="Search sofas, lamps…" className="w-44 bg-transparent text-sm outline-none" />
          </form>
          <Link href="/search" className="md:hidden" aria-label="Search">
            <Search size={20} />
          </Link>
          <Suspense fallback={<CartLink.Fallback />}>
            <CartLink />
          </Suspense>
        </div>
      </div>
    </header>
  )
}
