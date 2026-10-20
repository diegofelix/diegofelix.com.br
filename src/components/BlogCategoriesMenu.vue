<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { usePosts } from '@/composables/usePosts'
import { computed } from 'vue'

const { getCategories } = usePosts()

const categories = computed(() => getCategories())
</script>

<template>
  <nav class="mt-12">
    <h2 class="text-slate-400 text-xs tracking-widest uppercase">02. Categorias</h2>
    <ul class="flex flex-col gap-4 ml-3 mt-4">
      <li
        v-for="category in categories"
        :key="category"
        class="text-slate-400 hover:text-blue-400 transition list-disc text-xs"
      >
        <RouterLink :to="`/blog?category=${encodeURIComponent(category)}`">
          {{ category }}
        </RouterLink>
      </li>
      <li
        v-if="categories.length === 0"
        class="text-slate-500 text-xs italic"
      >
        Nenhuma categoria
      </li>
    </ul>
  </nav>
</template>
