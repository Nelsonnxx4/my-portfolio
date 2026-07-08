<script setup lang="ts">
defineProps<{
  start: string
  end: string | null
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="flex flex-col gap-1 border-b border-neutral-100 py-4 last:border-0 sm:flex-row sm:items-baseline sm:gap-6">
    <span class="w-36 shrink-0 text-sm text-neutral-500">{{ start }} – {{ end ?? 'Present' }}</span>
    <div>
      <p class="font-medium text-ink">{{ title }}</p>
      <p class="text-sm text-neutral-600">{{ subtitle }}</p>
    </div>
  </div>
</template>
