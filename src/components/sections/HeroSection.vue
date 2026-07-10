<script setup lang="ts">
import { ref } from 'vue'
import { site } from '@/data/site'
import heroImg from '@/assets/images/hero_img.jpeg'
import AvatarImage from '@/components/ui/AvatarImage.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import AvailabilityDot from '@/components/ui/AvailabilityDot.vue'
import { useHeroIntro } from '@/composables/useHeroIntro'

const avatarEl = ref<HTMLElement | null>(null)
const headingEl = ref<HTMLElement | null>(null)
const bioEl = ref<HTMLElement | null>(null)
const ctaEl = ref<HTMLElement | null>(null)

useHeroIntro([avatarEl, headingEl, bioEl, ctaEl])
</script>

<template>
  <section id="top" class="mx-auto flex max-w-2xl flex-col items-center px-4 pb-16 pt-20 text-center">
    <div ref="avatarEl">
      <AvatarImage :src="heroImg" :alt="site.name" size="96px" />
    </div>

    <h1 ref="headingEl" class="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
      {{ site.tagline }}
    </h1>

    <p ref="bioEl" class="mt-4 max-w-xl text-balance text-neutral-600">
      {{ site.summary }}
    </p>

    <div ref="ctaEl" class="mt-8 flex flex-wrap items-center justify-center gap-3">
      <BaseButton href="#contact">Get in Touch</BaseButton>
      <AvailabilityDot />
    </div>
  </section>
</template>
