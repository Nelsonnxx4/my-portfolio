<script setup lang="ts">
import { ref } from 'vue'
import { site } from '@/data/site'
import heroImg from '@/assets/images/hero_img.jpeg'
import AvatarImage from '@/components/ui/AvatarImage.vue'
import { useHeroIntro } from '@/composables/useHeroIntro'

const avatarEl = ref<HTMLElement | null>(null)
const headingEl = ref<HTMLElement | null>(null)
const bioEl = ref<HTMLElement | null>(null)

useHeroIntro([avatarEl, headingEl, bioEl])
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
          class="hero-arrow pointer-events-none absolute -left-4 -top-10 h-9 w-11 sm:-left-5 sm:-top-12 sm:h-11 sm:w-13"
          viewBox="0 0 60 50"
          fill="none"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path
            class="arrow-shadow"
            pathLength="1"
            d="M6 5C17 1 12 15 23 15C34 15 37 23 42 29"
          />
          <path class="arrow-shaft" pathLength="1" d="M6 5C17 1 12 15 23 15C34 15 37 23 42 29" />
          <path class="arrow-head" stroke="none" d="M44 24 38 31 49 33Z" />
          <path
            class="arrow-sparkle"
            fill="currentColor"
            stroke="none"
            d="M50 3 51.8 7.2 56 9 51.8 10.8 50 15 48.2 10.8 44 9 48.2 7.2Z"
          />
        </svg>
        <span class="marker-underline italic font-thin text-gray-500 sm:text-xl">
          {{ site.subTagline }}
        </span>
      </span>
    </div>

    <p ref="bioEl" class="mt-4 max-w-2xl text-balance text-gray-600" v-html="site.summary" />
  </section>
</template>
