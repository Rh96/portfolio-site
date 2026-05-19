import { ref, onMounted, onUnmounted } from 'vue'

export function useSlider(scrollAmount = 340) {
  const trackEl = ref<HTMLElement | null>(null)
  const isGrabbing = ref(false)

  let startX = 0
  let scrollLeft = 0

  function next() {
    trackEl.value?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  function prev() {
    trackEl.value?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }

  function onMouseDown(e: MouseEvent) {
    if (!trackEl.value) return
    isGrabbing.value = true
    startX = e.pageX - trackEl.value.offsetLeft
    scrollLeft = trackEl.value.scrollLeft
  }

  function onMouseLeave() {
    isGrabbing.value = false
  }

  function onMouseUp() {
    isGrabbing.value = false
  }

  function onMouseMove(e: MouseEvent) {
    if (!isGrabbing.value || !trackEl.value) return
    e.preventDefault()
    const x = e.pageX - trackEl.value.offsetLeft
    trackEl.value.scrollLeft = scrollLeft - (x - startX) * 1.5
  }

  onMounted(() => {
    const el = trackEl.value
    if (!el) return
    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('mouseup', onMouseUp)
    el.addEventListener('mousemove', onMouseMove)
  })

  onUnmounted(() => {
    const el = trackEl.value
    if (!el) return
    el.removeEventListener('mousedown', onMouseDown)
    el.removeEventListener('mouseleave', onMouseLeave)
    el.removeEventListener('mouseup', onMouseUp)
    el.removeEventListener('mousemove', onMouseMove)
  })

  return { trackEl, isGrabbing, next, prev }
}
