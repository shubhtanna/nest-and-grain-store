import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Delivery & returns' }

export default function Delivery() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-5xl">Delivery &amp; returns</h1>
      <section className="mt-10 space-y-3">
        <h2 className="font-serif text-2xl">Delivery</h2>
        <p className="text-bark/85">
          Decor ships in 3–5 days. Furniture ships in 5–14 days, and made-to-order pieces in 4–6 weeks. Delivery is free on orders over
          ₹15,000; otherwise it's ₹499. In Delhi NCR, Mumbai, Pune, Bengaluru, Chennai, Hyderabad, Kolkata and Ahmedabad our own team
          delivers and installs for free.
        </p>
      </section>
      <section className="mt-10 space-y-3">
        <h2 className="font-serif text-2xl">Returns</h2>
        <p className="text-bark/85">
          Changed your mind? Return any in-stock item within 30 days of delivery. We'll collect it; a ₹999 pickup fee applies to large
          furniture. Made-to-order pieces can't be returned unless they arrive damaged.
        </p>
      </section>
      <section id="care" className="mt-10 space-y-3">
        <h2 className="font-serif text-2xl">Care guide</h2>
        <p className="text-bark/85">
          Wipe solid wood with a dry cloth and re-oil once a year. Vacuum upholstery weekly and blot spills straight away. Keep leather
          out of direct sun.
        </p>
      </section>
    </article>
  )
}
