<script lang="ts">
  import { language, translations } from '#lib/i18n/index.svelte.js';

  let t = $derived(translations[language.current]);
  const experiences = [
    {
      period: '2026',
      company: '3Rasa Production'
    },
    {
      period: '2024',
      company: 'Distrik Navigasi Kelas III Tarakan'
    },
    {
      period: '2022 — 2023',
      company: 'Universitas Borneo Tarakan'
    }
  ];
</script>

<section
  id="experience"
  class="border-b border-white/10 bg-[#0a0a0a]"
>
  <div
    class="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-8 lg:py-24"
  >
    <!-- Header -->
    <div class="mb-12">
      <p class="text-sm font-medium tracking-[0.2em] text-blue-400">
        {t.experience.eyebrow}
      </p>

      <div
        class="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
      >
        <h2
          class="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {t.experience.title}
        </h2>

        <p
          class="max-w-md text-sm leading-6 text-neutral-500 sm:text-right"
        >
          {t.experience.description}
        </p>
      </div>
    </div>

    <!-- Experience List -->
    <div class="border-t border-white/10">
      {#each experiences as experience, index}
        {@const translatedExperience = t.experience.entries[index]}
        <article
          class={`group grid gap-7 py-9 sm:grid-cols-[0.7fr_1.3fr] sm:gap-10 sm:py-10 ${
            index !== experiences.length - 1
              ? 'border-b border-white/10'
              : ''
          }`}
        >
          <!-- Meta -->
          <div>
            <p
              class="text-sm font-medium tracking-tight text-neutral-300"
            >
              {experience.period}
            </p>
          </div>

          <!-- Content -->
          <div>
            <h3
              class="text-lg font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-blue-400 sm:text-xl"
            >
              {translatedExperience.role}
            </h3>

            <p class="mt-1 text-sm text-blue-400/70">
              {experience.company}
            </p>

            <p
              class="mt-5 max-w-2xl text-sm leading-7 text-neutral-400"
            >
              {translatedExperience.description}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>