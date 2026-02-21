<script setup lang="ts">
import NavButton from './buttons/NavButton.vue'
</script>
<template>
  <nav class="mt-12">
    <h2 class="text-slate-400 text-xs tracking-widest uppercase">01. Navigation</h2>
    <ul class="flex flex-col gap-3 ml-3 mt-4">
      <NavButton to="/">Home</NavButton>
      <NavButton to="/blog">Blog</NavButton>
    </ul>
  </nav>
</template>
