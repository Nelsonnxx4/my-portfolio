<script setup lang="ts">
import type { Project } from '@/types/portfolio'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import IconRepo from '@/components/icons/IconRepo.vue'

defineProps<{ project: Project }>()
</script>

<template>
  <article class="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5">
    <div class="flex items-center gap-3">
      <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-ink">
        <IconRepo class="h-4 w-4" />
      </span>
      <div>
        <h3 class="font-semibold text-ink">{{ project.name }}</h3>
        <a
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs text-neutral-500 hover:text-ink"
        >
          View repository
        </a>
      </div>
    </div>
    <p class="mt-3 text-sm text-neutral-600">{{ project.description }}</p>
    <div class="mt-4 flex flex-wrap gap-1.5">
      <SkillBadge v-for="tech in project.stack" :key="tech" :label="tech" />
    </div>
  </article>
</template>
