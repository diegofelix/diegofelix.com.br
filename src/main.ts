import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior,
  base: import.meta.env.BASE_URL,
})
