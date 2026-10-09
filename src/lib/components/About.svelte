<script lang="ts">
  import profile from '#lib/assets/profile.png';
  import { language, translations } from '#lib/i18n/index.svelte.js';

  let t = $derived(translations[language.current]);
</script>

<section id="about" class="border-b border-white/10 bg-[#0a0a0a]">
  <div
    class="mx-auto min-h-[calc(100vh-64px)] max-w-6xl px-5 py-20 sm:px-8 lg:px-8 lg:py-24"
  >
    <!-- Section Header -->
    <div class="mb-12">
      <p class="text-sm font-medium tracking-[0.2em] text-blue-400">
        {t.about.eyebrow}
      </p>
    </div>

    <!-- Main Content -->
    <div class="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

      <!-- Photo -->
      <div class="relative mx-auto w-full max-w-sm lg:mx-0">
        <div class="aspect-4/5 overflow-hidden bg-neutral-900">
          <img
            src={profile}
            alt={t.about.profileAlt}
            class="h-full w-full object-cover"
          />
        </div>

        <p
          class="mt-4 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-600"
        >
          {t.about.photoCaption}
        </p>
      </div>

      <!-- Information -->
      <div class="max-w-2xl">

        <!-- Introduction -->
        <div>
          <p
            class="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            {t.about.introductionLabel}
          </p>

          <p
            class="mt-4 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl"
          >
            {t.about.biography}
          </p>
        </div>

        <div class="my-10 h-px bg-white/10"></div>

        <!-- Focus -->
        <div>
          <p
            class="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            {t.about.focusLabel}
          </p>

          <div class="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {#each t.about.focus as item}
              <div>
                <p class="text-sm font-medium text-white">{item.title}</p>
                <p class="mt-1 text-sm leading-6 text-neutral-500">{item.description}</p>
              </div>
            {/each}
          </div>
        </div>

        <div class="my-10 h-px bg-white/10"></div>

        <!-- Education -->
        <div>
          <p
            class="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600"
          >
            {t.about.educationLabel}
          </p>

          <div class="mt-4">
            <p class="text-base font-medium text-white">
              Universitas Borneo Tarakan
            </p>

            <div
              class="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-neutral-500"
            >
              <span>{t.about.degree}</span>
              <span class="text-neutral-700">·</span>
              <span>2021–2025</span>
              <span class="text-neutral-700">·</span>
              <span>{t.about.gpa}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>