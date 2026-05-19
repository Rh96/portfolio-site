<template>
  <section id="availability" class="py-24 px-12 bg-surface text-center">
    <div class="inline-flex items-center gap-[0.6rem] bg-accent/[0.08] border border-accent/20 px-5 py-2 rounded-full font-mono text-[0.7rem] text-accent tracking-[0.1em] uppercase mb-8">
      <div class="w-[6px] h-[6px] rounded-full bg-accent animate-pulse-dot" />
      Open to work
    </div>

    <h2 class="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[0.04em] mb-5 text-text">
      Let's build something<br />worth scrolling for.
    </h2>

    <p class="text-[0.95rem] text-muted2 max-w-[480px] mx-auto mb-10 leading-[1.7]">
      Available for frontend roles — on-site, hybrid, or remote. Whether it's a Vue.js SPA, a React app,
      a React Native mobile build, or a complex UI challenge, I'm ready to ship.
    </p>

    <div class="flex gap-4 justify-center flex-wrap">
      <AppButton href="mailto:radehrgo96@gmail.com" variant="primary">Get in Touch</AppButton>
      <AppButton href="https://github.com/Rh96" target="_blank" variant="outline">GitHub ↗</AppButton>
      <AppButton href="https://www.linkedin.com/in/rade-hrgovikj-032b28200" target="_blank" variant="outline">LinkedIn ↗</AppButton>
    </div>
  </section>
</template>
