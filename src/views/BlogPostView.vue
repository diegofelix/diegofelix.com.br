<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePosts } from '@/composables/usePosts'

const route = useRoute()
const router = useRouter()
const { getPostBySlug } = usePosts()

const slug = computed(() => route.params.slug as string)
const post = computed(() => getPostBySlug(slug.value))

const PostContent = computed(() => {
  if (!post.value) return null
  return defineAsyncComponent(post.value.component)
})

if (!post.value) {
  router.replace({ name: 'blog' })
}
</script>

<template>
  <main class="p-8 max-w-4xl mx-auto">
    <template v-if="post">
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
          <time>{{ post.frontmatter.date }}</time>
          <span>{{ post.frontmatter.category }}</span>
        </div>
      </header>

      <article class="markdown-body">
        <component :is="PostContent" />
      </article>
    </template>
  </main>
</template>
