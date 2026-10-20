<script setup lang="ts">
import BlueprintFigure from '@/components/BlueprintFigure.vue'
import PixelRule from '@/components/PixelRule.vue'
import PostIndex from '@/components/PostIndex.vue'
import FigArchitecture from '@/components/figures/FigArchitecture.vue'
import FigBTree from '@/components/figures/FigBTree.vue'
import FigCheckout from '@/components/figures/FigCheckout.vue'
import { useSeo } from '@/composables/useSeo'
import profilePicture from '@/assets/profile-picture.webp'

const experience = [
  {
    period: '2025 — hoje',
    role: 'Engenheiro de Software Especialista',
    company: 'Serasa Experian',
    summary:
      'Lidero equipes de backend na construção de plataformas escaláveis e de alto desempenho, em um ambiente regulado e intensivo em dados.',
    highlights: [
      'Liderança técnica e decisões de arquitetura',
      'Ownership de serviços críticos de backend',
      'Escalabilidade, confiabilidade e performance',
    ],
    tags: ['Liderança', 'Go', 'Java', 'AWS', 'Sistemas escaláveis'],
    current: true,
  },
  {
    period: '2016 — 2025',
    role: 'Desenvolvedor → Tech Leader',
    company: 'Leroy Merlin',
    summary:
      'Nove anos na plataforma de e-commerce, usada por milhares de clientes todos os dias. Três deles como Tech Leader da equipe.',
  },
  {
    period: '2011 — 2016',
    role: 'Desenvolvedor Web',
    company: 'Makrosystems',
    summary: 'Sistemas internos e dashboards para grandes empresas do setor bancário.',
  },
  {
    period: '2009 — 2011',
    role: 'Desenvolvedor Web e Games',
    company: 'Metacore',
  },
  {
    period: '2007 — 2009',
    role: 'Técnico → Programador PHP',
    company: 'Telefonica (Vivo)',
    summary: 'Entrei como técnico e foi lá que escrevi meu primeiro código PHP profissionalmente.',
  },
]

const buildYear = String(__BUILD_YEAR__)

useSeo({ path: '/' })
</script>

<template>
  <main>
    <!-- Abertura: texto à esquerda, figura principal à direita -->
    <section class="mt-10 grid gap-x-12 gap-y-12 lg:grid-cols-12">
      <div class="min-w-0 lg:col-span-4">
        <p class="dropcap text-justify hyphens-auto" lang="pt-BR">
          Sou Diego Felix. Comecei como técnico na Telefonica, virei programador PHP por lá e desde
          então vivo do lado de trás das aplicações: APIs, filas, bancos de dados e tudo o que
          acontece depois que alguém clica em um botão.
        </p>
        <p class="mt-5 text-justify hyphens-auto" lang="pt-BR">
          Hoje sou Engenheiro de Software Especialista na Serasa Experian, onde lidero equipes que
          constroem plataformas escaláveis em um ambiente regulado e intensivo em dados.
        </p>

        <div class="mt-10">
          <BlueprintFigure number="002" label="Índice B-tree">
            <FigBTree />
          </BlueprintFigure>
        </div>

        <p class="mt-8 text-justify hyphens-auto" lang="pt-BR">
          Um índice é o motivo de uma busca entre milhões de linhas levar milissegundos. Boa parte do
          meu trabalho é sobre detalhes assim, que ninguém vê quando funcionam.
        </p>
        <p class="mt-5 text-justify hyphens-auto" lang="pt-BR">
          No dia a dia, trabalho com Go, Java, PostgreSQL, Kafka e AWS. PHP com Laravel ficou como a
          linguagem que eu mais gosto de escrever.
        </p>
      </div>

      <div class="min-w-0 lg:col-span-8">
        <BlueprintFigure number="001" label="Arquitetura backend" :note="buildYear">
          <FigArchitecture />
          <template #caption>
            — Uma compra atravessando um sistema típico dos que eu ajudo a construir: balanceador,
            APIs, cache, fila de eventos, workers e o banco de dados como fonte da verdade.
          </template>
        </BlueprintFigure>

        <div class="mt-10 grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
          <img
            :src="profilePicture"
            alt="Foto de Diego Felix"
            width="120"
            height="180"
            class="w-28 border border-blue-100 bg-white p-1.5 grayscale sm:w-32"
          />
          <div>
            <p class="font-semibold">Se você chegou até aqui, provavelmente também gosta de saber como as coisas funcionam por dentro.</p>
            <p class="mt-4 text-justify hyphens-auto" lang="pt-BR">
              Este site é onde eu guardo o que aprendi: notas sobre engenharia, liderança de times e,
              de vez em quando, finanças. Sem tutoriais apressados, só o que eu gostaria de ter lido
              antes.
            </p>
            <p class="mt-6 flex flex-wrap gap-3 font-mono text-[11px] tracking-[0.1em] uppercase">
              <a href="https://github.com/diegofelix" class="border border-ink px-3 py-1.5 hover:bg-blue-100">GitHub</a>
              <a href="https://linkedin.com/in/diegoflx" class="border border-ink px-3 py-1.5 hover:bg-blue-100">LinkedIn</a>
              <a href="mailto:contato@diegofelix.com.br" class="border border-ink px-3 py-1.5 hover:bg-blue-100">E-mail</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Escritos -->
    <div class="mt-24">
      <PixelRule label="Escritos" />
    </div>
    <div class="mt-16">
      <PostIndex />
    </div>

    <!-- Experiência -->
    <div class="mt-24">
      <PixelRule label="Experiência" />
    </div>
    <section id="experiencia" class="mt-16 grid scroll-mt-8 gap-x-12 gap-y-12 lg:grid-cols-12">
      <div class="min-w-0 lg:col-span-4">
        <h2 class="text-xl leading-none">Changelog.</h2>
        <p class="mt-4 text-muted">Da versão atual para a primeira, como todo bom changelog.</p>
        <div class="mt-10">
          <BlueprintFigure number="003" label="Checkout · sequência">
            <FigCheckout />
            <template #caption>
              — O caminho de um pedido no e-commerce. Foram nove anos nessa plataforma na Leroy
              Merlin, três deles como Tech Leader.
            </template>
          </BlueprintFigure>
        </div>
      </div>

      <ol class="min-w-0 lg:col-span-8">
        <li
          v-for="job in experience"
          :key="job.company"
          class="grid gap-x-8 border-t border-blue-100 py-6 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
        >
          <p class="font-mono text-[12px] tracking-[0.08em] uppercase sm:pt-1" :class="job.current ? 'text-blue' : 'text-muted'">
            {{ job.period }}
          </p>
          <div class="mt-1 sm:mt-0">
            <h3 class="text-xl leading-snug" :class="{ 'font-semibold': job.current }">{{ job.role }}</h3>
            <p class="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">{{ job.company }}</p>
            <p v-if="job.summary" class="mt-3">{{ job.summary }}</p>
            <ul v-if="job.highlights" class="mt-3 space-y-1">
              <li v-for="item in job.highlights" :key="item">— {{ item }}</li>
            </ul>
            <p v-if="job.tags" class="mt-4 flex flex-wrap gap-2 font-mono text-[10px] tracking-[0.08em] text-blue uppercase">
              <span v-for="tag in job.tags" :key="tag">[ {{ tag }} ]</span>
            </p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Contato -->
    <div class="mt-24">
      <PixelRule label="Contato" />
    </div>
    <section id="contato" class="mt-20 scroll-mt-8 text-center">
      <h2 class="font-pixel text-[clamp(1.75rem,6vw,3.5rem)] leading-none text-blue">Vamos conversar.</h2>
      <p class="mx-auto mt-6 max-w-md text-muted">
        Sobre backend, liderança técnica, uma oportunidade ou um post que você leu aqui.
      </p>
      <a
        href="mailto:contato@diegofelix.com.br"
        class="mt-6 inline-block font-mono text-base break-all text-blue underline sm:text-lg"
      >
        contato@diegofelix.com.br
      </a>
    </section>
  </main>
</template>
