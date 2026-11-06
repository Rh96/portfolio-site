<template>
  <CodeUiWinFrame id="code-hero" file="rade.tsx">
    <pre class="m-0 whitespace-pre-wrap break-words text-xs md:text-sm text-c-tx font-mono"><span class="text-c-mut">// hello, world 👋</span>
<span class="text-c-red">const</span> <span class="text-c-org">developer</span> = {
  name: <span class="text-c-blu">"Rade Hrgovikj"</span>,
  role: <span class="text-c-blu">"Frontend Developer"</span>,
  stack: [<span class="text-c-blu">"Vue.js"</span>, <span class="text-c-blu">"React"</span>, <span class="text-c-blu">"React Native"</span>, <span class="text-c-blu">"TypeScript"</span>],
  location: <span class="text-c-blu">"Skopje, North Macedonia"</span>,
  workMode: <span class="text-c-blu">"On-site · Hybrid · Remote"</span>,
  languages: <span class="text-c-blu">"MK · EN (B2)"</span>,
};</pre>
    <h1 class="text-[clamp(30px,6vw,52px)] leading-[1.15] mt-[26px] mb-[10px] text-white font-extrabold tracking-[-1px]">
      Hi, I'm Rade<span class="text-c-grn">.</span><span class="cursor" aria-hidden="true" />
    </h1>
    <p class="text-[17px] max-w-[680px] mb-3">
      Frontend developer with 4+ years building production web and mobile apps. I build
      <b class="text-white">pixel-perfect, responsive interfaces</b> that bridge design and backend systems —
      from complex booking calendars to real-time dashboards.
    </p>
    <ul class="flex flex-wrap gap-2 mt-[14px] mb-1 list-none p-0">
      <li v-for="item in stack" :key="item" class="chip">{{ item }}</li>
    </ul>
    <div class="flex flex-wrap gap-3 mt-5">
      <CodeAppButton href="mailto:radehrgo96@gmail.com" variant="primary">Email me</CodeAppButton>
      <CodeAppButton href="https://github.com/Rh96" target="_blank" variant="outline">GitHub</CodeAppButton>
      <CodeAppButton href="https://www.linkedin.com/in/rade-hrgovikj-032b28200" target="_blank" variant="outline">LinkedIn</CodeAppButton>
    </div>
  </CodeUiWinFrame>
</template>

<script setup lang="ts">
const stack = ['Vue.js', 'Nuxt', 'Vuex', 'React', 'React Native', 'TypeScript', 'Socket.io', 'Tailwind', 'REST APIs', 'FullCalendar']
</script>
