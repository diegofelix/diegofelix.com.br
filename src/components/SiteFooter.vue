<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-24 mb-10 border-t border-line pt-6 text-sm text-subtle">
    <p>
      © {{ year }} Diego Felix ·
      <a href="https://github.com/diegofelix" class="hover:text-ink hover:underline">GitHub</a> ·
      <a href="https://linkedin.com/in/diegoflx" class="hover:text-ink hover:underline">LinkedIn</a> ·
      <a href="/rss.xml" class="hover:text-ink hover:underline">RSS</a>
    </p>
  </footer>
</template>
