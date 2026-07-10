<script setup lang="ts">
import { computed } from 'vue'
import { techIcons } from '@/data/techIcons'

const props = defineProps<{ name: string }>()
const icon = computed(() => techIcons[props.name])
</script>

<template>
  <svg v-if="icon" viewBox="0 0 24 24" :fill="icon.hex" aria-hidden="true">
    <path :d="icon.path" />
  </svg>
</template>
