<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import NavitationMenu from './components/NavigationMenu.vue'
import BlogCategoriesMenu from './components/BlogCategoriesMenu.vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Fecha menu ao navegar
watch(() => route.fullPath, () => {
  closeMobileMenu()
})

const version = () => {
  const birthdate = 1987
  const currentDate = new Date()
  const month = currentDate.getMonth() + 1
  const age = currentDate.getFullYear() - birthdate
  const ageInVersion = age / 10

  return ageInVersion + '.' + month + '-stable'
}
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <!-- Mobile Header -->
    <header class="lg:hidden flex items-center justify-between p-4 border-b border-slate-100 sticky top-0 bg-white z-50 font-mono">
      <h1 class="uppercase font-bold text-blue-600 tracking-wide">
        <RouterLink to="/" @click="closeMobileMenu">Diego Felix</RouterLink>
      </h1>
      <button
        @click="toggleMobileMenu"
        class="p-2 text-slate-600 hover:text-blue-600 transition-colors"
        :aria-label="isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="isMobileMenuOpen"
      >
        <!-- Hamburger icon -->
        <svg
          v-if="!isMobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <!-- X icon -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </header>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden fixed inset-0 top-[57px] bg-white z-40 p-6 overflow-y-auto font-mono"
      >
        <NavitationMenu />
        <BlogCategoriesMenu />
        <div class="mt-8 text-[10px] text-slate-400">
          <p>© {{ new Date().getFullYear() }} DEV_LOG</p>
          <p>{{ version() }}</p>
        </div>
      </div>
    </Transition>

    <div class="flex gap-2 font-mono min-h-screen">
      <!-- Desktop Sidebar -->
      <aside class="hidden lg:block py-8 px-8 min-h-150 pr-16 border-r border-slate-100 relative bg-slate-50/10">
        <h1 title="Diego Felix" class="uppercase font-bold text-blue-600 tracking-wide">
          <RouterLink to="/">Diego Felix</RouterLink>
          <div class="bg-blue-600 w-10 mt-1 h-1"></div>
        </h1>

        <!-- Navigation Menu -->
        <NavitationMenu />

        <!-- Blog Categories Menu -->
        <BlogCategoriesMenu />

        <!-- Footer -->
        <div class="absolute bottom-8 left-8 text-[10px] text-slate-400 dark:text-slate-600">
          <p>© {{ new Date().getFullYear() }} DEV_LOG</p>
          <p>{{ version() }}</p>
        </div>
      </aside>

      <RouterView />
    </div>
  </div>
</template>
