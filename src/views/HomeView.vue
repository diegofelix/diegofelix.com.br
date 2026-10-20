<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { usePosts } from '@/composables/usePosts'
import { useSeo } from '@/composables/useSeo'
import { formatDate } from '@/utils/date'
import { computed } from 'vue'
import profilePicture from '@/assets/profile-picture.webp'

const { posts } = usePosts()

const recentPosts = computed(() => posts.slice(0, 3))

const yearsOfExperience = new Date().getFullYear() - 2009

const formatSlug = (slug: string) => {
  return slug.replace(/-/g, '_')
}

const formatSize = (bytes: number) => {
  return `${(bytes / 1024).toFixed(1)}kb`
}

const totalSize = computed(() => formatSize(posts.reduce((sum, post) => sum + post.frontmatter.size, 0)))

useSeo({ path: '/' })
</script>

<template>
  <main class="p-4 md:p-8 max-w-5xl mx-auto">
    <!-- Perfil -->
    <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
      <!-- Foto de Perfil -->
      <div class="object-cover p-2 shadow-lg shadow-slate-200 flex-shrink-0">
        <img
          :src="profilePicture"
          width="176"
          height="264"
          alt="Foto de perfil de Diego Felix"
          class="w-32 md:max-w-44 grayscale hover:grayscale-0 transition duration-500 hover:sepia"
        />
      </div>
      <!-- Informações do Perfil -->
      <div class="text-center md:text-left">
        <h2 class="text-blue-600 text-xs tracking-widest uppercase mt-4 md:mt-8">
          Engenheiro de Software Especialista
        </h2>
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-4 font-display">Diego Felix.</h1>
        <div class="text-slate-500 text-sm mt-8 md:mt-12">
          <p>
            Sou desenvolvedor web desde 2009, especializado em construir aplicações
            escaláveis e de alta performance.
          </p>
          <p class="mt-2">
            Atualmente, sou Engenheiro de Software Especialista na Serasa Experian, liderando
            equipes para entregar soluções inovadoras. Minha principal força está em PHP,
            Laravel e backend em geral.
          </p>
        </div>

        <!-- Botões -->
        <div class="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
          <a
            href="https://linkedin.com/in/diegoflx"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-slate-900 hover:bg-blue-600 text-white border border-slate-900 transition px-4 py-2 flex gap-2 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/diegofelix"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-slate-900 hover:border-blue-600 hover:text-blue-600 transition px-4 py-2 flex gap-2 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>

    <!-- Divisor -->
    <hr class="mt-12 md:mt-24 border-slate-50" />

    <!-- Estatísticas -->
    <div class="grid grid-cols-2 md:grid-cols-4 divide-slate-50 divide-x border border-slate-50 grow mt-12 md:mt-28">
      <div class="flex flex-col gap-3 p-4 py-8">
        <p class="text-slate-400 uppercase text-xs">Experiência</p>
        <p class="font-bold uppercase text-base">{{ yearsOfExperience }}_ANOS</p>
      </div>
      <div class="flex flex-col gap-3 p-4 py-8">
        <p class="text-slate-400 uppercase text-xs">Status</p>
        <p class="font-bold uppercase text-base text-green-600">Ativo</p>
      </div>
      <div class="flex flex-col gap-3 p-4 py-8">
        <p class="text-slate-400 uppercase text-xs">Tecnologias</p>
        <p class="font-bold uppercase text-base">16_Dominadas</p>
      </div>
      <div class="flex flex-col gap-3 p-4 py-8">
        <p class="text-slate-400 uppercase text-xs">Commits</p>
        <p class="font-bold uppercase text-base">12_300+</p>
      </div>
    </div>

    <!-- Cabeçalho dos Posts do Blog -->
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-12 md:mt-28 justify-between">
      <div class="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
          />
        </svg>
        <h4 class="font-bold uppercase tracking-widest text-sm md:text-base" aria-label="Posts Recentes do Blog">
          /home/Diego/Posts_recentes
        </h4>
      </div>
      <div>
        <p class="text-slate-400 text-xs" aria-hidden="true">Total: {{ totalSize }}</p>
      </div>
    </div>
    <div class="border border-slate-200 mt-8">
      <!-- Efeito da barra superior da janela -->
      <div class="bg-slate-50 h-8 border-b border-slate-200 flex gap-2 p-2 px-4 items-center">
        <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
        <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
        <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
      </div>

      <!-- Posts -->
      <div class="flex flex-col">
        <RouterLink
          v-for="post in recentPosts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="group hover:bg-slate-50 flex gap-4 md:gap-20 justify-between items-center border-b p-2.5 border-b-slate-50"
        >
          <span class="text-slate-200 hidden md:inline">-rw-r--r--</span>
          <h4 class="grow min-w-0 truncate text-sm md:text-base">
            {{ formatSlug(post.slug) }}<span class="text-blue-600">.md</span>
          </h4>
          <span class="text-slate-200 hidden sm:inline">{{ formatSize(post.frontmatter.size) }}</span>
          <span class="group-hover:text-blue-600 text-slate-200 uppercase text-xs md:text-base whitespace-nowrap">
            <time :datetime="post.frontmatter.date">{{ formatDate(post.frontmatter.date) }}</time>
          </span>
        </RouterLink>
      </div>
    </div>

    <!-- Tecnologias Selecionadas -->
    <div class="mt-12 md:mt-28">
      <h3 class="text-center uppercase text-sm tracking-widest font-bold text-blue-600">
        Tecnologias_selecionadas
      </h3>
      <ul class="flex flex-wrap gap-x-10 gap-y-4 justify-center my-8 text-sm">
        <li class="text-sm/2">PHP</li>
        <li class="text-sm/2">Laravel</li>
        <li class="text-sm/2">MySQL</li>
        <li class="text-sm/2">Postgres</li>
        <li class="text-sm/2">MongoDB</li>
        <li class="text-sm/2">Elasticsearch</li>
        <li class="text-sm/2">Docker</li>
        <li class="text-sm/2">VueJS</li>
        <li class="text-sm/2">Git</li>
        <li class="text-sm/2">GitHub</li>
        <li class="text-sm/2">GitLab</li>
        <li class="text-sm/2">Redis</li>
        <li class="text-sm/2">Kafka</li>
        <li class="text-sm/2">AWS</li>
        <li class="text-sm/2">Linux</li>
        <li class="text-sm/2">Windows</li>
        <li class="text-sm/2">MacOS</li>
        <li class="text-sm/2">CSS</li>
        <li class="text-sm/2">HTML</li>
        <li class="text-sm/2">JS</li>
        <li class="text-sm/2">Nginx</li>
      </ul>
    </div>

    <section id="curriculo" class="max-w-5xl mx-auto px-2 md:px-6 py-12 md:py-24">
      <!-- Título da Seção -->
      <div class="mb-12">
        <p class="text-xs font-bold tracking-widest text-blue-600 uppercase">Histórico_profissional</p>
        <h2 class="text-3xl font-serif text-slate-900 mt-2">Changelog Profissional</h2>
      </div>

      <!-- Timeline -->
      <div class="relative border-l border-slate-200 pl-10 space-y-8">
        <!-- Entrada -->
        <article class="relative pb-10">
          <!-- Ponto -->
          <span
            class="absolute -left-[46px] top-0 w-3 h-3 rounded-full bg-green-600 border border-green-600"
          ></span>

          <!-- Data -->
          <time class="block text-xs text-slate-400 mb-2"> 2025 — Presente </time>

          <!-- Título -->
          <h3 class="text-2xl font-serif text-slate-700">
            Engenheiro de Software Especialista · Serasa Experian
          </h3>

          <!-- Descrição -->
          <p class="mt-3 text-slate-600">
            Liderando equipes de backend na construção de plataformas escaláveis e de alto
            desempenho em um ambiente regulado e intensivo em dados.
          </p>

          <!-- Detalhes -->
          <ul class="mt-5 space-y-2 text-sm text-slate-700">
            <li>— Liderança técnica e decisões arquiteturais</li>
            <li>— Ownership de serviços críticos de backend</li>
            <li>— Foco em escalabilidade, confiabilidade e performance</li>
          </ul>

          <hr class="border-b-1 border-slate-100 mt-3" />

          <ul class="flex flex-wrap gap-2 mt-3">
            <li class="text-xs p-0.5 text-slate-600 border border-slate-300">Liderança</li>
            <li class="text-xs p-0.5 text-slate-600 border border-slate-300">Golang</li>
            <li class="text-xs p-0.5 text-slate-600 border border-slate-300">Java</li>
            <li class="text-xs p-0.5 text-slate-600 border border-slate-300">Sistemas Escaláveis</li>
            <li class="text-xs p-0.5 text-slate-600 border border-slate-300">AWS</li>
          </ul>
        </article>

        <article class="relative">
          <!-- Ponto -->
          <span
            class="absolute -left-[46px] top-0 w-3 h-3 rounded-full bg-slate-50 border border-slate-300"
          ></span>

          <!-- Data -->
          <time class="block text-xs text-slate-400 mb-1"> 2016 — 2025 </time>

          <!-- Título -->
          <h3 class="text-xl font-serif text-slate-700">Tech Leader · Leroy Merlin</h3>

          <!-- Descrição -->
          <p class="mt-1 text-xs text-slate-600">
            Responsável por desenvolver e liderar a equipe da nossa plataforma de e-commerce,
            utilizada por milhares de clientes todos os dias.
          </p>
        </article>

        <article class="relative">
          <!-- Ponto -->
          <span
            class="absolute -left-[46px] top-0 w-3 h-3 rounded-full bg-slate-50 border border-slate-300"
          ></span>

          <!-- Data -->
          <time class="block text-xs text-slate-400 mb-1"> 2011 - 2016 </time>

          <!-- Título -->
          <h3 class="text-xl font-serif text-slate-700">Desenvolvedor Web · Makrosystems</h3>

          <!-- Descrição -->
          <p class="mt-1 text-xs text-slate-600">
            Desenvolvendo sistemas internos e dashboards para grandes empresas do setor bancário.
          </p>
        </article>

        <article class="relative">
          <!-- Ponto -->
          <span
            class="absolute -left-[44px] top-0 w-2 h-2 rounded-full bg-slate-50 border border-slate-300"
          ></span>

          <!-- Data -->
          <time class="block text-xs text-slate-400 mb-1"> 2009 - 2011 </time>

          <!-- Título -->
          <h3 class="text-base font-serif text-slate-600">Desenvolvedor Web/Games · Metacore</h3>
        </article>

        <article class="relative">
          <!-- Ponto -->
          <span
            class="absolute -left-[44px] top-0 w-2 h-2 rounded-full bg-slate-50 border border-slate-300"
          ></span>

          <!-- Data -->
          <time class="block text-xs text-slate-400 mb-1"> 2007 - 2009 </time>

          <!-- Título -->
          <h3 class="text-base font-serif text-slate-600">Técnico · Telefonica (Vivo)</h3>
        </article>
      </div>
    </section>

    <footer id="contato" class="text-center pt-12 md:pt-28 border-t border-slate-100">
      <h3 class="font-display text-3xl sm:text-4xl md:text-5xl mb-8">Vamos conversar.</h3>
      <a
        class="text-blue-600 hover:underline text-lg md:text-xl mb-16 block font-mono break-all"
        href="mailto:contato@diegofelix.com.br"
        >contato@diegofelix.com.br</a
      >
      <ul
        class="flex flex-wrap justify-center gap-6 md:space-x-12 text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400"
      >
        <li>
          <a
            class="hover:text-blue-600 transition-colors flex items-center"
            href="https://github.com/diegofelix"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="mr-1">_</span>GitHub</a
          >
        </li>
        <li>
          <a
            class="hover:text-blue-600 transition-colors flex items-center"
            href="https://linkedin.com/in/diegoflx"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="mr-1">_</span>LinkedIn</a
          >
        </li>
        <li>
          <a
            class="hover:text-blue-600 transition-colors flex items-center"
            href="https://twitter.com/diegofelix"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="mr-1">_</span>Twitter</a
          >
        </li>
      </ul>
    </footer>
  </main>
</template>
