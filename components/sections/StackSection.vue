<template>
  <section id="stack" class="py-24 px-12 bg-surface">
    <SectionLabel>04 / Stack</SectionLabel>
    <h2 class="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[0.04em] leading-none mb-12 text-text">
      Core <span class="text-accent">Stack</span>
    </h2>

    <div
      ref="el"
      class="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <UiStackItem v-for="item in stack" :key="item.name" :item="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
import { stack } from '~/data/stack'

const { el, visible } = useFadeIn()
</script>
