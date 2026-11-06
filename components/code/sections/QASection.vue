<template>
  <CodeUiWinFrame id="code-qa" file="in-my-own-words.md" num="01" title="In my own words">
    <div v-for="(item, i) in qa" :key="i" :class="i < qa.length - 1 ? 'mb-5' : ''">
      <p class="text-[13px] text-c-mut mb-[6px]">// {{ item.question }}</p>
      <div class="quote">{{ item.answer }}</div>
    </div>
  </CodeUiWinFrame>
</template>

<script setup lang="ts">
import { qa } from '~/data/qa'
</script>
