<script setup lang="ts">
import { ref } from 'vue'
import { workExperience, education } from '@/data/experience'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const sectionEl = ref<HTMLElement | null>(null)
useGsapReveal(sectionEl)
</script>

<template>
  <section id="experience" ref="sectionEl" class="mx-auto max-w-3xl px-4 py-16">
    <h2 class="text-2xl font-semibold tracking-tight">Work Experience</h2>

    <div class="mt-6">
      <article
        v-for="job in workExperience"
        :key="job.org"
        class="rounded-2xl border border-neutral-200 p-5"
      >
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <p class="font-medium text-ink">{{ job.role }}</p>
            <p class="text-sm text-neutral-600">{{ job.org }} · {{ job.location }}</p>
          </div>
          <span class="text-sm text-neutral-500">{{ job.start }} – {{ job.end ?? 'Present' }}</span>
        </div>
        <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-neutral-600">
          <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </article>
    </div>

    <h2 class="mt-12 text-2xl font-semibold tracking-tight">Education</h2>
    <div class="mt-4">
      <TimelineItem
        v-for="school in education"
        :key="school.school"
        :start="school.start"
        :end="school.end"
        :title="school.degree"
        :subtitle="`${school.school} · ${school.location}`"
      />
    </div>
  </section>
</template>
