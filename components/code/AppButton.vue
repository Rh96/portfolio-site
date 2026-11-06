<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :class="[
      'inline-block px-[18px] py-[10px] rounded-lg font-semibold text-sm no-underline border border-c-grn transition-colors duration-200 cursor-pointer',
      variant === 'primary'
        ? 'bg-c-grn text-[#04130b] hover:bg-[#08a85b]'
        : 'bg-transparent text-c-grn hover:bg-c-grn/10',
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
