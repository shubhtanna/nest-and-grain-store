import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="font-serif text-5xl">Page not found</h1>
      <p className="mt-3 text-stone">The page you're looking for has moved or no longer exists.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-bark px-7 py-3 text-sm text-white">
        Back to home
      </Link>
    </div>
  )
}
