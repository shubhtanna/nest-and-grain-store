import { getAllProducts, getRooms } from '@/lib/store'
import { getBaseUrl } from '@/lib/site'

export async function GET(request: Request) {
  const base = getBaseUrl(request)
  const paths = [
    '/',
    ...getRooms().map((r) => `/rooms/${r.slug}`),
    ...getAllProducts().map((p) => `/products/${p.slug}`),
  ]
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    paths.map((path) => `  <url><loc>${base}${path}</loc></url>`).join('\n') +
    `\n</urlset>\n`
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
