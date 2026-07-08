<script setup lang="ts">
import { ref } from 'vue'
import { skillGroups } from '@/data/skills'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const sectionEl = ref<HTMLElement | null>(null)
useGsapReveal(sectionEl, { stagger: 0.06 })
</script>

<template>
  <section id="skills" class="mx-auto max-w-3xl px-4 py-16">
    <div class="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
      <h2 class="text-2xl font-semibold tracking-tight">Tech I Work With</h2>
      <p class="mt-2 text-sm text-neutral-600">
        Currently deepening my backend skills to build scalable full-stack applications.
      </p>

      <div ref="sectionEl" class="mt-6 space-y-5">
        <div v-for="group in skillGroups" :key="group.label">
          <p class="text-xs font-medium uppercase tracking-wide text-neutral-500">{{ group.label }}</p>
          <div class="mt-2 flex flex-wrap gap-1.5">
            <SkillBadge v-for="item in group.items" :key="item" :label="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
