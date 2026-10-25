<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

if (__BLOG_ENABLED__) {
  useHead({
    link: [{ rel: 'alternate', type: 'application/rss+xml', title: 'Diego Felix · Blog', href: '/rss.xml' }],
  })
}
</script>

<template>
  <div class="mx-auto max-w-[72rem] px-5 sm:px-8">
    <SiteHeader />
    <RouterView />
    <SiteFooter />
  </div>
</template>
