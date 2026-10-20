<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
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
  <main v-if="post" class="p-4 md:p-8 max-w-4xl mx-auto w-full">
    <header class="mb-8">
      <RouterLink
        to="/blog"
        class="text-blue-600 hover:underline text-sm"
      >
        &larr; Voltar para posts
      </RouterLink>
      <h1 class="text-3xl text-blue-600 mt-4">
        {{ post.frontmatter.title }}
      </h1>
      <div class="flex gap-4 text-sm text-slate-400 mt-2">
        <time :datetime="post.frontmatter.date">{{ formatDate(post.frontmatter.date) }}</time>
        <RouterLink
          :to="`/blog?category=${encodeURIComponent(post.frontmatter.category)}`"
          class="hover:text-blue-600"
        >
          {{ post.frontmatter.category }}
        </RouterLink>
      </div>
      <img
        v-if="post.frontmatter.image"
        :src="post.frontmatter.image"
        :alt="post.frontmatter.title"
        class="mt-8 w-full border border-slate-100"
        width="1200"
        height="533"
      />
    </header>

    <article class="prose prose-slate max-w-none">
      <component :is="PostContent" />
    </article>
  </main>
  <NotFoundView v-else />
</template>
