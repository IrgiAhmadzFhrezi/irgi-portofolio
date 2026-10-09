<script lang="ts">
  import cvUrl from '#lib/assets/CV- Irgi Ahmad Fahrezi.pdf?url';
  import { language, translations } from '#lib/i18n/index.svelte.js';

  let t = $derived(translations[language.current]);
  let introText = $state('');
  let introIndex = $state(0);
  let deleting = $state(false);

  $effect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const currentText = t.home.heroIntro[introIndex];

    if (!deleting && introText === currentText) {
      timeout = setTimeout(() => {
        deleting = true;
      }, 1800);
    } else if (deleting && introText === '') {
      deleting = false;
      introIndex = (introIndex + 1) % t.home.heroIntro.length;
    } else {
      timeout = setTimeout(() => {
        if (deleting) {
          introText = currentText.slice(0, introText.length - 1);
        } else {
          introText = currentText.slice(0, introText.length + 1);
        }
      }, deleting ? 45 : 85);
    }

    return () => clearTimeout(timeout);
  });
</script>

<section class="relative overflow-hidden border-b border-white/10 bg-[#0a0a0a]">

  <!-- Subtle Hero Background -->
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0"
  >
    <!-- Grid -->
    <div
      class="hero-grid absolute inset-0"
      style="
        background-image:
          linear-gradient(to right, var(--hero-grid-line) 1px, transparent 1px),
          linear-gradient(to bottom, var(--hero-grid-line) 1px, transparent 1px);
        background-size: 64px 64px;
      "
    ></div>

    <!-- Subtle spotlight -->
    <div
      class="absolute left-1/2 top-[34%] h-130 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/2.5 blur-[120px]"
    ></div>
  </div>

  <!-- Hero Content -->
  <div
  class="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col items-center justify-center px-5 pt-8 pb-6 text-center sm:min-h-[calc(100vh-64px)] sm:px-8 sm:pt-14 sm:pb-16 lg:px-8 lg:pt-16"
>
    <div class="w-full max-w-5xl">

      <!-- Intro -->
      <div class="hero-item hero-delay-1">
        <div class="mb-5 flex items-center justify-center">
          <p
            class="min-h-5 text-xs font-medium tracking-[0.22em] text-blue-400 sm:text-sm"
            aria-live="off"
          >
            {introText}<span class="typing-cursor" aria-hidden="true"></span>
          </p>
        </div>
      </div>

      <!-- Name -->
      <h1
        class="hero-item hero-delay-2 mx-auto max-w-[14ch] text-[clamp(2.25rem,10vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:max-w-none sm:text-6xl sm:leading-[0.95] lg:text-7xl xl:text-8xl"
      >
        IRGI AHMAD FAHREZI
      </h1>

      <!-- Role -->
      <div class="hero-item hero-delay-3 mt-4 sm:mt-5">
        <p
          class="text-sm font-medium tracking-[0.2em] text-neutral-400 sm:text-base"
        >
          {t.home.role}
        </p>
      </div>

      <!-- Main statement -->
      <h2
        class="hero-item hero-delay-4 mx-auto mt-6 max-w-4xl text-xl font-medium leading-snug tracking-tight text-white sm:mt-8 sm:text-3xl sm:leading-tight lg:text-4xl"
      >
        {t.home.statement}
      </h2>

      <!-- Description -->
      <p
        class="hero-item hero-delay-5 mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-400 sm:mt-6 sm:text-lg sm:leading-8"
      >
        {t.home.introduction}
      </p>

      <!-- Actions -->
      <div
        class="hero-item hero-delay-6 mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
      >
        <a
          href="#projects"
          class="group inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-neutral-200"
        >
          {t.home.viewWork}

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

        <a
          href={cvUrl}
          download="Irgi-Ahmad-Fahrezi-CV.pdf"
          class="group inline-flex min-h-12 items-center justify-center gap-2 border border-white/15 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="M10 2.5v9m0 0 3.5-3.5M10 11.5 6.5 8M4 12v4.5h12V12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {t.home.downloadCv}
        </a>
      </div>

      <!-- Profile details -->
      <div
        class="hero-item hero-delay-7 mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-4 border-t border-white/10 pt-5 sm:mt-10 sm:flex-row sm:gap-10 sm:pt-6"
      >
        <div class="text-center">
          <p
            class="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-600"
          >
            {t.home.basedIn}
          </p>

          <p class="mt-1.5 text-sm text-neutral-400">
            Indonesia
          </p>
        </div>

        <div class="hidden h-8 w-px bg-white/10 sm:block"></div>

        <div class="text-center">
          <p
            class="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-600"
          >
            {t.home.focus}
          </p>

          <p class="mt-1.5 text-sm text-neutral-400">
            {t.home.focusValue}
          </p>
        </div>

        <div class="hidden h-8 w-px bg-white/10 sm:block"></div>

        <div class="flex items-center gap-2 text-center">
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-400 opacity-50"
            ></span>

            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-neutral-400"
            ></span>
          </span>

          <div>
            <p
              class="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-600"
            >
              {t.home.status}
            </p>

            <p class="mt-1.5 text-sm text-neutral-400">
              {t.home.openToOpportunities}
            </p>
          </div>
        </div>
      </div>
    </div>

    <a
      href="#about"
      aria-label={t.home.scrollToAbout}
      class="scroll-indicator mt-4 inline-flex min-h-11 items-center justify-center gap-2 px-3 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-neutral-300 sm:absolute sm:bottom-4 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2 sm:flex-col sm:gap-1 sm:px-0"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        class="h-4 w-4 shrink-0 animate-bounce"
        aria-hidden="true"
      >
        <path
          d="M10 4v11M5.5 11l4.5 4.5 4.5-4.5"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>{t.home.scrollToExplore}</span>
    </a>
  </div>
</section>

<style>
  /* Hero entrance animation */

  @keyframes hero-fade-up {
    from {
      opacity: 0;
      transform: translateY(16px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-item {
    opacity: 0;
    animation: hero-fade-up 0.7s ease-out forwards;
  }

  .hero-delay-1 {
    animation-delay: 0.05s;
  }

  .hero-delay-2 {
    animation-delay: 0.15s;
  }

  .hero-delay-3 {
    animation-delay: 0.25s;
  }

  .hero-delay-4 {
    animation-delay: 0.35s;
  }

  .hero-delay-5 {
    animation-delay: 0.45s;
  }

  .hero-delay-6 {
    animation-delay: 0.55s;
  }

  .hero-delay-7 {
    animation-delay: 0.65s;
  }

  /* Typing animation */

  .typing-cursor {
    display: inline-block;
    width: 1px;
    height: 0.9em;
    margin-left: 5px;
    vertical-align: -0.08em;
    background: currentColor;
    animation: cursor-blink 0.8s steps(1) infinite;
  }

  @keyframes cursor-blink {
    0%,
    45% {
      opacity: 1;
    }

    46%,
    100% {
      opacity: 0;
    }
  }

  .hero-grid {
    opacity: var(--hero-grid-opacity);
  }

  @media (max-width: 639px) {
    .hero-grid {
      background-size: 40px 40px !important;
    }
  }

  /* Reduced motion */

  @media (prefers-reduced-motion: reduce) {
    .hero-item {
      opacity: 1;
      animation: none;
    }

    .typing-cursor {
      animation: none;
      opacity: 1;
    }

    .scroll-indicator svg {
      animation: none;
    }
  }
</style>
