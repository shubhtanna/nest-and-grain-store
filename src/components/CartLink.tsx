import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { readCart } from '@/lib/cart'

function Icon({ count }: { count: number }) {
  return (
    <Link href="/cart" className="relative" aria-label={`Cart, ${count} items`}>
      <ShoppingBag size={21} />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-clay px-1 text-[11px] font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  )
}

export default async function CartLink() {
  const lines = await readCart()
  return <Icon count={lines.reduce((s, l) => s + l.qty, 0)} />
}

CartLink.Fallback = function CartLinkFallback() {
  return <Icon count={0} />
}
