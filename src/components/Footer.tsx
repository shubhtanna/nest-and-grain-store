import Link from 'next/link'
import { getRooms } from '@/lib/store'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl font-semibold">
            Nest <span className="text-clay">&amp;</span> Grain
          </p>
          <p className="mt-3 max-w-sm text-sm text-stone">
            Furniture and decor designed in Pune and made with workshops across India. Solid woods, honest materials, built to be lived with.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-stone">Shop</p>
          <ul className="mt-4 space-y-2 text-sm">
            {getRooms().map((r) => (
              <li key={r.slug}>
                <Link href={`/rooms/${r.slug}`}>{r.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-stone">Help</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/delivery">Delivery &amp; returns</Link></li>
            <li><Link href="/delivery#care">Care guide</Link></li>
            <li><Link href="/about">Our story</Link></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-rule px-4 py-5 text-center text-xs text-stone">
        © 2026 Nest &amp; Grain · Pune, India · Demo store: no real orders or payments are processed.
      </p>
    </footer>
  )
}
