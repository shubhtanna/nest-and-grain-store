'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function MobileMenu({ rooms }: { rooms: { slug: string; name: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={22} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-bark/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 bg-linen p-6">
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="mb-8">
              <X size={22} />
            </button>
            <nav className="flex flex-col gap-4">
              {rooms.map((r) => (
                <Link key={r.slug} href={`/rooms/${r.slug}`} onClick={() => setOpen(false)} className="font-serif text-2xl">
                  {r.name}
                </Link>
              ))}
              <hr className="my-2 border-rule" />
              <Link href="/search" onClick={() => setOpen(false)} className="text-sm">Search</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="text-sm">Our story</Link>
              <Link href="/delivery" onClick={() => setOpen(false)} className="text-sm">Delivery &amp; returns</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
