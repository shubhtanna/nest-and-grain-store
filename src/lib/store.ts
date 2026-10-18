import { PRODUCTS, ROOMS } from '@/data/catalog'
import type { Product } from '@/data/types'

export const FREE_DELIVERY_FROM = 15000
export const DELIVERY_FEE = 499

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })
export const formatPrice = (n: number) => inr.format(n)

export const getRooms = () => ROOMS
export const getRoom = (slug: string) => ROOMS.find((r) => r.slug === slug)
export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug)
export const getProductById = (id: string) => PRODUCTS.find((p) => p.id === id)
export const getProductsInRoom = (room: string) => PRODUCTS.filter((p) => p.room === room)
export const getAllProducts = () => PRODUCTS

export function searchProducts(query: string): Product[] {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (words.length === 0) return []
  return PRODUCTS.filter((p) => {
    const hay = `${p.name} ${p.material} ${p.room} ${p.description} ${p.option?.values.join(' ') ?? ''}`.toLowerCase()
    return words.every((w) => hay.includes(w))
  })
}

export type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'rating'

export function sortProducts(list: Product[], sort: SortKey): Product[] {
  const out = [...list]
  if (sort === 'price-asc') out.sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') out.sort((a, b) => b.price - a.price)
  if (sort === 'rating') out.sort((a, b) => b.rating - a.rating)
  // Featured: in-stock first, then by reviews.
  if (sort === 'featured') out.sort((a, b) => Number(a.stock === 'out_of_stock') - Number(b.stock === 'out_of_stock') || b.reviews - a.reviews)
  return out
}

export const STOCK_LABEL: Record<Product['stock'], string> = {
  in_stock: 'In stock',
  made_to_order: 'Made to order',
  out_of_stock: 'Out of stock',
}
