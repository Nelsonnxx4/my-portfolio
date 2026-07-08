<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: 'Available for new opportunities' })
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-ink"
  >
    <span class="relative flex h-2.5 w-2.5">
      <span
        class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75"
      />
      <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-green" />
    </span>
    {{ label }}
  </span>
</template>
