<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href || undefined"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="bg-bg border border-border rounded-[3px] p-[1.4rem_1.5rem] flex items-start gap-4 transition-colors duration-200 hover:border-accent"
    :class="href ? 'group cursor-pointer no-underline' : ''"
  >
    <div class="font-display text-[1.8rem] text-border leading-none shrink-0 w-9 text-right">
      {{ String(index + 1).padStart(2, '0') }}
    </div>
    <div class="flex-1">
      <div class="text-[0.84rem] text-text leading-[1.5]">
        {{ title }}
        <span v-if="href" class="text-accent">↗</span>
      </div>
      <div v-if="subtitle" class="font-mono text-[0.65rem] text-muted2 tracking-[0.06em] mt-[0.35rem]">{{ subtitle }}</div>
    </div>
  </component>
</template>

<script setup lang="ts">
defineProps<{ title: string; index: number; subtitle?: string; href?: string }>()
</script>
