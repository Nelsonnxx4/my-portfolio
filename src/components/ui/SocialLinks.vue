<script setup lang="ts">
import { site } from '@/data/site'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconMail from '@/components/icons/IconMail.vue'
import type { IconName } from '@/types/portfolio'

withDefaults(defineProps<{ iconSize?: string }>(), { iconSize: '1.1rem' })

const icons: Partial<Record<IconName, typeof IconGithub>> = {
  github: IconGithub,
  linkedin: IconLinkedin,
  mail: IconMail,
}
</script>

<template>
  <nav class="flex items-center gap-3" aria-label="Social links">
    <a
      v-for="link in site.socialLinks"
      :key="link.label"
      :href="link.href"
      :target="link.icon === 'mail' ? undefined : '_blank'"
      :rel="link.icon === 'mail' ? undefined : 'noopener noreferrer'"
      :aria-label="link.label"
      class="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-neutral-100"
    >
      <component :is="icons[link.icon]" :style="{ width: iconSize, height: iconSize }" />
    </a>
  </nav>
</template>
