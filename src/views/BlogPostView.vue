<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { usePosts } from '@/composables/usePosts'
import { useSeo } from '@/composables/useSeo'
import { formatDate } from '@/utils/date'
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
  <main v-if="post" class="pt-4">
    <header>
      <h1 class="text-3xl font-semibold tracking-tight text-balance">{{ post.frontmatter.title }}</h1>
      <p class="mt-3 font-mono text-sm text-subtle">
        <time :datetime="post.frontmatter.date">{{ formatDate(post.frontmatter.date) }}</time>
        · {{ post.frontmatter.category }}
      </p>
    </header>

    <article class="prose prose-neutral mt-10 max-w-none">
      <component :is="PostContent" />
    </article>

    <p class="mt-16 border-t border-line pt-6 text-sm">
      <RouterLink to="/blog" class="text-accent hover:underline">← Todos os posts</RouterLink>
    </p>
  </main>
  <NotFoundView v-else />
</template>
