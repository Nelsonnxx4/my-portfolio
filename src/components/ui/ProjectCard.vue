<script setup lang="ts">
import type { Project } from '@/types/portfolio'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue'
import IconGithub from '@/components/icons/IconGithub.vue'

defineProps<{ project: Project }>()
</script>

<template>
  <article
    class="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
  >
    <img
      v-if="project.image"
      :src="project.image"
      :alt="`${project.name} screenshot`"
      class="aspect-video w-full object-contain object-top"
    />
    <div class="flex flex-1 flex-col p-5">
      <div class="flex items-start justify-between gap-2">
        <h3 class="font-semibold text-ink">{{ project.name }}</h3>
        <div class="flex shrink-0 items-center gap-1">
          <a
            v-if="project.repoUrl && project.id !== 'mealmatch'"
            :href="project.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Open ${project.name} repository`"
            class="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <IconGithub class="h-4 w-4" />
          </a>
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Open ${project.name}`"
            class="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <IconArrowUpRight class="h-4 w-4" />
          </a>
        </div>
      </div>
      <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{{ project.description }}</p>
      <ul
        class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-neutral-600 dark:text-neutral-400"
      ></ul>
      <div class="mt-4 flex flex-wrap gap-1.5">
        <SkillBadge v-for="tech in project.stack" :key="tech" :label="tech" />
      </div>
    </div>
  </article>
</template>
