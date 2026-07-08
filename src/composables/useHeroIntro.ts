import { onMounted, type Ref } from 'vue'
import { gsap, prefersReducedMotion } from '@/plugins/gsap'

export function useHeroIntro(targets: Ref<HTMLElement | null>[]) {
  onMounted(() => {
    const els = targets.map((t) => t.value).filter((el): el is HTMLElement => el !== null)
    if (!els.length) return

    if (prefersReducedMotion()) {
      gsap.set(els, { opacity: 1, y: 0 })
      return
    }

    gsap.set(els, { opacity: 0, y: 20 })
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
    })
  })
}
