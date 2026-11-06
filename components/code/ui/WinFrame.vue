<template>
  <section :id="id" class="bg-c-panel border border-c-line rounded-xl overflow-hidden mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)] scroll-mt-20">
    <div class="flex items-center gap-2 px-[14px] py-[10px] bg-c-bg border-b border-c-line text-xs text-c-mut" aria-hidden="true">
      <span class="w-[11px] h-[11px] rounded-full bg-[#ff5f56]" />
      <span class="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
      <span class="w-[11px] h-[11px] rounded-full bg-[#27c93f]" />
      <span class="ml-[10px]">{{ file }}</span>
    </div>
    <div class="px-4 py-[18px] md:px-6 md:py-[22px]">
      <h2 v-if="title" class="text-xl mb-[14px] text-white font-semibold">
        <span v-if="num" class="text-c-grn mr-2">{{ num }}</span>{{ title }}
      </h2>
      <p v-if="comment" class="text-[13px] text-c-mut mb-[10px]">// {{ comment }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  file: string
  id?: string
  num?: string
  title?: string
  comment?: string
}>()
</script>
