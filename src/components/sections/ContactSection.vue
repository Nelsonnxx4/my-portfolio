<script setup lang="ts">
import { ref } from 'vue'
import { site } from '@/data/site'
import BaseButton from '@/components/ui/BaseButton.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'
import IconMail from '@/components/icons/IconMail.vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const sectionEl = ref<HTMLElement | null>(null)
useGsapReveal(sectionEl)
</script>

<template>
  <section id="contact" ref="sectionEl" class="mx-auto max-w-2xl px-4 py-20 text-center">
    <h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">Get in Touch</h2>
    <p class="mt-3 text-neutral-600 dark:text-neutral-400">
      Have a role, project, or just want to talk shop? My inbox is open.
    </p>

    <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
      <BaseButton :href="`mailto:${site.email}`">
        <IconMail class="h-4 w-4" />
        {{ site.email }}
      </BaseButton>
    </div>

    <div class="mt-8 flex justify-center">
      <SocialLinks icon-size="1.25rem" />
    </div>
  </section>
</template>
