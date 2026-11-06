<template>
  <CodeUiWinFrame id="code-features" file="featured-work.vue" num="04" title="What I've worked on" comment="features I've built and contributed to across roles and products">
    <ul class="grid grid-cols-1 gap-[14px] list-none p-0 m-0">
      <li v-for="card in features" :key="card.number" class="cell">
        <span class="tag">{{ card.company }}</span>
        <b class="text-white block mb-1"><span class="text-c-grn mr-2">{{ card.number }}</span>{{ card.title }}</b>
        <p class="text-[13.5px] text-c-mut mb-3">{{ card.desc }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in card.tags" :key="tag" class="chip">{{ tag }}</span>
        </div>
      </li>
    </ul>
  </CodeUiWinFrame>
</template>

<script setup lang="ts">
import { features } from '~/data/features'
</script>
