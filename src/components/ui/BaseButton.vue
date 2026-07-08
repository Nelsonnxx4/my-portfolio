<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    variant?: 'solid' | 'outline'
    target?: string
  }>(),
  { variant: 'solid' },
)
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
    :class="
      variant === 'solid'
        ? 'bg-ink text-paper hover:bg-neutral-800'
        : 'border border-neutral-200 bg-white text-ink hover:border-neutral-300'
    "
  >
    <slot />
  </a>
  <button
    v-else
    type="button"
    class="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
    :class="
      variant === 'solid'
        ? 'bg-ink text-paper hover:bg-neutral-800'
        : 'border border-neutral-200 bg-white text-ink hover:border-neutral-300'
    "
  >
    <slot />
  </button>
</template>
