<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    href?: string
    variant?: 'solid' | 'outline'
    target?: string
  }>(),
  { variant: 'solid' },
)

const tag = computed(() => (props.href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :type="href ? undefined : 'button'"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="relative isolate inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.97]"
    :class="
      variant === 'solid'
        ? 'btn-noise bg-linear-to-b from-neutral-700 to-neutral-950 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_10px_20px_-8px_rgba(0,0,0,0.5)] ring-1 ring-black/40 hover:brightness-110'
        : 'border border-neutral-200 bg-white text-ink hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600'
    "
  >
    <slot />
  </component>
</template>
