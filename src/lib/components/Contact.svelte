<script lang="ts">
  import { language, translations } from '#lib/i18n/index.svelte.js';

  let t = $derived(translations[language.current]);
  const contactEmail = 'fahrezijr144@gmail.com';

  let name = $state('');
  let senderEmail = $state('');
  let message = $state('');

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const subject = encodeURIComponent(t.contact.emailSubject(name));
    const body = encodeURIComponent(
      `${t.contact.emailGreeting}\n\n${message}\n\n${t.contact.emailSignoff}\n${name}\n${senderEmail}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }
</script>

<section id="contact" class="border-b border-white/10 bg-[#0a0a0a]">
  <div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-8 lg:py-24">
    <div class="mb-12">
      <p class="text-sm font-medium tracking-[0.2em] text-blue-400">
        {t.contact.eyebrow}
      </p>

      <div class="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t.contact.title}
        </h2>

        <p class="max-w-md text-sm leading-6 text-neutral-500 sm:text-right">
          {t.contact.description}
        </p>
      </div>
    </div>

    <div class="grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div class="flex flex-col items-start">
        <div class="flex items-center gap-3">
          <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400/50"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400"></span>
          </span>
          <p class="text-sm text-neutral-300">{t.contact.status}</p>
        </div>

        <p class="mt-8 max-w-md text-sm leading-7 text-neutral-500">
          {t.contact.invitation}
        </p>

        <a
          href={`mailto:${contactEmail}`}
          class="group mt-10 inline-flex max-w-full items-center gap-3 border-b border-white/15 pb-3 text-sm font-medium text-white transition-colors duration-200 hover:border-blue-400/70 hover:text-blue-300"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            class="h-5 w-5 shrink-0 text-blue-400"
            aria-hidden="true"
          >
            <path
              d="M3.5 5.75h13a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1Z"
              stroke="currentColor"
              stroke-width="1.4"
            />
            <path
              d="m3 6.5 7 5.25 7-5.25"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="break-all">{contactEmail}</span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            class="h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-blue-300"
            aria-hidden="true"
          >
            <path
              d="M5 15 15 5M6 5h9v9"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>

        <div class="mt-6 flex items-center gap-3" aria-label={t.contact.socialLabel}>
          <a
            href="https://github.com/IrgiAhmadzFhrezi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            class="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-400 transition-colors duration-200 hover:border-blue-400/50 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <svg viewBox="0 0 24 24" fill="none" class="h-4 w-4" aria-hidden="true">
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/irgi-ahmad-fahrezi-b86b70390/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            class="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-400 transition-colors duration-200 hover:border-blue-400/50 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10.2H5.67V18h2.67v-7.8ZM7.01 6a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1ZM18.34 13.53c0-2.35-1.25-3.44-2.91-3.44a2.52 2.52 0 0 0-2.27 1.25V10.2h-2.67V18h2.67v-4.12c0-1.08.2-2.13 1.55-2.13 1.33 0 1.35 1.24 1.35 2.2V18h2.28v-4.47Z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/irgiahmad.f_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            class="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-400 transition-colors duration-200 hover:border-blue-400/50 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <svg viewBox="0 0 24 24" fill="none" class="h-4 w-4" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.7" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7" />
              <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/irgi.jr.606246/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            class="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-400 transition-colors duration-200 hover:border-blue-400/50 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
              <path d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14c-.3-.04-1.34-.14-2.55-.14-2.52 0-4.24 1.54-4.24 4.37V9.6H7.15v3.2H10V21h3.5Z" />
            </svg>
          </a>
        </div>
      </div>

        <form
          class="space-y-7"
          onsubmit={handleSubmit}
        >
          <!-- Name & Email -->
          <div class="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                for="contact-name"
                class="mb-2.5 block text-sm text-neutral-300"
              >
                {t.contact.yourName}
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autocomplete="name"
                required
                bind:value={name}
                class="w-full border border-white/10 bg-white/3 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-blue-400/70"
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            <div>
              <label
                for="contact-email"
                class="mb-2.5 block text-sm text-neutral-300"
              >
                {t.contact.yourEmail}
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autocomplete="email"
                required
                bind:value={senderEmail}
                class="w-full border border-white/10 bg-white/3 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-blue-400/70"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
          </div>

          <!-- Message -->
          <div>
            <label
              for="contact-message"
              class="mb-2.5 block text-sm text-neutral-300"
            >
              {t.contact.howCanIHelp}
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows="5"
              required
              bind:value={message}
              class="w-full resize-y border border-white/10 bg-white/3 px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-blue-400/70"
              placeholder={t.contact.messagePlaceholder}
            ></textarea>
          </div>

          <!-- Button -->
          <div class="flex justify-center pt-2">
            <button
              type="submit"
              class="group inline-flex items-center gap-3 bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              {t.contact.sendMessage}

              <svg
                viewBox="0 0 20 20"
                fill="none"
                class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M3.5 10h12m-5-5 5 5-5 5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>

    </div>
  </div>
</section>