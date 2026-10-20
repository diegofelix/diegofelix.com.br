<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { usePosts } from '@/composables/usePosts'
import { useSeo } from '@/composables/useSeo'
import { formatDate } from '@/utils/date'
import { computed, onMounted, ref } from 'vue'

const route = useRoute()
const { posts, getPostsByCategory } = usePosts()

// A página é pré-renderizada sem query string; aplica o filtro só após hidratar
const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})

const activeCategory = computed(() =>
  isMounted.value ? (route.query.category as string) || null : null,
)

const filteredPosts = computed(() => {
  if (activeCategory.value) {
    return getPostsByCategory(activeCategory.value)
  }
  return posts
})

useSeo({
  title: 'Blog',
  description: 'Posts de Diego Felix sobre engenharia de software, liderança e finanças.',
  path: '/blog',
})
</script>

<template>
  <main class="p-4 md:p-8 max-w-5xl mx-auto w-full">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <h1 class="text-3xl text-blue-600">
        Blog
        <span v-if="activeCategory" class="text-slate-400 text-lg">
          / {{ activeCategory }}
        </span>
      </h1>
      <RouterLink
        v-if="activeCategory"
        to="/blog"
        class="text-sm text-slate-400 hover:text-blue-600 transition-colors"
      >
        Limpar filtro
      </RouterLink>
    </div>

    <div class="space-y-6">
      <article
        v-for="post in filteredPosts"
        :key="post.slug"
        class="border border-slate-200 rounded-lg p-4 md:p-6 hover:border-blue-600 transition-colors"
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
          <div class="flex flex-wrap gap-4 text-xs text-slate-500">
            <time :datetime="post.frontmatter.date">{{ formatDate(post.frontmatter.date) }}</time>
            <span class="text-blue-600">{{ post.frontmatter.category }}</span>
          </div>
        </RouterLink>
      </article>
    </div>

    <p
      v-if="filteredPosts.length === 0"
      class="text-slate-400"
    >
      <template v-if="activeCategory">
        Nenhum post na categoria "{{ activeCategory }}".
      </template>
      <template v-else>
        Nenhum post publicado ainda.
      </template>
    </p>
  </main>
</template>
