<template>
  <CodeUiWinFrame id="code-stack" file="stack.json" num="03" title="Core stack" comment="what I reach for every day">
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-[14px] list-none p-0 m-0">
      <li v-for="item in stack" :key="item.name" class="cell">
        <span class="tag">{{ item.tag }}</span>
        <b class="text-white"><span aria-hidden="true" class="mr-2">{{ item.icon }}</span>{{ item.name }}</b>
      </li>
    </ul>
  </CodeUiWinFrame>
</template>

<script setup lang="ts">
import { stack } from '~/data/stack'
</script>
