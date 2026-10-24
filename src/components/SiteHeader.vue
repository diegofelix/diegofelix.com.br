<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import PixelRule from './PixelRule.vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')

const blogEnabled = __BLOG_ENABLED__

const links = [
  ...(blogEnabled ? [{ to: '/blog', label: 'Escritos' }] : []),
  { to: '/#experiencia', label: 'Experiência' },
  { to: '/#contato', label: 'Contato' },
]

const isCurrent = (to: string) => !to.startsWith('/#') && route.path.startsWith(to)
</script>

<template>
  <header class="pt-8 pb-6 sm:pt-10">
    <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
      <RouterLink to="/" class="block leading-none text-blue hover:text-ink" aria-label="Diego Felix, página inicial">
        <span
          class="font-pixel block leading-[0.9] whitespace-nowrap"
          :class="isHome ? 'text-[clamp(2.1rem,8.6vw,5.25rem)]' : 'text-[clamp(1.8rem,6vw,2.75rem)]'"
        >
          Diego Felix
        </span>
      </RouterLink>
      <div class="md:text-right">
        <p v-if="isHome" class="leading-snug">
          Engenheiro de Software Especialista.<br />
          <span class="font-semibold">
            {{ blogEnabled ? 'Backend, liderança e algumas notas sobre finanças.' : 'Backend, arquitetura e liderança técnica.' }}
          </span>
        </p>
        <nav aria-label="Principal" :class="{ 'mt-3': isHome }">
          <ul class="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] tracking-[0.12em] uppercase md:justify-end">
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="hover:text-blue hover:underline"
                :class="isCurrent(link.to) ? 'text-blue underline' : 'text-muted'"
                :aria-current="isCurrent(link.to) ? 'page' : undefined"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <PixelRule />
</template>
