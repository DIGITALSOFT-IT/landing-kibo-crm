// Prerenderiza la landing y las páginas legales a HTML estático para que Google vea todo el contenido
// sin ejecutar JavaScript, y genera robots.txt + sitemap.xml con el dominio de VITE_SITE_URL.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { loadEnv } from 'vite'
import { PAGES } from '../src/config/pages.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const env = loadEnv('production', root, 'VITE_')
const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '')
if (!siteUrl) throw new Error('Falta VITE_SITE_URL en .env (ej. https://kibocrm.jurytechsolutions.com)')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

// Metadatos de cada página extra (la home usa los de index.html).
const pageMeta = {
  terminos: {
    title: 'Términos y Condiciones | Kibo CRM',
    description: 'Términos y condiciones de uso de Kibo CRM: planes, pagos con Wompi, uso aceptable de WhatsApp, inteligencia artificial y responsabilidades.',
  },
  privacidad: {
    title: 'Política de Privacidad y Tratamiento de Datos | Kibo CRM',
    description: 'Cómo Kibo CRM trata los datos personales conforme a la Ley 1581 de 2012: finalidades, derechos del titular y canales de consulta y reclamo.',
  },
}

const escapeAttr = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const routes = [{ urlPath: '/', file: 'index.html', priority: '1.0' }]
for (const name of PAGES) {
  if (!pageMeta[name]) throw new Error(`Falta pageMeta para "${name}" en scripts/prerender.js`)
  routes.push({ urlPath: `/${name}/`, file: `${name}/index.html`, priority: '0.3', meta: pageMeta[name] })
}

for (const route of routes) {
  let html = template.replace('<!--app-html-->', render(route.urlPath))

  if (route.meta) {
    const url = `${siteUrl}${route.urlPath}`
    const title = escapeAttr(route.meta.title)
    const description = escapeAttr(route.meta.description)
    html = html
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace(/(<meta (?:name|property)="(?:description|og:description|twitter:description)" content=")[^"]*/g, `$1${description}`)
      .replace(/(<meta (?:property|name)="(?:og:title|twitter:title)" content=")[^"]*/g, `$1${title}`)
      .replace(/(<link rel="(?:canonical|alternate)"[^>]*href=")[^"]*/g, `$1${url}`)
      .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
  }

  const outFile = path.join(dist, route.file)
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, html)
}

fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)

const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .map((route) => `  <url>
    <loc>${siteUrl}${route.urlPath}</loc>
    <lastmod>${today}</lastmod>
    <priority>${route.priority}</priority>
  </url>`)
  .join('\n')
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
)

fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`Prerender OK → ${routes.map((r) => r.urlPath).join(', ')} + robots.txt, sitemap.xml (${siteUrl})`)
