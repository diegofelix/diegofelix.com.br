<script setup lang="ts">
import NavButton from './buttons/NavButton.vue'
</script>
<template>
  <nav class="mt-12">
    <h2 class="text-slate-400 text-xs tracking-widest uppercase">01. Navegação</h2>
    <ul class="flex flex-col gap-3 ml-3 mt-4">
      <NavButton to="/">Início</NavButton>
      <NavButton to="/#curriculo">Currículo</NavButton>
      <NavButton to="/#contato">Contato</NavButton>
      <NavButton to="/blog">Blog</NavButton>
    </ul>
  </nav>
</template>
