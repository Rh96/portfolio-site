<template>
  <section id="certifications" class="py-24 px-12 bg-surface">
    <SectionLabel>06 / Certifications</SectionLabel>
    <div class="flex justify-between items-start md:items-end mb-10 flex-wrap gap-4">
      <h2 class="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[0.04em] leading-none text-text">
        IBM <span class="text-accent">Certified</span>
      </h2>
      <div class="flex w-full md:w-auto justify-center md:justify-start items-center gap-[0.6rem] bg-bg border border-border px-4 py-2 rounded-[2px] font-mono text-[0.7rem] text-muted2 tracking-[0.06em]">
        <span class="text-accent">IBM</span> Front-End Developer · Coursera · <span class="text-accent">2025</span>
      </div>
    </div>

    <div
      ref="el"
      class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <UiCertCard
        v-for="(title, i) in certifications"
        :key="i"
        :title="title"
        :index="i"
      />
    </div>

    <div class="mt-8 text-center">
      <AppButton
        href="https://coursera.org/share/ad6cdd162cbc4ff98ef97aac9c7b40ab"
        target="_blank"
        variant="outline"
      >View Full Certificate ↗</AppButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
import { certifications } from '~/data/certifications'

const { el, visible } = useFadeIn()
</script>
