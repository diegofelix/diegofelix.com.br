<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Página não encontrada · Diego Felix',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <main class="mt-20 text-center">
    <p class="font-pixel text-[clamp(4rem,18vw,9rem)] leading-none text-blue">404</p>
    <h1 class="mt-8 text-2xl font-semibold">Página não encontrada.</h1>
    <p class="mx-auto mt-3 max-w-md text-muted">O caminho que você procurou não existe ou foi movido.</p>
    <p class="mt-8 font-mono text-[11px] tracking-[0.12em] uppercase">
      <RouterLink to="/" class="text-blue hover:underline">← Voltar para o início</RouterLink>
    </p>
  </main>
</template>
