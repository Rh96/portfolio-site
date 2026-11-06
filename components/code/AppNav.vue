<template>
  <nav aria-label="Primary" class="fixed top-0 inset-x-0 z-50 bg-c-bg/90 backdrop-blur-md border-b border-c-line">
    <div class="max-w-[960px] mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#code-hero" class="text-sm font-semibold text-c-grn no-underline">~/rade</a>
      <div class="flex items-center gap-6">
      <ul class="hidden md:flex gap-6 list-none m-0 p-0">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="text-xs text-c-mut no-underline transition-colors duration-200 hover:text-c-grn">{{ link.label }}</a>
        </li>
      </ul>
      <ModeSwitch variant="code" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { href: '#code-qa', label: 'about' },
  { href: '#code-experience', label: 'experience' },
  { href: '#code-stack', label: 'stack' },
  { href: '#code-features', label: 'work' },
  { href: '#code-certifications', label: 'certs' },
  { href: '#code-education', label: 'education' },
  { href: '#code-contact', label: 'contact' },
]
</script>
