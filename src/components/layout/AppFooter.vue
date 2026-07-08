<script setup lang="ts">
import { site } from '@/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-neutral-500">
    <p>&copy; {{ year }} {{ site.name }}. Built with Vue &amp; Tailwind CSS.</p>
  </footer>
</template>
