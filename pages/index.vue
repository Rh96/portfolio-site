<template>
  <!-- Both versions are in the HTML; CSS (html[data-mode]) shows one. See assets/css/main.css -->
  <div class="mode-classic bg-bg text-text font-body font-light leading-[1.6]">
    <ClassicAppNav />
    <main>
      <ClassicSectionsHeroSection />
      <ClassicSectionsQASection />
      <ClassicSectionsExperienceSection />
      <ClassicSectionsStackSection />
      <ClassicSectionsFeaturesSection />
      <ClassicSectionsCertificationsSection />
      <ClassicSectionsEducationSection />
      <ClassicSectionsAvailabilitySection />
    </main>
    <ClassicAppFooter />
  </div>

  <div class="mode-code bg-c-bg text-c-tx font-mono leading-[1.65] min-h-screen">
    <CodeAppNav />
    <main class="max-w-[960px] mx-auto px-4 pt-20">
      <CodeSectionsHeroSection />
      <CodeSectionsQASection />
      <CodeSectionsExperienceSection />
      <CodeSectionsStackSection />
      <CodeSectionsFeaturesSection />
      <CodeSectionsCertificationsSection />
      <CodeSectionsEducationSection />
      <CodeSectionsAvailabilitySection />
    </main>
    <CodeAppFooter />
  </div>
</template>
