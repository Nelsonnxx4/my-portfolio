<script setup lang="ts">
import { ref } from 'vue'
import { featuredProjects } from '@/data/projects'
import TiltCard from '@/components/ui/TiltCard.vue'
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const stackEl = ref<HTMLElement | null>(null)
useGsapReveal(stackEl, { stagger: 0.12, y: 24 })

const positions = ['left', 'center', 'right'] as const
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-16">
    <div
      ref="stackEl"
      class="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap sm:gap-0"
    >
      <TiltCard
        v-for="(project, index) in featuredProjects"
        :key="project.id"
        :position="positions[index] ?? 'center'"
      >
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex aspect-[4/3] flex-col justify-between bg-gradient-to-br from-neutral-100 to-neutral-200 p-4"
        >
          <span class="self-end rounded-full bg-white/80 p-1.5 text-ink opacity-0 transition-opacity group-hover:opacity-100">
            <IconArrowUpRight class="h-4 w-4" />
          </span>
          <div>
            <p class="font-semibold text-ink">{{ project.name }}</p>
            <p class="mt-1 line-clamp-2 text-xs text-neutral-600">{{ project.description }}</p>
          </div>
        </a>
      </TiltCard>
    </div>
  </section>
</template>
