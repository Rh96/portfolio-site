<template>
  <section id="features" class="py-24 px-12 bg-surface overflow-hidden">
    <SectionLabel>05 / Featured Work</SectionLabel>
    <h2 class="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[0.04em] leading-none mb-12 text-text">
      What I've <span class="text-accent">Worked On</span> 
    </h2>

    <p
      ref="introEl"
      class="text-[1rem] text-muted2 max-w-[560px] mb-12 leading-[1.8] transition-all duration-700 ease-out"
      :class="introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
    Features I've built and contributed to across different roles and products.
      Drag or scroll to explore →
    </p>

    <div
      ref="wrapperEl"
      class="transition-all duration-700 ease-out"
      :class="wrapperVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <div
        ref="trackEl"
        class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
        :class="isGrabbing ? 'cursor-grabbing' : 'cursor-grab'"
      >
        <UiFeatureCard v-for="card in features" :key="card.number" :card="card" />
      </div>
      <div class="flex gap-2 mt-6">
        <button
          class="w-10 h-10 border border-border bg-transparent text-text flex items-center justify-center text-[1rem] transition-all duration-200 rounded-[2px] hover:border-accent hover:text-accent"
          @click="prev"
        >←</button>
        <button
          class="w-10 h-10 border border-border bg-transparent text-text flex items-center justify-center text-[1rem] transition-all duration-200 rounded-[2px] hover:border-accent hover:text-accent"
          @click="next"
        >→</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
import { useSlider } from '~/composables/useSlider'
import { features } from '~/data/features'

const { el: introEl, visible: introVisible } = useFadeIn()
const { el: wrapperEl, visible: wrapperVisible } = useFadeIn()
const { trackEl, isGrabbing, next, prev } = useSlider(340)
</script>
