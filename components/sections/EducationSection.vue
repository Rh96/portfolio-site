<template>
  <section id="education" class="py-24 px-12 bg-bg">
    <SectionLabel>07 / Background</SectionLabel>
    <h2 class="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[0.04em] leading-none mb-12 text-text">
      Education &amp; <span class="text-accent">Recognition</span>
    </h2>

    <div
      ref="el"
      class="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <!-- Education -->
      <div>
        <div class="font-mono text-[0.68rem] text-muted tracking-[0.12em] uppercase mb-5 pb-[0.8rem] border-b border-border">
          // education
        </div>
        <div
          v-for="(item, i) in education"
          :key="i"
          class="bg-surface border border-border rounded-[3px] p-6 mb-4"
        >
          <div class="font-mono text-[0.65rem] text-accent tracking-[0.1em] mb-1">{{ item.period }}</div>
          <div class="text-[0.95rem] font-medium text-text mb-[0.2rem]">{{ item.name }}</div>
          <div class="text-[0.8rem] text-muted2">{{ item.place }}</div>
        </div>
      </div>

      <!-- Awards -->
      <div>
        <div class="font-mono text-[0.68rem] text-muted tracking-[0.12em] uppercase mb-5 pb-[0.8rem] border-b border-border">
          // honours &amp; awards
        </div>
        <div
          v-for="(award, i) in awards"
          :key="i"
          class="bg-surface border border-border border-l-[3px] border-l-accent rounded-[3px] p-6 mb-4"
        >
          <div class="font-mono text-[0.65rem] text-accent tracking-[0.1em] mb-1">{{ award.year }}</div>
          <div class="text-[0.95rem] font-medium text-text mb-2">{{ award.name }}</div>
          <div class="text-[0.82rem] text-muted2 leading-[1.6]">
            {{ award.desc }}
            <template v-if="award.link">
              <br /><br />
              <a
                :href="award.link.href"
                target="_blank"
                class="text-accent font-mono text-[0.68rem] tracking-[0.06em] no-underline hover:underline"
              >{{ award.link.label }}</a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
import { education, awards } from '~/data/education'

const { el, visible } = useFadeIn()
</script>
