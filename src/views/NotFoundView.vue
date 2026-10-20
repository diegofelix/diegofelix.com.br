<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Página não encontrada · Diego Felix',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <main class="pt-4">
    <p class="font-mono text-sm text-subtle">404</p>
    <h1 class="mt-2 text-3xl font-semibold tracking-tight">Página não encontrada</h1>
    <p class="mt-4 text-muted">O caminho que você procurou não existe ou foi movido.</p>
    <p class="mt-8 text-sm">
      <RouterLink to="/" class="text-accent hover:underline">← Voltar para o início</RouterLink>
    </p>
  </main>
</template>
