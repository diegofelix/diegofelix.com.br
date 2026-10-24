/// <reference types="vite-ssg" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import Shiki from '@shikijs/markdown-it'
import { postsPlugin, ssgRoutes } from './build/posts'
import { BLOG_ENABLED } from './build/site'

// Versão do site = idade/10 + mês do deploy (ex.: 3.9.10-stable)
const now = new Date()
const siteVersion = `${(now.getFullYear() - 1987) / 10}.${now.getMonth() + 1}-stable`

// https://vite.dev/config/
export default defineConfig({
  define: {
    __SITE_VERSION__: JSON.stringify(siteVersion),
    __BUILD_YEAR__: JSON.stringify(now.getFullYear()),
    __BLOG_ENABLED__: JSON.stringify(BLOG_ENABLED),
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      exposeFrontmatter: true,
      async markdownItSetup(md) {
        md.use(
          await Shiki({
            theme: 'github-light',
          })
        )
      },
    }),
    postsPlugin(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
    includedRoutes: () => ssgRoutes(),
  },
})
