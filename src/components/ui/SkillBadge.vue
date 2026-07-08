<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
    {{ label }}
  </span>
</template>
