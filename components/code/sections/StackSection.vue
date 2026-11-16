<template>
  <CodeUiWinFrame id="code-stack" file="stack.json" num="03" title="Core stack" comment="grouped the way my CV does: production vs project-based">
    <div v-for="(group, i) in stack" :key="group.label" :class="i < stack.length - 1 ? 'mb-6' : ''">
      <p class="text-[13px] text-c-mut mb-[10px]">// {{ group.label }} — {{ group.note }}</p>
      <ul class="flex flex-wrap gap-2 list-none p-0 m-0">
        <li v-for="item in group.items" :key="item" class="chip">{{ item }}</li>
      </ul>
    </div>
  </CodeUiWinFrame>
</template>

<script setup lang="ts">
import { stack } from '~/data/stack'
</script>
