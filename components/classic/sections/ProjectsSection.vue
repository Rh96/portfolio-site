<template>
  <section id="projects" class="py-24 px-12 bg-surface">
    <ClassicSectionLabel>03 / Projects</ClassicSectionLabel>
    <h2 class="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[0.04em] leading-none mb-12 text-text">
      Selected <span class="text-accent">Projects</span>
    </h2>

    <div
      ref="el"
      class="grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <article
        v-for="(project, i) in projects"
        :key="project.name"
        class="bg-bg border border-border rounded-[4px] p-8 flex flex-col transition-colors duration-200 hover:border-accent2"
      >
        <div class="font-display text-[3rem] text-border leading-none mb-4">{{ String(i + 1).padStart(2, '0') }}</div>
        <h3 class="font-display text-[1.6rem] tracking-[0.05em] text-text mb-3">{{ project.name }}</h3>
        <p class="text-[0.9rem] text-muted2 leading-[1.7] mb-5">{{ project.summary }}</p>
        <ul class="flex flex-col gap-2 list-none mb-6">
          <li
            v-for="(item, hi) in project.highlights"
            :key="hi"
            class="text-[0.84rem] text-muted2 pl-5 relative leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-accent before:text-[0.75rem]"
          >{{ item }}</li>
        </ul>
        <div class="flex flex-wrap gap-[0.4rem] mb-6">
          <span
            v-for="t in project.tech"
            :key="t"
            class="font-mono text-[0.6rem] px-[0.6rem] py-[0.25rem] border border-border rounded-[2px] text-muted tracking-[0.06em]"
          >{{ t }}</span>
        </div>
        <div class="flex flex-wrap gap-4 mt-auto">
          <ClassicAppButton
            v-for="(link, li) in project.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            :variant="li === 0 ? 'primary' : 'outline'"
          >{{ link.label }} ↗</ClassicAppButton>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFadeIn } from '~/composables/useFadeIn'
import { projects } from '~/data/projects'

const { el, visible } = useFadeIn()
</script>
