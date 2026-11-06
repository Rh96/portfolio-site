<template>
  <CodeUiWinFrame id="code-education" file="education.json" num="06" title="Education & recognition">
    <p class="text-[13px] text-c-mut mb-[10px]">// education</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-6">
      <div v-for="(item, i) in education" :key="i" class="cell">
        <span class="text-[12px] text-c-grn">{{ item.period }}</span>
        <b class="block text-white">{{ item.name }}</b>
        <span class="block text-[13.5px] text-c-mut">{{ item.place }}</span>
      </div>
    </div>

    <p class="text-[13px] text-c-mut mb-[10px]">// honours &amp; awards</p>
    <div v-for="(award, i) in awards" :key="i" class="quote">
      <span class="text-c-grn">{{ award.year }}</span> · <b class="text-white">{{ award.name }}</b>
      <p class="mt-1 mb-0 text-[13.5px] text-c-mut">{{ award.desc }}</p>
      <a
        v-if="award.link"
        :href="award.link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block mt-2 text-[13px] text-c-grn no-underline hover:underline"
      >{{ award.link.label }}</a>
    </div>
  </CodeUiWinFrame>
</template>

<script setup lang="ts">
import { education, awards } from '~/data/education'
</script>
