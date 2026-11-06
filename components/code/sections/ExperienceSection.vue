<template>
  <CodeUiWinFrame id="code-experience" file="experience.ts" num="02" title="Work history">
    <article
      v-for="(job, i) in experience"
      :key="i"
      :class="i < experience.length - 1 ? 'mb-6 pb-6 border-b border-c-line' : ''"
    >
      <p class="text-[13px] text-c-mut mb-1">// {{ job.period }} · {{ job.location }}</p>
      <h3 class="text-base text-white font-semibold mb-1">
        {{ job.role }} <span class="text-c-grn">@ {{ job.company }}</span>
        <span v-if="job.current" class="tag ml-2">current</span>
      </h3>
      <p v-if="job.project" class="text-[13px] text-c-blu mb-3">{{ job.project }}</p>
      <ul class="bullets list-none p-0 m-0">
        <li v-for="(bullet, bi) in job.bullets" :key="bi">{{ bullet }}</li>
      </ul>
    </article>
  </CodeUiWinFrame>
</template>

<script setup lang="ts">
import { experience } from '~/data/experience'
</script>
