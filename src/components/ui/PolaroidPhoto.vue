<script setup lang="ts">
withDefaults(
  defineProps<{ src: string; alt: string; caption: string; rotate?: 'left' | 'right' }>(),
  { rotate: 'left' },
)
</script>

<template>
  <figure
    class="w-40 shrink-0 rounded-sm bg-white p-2 pb-6 shadow-lg sm:w-48"
    :class="rotate === 'left' ? '-rotate-6' : 'rotate-6'"
  >
    <img :src="src" :alt="alt" class="aspect-square w-full rounded-xs object-cover" />
    <figcaption class="mt-2 text-center font-hand text-lg text-neutral-700">
      {{ caption }}
    </figcaption>
  </figure>
</template>
