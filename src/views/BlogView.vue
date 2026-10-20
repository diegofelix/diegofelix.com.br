<script setup lang="ts">
import PostList from '@/components/PostList.vue'
import { usePosts } from '@/composables/usePosts'
import { useSeo } from '@/composables/useSeo'

const { posts } = usePosts()

useSeo({
  title: 'Blog',
  description: 'Posts de Diego Felix sobre engenharia de software, liderança e finanças.',
  path: '/blog',
})
</script>

<template>
  <main class="pt-4">
    <h1 class="text-3xl font-semibold tracking-tight">Blog</h1>
    <p class="mt-2 text-muted">Notas sobre engenharia de software, liderança e finanças.</p>
    <div class="mt-10">
      <PostList :posts="posts" />
    </div>
  </main>
</template>
