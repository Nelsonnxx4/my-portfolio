<script setup lang="ts">
import { ref } from 'vue'
import IconHome from '@/components/icons/IconHome.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import IconClose from '@/components/icons/IconClose.vue'
import IconSun from '@/components/icons/IconSun.vue'
import IconMoon from '@/components/icons/IconMoon.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const isMenuOpen = ref(false)
const { isDark, toggleDarkMode } = useDarkMode()

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-4 z-50 mx-auto w-full max-w-fit px-4">
    <div
      class="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/90 py-1.5 pl-1.5 pr-2 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/90"
    >
      <a
        href="#top"
        aria-label="Back to top"
        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
        @click="closeMenu"
      >
        <IconHome class="h-[1.1rem] w-[1.1rem]" />
      </a>
      <div class="h-5 w-px shrink-0 bg-neutral-200 dark:bg-neutral-700" />

      <nav class="hidden items-center gap-1 sm:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-full px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-ink dark:text-neutral-400 dark:hover:bg-neutral-800"
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        type="button"
        aria-label="Toggle menu"
        :aria-expanded="isMenuOpen"
        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:hidden"
        @click="isMenuOpen = !isMenuOpen"
      >
        <IconClose v-if="isMenuOpen" class="h-4 w-4" />
        <IconMenu v-else class="h-4 w-4" />
      </button>

      <div class="h-5 w-px shrink-0 bg-neutral-200 dark:bg-neutral-700" />

      <button
        type="button"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
        @click="toggleDarkMode"
      >
        <IconSun v-if="isDark" class="h-4 w-4" />
        <IconMoon v-else class="h-4 w-4" />
      </button>

      <div class="h-5 w-px shrink-0 bg-neutral-200 dark:bg-neutral-700" />
      <BaseButton href="#contact" class="ml-1 shrink-0 whitespace-nowrap" @click="closeMenu">
        Get in Touch
      </BaseButton>
    </div>

    <Transition name="menu-fade">
      <nav
        v-if="isMenuOpen"
        class="mt-2 flex flex-col gap-1 rounded-2xl border border-neutral-200 bg-white/95 p-2 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/95 sm:hidden"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-xl px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-ink dark:text-neutral-400 dark:hover:bg-neutral-800"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition:
    opacity 0.15s ease-out,
    transform 0.15s ease-out;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
