<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="target"
    :class="[
      'inline-flex items-center gap-2 px-[1.6rem] py-3 rounded-[2px] font-mono text-[0.72rem] tracking-[0.1em] uppercase no-underline transition-all duration-200 cursor-pointer border-0',
      variant === 'primary'
        ? 'bg-accent text-bg hover:bg-[#d4e83f] hover:-translate-y-px'
        : 'bg-transparent text-text border border-border hover:border-accent hover:text-accent hover:-translate-y-px',
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'outline'
  href?: string
  target?: string
}>()
</script>
