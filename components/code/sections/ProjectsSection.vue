<template>
  <CodeUiWinFrame id="code-projects" file="projects.tsx" num="02" title="Selected projects" comment="things I built on my own to go deeper on React, testing and delivery">
    <article
      v-for="(project, i) in projects"
      :key="project.name"
      :class="['cell', i < projects.length - 1 ? 'mb-[14px]' : '']"
    >
      <h3 class="text-base text-white font-semibold mb-1">{{ project.name }}</h3>
      <p class="text-[13.5px] text-c-mut mb-3">{{ project.summary }}</p>
      <ul class="bullets list-none p-0 m-0">
        <li v-for="(item, hi) in project.highlights" :key="hi" class="!text-[13.5px]">{{ item }}</li>
      </ul>
      <div class="flex flex-wrap gap-2 mt-3">
        <span v-for="t in project.tech" :key="t" class="chip">{{ t }}</span>
      </div>
      <div class="flex flex-wrap gap-3 mt-4">
        <CodeAppButton
          v-for="(link, li) in project.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          :variant="li === 0 ? 'primary' : 'outline'"
        >{{ link.label }} ↗</CodeAppButton>
      </div>
    </article>
  </CodeUiWinFrame>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'
</script>
