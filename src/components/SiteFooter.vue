<script setup lang="ts">
import PixelRule from './PixelRule.vue'

const year = __BUILD_YEAR__
const version = __SITE_VERSION__
const blogEnabled = __BLOG_ENABLED__
</script>

<template>
  <footer class="mt-24 pb-10">
    <PixelRule />
    <div
      class="mt-5 flex flex-col gap-2 font-mono text-[11px] tracking-[0.1em] text-muted uppercase sm:flex-row sm:justify-between"
    >
      <p>© {{ year }} Diego Felix · rev. {{ version }}</p>
      <p class="flex gap-4">
        <a href="https://github.com/diegofelix" class="hover:text-blue hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/diegoflx" class="hover:text-blue hover:underline">LinkedIn</a>
        <a v-if="blogEnabled" href="/rss.xml" class="hover:text-blue hover:underline">RSS</a>
      </p>
    </div>
  </footer>
</template>
