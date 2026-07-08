<script setup lang="ts">
import { ref } from 'vue'
import { webProjects, apiProjects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import ApiProjectCard from '@/components/ui/ApiProjectCard.vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const gridEl = ref<HTMLElement | null>(null)
useGsapReveal(gridEl, { stagger: 0.08 })
</script>

<template>
  <section id="projects" class="mx-auto max-w-5xl px-4 py-16">
    <h2 class="text-2xl font-semibold tracking-tight">Here's What I've Been Up To</h2>

    <div ref="gridEl" class="mt-6 grid gap-4 sm:grid-cols-2">
      <ProjectCard v-for="project in webProjects" :key="project.id" :project="project" />
    </div>

    <h3 class="mt-12 text-lg font-semibold tracking-tight">Backend & API Projects</h3>
    <div class="mt-4 grid gap-4 sm:grid-cols-2">
      <ApiProjectCard v-for="project in apiProjects" :key="project.id" :project="project" />
    </div>
  </section>
</template>
