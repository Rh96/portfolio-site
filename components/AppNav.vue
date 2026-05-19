<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-5 bg-bg/85 backdrop-blur-[12px] border-b border-border">
    <div class="font-display text-[1.4rem] tracking-[0.1em] text-accent">RH</div>
    <ul class="hidden md:flex gap-8 list-none">
      <li v-for="link in links" :key="link.href">
        <a
          :href="link.href"
          class="font-mono text-[0.72rem] no-underline text-muted2 tracking-[0.08em] uppercase transition-colors duration-200 hover:text-accent"
        >{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { href: '#qa', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#features', label: 'Work' },
  { href: '#certifications', label: 'Certs' },
  { href: '#education', label: 'Education' },
  { href: '#availability', label: 'Availability' },
]
</script>
