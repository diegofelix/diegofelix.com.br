import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'
import type { Plugin } from 'vite'

export const SITE_URL = 'https://diegofelix.com.br'

export interface PostMeta {
  title: string
  slug: string
  date: string
  category: string
  tags: string[]
  description: string
  image?: string
  published: boolean
  /** Rascunho que aparece no sumário como "em breve" (sem link e sem conteúdo no bundle) */
  upcoming: boolean
  file: string
  size: number
  words: number
}

/** Conta palavras do texto, ignorando blocos de código e marcação */
const countWords = (markdown: string) =>
  markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`[\]()!|-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length

const POSTS_DIR = join(import.meta.dirname, '../src/content/posts')

function loadAllPosts(): PostMeta[] {
  return readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = readFileSync(join(POSTS_DIR, file), 'utf-8')
      const { data, content } = matter(raw)
      // gray-matter converte datas sem aspas em Date; normaliza para "YYYY-MM-DD"
      const date =
        data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date)

      return {
        ...data,
        date,
        slug: data.slug || file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
        published: data.published === true,
        upcoming: data.published !== true && data.upcoming === true,
        file,
        size: Buffer.byteLength(raw),
        words: countWords(content),
      } as PostMeta
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function loadPosts(): PostMeta[] {
  return loadAllPosts().filter((post) => post.published)
}

/** Só título e categoria dos rascunhos marcados como `upcoming` */
export function loadUpcoming() {
  return loadAllPosts()
    .filter((post) => post.upcoming)
    .map(({ title, slug, category }) => ({ title, slug, category }))
}

const escapeXml = (str: string) =>
  str.replace(
    /[<>&'"]/g,
    (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!,
  )

export function postRoutes(): string[] {
  return ['/', '/blog', ...loadPosts().map((post) => `/blog/${post.slug}`)]
}

/** Rotas pré-renderizadas: as públicas + a página 404 servida pelo nginx */
export function ssgRoutes(): string[] {
  return [...postRoutes(), '/404']
}

export function buildSitemap(): string {
  const urls = postRoutes()
    .map((route) => `  <url><loc>${SITE_URL}${route}</loc></url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

export function buildRss(): string {
  const items = loadPosts()
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(`${post.date}T12:00:00-03:00`).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.description)}</description>
    </item>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Diego Felix · Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Posts de Diego Felix sobre engenharia de software, liderança e finanças.</description>
    <language>pt-BR</language>
${items}
  </channel>
</rss>
`
}

const VIRTUAL_ID = 'virtual:posts'
const RESOLVED_ID = '\0' + VIRTUAL_ID

/**
 * Expõe apenas o frontmatter dos posts publicados (`virtual:posts`), para que o
 * conteúdo de cada post continue sendo carregado sob demanda. Também emite
 * sitemap.xml e rss.xml no build.
 */
export function postsPlugin(): Plugin {
  return {
    name: 'diegofelix:posts',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id !== RESOLVED_ID) return
      const posts = loadPosts()
      // Só posts publicados ganham um import dinâmico, então rascunhos nunca entram no bundle
      const loaders = posts
        .map(
          (post) =>
            `  ${JSON.stringify(post.file)}: () => import(${JSON.stringify(join(POSTS_DIR, post.file))}),`,
        )
        .join('\n')
      return [
        `export default ${JSON.stringify(posts)}`,
        `export const upcoming = ${JSON.stringify(loadUpcoming())}`,
        `export const loaders = {\n${loaders}\n}`,
      ].join('\n')
    },
    configureServer(server) {
      // Recarrega a lista quando um post é criado, editado ou removido
      const refresh = (file: string) => {
        if (!file.startsWith(POSTS_DIR) || !file.endsWith('.md')) return
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.add(POSTS_DIR)
      server.watcher.on('add', refresh)
      server.watcher.on('change', refresh)
      server.watcher.on('unlink', refresh)
    },
    generateBundle(options) {
      // vite-ssg roda um build de client e um de server; emite só no client
      if (options.format !== 'es' || this.environment?.config.build.ssr) return
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: buildSitemap() })
      this.emitFile({ type: 'asset', fileName: 'rss.xml', source: buildRss() })
    },
  }
}
