<template>
  <div class="bg-bg border border-border rounded-[3px] p-[1.2rem_1rem] text-center transition-all duration-200 hover:border-accent hover:-translate-y-[3px]">
    <div class="text-[1.8rem] mb-2">{{ item.icon }}</div>
    <div class="font-mono text-[0.72rem] text-muted2 tracking-[0.06em]">{{ item.name }}</div>
    <div class="inline-block mt-1 font-mono text-[0.58rem] text-accent tracking-[0.08em] uppercase">{{ item.tag }}</div>
  </div>
</template>

<script setup lang="ts">
import type { StackItem } from '~/data/stack'
defineProps<{ item: StackItem }>()
</script>
