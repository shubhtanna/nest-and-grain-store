import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Our story' }

export default function About() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-clay">Our story</p>
      <h1 className="mt-3 font-serif text-5xl leading-tight">Furniture that gets better with age.</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-bark/85">
        <p>
          Nest &amp; Grain began in 2018 when two friends, an architect and a furniture restorer, couldn't find a sofa they liked that
          would also survive a Pune monsoon and two dogs. So they designed one, and had it made by a family workshop in Jodhpur.
        </p>
        <p>
          Today we design everything in our Pune studio and work with eleven workshops across India. We use solid woods where it
          matters, natural finishes, and upholstery tested for Indian homes: heat, humidity and lots of guests.
        </p>
        <p>We deliver to 40 cities and install with our own team in eight of them.</p>
      </div>
    </article>
  )
}
