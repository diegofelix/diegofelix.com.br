<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavButton from './components/buttons/NavButton.vue'
import NavitationMenu from './components/NavigationMenu.vue'
import BlogCategoriesMenu from './components/BlogCategoriesMenu.vue'

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
    <div class="flex gap-2 font-mono min-h-screen">
      <aside class="py-8 px-8 min-h-150 pr-16 border-r border-slate-100 relative bg-slate-50/10">
        <h1 title="Diego Felix" class="uppercase font-bold text-blue-600 tracking-wide">
          <RouterLink to="/">Diego Felix</RouterLink>
          <!-- make the underline below the name -->
          <div class="bg-blue-600 w-10 mt-1 h-1"></div>
        </h1>

        <!-- Navigation Menu -->
        <NavitationMenu></NavitationMenu>

        <!-- Blog Categories Menu -->
        <BlogCategoriesMenu></BlogCategoriesMenu>

        <!-- make sure this div is always at the bottom of the sidebar -->
        <div class="absolute bottom-8 left-8 text-[10px] text-slate-400 dark:text-slate-600">
          <p>© {{ new Date().getFullYear() }} DEV_LOG</p>

          <!-- easter egg, its my age -->
          <p>{{ version() }}</p>
        </div>
      </aside>
      <RouterView />
    </div>
  </div>
</template>
