<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'

const { posts } = usePosts()
</script>

<template>
  <main class="p-8 max-w-5xl mx-auto">
    <h1 class="text-3xl text-blue-600 mb-8">Blog</h1>

    <div class="space-y-6">
      <article
        v-for="post in posts"
        :key="post.slug"
        class="border border-slate-700 rounded-lg p-6 hover:border-blue-600 transition-colors"
      >
        <RouterLink
          :to="`/blog/${post.slug}`"
          class="block"
        >
          <h2 class="text-xl text-blue-600 hover:underline mb-2">
            {{ post.frontmatter.title }}
          </h2>
          <p class="text-slate-400 text-sm mb-3">
            {{ post.frontmatter.description }}
          </p>
          <div class="flex gap-4 text-xs text-slate-500">
            <time>{{ post.frontmatter.date }}</time>
            <span>{{ post.frontmatter.category }}</span>
          </div>
        </RouterLink>
      </article>
    </div>

    <p
      v-if="posts.length === 0"
      class="text-slate-400"
    >
      Nenhum post publicado ainda.
    </p>
  </main>
</template>
