<template>
  <div class="bg-bg border border-border rounded-[3px] p-[1.4rem_1.5rem] flex items-start gap-4 transition-colors duration-200 hover:border-accent">
    <div class="font-display text-[1.8rem] text-border leading-none shrink-0 w-9 text-right">
      {{ String(index + 1).padStart(2, '0') }}
    </div>
    <div class="text-[0.84rem] text-text leading-[1.5]">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; index: number }>()
</script>
