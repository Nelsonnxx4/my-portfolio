<script setup lang="ts">
import { ref } from 'vue'
import rnbPlaylistImg from '@/assets/images/rnb_playlist.png'
import indiePlaylistImg from '@/assets/images/indie_playlist.png'
import IconMusic from '@/components/icons/IconMusic.vue'
import IconBadminton from '@/components/icons/IconBadminton.vue'
import IconHeadphones from '@/components/icons/IconHeadphones.vue'
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue'
import { useGsapReveal } from '@/composables/useGsapReveal'

const sectionEl = ref<HTMLElement | null>(null)
useGsapReveal(sectionEl)

const hobbies = [
  {
    icon: IconMusic,
    title: 'Music',
    description: 'I love listening to music — house, indie, pop, and hip-hop.',
    links: [
      {
        label: 'R&B playlist',
        href: 'https://open.spotify.com/playlist/26EwKMcrVeF0G1DgfMk2GU?si=83d7e78d1273472e',
        image: rnbPlaylistImg,
      },
      {
        label: 'Indie playlist',
        href: 'https://open.spotify.com/playlist/0xwvuWN4SnTszYcFIwRKhC?si=5cc4700a4b734aa0',
        image: indiePlaylistImg,
      },
    ],
  },
  {
    icon: IconBadminton,
    title: 'Badminton',
    description: 'I play badminton whenever I get the chance.',
  },
  {
    icon: IconHeadphones,
    title: 'DJing & making beats',
    description: 'Currently learning to DJ and make my own beats.',
  },
]
</script>

<template>
  <section id="about" ref="sectionEl" class="mx-auto max-w-3xl px-4 pt-32 pb-16">
    <h2 class="text-2xl font-semibold tracking-tight">About</h2>
    <p class="mt-4 max-w-3xl text-gray-600">
      First time I wrote code was in 2020 out of curiousity which was
      <span class="highlight-yellow">python</span>, then I did'nt code
      till 3 years later which I started with <span class="highlight-lemon">web development</span>, and I have been loving it ever since.
      I build responsive, user-friendly interfaces and scalable web applications, and I'm deepening
      my backend skills to ship full-stack products end to end.
    </p>

    <div class="mt-12">
      <h3 class="text-sm font-semibold uppercase tracking-wide text-neutral-400">
        Outside of code
      </h3>
      <ul class="mt-4 space-y-5">
        <li v-for="hobby in hobbies" :key="hobby.title" class="flex gap-3">
          <span
            class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-ink"
          >
            <component :is="hobby.icon" class="h-4 w-4" />
          </span>
          <div>
            <p class="font-medium text-ink">{{ hobby.title }}</p>
            <p class="text-sm text-neutral-600">{{ hobby.description }}</p>
            <div v-if="hobby.links?.length" class="mt-1 flex flex-wrap gap-4">
              <a
                v-for="link in hobby.links"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group/link relative inline-flex items-center gap-1 text-sm font-medium text-accent-green hover:underline"
              >
                {{ link.label }}
                <IconArrowUpRight class="h-3 w-3" />
                <span
                  class="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 translate-y-1 scale-95 opacity-0 transition-all duration-200 ease-out group-hover/link:translate-y-0 group-hover/link:scale-100 group-hover/link:opacity-100"
                >
                  <img
                    :src="link.image"
                    :alt="`${link.label} cover art`"
                    class="aspect-[2/1] w-full rounded-lg object-cover shadow-xl ring-1 ring-black/10"
                  />
                </span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
