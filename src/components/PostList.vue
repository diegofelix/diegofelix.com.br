<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Post } from '@/types/blog'
import { formatDate } from '@/utils/date'

const props = defineProps<{
  posts: Post[]
  limit?: number
}>()

const visiblePosts = computed(() => (props.limit ? props.posts.slice(0, props.limit) : props.posts))

// Tamanho no formato do `ls -lh`
const formatSize = (bytes: number) => `${(bytes / 1024).toFixed(1)}K`
</script>

<template>
  <div class="font-mono text-sm">
    <p class="text-subtle" aria-hidden="true">$ ls -lh ~/posts</p>
    <ul v-if="visiblePosts.length" class="mt-2">
      <li v-for="post in visiblePosts" :key="post.slug">
        <RouterLink :to="`/blog/${post.slug}`" class="group flex gap-x-[2ch] py-1">
          <span class="hidden shrink-0 text-subtle sm:inline" aria-hidden="true">-rw-r--r--</span>
          <span class="hidden w-[5ch] shrink-0 text-right text-subtle sm:inline" aria-hidden="true">
            {{ formatSize(post.frontmatter.size) }}
          </span>
          <time :datetime="post.frontmatter.date" class="w-[11ch] shrink-0 text-subtle">
            {{ formatDate(post.frontmatter.date) }}
          </time>
          <span class="min-w-0 text-accent [overflow-wrap:anywhere] group-hover:underline sm:truncate" :title="post.frontmatter.title">
            {{ post.slug }}.md
          </span>
        </RouterLink>
      </li>
    </ul>
    <p v-else class="mt-2 text-subtle">total 0</p>
  </div>
</template>
