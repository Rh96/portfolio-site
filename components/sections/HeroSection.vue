<template>
  <section id="hero" class="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center pt-[8rem] pb-16 px-12 relative overflow-hidden gap-12 md:gap-0">
    <!-- bg gradients -->
    <div class="absolute inset-0 z-0 pointer-events-none"
      style="background: radial-gradient(ellipse 60% 60% at 70% 50%, rgba(232,255,71,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(71,212,255,0.04) 0%, transparent 70%);"
    />
    <!-- grid lines -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-40"
      style="background-image: linear-gradient(#222222 1px, transparent 1px), linear-gradient(90deg, #222222 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);"
    />

    <!-- left -->
    <div
      ref="leftEl"
      class="relative z-10 transition-all duration-700 ease-out"
      :class="leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <div class="font-mono text-[0.7rem] text-accent tracking-[0.15em] uppercase mb-5 flex items-center gap-[0.8rem] before:content-[''] before:inline-block before:w-6 before:h-px before:bg-accent">
        Frontend Developer
      </div>
      <h1 class="font-display text-[clamp(4rem,8vw,7.5rem)] leading-[0.92] tracking-[0.02em] text-text mb-1">
        Rade<br /><span class="text-accent">Hrgovikj</span>
      </h1>
      <div class="font-display text-[clamp(1.4rem,3vw,2.4rem)] tracking-[0.15em] text-muted2 mb-8">
        Vue · React · React Native
      </div>
      <p class="text-[1rem] leading-[1.8] text-muted2 max-w-[460px] mb-10">
        I build <strong class="text-text font-medium">pixel-perfect, responsive interfaces</strong> that bridge design and backend systems.
        From complex booking calendars to real-time dashboards — I make the web feel <strong class="text-text font-medium">fast, fluid, and alive</strong>.
      </p>
      <div class="flex gap-4 flex-wrap">
        <AppButton href="mailto:radehrgo96@gmail.com" variant="primary">Get in touch</AppButton>
        <AppButton href="https://github.com/Rh96" target="_blank" variant="outline">GitHub ↗</AppButton>
        <AppButton href="https://www.linkedin.com/in/rade-hrgovikj-032b28200" target="_blank" variant="outline">LinkedIn ↗</AppButton>
      </div>
    </div>

    <!-- right / status card -->
    <div
      ref="rightEl"
      class="relative z-10 flex justify-center items-center transition-all duration-700 ease-out delay-200"
      :class="rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <div class="bg-surface border border-border rounded-[4px] p-8 w-full max-w-[360px]">
        <div class="font-mono text-[0.65rem] text-muted tracking-[0.12em] uppercase mb-5">
          // current_status.json
        </div>
        <div class="flex items-center gap-[0.6rem] mb-6">
          <div class="w-2 h-2 rounded-full bg-accent animate-pulse-dot" style="box-shadow: 0 0 8px #e8ff47;" />
          <div class="font-mono text-[0.72rem] text-accent tracking-[0.06em]">Open to opportunities</div>
        </div>
        <div v-for="row in statusRows" :key="row.key" class="flex justify-between items-start py-[0.8rem] border-b border-border text-[0.82rem] last:border-b-0">
          <div class="text-muted font-mono text-[0.68rem]">{{ row.key }}</div>
          <div class="text-text text-right">{{ row.value }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const leftEl = ref<HTMLElement | null>(null)
const rightEl = ref<HTMLElement | null>(null)
const leftVisible = ref(false)
const rightVisible = ref(false)

const statusRows = [
  { key: 'location', value: 'Skopje, North Macedonia' },
  { key: 'experience', value: '4+ years frontend' },
  { key: 'primary_stack', value: 'Vue.js · React · React Native' },
  { key: 'languages', value: 'MK · EN (B2)' },
  { key: 'work_mode', value: 'On-site · Hybrid · Remote' },
]

onMounted(() => {
  setTimeout(() => { leftVisible.value = true }, 100)
  setTimeout(() => { rightVisible.value = true }, 300)
})
</script>
