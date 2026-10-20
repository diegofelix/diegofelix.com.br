/// <reference types="vite/client" />
/// <reference types="unplugin-vue-markdown/macros" />

declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
  export const frontmatter: Record<string, unknown>
}

declare module 'virtual:posts' {
  import type { PostMeta } from '@/types/blog'
  const posts: PostMeta[]
  export default posts
  export const loaders: Record<string, () => Promise<unknown>>
}
