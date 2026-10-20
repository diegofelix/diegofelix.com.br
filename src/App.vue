<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="mx-auto max-w-[72rem] px-5 sm:px-8">
    <SiteHeader />
    <RouterView />
    <SiteFooter />
  </div>
</template>
