<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { initializeLanguage, language, setLanguage, translations, type Language } from '#lib/i18n/index.svelte.js';

  let menuOpen = $state(false);
  let theme = $state<'dark' | 'light'>('dark');
  let t = $derived(translations[language.current]);

  const navItems = ['about', 'projects', 'technologies', 'experience', 'contact'] as const;
  const languageOptions: Language[] = ['en', 'id'];

  onMount(() => {
    initializeLanguage();
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      theme = savedTheme;
    }

    document.documentElement.dataset.theme = theme;
  });

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }
</script>

<nav class="border-b border-white/10 bg-[#0a0a0a] transition-colors duration-300">
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">

    <a
      href="/"
      class="text-sm font-semibold tracking-tight text-white"
    >
      Irgi Ahmad
    </a>

    <div class="hidden items-center gap-8 md:flex">
      {#each navItems as item}
        <a
          href={`${page.url.pathname === '/projects' ? '/' : ''}#${item}`}
          class="text-sm text-neutral-400 transition-colors hover:text-white"
        >
          {t.nav[item]}
        </a>
      {/each}
    </div>

    <div class="flex items-center gap-2">
      <div
        role="group"
        aria-label={t.nav.languageLabel}
        class="flex items-center rounded-md border border-white/10 p-0.5"
      >
        {#each languageOptions as option}
          <button
            type="button"
            aria-pressed={language.current === option}
            onclick={() => setLanguage(option)}
            class={`min-h-8 min-w-9 rounded px-2 text-[11px] font-semibold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
              language.current === option
                ? 'bg-white text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {option}
          </button>
        {/each}
      </div>

      <button
        type="button"
        class="flex h-9 w-9 items-center justify-center text-neutral-300 transition-colors hover:text-white"
        aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
        aria-pressed={theme === 'light'}
        onclick={toggleTheme}
      >
        {#if theme === 'dark'}
          <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        {:else}
          <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
            <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        {/if}
      </button>

      <button
        type="button"
        class="flex h-9 w-9 items-center justify-center text-neutral-300 md:hidden"
        aria-label={t.nav.toggleNavigation}
        aria-expanded={menuOpen}
        onclick={() => (menuOpen = !menuOpen)}
      >
        {#if menuOpen}
          ×
        {:else}
          ☰
        {/if}
      </button>
    </div>

  </div>

  {#if menuOpen}
    <div class="border-t border-white/10 bg-[#0a0a0a] md:hidden">
      <div class="mx-auto max-w-6xl px-5 py-3">
        {#each navItems as item}
          <a
            href={`${page.url.pathname === '/projects' ? '/' : ''}#${item}`}
            class="block border-b border-white/5 py-3 text-sm text-neutral-400 hover:text-white"
            onclick={() => (menuOpen = false)}
          >
            {t.nav[item]}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>