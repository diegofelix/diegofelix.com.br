import '@fontsource/silkscreen/latin-400.css'
import '@fontsource/newsreader/latin-400.css'
import '@fontsource/newsreader/latin-400-italic.css'
import '@fontsource/newsreader/latin-600.css'
import '@fontsource/jetbrains-mono/latin-400.css'
import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior,
  base: import.meta.env.BASE_URL,
})
