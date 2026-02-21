<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps<{
  to: string
}>()

const route = useRoute()

const isHashLink = computed(() => props.to.startsWith('/#'))

const isHashActive = computed(() => {
  if (isHashLink.value) {
    return route.hash === props.to.slice(1) && route.path === '/'
  }
  return false
})
</script>

<template>
  <li class="group relative hover:text-blue-600 hover:font-bold transition">
    <RouterLink :to="to" v-slot="{ isActive }">
      <span
        :class="[
          'absolute -left-3 -bottom-1 text-lg',
          (isActive && !isHashLink) || isHashActive ? 'block' : 'hidden group-hover:block'
        ]"
        >_</span
      >
      <span :class="{ 'font-bold text-blue-600': (isActive && !isHashLink) || isHashActive }">
        <slot />
      </span>
    </RouterLink>
  </li>
</template>
