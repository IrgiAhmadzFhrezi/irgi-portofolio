<script lang="ts">
  import { language, translations } from '#lib/i18n/index.svelte.js';

  let t = $derived(translations[language.current]);
</script>

<footer class="border-t border-white/10 bg-[#0a0a0a]">
  <div
    class="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-8"
  >
    <p class="font-medium text-neutral-300">Irgi Ahmad Fahrezi</p>

    <div class="flex items-center justify-between gap-4 sm:contents">
      <p class="text-neutral-500">
        © {new Date().getFullYear()} {t.footer.copyright}
      </p>

      <a
        href="#top"
        class="text-neutral-400 transition-colors hover:text-white"
        aria-label={t.footer.backToTop}
      >
        {t.footer.backToTop} ↑
      </a>
    </div>
  </div>
</footer>
