<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <div v-if="label" class="flex items-center gap-4" role="separator">
    <div class="pixel-rule flex-1" />
    <span class="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">{{ label }}</span>
    <div class="pixel-rule flex-1" />
  </div>
  <div v-else class="pixel-rule" role="separator" />
</template>
