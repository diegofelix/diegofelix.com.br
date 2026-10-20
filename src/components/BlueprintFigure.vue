<script setup lang="ts">
defineProps<{
  /** Número da figura, ex.: "001" */
  number: string
  /** Legenda técnica na lateral direita, ex.: "ARQUITETURA" */
  label: string
  /** Anotação no canto inferior direito, ex.: "2026" */
  note?: string
}>()
</script>

<template>
  <figure>
    <div class="grid-paper relative border border-blue-100 px-9 py-8 sm:px-12">
      <span class="label-vertical absolute top-3 left-2 font-mono text-[10px] tracking-[0.12em] text-muted" aria-hidden="true">
        FIG.{{ number }}
      </span>
      <span class="label-vertical absolute top-3 right-2 font-mono text-[10px] tracking-[0.12em] text-muted uppercase" aria-hidden="true">
        [ {{ label }} ]
      </span>
      <span
        v-if="note"
        class="label-vertical absolute right-2 bottom-3 font-mono text-[10px] tracking-[0.12em] text-muted"
        aria-hidden="true"
      >
        [ {{ note }} ]
      </span>
      <div class="overflow-x-auto">
        <slot />
      </div>
    </div>
    <figcaption v-if="$slots.caption" class="mt-3 text-[0.95rem] leading-snug text-muted">
      <span class="font-mono text-[11px] tracking-[0.08em] text-blue">FIG.{{ number }}</span>
      <slot name="caption" />
    </figcaption>
  </figure>
</template>
