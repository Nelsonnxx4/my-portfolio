<script setup lang="ts">
import { ref } from 'vue'
import polaroid1 from '@/assets/images/polaroid-placeholder-1.svg'
import polaroid2 from '@/assets/images/polaroid-placeholder-2.svg'
import PolaroidPhoto from '@/components/ui/PolaroidPhoto.vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const sectionEl = ref<HTMLElement | null>(null)
useGsapReveal(sectionEl)
</script>

<template>
  <section id="about" ref="sectionEl" class="mx-auto max-w-3xl px-4 py-16">
    <h2 class="text-2xl font-semibold tracking-tight">About</h2>
    <p class="mt-4 max-w-2xl text-neutral-600">
      I'm Nelson, a UI Frontend Engineer who enjoys building responsive, user-friendly interfaces
      and scalable web applications. I'm currently a software engineering intern at NITDA Nigeria
      and studying Computer Science, deepening my backend skills so I can ship full-stack products
      end to end.
    </p>

    <div class="mt-10 flex justify-center gap-6">
      <PolaroidPhoto :src="polaroid1" alt="Placeholder photo" caption="swap me for a real one" rotate="left" />
      <PolaroidPhoto :src="polaroid2" alt="Placeholder photo" caption="coming soon :)" rotate="right" />
    </div>
  </section>
</template>
