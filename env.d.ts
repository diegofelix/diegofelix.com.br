/// <reference types="vite/client" />
/// <reference types="unplugin-vue-markdown/macros" />

declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
  export const frontmatter: Record<string, unknown>
}
