import { ref, onMounted } from 'vue'

export function useFadeIn(threshold = 0.1) {
  const el = ref<HTMLElement | null>(null)
  const visible = ref(false)

  onMounted(() => {
    if (!el.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(el.value)
  })

  return { el, visible }
}
