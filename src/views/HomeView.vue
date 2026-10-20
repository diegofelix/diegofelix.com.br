<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PostList from '@/components/PostList.vue'
import { usePosts } from '@/composables/usePosts'
import { useSeo } from '@/composables/useSeo'
import profilePicture from '@/assets/profile-picture.webp'

const { posts } = usePosts()

const experience = [
  {
    period: '2025 – hoje',
    role: 'Engenheiro de Software Especialista',
    company: 'Serasa Experian',
    summary:
      'Lidero equipes de backend na construção de plataformas escaláveis em um ambiente regulado e intensivo em dados.',
    highlights: [
      'Liderança técnica e decisões de arquitetura',
      'Ownership de serviços críticos de backend',
      'Escalabilidade, confiabilidade e performance',
    ],
  },
  {
    period: '2016 – 2025',
    role: 'Tech Leader',
    company: 'Leroy Merlin',
    summary: 'Desenvolvi e liderei a equipe da plataforma de e-commerce, usada por milhares de clientes todos os dias.',
  },
  {
    period: '2011 – 2016',
    role: 'Desenvolvedor Web',
    company: 'Makrosystems',
    summary: 'Sistemas internos e dashboards para grandes empresas do setor bancário.',
  },
  {
    period: '2009 – 2011',
    role: 'Desenvolvedor Web e Games',
    company: 'Metacore',
  },
  {
    period: '2007 – 2009',
    role: 'Técnico',
    company: 'Telefonica (Vivo)',
  },
]

useSeo({ path: '/' })
</script>

<template>
  <main>
    <section class="flex flex-col gap-6 pt-4 sm:flex-row sm:items-start sm:gap-8">
      <img
        :src="profilePicture"
        alt="Foto de Diego Felix"
        width="96"
        height="96"
        class="size-24 shrink-0"
      />
      <div>
        <h1 class="text-3xl font-semibold tracking-tight">Diego Felix</h1>
        <p class="mt-1 text-muted">Engenheiro de Software Especialista na Serasa Experian.</p>
      </div>
    </section>

    <div class="mt-8 space-y-4">
      <p>
        Sou desenvolvedor web desde 2009 e construo sistemas backend escaláveis e de alta
        performance. Hoje lidero equipes de backend na Serasa Experian.
      </p>
      <p>
        Trabalho principalmente com PHP e Laravel, e no dia a dia também com Go, Java, PostgreSQL,
        Kafka e AWS.
      </p>
      <p class="text-sm text-muted">
        <a href="https://github.com/diegofelix" class="text-accent hover:underline">GitHub</a> ·
        <a href="https://linkedin.com/in/diegoflx" class="text-accent hover:underline">LinkedIn</a> ·
        <a href="mailto:contato@diegofelix.com.br" class="text-accent hover:underline">E-mail</a>
      </p>
    </div>

    <section class="mt-16 border-t border-line pt-8" aria-labelledby="posts-recentes">
      <div class="flex items-baseline justify-between gap-4">
        <h2 id="posts-recentes" class="text-xl font-semibold">Posts recentes</h2>
        <RouterLink to="/blog" class="text-sm text-accent hover:underline">Todos os posts →</RouterLink>
      </div>
      <div class="mt-6">
        <PostList :posts="posts" :limit="5" />
      </div>
    </section>

    <section id="experiencia" class="mt-16 scroll-mt-8 border-t border-line pt-8">
      <h2 class="text-xl font-semibold">Experiência</h2>
      <ol class="mt-6 space-y-8">
        <li v-for="job in experience" :key="job.company" class="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6">
          <p class="font-mono text-sm text-subtle sm:pt-0.5">{{ job.period }}</p>
          <div class="mt-1 sm:mt-0">
            <h3 class="font-semibold">
              {{ job.role }} <span class="font-normal text-muted">· {{ job.company }}</span>
            </h3>
            <p v-if="job.summary" class="mt-1 text-muted">{{ job.summary }}</p>
            <ul v-if="job.highlights" class="mt-3 space-y-1 text-muted">
              <li v-for="item in job.highlights" :key="item">— {{ item }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </section>

    <section id="contato" class="mt-16 scroll-mt-8 border-t border-line pt-8">
      <h2 class="text-xl font-semibold">Contato</h2>
      <p class="mt-4 text-muted">
        Quer conversar sobre backend, liderança técnica ou uma oportunidade? Me mande um e-mail.
      </p>
      <p class="mt-2">
        <a href="mailto:contato@diegofelix.com.br" class="font-mono text-accent hover:underline">
          contato@diegofelix.com.br
        </a>
      </p>
    </section>
  </main>
</template>
