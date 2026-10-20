<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import PixelRule from '@/components/PixelRule.vue'
import { usePosts } from '@/composables/usePosts'
import { useSeo } from '@/composables/useSeo'
import { formatDate, formatWords } from '@/utils/date'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()
const { getPostBySlug } = usePosts()

const slug = computed(() => route.params.slug as string)
const post = computed(() => getPostBySlug(slug.value))

const PostContent = computed(() => {
  if (!post.value) return null
  return defineAsyncComponent(post.value.component as Parameters<typeof defineAsyncComponent>[0])
})

useSeo(() => ({
  title: post.value?.frontmatter.title,
  description: post.value?.frontmatter.description,
  path: `/blog/${slug.value}`,
  image: post.value?.frontmatter.image,
  type: 'article',
}))
</script>

<template>
  <main v-if="post" class="mx-auto mt-14 max-w-[42rem]">
    <header>
      <p class="font-mono text-[11px] tracking-[0.12em] text-blue uppercase">
        {{ post.frontmatter.category }} ·
        <time :datetime="post.frontmatter.date">{{ formatDate(post.frontmatter.date) }}</time> ·
        {{ formatWords(post.frontmatter.words) }}
      </p>
      <h1 class="mt-4 text-[clamp(2rem,5vw,2.75rem)] leading-[1.1] font-semibold text-balance">
        {{ post.frontmatter.title }}
      </h1>
      <p class="mt-4 text-lg text-muted italic">{{ post.frontmatter.description }}</p>
    </header>

    <div class="mt-10">
      <PixelRule />
    </div>

    <article class="prose mt-10 max-w-none text-justify hyphens-auto" lang="pt-BR">
      <component :is="PostContent" />
    </article>

    <div class="mt-16">
      <PixelRule />
    </div>
    <p class="mt-6 font-mono text-[11px] tracking-[0.12em] uppercase">
      <RouterLink to="/blog" class="text-blue hover:underline">← Todos os escritos</RouterLink>
    </p>
  </main>
  <NotFoundView v-else />
</template>
