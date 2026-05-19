<template>
  <section id="experience" class="py-24 px-12 bg-bg">
    <SectionLabel>03 / Experience</SectionLabel>
    <h2 class="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[0.04em] leading-none mb-12 text-text">
      Work <span class="text-accent">History</span>
    </h2>

    <div class="flex flex-col">
      <div
        v-for="(job, i) in experience"
        :key="i"
        ref="itemEls"
        class="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8 py-10 border-b border-border first:border-t first:border-border transition-all duration-700 ease-out"
        :class="visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <div>
          <div class="font-mono text-[0.7rem] text-muted tracking-[0.06em] mb-1">{{ job.period }}</div>
          <div class="text-[0.85rem] text-accent2 font-medium mb-[0.2rem]">{{ job.company }}</div>
          <div v-if="job.project" class="font-mono text-[0.65rem] text-muted2 tracking-[0.06em] mb-[0.2rem]">{{ job.project }}</div>
          <div class="font-mono text-[0.65rem] text-muted tracking-[0.06em]">{{ job.location }}</div>
          <div v-if="job.current" class="inline-flex items-center gap-[0.4rem] font-mono text-[0.62rem] text-accent tracking-[0.08em] uppercase mt-[0.6rem]">
            <span class="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
            Recent
          </div>
        </div>
        <div>
          <div class="font-display text-[1.6rem] tracking-[0.05em] text-text mb-4">{{ job.role }}</div>
          <ul class="flex flex-col gap-2 list-none">
            <li
              v-for="(bullet, bi) in job.bullets"
              :key="bi"
              class="text-[0.88rem] text-muted2 pl-5 relative leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-accent before:text-[0.75rem]"
            >{{ bullet }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { experience } from '~/data/experience'

const itemEls = ref<HTMLElement[]>([])
const visibleItems = ref<boolean[]>(experience.map(() => false))

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = itemEls.value.indexOf(entry.target as HTMLElement)
          if (idx !== -1) {
            setTimeout(() => { visibleItems.value[idx] = true }, idx * 100)
          }
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  itemEls.value.forEach(el => observer.observe(el))
})
</script>
