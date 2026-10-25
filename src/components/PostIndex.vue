<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { usePosts } from '@/composables/usePosts'
import { formatWords } from '@/utils/date'

defineProps<{
  /** Nível do título "Escritos." (h1 na página do blog, h2 na home) */
  headingLevel?: 'h1' | 'h2'
}>()

const { groups } = usePosts()
const version = __SITE_VERSION__
</script>

<template>
  <section aria-labelledby="escritos">
    <div class="flex items-end gap-4">
      <component :is="headingLevel ?? 'h2'" id="escritos" class="relative shrink-0 text-xl leading-none">
        Escritos.
        <sup class="absolute -top-3 left-full ml-1 font-mono whitespace-nowrap text-[9px] tracking-[0.08em] text-muted">
          v{{ version }}
        </sup>
      </component>
      <div class="mb-1 h-px flex-1 bg-ink" />
      <p class="shrink-0 font-mono text-[11px] tracking-[0.12em] uppercase">
        <span class="text-muted">Publicados</span> · <span class="text-blue">Palavras</span>
      </p>
    </div>

    <div class="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="(group, index) in groups" :key="group.category">
        <h3 class="font-mono text-[12px] tracking-[0.12em] uppercase">
          {{ index + 1 }}. {{ group.category }}
        </h3>
        <ul class="mt-4 space-y-2.5">
          <li v-for="post in group.posts" :key="post.slug" class="flex items-baseline">
            <RouterLink :to="`/blog/${post.slug}`" class="hover:text-blue hover:underline">
              {{ post.frontmatter.title }}
            </RouterLink>
            <span class="mx-2 min-w-6 flex-1 border-b border-dotted border-ink/40" aria-hidden="true" />
            <span class="shrink-0 font-mono text-[10px] tracking-[0.08em] text-blue uppercase">
              {{ formatWords(post.frontmatter.words) }}
            </span>
          </li>
          <li v-for="item in group.upcoming" :key="item.slug" class="flex items-baseline text-muted">
            <span>{{ item.title }}</span>
            <span class="mx-2 min-w-6 flex-1 border-b border-dotted border-ink/25" aria-hidden="true" />
            <span class="shrink-0 font-mono text-[10px] tracking-[0.08em] uppercase">Em breve</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
