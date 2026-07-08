<script setup lang="ts">
import type { Project } from '@/types/portfolio'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue'

defineProps<{ project: Project }>()
</script>

<template>
  <article class="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5">
    <div class="flex items-start justify-between gap-2">
      <h3 class="font-semibold text-ink">{{ project.name }}</h3>
      <a
        v-if="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Open ${project.name}`"
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-neutral-100"
      >
        <IconArrowUpRight class="h-4 w-4" />
      </a>
    </div>
    <p class="mt-1 text-sm text-neutral-600">{{ project.description }}</p>
    <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-neutral-600">
      <li v-for="bullet in project.bullets" :key="bullet">{{ bullet }}</li>
    </ul>
    <div class="mt-4 flex flex-wrap gap-1.5">
      <SkillBadge v-for="tech in project.stack" :key="tech" :label="tech" />
    </div>
  </article>
</template>
