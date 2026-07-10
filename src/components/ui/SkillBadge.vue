<script setup lang="ts">
import TechIcon from '@/components/ui/TechIcon.vue'

defineProps<{ label: string }>()
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-700"
  >
    <TechIcon :name="label" class="h-3 w-3 shrink-0" />
    {{ label }}
  </span>
</template>
