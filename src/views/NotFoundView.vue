<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Página não encontrada · Diego Felix',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <main class="p-4 md:p-8 max-w-5xl mx-auto w-full">
    <p class="text-xs font-bold tracking-widest text-blue-600 uppercase">Erro_404</p>
    <h1 class="text-4xl sm:text-5xl md:text-6xl mt-4 font-display">Página não encontrada.</h1>
    <p class="text-slate-500 mt-8">O caminho que você procurou não existe ou foi movido.</p>
    <RouterLink to="/" class="inline-block mt-8 text-blue-600 hover:underline"
      >&larr; Voltar para o início</RouterLink
    >
  </main>
</template>
