<script setup lang="ts">
import IconHome from '@/components/icons/IconHome.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]
</script>

<template>
  <header class="sticky top-4 z-50 mx-auto w-full max-w-fit px-4">
    <div
      class="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/90 py-1.5 pl-1.5 pr-2 shadow-sm backdrop-blur"
    >
      <a
        href="#top"
        aria-label="Back to top"
        class="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-neutral-100"
      >
        <IconHome class="h-[1.1rem] w-[1.1rem]" />
      </a>
      <div class="h-5 w-px bg-neutral-200" />
      <nav class="flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-full px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-ink"
        >
          {{ link.label }}
        </a>
      </nav>
      <div class="h-5 w-px bg-neutral-200" />
      <BaseButton href="#contact" class="ml-1">Get in Touch</BaseButton>
    </div>
  </header>
</template>
