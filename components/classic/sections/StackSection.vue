<template>
  <section id="stack" class="py-24 px-12 bg-bg">
    <ClassicSectionLabel>04 / Stack</ClassicSectionLabel>
    <h2 class="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[0.04em] leading-none mb-12 text-text">
      Core <span class="text-accent">Stack</span>
    </h2>

    <div
      ref="el"
      class="flex flex-col gap-10 transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <div v-for="group in stack" :key="group.label">
        <div class="font-mono text-[0.68rem] text-muted tracking-[0.12em] uppercase mb-5 pb-[0.8rem] border-b border-border">
          // {{ group.label }} <span class="text-muted2 normal-case tracking-normal">— {{ group.note }}</span>
        </div>
        <ul class="flex flex-wrap gap-3 list-none">
          <li
            v-for="item in group.items"
            :key="item"
            class="bg-surface border border-border rounded-[3px] px-4 py-3 font-mono text-[0.72rem] text-muted2 tracking-[0.06em] transition-all duration-200 hover:border-accent hover:text-text hover:-translate-y-[3px]"
          >{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
import { stack } from '~/data/stack'

const { el, visible } = useFadeIn()
</script>
