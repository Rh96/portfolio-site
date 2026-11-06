<template>
  <CodeUiWinFrame id="code-certifications" file="certifications.md" num="05" title="Certifications">
    <p class="text-[13px] text-c-mut mb-[10px]">// IBM Front-End Developer · Coursera · 2025</p>
    <ul class="bullets list-none p-0 m-0">
      <li v-for="title in certifications" :key="title">{{ title }}</li>
    </ul>
    <div class="mt-4">
      <CodeAppButton href="https://coursera.org/share/ad6cdd162cbc4ff98ef97aac9c7b40ab" target="_blank" variant="outline">View full certificate ↗</CodeAppButton>
    </div>

    <p class="text-[13px] text-c-mut mt-8 mb-[10px]">// AI · Anthropic Academy · 2026</p>
    <ul class="bullets list-none p-0 m-0">
      <li v-for="cert in aiCertifications" :key="cert.title">
        <a v-if="cert.href" :href="cert.href" target="_blank" rel="noopener noreferrer" class="text-c-grn no-underline hover:underline">{{ cert.title }} ↗</a>
        <template v-else>{{ cert.title }}</template>
        <span class="text-c-mut"> — {{ cert.issuer }}</span>
      </li>
    </ul>
  </CodeUiWinFrame>
</template>

<script setup lang="ts">
import { certifications, aiCertifications } from '~/data/certifications'
</script>
