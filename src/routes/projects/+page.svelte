<script lang="ts">
  import nexadeskTickets from '#lib/assets/nexadesk-tickets.jpeg';
  import inventoryManagement from '#lib/assets/inventory-management.png';
  import portfolioScreenshot from '#lib/assets/portofolio.jpeg';
  import waterQualityScreenshot from '#lib/assets/water_quality_detector_using_fuzzy_mamdani.png';
  import Navbar from '#lib/components/Navbar.svelte';
  import Footer from '#lib/components/Footer.svelte';
  import { language, translations } from '#lib/i18n/index.svelte.js';

  let t = $derived(translations[language.current]);

  const projects = [
    {
      number: '01',
      id: 'nexadesk',
      image: nexadeskTickets,
      technologies: ['SvelteKit', 'TypeScript', 'Bun', 'PostgreSQL', 'Drizzle ORM'],
      github: 'https://github.com/IrgiAhmadzFhrezi/nexadesk',
      live: 'https://nexadesk-steel.vercel.app/'
    },
    {
      number: '02',
      id: 'inventory-management',
      image: inventoryManagement,
      technologies: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
      github: '',
      live: ''
    },
    {
      number: '03',
      id: 'personal-portfolio',
      image: portfolioScreenshot,
      technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
      github: '',
      live: '',
      isInDevelopment: true
    },
    {
      number: '04',
      id: 'water-quality-detection',
      image: waterQualityScreenshot,
      technologies: ['Arduino', 'PHP', 'MySQL'],
      github: '',
      live: ''
    }
  ];
</script>

<svelte:head>
  <title>{t.projectPage.title}</title>
  <meta name="description" content={t.projectPage.description} />
</svelte:head>

<Navbar />

<main id="top" class="min-h-screen bg-[#09090b] text-white">
  <!-- Page header -->
  <section class="border-b border-white/8">
    <div class="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-12">
      <a
        href="/#projects"
        class="group inline-flex min-h-10 items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-white"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          class="h-4 w-4 transition-transform group-hover:-translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M16 10H4m5 5-5-5 5-5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {t.projectPage.back}
      </a>

      <div class="mt-16 grid gap-8 md:mt-24 md:grid-cols-[1fr_0.7fr] md:items-end lg:mt-28">
        <div>
          <p class="flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-blue-400">
            <span class="h-px w-7 bg-blue-400"></span>
            {t.projectPage.selectedWork}
          </p>

          <h1 class="mt-5 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t.projectPage.headlineStart}
            <span class="text-neutral-500">{t.projectPage.headlineEmphasis}</span>
          </h1>
        </div>

        <div class="max-w-md md:justify-self-end">
          <p class="text-sm leading-7 text-neutral-400 sm:text-base">
            {t.projectPage.introduction}
          </p>

          <div class="mt-6 flex items-center gap-5 text-xs text-neutral-500">
            <span>{String(projects.length).padStart(2, '0')} {t.projectPage.projectCount}</span>
            <span class="h-1 w-1 rounded-full bg-neutral-700"></span>
            <span>{t.projectPage.categories}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section aria-label={t.projectPage.projectDetailsLabel}>
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      {#each projects as project, index}
        {@const detail = t.projectPage.details[index]}
        <article
          id={project.id}
          class="scroll-mt-8 border-b border-white/8 py-14 sm:py-20 lg:py-24"
        >
          <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14 xl:gap-20">
            <!-- Project image -->
            <div class="min-w-0">
              <div class="group relative overflow-hidden rounded-xl border border-white/9 bg-[#111113]">
                <div class="flex aspect-5/4 items-center justify-center overflow-hidden p-3 sm:aspect-4/3 sm:p-5 lg:aspect-5/4">
                  <img
                    src={project.image}
                    alt={detail.imageAlt}
                    loading="lazy"
                    class="h-full w-full rounded-md object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div class="flex items-center justify-between border-t border-white/[0.07] px-4 py-3 sm:px-5">
                  <span class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                    {t.projects.projectLabel} {project.number}
                  </span>

                  <span class="flex items-center gap-2 text-xs text-neutral-500">
                    <span class="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    {detail.projectType}
                  </span>
                </div>
              </div>
            </div>

            <!-- Project information -->
            <div class="flex min-w-0 flex-col lg:pt-2">
              <p class="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-400">
                {detail.category}
              </p>

              <h2 class="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {detail.name}
              </h2>

              <p class="mt-2 text-sm font-medium text-neutral-400 sm:text-base">
                {detail.subtitle}
              </p>

              {#if project.isInDevelopment}
                <p class="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-xs font-medium text-blue-300">
                  <span class="h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true"></span>
                  {t.projectPage.currentlyInDevelopment}
                </p>
              {/if}

              <p class="mt-6 text-sm leading-7 text-neutral-400 sm:text-[15px] sm:leading-8">
                {detail.description}
              </p>

              <!-- Key features -->
              <div class="mt-8 border-t border-white/8 pt-6">
                <h3 class="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                  {t.projectPage.keyFeatures}
                </h3>

                <ul class="mt-4 space-y-3">
                  {#each detail.features as feature}
                    <li class="flex items-start gap-3 text-sm leading-6 text-neutral-300">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        class="mt-1 h-4 w-4 shrink-0 text-blue-400"
                        aria-hidden="true"
                      >
                        <path
                          d="m5 10 3.2 3.2L15 6.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  {/each}
                </ul>
              </div>

              {#if detail.methodology}
                <div class="mt-7">
                  <h3 class="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                    {t.projectPage.methodology}
                  </h3>
                  <p class="mt-3 text-sm text-neutral-300">{detail.methodology}</p>
                </div>
              {/if}

              <!-- Technologies -->
              <div class="mt-8">
                <h3 class="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                  {t.projectPage.technologies}
                </h3>

                <ul class="mt-4 flex flex-wrap gap-2">
                  {#each project.technologies as technology}
                    <li class="rounded-md border border-white/9 bg-white/2.5 px-3 py-2 text-xs text-neutral-300">
                      {technology}
                    </li>
                  {/each}
                </ul>
              </div>

              <!-- Project links -->
              {#if project.github || project.live}
                <div class="mt-8 flex flex-wrap items-center gap-5 border-t border-white/8 pt-6">
                  {#if project.github}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-400"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-4.5 w-4.5"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.13c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.21-5.08 5.49.4.34.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                        />
                      </svg>
                      {t.projectPage.viewSource}
                      <span aria-hidden="true">↗</span>
                    </a>
                  {/if}

                  {#if project.live}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex min-h-11 items-center gap-2 rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
                    >
                      {t.projectPage.livePreview}
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        class="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 15 15 5M6 5h9v9"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  {/if}
                </div>
              {/if}
            </div>
          </div>
        </article>
      {/each}

      <!-- Contact CTA -->
      <section class="py-14 sm:py-20" aria-label={t.nav.contact}>
        <div class="border-y border-white/10 py-9 sm:py-12">
          <div class="grid gap-7 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] md:items-center md:gap-12">
            <div>
              <p class="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                <span class="h-px w-6 bg-blue-400" aria-hidden="true"></span>
                {t.projectPage.whatsNext}
              </p>

              <h2 class="mt-4 max-w-xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {t.projectPage.contactTitle}
              </h2>
            </div>

            <div class="max-w-xl md:justify-self-end">
              <p class="text-sm leading-7 text-neutral-400 sm:text-base">
                {t.projectPage.contactDescription}
              </p>

              <a
                href="/#contact"
                class="group mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-white"
              >
                <span class="border-b border-white/30 pb-1 transition-colors group-hover:border-white">
                  {t.projectPage.contactAction}
                </span>
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-white/40"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 20 20" fill="none" class="h-4 w-4">
                    <path
                      d="M5 15 15 5M6 5h9v9"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</main>

<Footer />
