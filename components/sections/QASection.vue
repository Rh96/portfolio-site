<template>
  <section id="qa" class="py-24 px-12 bg-bg">
    <SectionLabel>02 / In My Own Words</SectionLabel>
    <h2 class="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[0.04em] leading-none mb-12 text-text">
      In My Own <span class="text-accent">Words</span>
    </h2>

    <div
      ref="el"
      class="flex flex-col gap-[2px] transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <div
        v-for="(item, i) in qa"
        :key="i"
        class="bg-surface border border-border rounded-[3px] overflow-hidden"
      >
        <div
          class="px-8 py-6 flex justify-between items-center cursor-pointer select-none transition-colors duration-200 hover:bg-surface2"
          @click="toggle(i)"
        >
          <span class="text-[0.95rem] font-medium text-text">{{ item.question }}</span>
          <span
            class="font-mono text-[1.2rem] text-accent transition-transform duration-300"
            :class="openIndex === i ? 'rotate-45' : ''"
          >+</span>
        </div>
        <div
          class="overflow-hidden transition-all duration-[400ms] ease-in-out px-8"
          :style="openIndex === i ? 'max-height: 300px; padding-bottom: 1.5rem;' : 'max-height: 0;'"
        >
          <div class="text-[0.88rem] text-muted2 leading-[1.8] border-l-2 border-accent pl-4 italic">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFadeIn } from '~/composables/useFadeIn'
import { qa } from '~/data/qa'

const { el, visible } = useFadeIn()
const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>
