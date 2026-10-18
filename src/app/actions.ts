'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { refresh } from 'next/cache'
import { readCart, writeCart, cartSummary } from '@/lib/cart'
import { getProductById } from '@/lib/store'

export async function addToCart(formData: FormData) {
  const id = String(formData.get('productId') ?? '')
  const option = (formData.get('option') as string | null) || null
  const qty = Math.max(1, Math.min(10, Number(formData.get('qty') ?? 1)))
  const product = getProductById(id)
  if (!product || product.stock === 'out_of_stock') return

  const lines = await readCart()
  const hit = lines.find((l) => l.id === id && l.option === option)
  if (hit) hit.qty = Math.min(10, hit.qty + qty)
  else lines.push({ id, option, qty })
  await writeCart(lines)
  redirect('/cart')
}

export async function updateQty(formData: FormData) {
  const id = String(formData.get('productId'))
  const option = (formData.get('option') as string | null) || null
  const qty = Number(formData.get('qty'))
  const lines = (await readCart())
    .map((l) => (l.id === id && l.option === option ? { ...l, qty: Math.max(0, Math.min(10, qty)) } : l))
    .filter((l) => l.qty > 0)
  await writeCart(lines)
  refresh()
}

export async function removeLine(formData: FormData) {
  const id = String(formData.get('productId'))
  const option = (formData.get('option') as string | null) || null
  await writeCart((await readCart()).filter((l) => !(l.id === id && l.option === option)))
  refresh()
}

export type CheckoutState = { errors?: Record<string, string>; message?: string }

export async function placeOrder(_prev: CheckoutState, formData: FormData): Promise<CheckoutState> {
  const get = (k: string) => String(formData.get(k) ?? '').trim()
  const f = {
    name: get('name'),
    email: get('email'),
    phone: get('phone').replace(/\D/g, '').slice(-10),
    address: get('address'),
    city: get('city'),
    pincode: get('pincode'),
    slot: get('slot'),
  }
  const errors: Record<string, string> = {}
  if (f.name.length < 2) errors.name = 'Please enter your name'
  if (!/^\S+@\S+\.\S+$/.test(f.email)) errors.email = 'Please enter a valid email'
  if (!/^[6-9]\d{9}$/.test(f.phone)) errors.phone = 'Please enter a 10-digit mobile number'
  if (f.address.length < 8) errors.address = 'Please enter your full address'
  if (!f.city) errors.city = 'Required'
  if (!/^\d{6}$/.test(f.pincode)) errors.pincode = 'Please enter a 6-digit PIN code'
  if (Object.keys(errors).length) return { errors }

  const cart = await cartSummary()
  if (cart.count === 0) return { message: 'Your cart is empty.' }

  const orderId = `NG-${Date.now().toString(36).toUpperCase()}`
  const jar = await cookies()
  jar.set('ng_last_order', JSON.stringify({ orderId, total: cart.total, items: cart.count, email: f.email, slot: f.slot }), {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60,
  })
  await writeCart([])
  redirect(`/order/${orderId}`)
}
