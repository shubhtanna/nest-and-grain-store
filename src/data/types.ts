export type StockStatus = 'in_stock' | 'made_to_order' | 'out_of_stock'

export type Product = {
  id: string
  slug: string
  name: string
  room: string
  image: string
  price: number
  compareAt: number | null
  rating: number
  reviews: number
  stock: StockStatus
  material: string
  dimensions: string
  option: { name: string; values: string[] } | null
  deliveryDays: string
  description: string
  details: string[]
}

export type Room = { slug: string; name: string; blurb: string; image: string }

export type CartLine = { id: string; option: string | null; qty: number }
