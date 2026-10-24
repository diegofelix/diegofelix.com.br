/// <reference types="vite/client" />
/// <reference types="unplugin-vue-markdown/macros" />

declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
  export const frontmatter: Record<string, unknown>
}

declare module 'virtual:posts' {
  import type { PostMeta, UpcomingPost } from '@/types/blog'
  const posts: PostMeta[]
  export default posts
  export const upcoming: UpcomingPost[]
  export const loaders: Record<string, () => Promise<unknown>>
}

/** Calculados no build (vite.config.ts) para não divergir entre o HTML pré-renderizado e o cliente */
declare const __SITE_VERSION__: string
declare const __BUILD_YEAR__: number
/** Espelha BLOG_ENABLED de build/site.ts */
declare const __BLOG_ENABLED__: boolean
