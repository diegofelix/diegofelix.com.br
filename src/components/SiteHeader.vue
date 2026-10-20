<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { to: '/blog', label: 'Blog' },
  { to: '/#experiencia', label: 'Experiência' },
  { to: '/#contato', label: 'Contato' },
]

const isCurrent = (to: string) => {
  if (to.startsWith('/#')) return route.path === '/' && route.hash === to.slice(1)
  return route.path === to || route.path.startsWith(`${to}/`)
}
</script>

<template>
  <header class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-8">
    <RouterLink to="/" class="font-semibold hover:underline">Diego Felix</RouterLink>
    <nav aria-label="Principal">
      <ul class="flex gap-5 text-sm text-muted">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="hover:text-ink hover:underline"
            :class="{ 'text-ink underline': isCurrent(link.to) }"
            :aria-current="isCurrent(link.to) ? 'page' : undefined"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
