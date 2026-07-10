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
  <section
    id="top"
    class="mx-auto flex max-w-2xl flex-col items-center px-4 pb-16 pt-20 text-center"
  >
    <div ref="avatarEl">
      <AvatarImage :src="heroImg" :alt="site.name" size="96px" />
    </div>

    <div class="flex justify-center items-baseline gap-5">
      <h1 ref="headingEl" class="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
        {{ site.tagline }}
      </h1>
      <span class="relative inline-flex">
        <svg
          class="shiny-arrow pointer-events-none absolute -left-3 -top-9 h-8 w-9 sm:-left-4 sm:-top-10 sm:h-9 sm:w-10"
          viewBox="0 0 60 50"
          fill="none"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M6 4C24 2 40 12 44 30" />
          <path d="M34 24L44 30L46 16" />
        </svg>
        <span class="marker-underline italic font-thin text-gray-500 sm:text-xl">
          {{ site.subTagline }}
        </span>
      </span>
    </div>

    <p ref="bioEl" class="mt-4 max-w-2xl text-balance text-gray-600">
      {{ site.summary }}
    </p>

    <div ref="ctaEl" class="mt-8 flex flex-wrap items-center justify-center gap-3">
      <BaseButton href="#contact">Get in Touch</BaseButton>
      <AvailabilityDot />
    </div>
  </section>
</template>
