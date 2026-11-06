<template>
  <button
    type="button"
    role="switch"
    :aria-checked="isCode"
    :class="['mode-switch', `mode-switch--${variant}`]"
    @click="toggle"
  >
    <span>&lt;/&gt; code mode</span>
    <span class="mode-switch__track" aria-hidden="true"><span class="mode-switch__thumb" /></span>
  </button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

defineProps<{ variant: 'classic' | 'code' }>()

// Visual state is pure CSS (html[data-mode]); this only feeds aria-checked.
// useState is shared, so the switch in each nav stays in sync. It's synced after
// mount so server and client render identical HTML.
const isCode = useState('mode-is-code', () => false)

function toggle() {
  // The DOM attribute is the source of truth (it was set before first paint).
  const next = document.documentElement.dataset.mode !== 'code'
  isCode.value = next
  if (next) document.documentElement.dataset.mode = 'code'
  else delete document.documentElement.dataset.mode
  try {
    localStorage.setItem('portfolio-mode', next ? 'code' : 'classic')
  } catch {
    // storage unavailable (private mode) — the switch still works for this visit
  }
}

onMounted(() => {
  isCode.value = document.documentElement.dataset.mode === 'code'
})
</script>
