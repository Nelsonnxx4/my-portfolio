<script setup lang="ts">
withDefaults(defineProps<{ position?: 'left' | 'center' | 'right' }>(), { position: 'center' })

const rotation: Record<string, string> = {
  left: '-rotate-6 -translate-x-2',
  center: 'rotate-0 z-10 scale-105',
  right: 'rotate-6 translate-x-2',
}
</script>

<template>
  <div
    class="w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-transform duration-300 hover:rotate-0 hover:scale-105 sm:max-w-[260px]"
    :class="rotation[position]"
  >
    <slot />
  </div>
</template>
