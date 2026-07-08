import { onMounted, onUnmounted, type Ref } from 'vue'
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/plugins/gsap'

interface RevealOptions {
  y?: number
  duration?: number
  stagger?: number
  start?: string
}

export function useGsapReveal(target: Ref<HTMLElement | null>, options: RevealOptions = {}) {
  const { y = 32, duration = 0.5, stagger = 0, start = 'top 80%' } = options
  let trigger: ScrollTrigger | undefined

  onMounted(() => {
    const el = target.value
    if (!el) return

    const children = stagger > 0 ? Array.from(el.children) : el

    if (prefersReducedMotion()) {
      gsap.set(children, { opacity: 1, y: 0 })
      return
    }

    gsap.set(children, { opacity: 0, y })

    const tween = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    })

    trigger = tween.scrollTrigger
  })

  onUnmounted(() => {
    trigger?.kill()
  })
}
