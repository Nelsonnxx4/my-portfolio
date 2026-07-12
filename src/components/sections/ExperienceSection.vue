<script setup lang="ts">
import { ref } from 'vue'
import { workExperience } from '@/data/experience'
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
            <p class="text-sm text-neutral-600">
              <a
                v-if="job.url"
                :href="job.url"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-ink hover:underline"
              >{{ job.org }}</a>
              <span v-else>{{ job.org }}</span>
              · {{ job.location }}
            </p>
          </div>
          <span class="text-sm text-neutral-500">{{ job.start }} – {{ job.end ?? 'Present' }}</span>
        </div>
        <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-neutral-600">
          <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
