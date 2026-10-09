<script lang="ts">
  import nexadeskTickets from '#lib/assets/nexadesk-tickets.jpeg';
  import inventoryManagement from '#lib/assets/inventory-management.png';
  import { language, translations } from '#lib/i18n/index.svelte.js';

  let t = $derived(translations[language.current]);
</script>

<section id="projects" class="border-b border-white/10 bg-[#0a0a0a]">
  <div
    class="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-8 lg:py-24"
  >
    <!-- Section Header -->
    <div class="mb-12">
      <p class="text-sm font-medium tracking-[0.2em] text-blue-400">
        {t.projects.eyebrow}
      </p>

      <div
        class="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
      >
        <h2
          class="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {t.projects.title}
        </h2>

        <p class="max-w-md text-sm leading-6 text-neutral-500 sm:text-right">
          {t.projects.description}
        </p>
      </div>
    </div>

   <!-- Featured Project -->
    <article>
    <!-- Project Content -->
    <div
        class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
    >
        <!-- Screenshot -->
        <div
        class="overflow-hidden border border-white/10 bg-neutral-950"
        >
        <div class="flex aspect-video items-center justify-center p-3 sm:p-5">
            <img
            src={nexadeskTickets}
            alt={t.projects.nexadeskImageAlt}
            class="max-h-full max-w-full object-contain"
            />
        </div>
        </div>

        <!-- Project Information -->
        <div class="max-w-xl">
        <p
            class="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600"
        >
            {t.projects.featured}
        </p>

        <h3
            class="mt-3 text-3xl font-semibold tracking-tight text-white"
        >
            NexaDesk
        </h3>

        <p class="mt-2 text-sm font-medium text-blue-400">
            {t.projects.nexadeskSubtitle}
        </p>

        <p
            class="mt-6 text-base leading-7 text-neutral-400"
        >
            {t.projects.nexadeskDescription}
        </p>

        <!-- Technologies -->
        <div class="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            <span class="text-sm text-neutral-500">SvelteKit</span>
            <span class="text-sm text-neutral-500">TypeScript</span>
            <span class="text-sm text-neutral-500">Bun</span>
            <span class="text-sm text-neutral-500">PostgreSQL</span>
            <span class="text-sm text-neutral-500">Drizzle ORM</span>
        </div>
        </div>
    </div>

    <!-- Project Links -->
    <div
        class="mt-10 flex items-center gap-6 border-t border-white/10 pt-6"
    >
        <a
        href="https://github.com/IrgiAhmadzFhrezi/nexadesk.git"
        target="_blank"
        rel="noreferrer"
        class="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-neutral-300"
        >
        {t.projects.github}

        <span
            class="text-neutral-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
            ↗
        </span>
        </a>

        <a
        href="/projects#nexadesk"
        class="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-neutral-300"
        >
        {t.projects.viewProject}

        <span
            class="text-neutral-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
            ↗
        </span>
        </a>
    </div>
    </article>
        <!-- Project 02 -->
    <article class="mt-14 border-t border-white/10 pt-10">
    <div
        class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
    >
        <!-- Screenshot -->
        <div class="overflow-hidden border border-white/10 bg-neutral-950">
        <div class="flex aspect-video items-center justify-center p-3 sm:p-5">
            <img
            src={inventoryManagement}
            alt={t.projects.inventoryImageAlt}
            class="max-h-full max-w-full object-contain"
            />
        </div>
        </div>

        <!-- Project Information -->
        <div class="max-w-xl">
        <p
            class="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600"
        >
            {t.projects.projectLabel} 02
        </p>

        <h3 class="mt-3 text-3xl font-semibold tracking-tight text-white">
            {t.projects.inventoryName}
        </h3>

        <p class="mt-2 text-sm font-medium text-blue-400">
            {t.projects.inventorySubtitle}
        </p>

        <p class="mt-6 text-base leading-7 text-neutral-400">
            {t.projects.inventoryDescription}
        </p>

        <!-- Technologies -->
        <div class="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            <span class="text-sm text-neutral-500">Laravel</span>
            <span class="text-sm text-neutral-500">PHP</span>
            <span class="text-sm text-neutral-500">MySQL</span>
            <span class="text-sm text-neutral-500">Tailwind CSS</span>
        </div>
        </div>
    </div>

    <!-- Project Links -->
    <div
        class="mt-10 flex items-center gap-6 border-t border-white/10 pt-6"
    >
        <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        class="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-neutral-300"
        >
        {t.projects.github}
        <span
            class="text-neutral-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
            ↗
        </span>
        </a>

        <a
        href="/projects#inventory-management"
        class="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-neutral-300"
        >
        {t.projects.viewProject}
        <span
            class="text-neutral-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
            ↗
        </span>
        </a>
    </div>
    </article>
    <div class="mt-16 flex justify-center">
    <a
        href="/projects"
        class="group inline-flex items-center gap-3 border border-white/15 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
    >
        {t.projects.viewAll}

        <svg
        viewBox="0 0 20 20"
        fill="none"
        class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
        >
        <path
            d="M4 10h11M10 5l5 5-5 5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        </svg>
    </a>
    </div>
  </div>
</section>