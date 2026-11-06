<template>
  <div class="flex-[0_0_320px] snap-start bg-bg border border-border rounded-[4px] p-8 transition-colors duration-200 hover:border-accent2">
    <div class="font-display text-[3rem] text-border leading-none mb-4">{{ card.number }}</div>
    <div class="text-[1rem] font-medium text-text mb-[0.7rem]">{{ card.title }}</div>
    <div class="text-[0.84rem] text-muted2 leading-[1.7]">{{ card.desc }}</div>
    <div class="flex flex-wrap items-center gap-[0.4rem] mt-[1.2rem]">
      <span
        v-for="tag in card.tags"
        :key="tag"
        class="font-mono text-[0.6rem] px-[0.6rem] py-[0.25rem] border border-border rounded-[2px] text-muted tracking-[0.06em]"
      >{{ tag }}</span>
      <span class="ml-auto font-mono text-[0.6rem] px-[0.6rem] py-[0.25rem] border border-accent2 rounded-[2px] text-accent2 tracking-[0.06em]">{{ card.company }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FeatureCard } from '~/data/features'
defineProps<{ card: FeatureCard }>()
</script>
