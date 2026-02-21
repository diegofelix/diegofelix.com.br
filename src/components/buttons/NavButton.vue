<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  to: string
}>()
</script>

<template>
  <li class="group relative hover:text-blue-600 hover:font-bold transition">
    <RouterLink :to="to" v-slot="{ isActive }">
      <span
        :class="[
          'absolute -left-3 -bottom-1 text-lg',
          isActive ? 'block' : 'hidden group-hover:block'
        ]"
        >_</span
      >
      <span :class="{ 'font-bold text-blue-600': isActive }">
        <slot />
      </span>
    </RouterLink>
  </li>
</template>
