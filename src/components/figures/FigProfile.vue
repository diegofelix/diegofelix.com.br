<script setup lang="ts">
import profilePicture from '@/assets/profile-picture.webp'

const firstYear = 2007

const specs = [
  { label: 'Função', value: 'Engenheiro de Software Especialista' },
  { label: 'Atual', value: 'Serasa Experian' },
  { label: 'Experiência', value: `${__BUILD_YEAR__ - firstYear} anos · desde ${firstYear}` },
  { label: 'Foco', value: 'Backend · Arquitetura · Liderança técnica' },
  { label: 'Stack', value: 'Go · Java · PHP/Laravel · PostgreSQL · Kafka · AWS' },
  { label: 'Trajetória', value: 'Serasa ← Leroy Merlin ← Makrosystems ← Metacore ← Telefonica' },
]
</script>

<template>
  <div class="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
    <div class="w-32 sm:w-36">
      <img
        :src="profilePicture"
        alt="Foto de Diego Felix"
        width="120"
        height="180"
        class="w-full border border-blue-100 bg-white p-1.5 grayscale"
      />
      <p class="mt-2 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-muted uppercase" aria-hidden="true">
        <span class="h-px flex-1 bg-blue/40" />
        Ref. DF-{{ firstYear }}
        <span class="h-px flex-1 bg-blue/40" />
      </p>
    </div>

    <dl class="min-w-0 space-y-4 sm:space-y-3">
      <div v-for="spec in specs" :key="spec.label" class="sm:flex sm:items-baseline">
        <dt class="shrink-0 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">{{ spec.label }}</dt>
        <span class="mx-2 hidden min-w-4 flex-1 border-b border-dotted border-ink/40 sm:block" aria-hidden="true" />
        <dd class="mt-1 font-mono text-[12px] leading-snug tracking-[0.04em] text-blue sm:mt-0 sm:max-w-[75%] sm:text-right">
          {{ spec.value }}
        </dd>
      </div>
    </dl>
  </div>
</template>
