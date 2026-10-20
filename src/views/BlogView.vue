<script setup lang="ts">
import PostIndex from '@/components/PostIndex.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'Escritos',
  description: 'Notas de Diego Felix sobre engenharia de software, liderança e finanças.',
  path: '/blog',
})
</script>

<template>
  <main class="mt-14">
    <p class="max-w-xl text-justify hyphens-auto" lang="pt-BR">
      Notas sobre engenharia de software, liderança de times e finanças pessoais. Os títulos sem link
      ainda estão sendo escritos.
    </p>
    <div class="mt-14">
      <PostIndex heading-level="h1" />
    </div>
  </main>
</template>
