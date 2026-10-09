<script lang="ts">
  import { language, translations } from '#lib/i18n/index.svelte.js';

  let t = $derived(translations[language.current]);
  const technologies = [
    {
      categoryIndex: 0,
      items: [
        { name: 'SvelteKit', icon: '/icons/devicon--svelte.svg' },
        { name: 'TypeScript', icon: '/icons/devicon--typescript.svg' },
        { name: 'JavaScript', icon: '/icons/devicon--javascript.svg' },
        { name: 'HTML', icon: '/icons/skill-icons--html.svg' },
        { name: 'CSS', icon: '/icons/devicon--css.svg' },
        { name: 'Tailwind CSS', icon: '/icons/devicon--tailwindcss.svg' }
      ]
    },
    {
      categoryIndex: 1,
      items: [
        { name: 'Laravel', icon: '/icons/devicon--laravel.svg' },
        { name: 'PHP', icon: '/icons/devicon--php.svg' },
        { name: 'Node JS', icon: '/icons/selfhst--node-js.svg' },
        { name: 'Python', icon: '/icons/devicon--python.svg' },
        { name: 'PostgreSQL', icon: '/icons/devicon--postgresql.svg' },
        { name: 'MySQL', icon: '/icons/devicon--mysql.svg' }
      ]
    },
    {
      categoryIndex: 2,
      items: [
        { name: 'GitHub', icon: '/icons/devicon--github.svg' },
        { name: 'Bun', icon: '/icons/selfhst--bun.svg' },
        {
          name: 'VS Code',
          icon: '/icons/selfhst--visual-studio-code.svg'
        },
        { name: 'Postman', icon: '/icons/devicon--postman.svg' }
      ]
    }
  ];
</script>

<section
  id="technologies"
  class="border-b border-white/10 bg-[#0a0a0a]"
>
  <div
    class="mx-auto min-h-[calc(100vh-64px)] max-w-6xl px-5 py-20 sm:px-8 lg:px-8 lg:py-24"
  >
    <!-- Header -->
    <div class="mb-12">
      <p class="text-sm font-medium tracking-[0.2em] text-blue-400">
        {t.technologies.eyebrow}
      </p>

      <div
        class="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
      >
        <h2
          class="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          {t.technologies.title}
        </h2>

        <p
          class="max-w-md text-sm leading-6 text-neutral-500 sm:text-right"
        >
          {t.technologies.description}
        </p>
      </div>
    </div>

    <!-- Technology Groups -->
    <div class="border-t border-white/10">
      {#each technologies as group, index}
        <div
          class={`grid gap-6 py-8 sm:grid-cols-[0.7fr_1.3fr] sm:gap-10 ${
            index !== technologies.length - 1
              ? 'border-b border-white/10'
              : ''
          }`}
        >
          <!-- Category -->
          <div>
            <p
              class="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600"
            >
              {t.technologies.categories[group.categoryIndex]}
            </p>
          </div>

          <!-- Technology Items -->
          <div class="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
            {#each group.items as item}
              <div class="flex items-center gap-3">
                <div
                  class="flex h-5 w-5 shrink-0 items-center justify-center"
                >
                  <img
                    src={item.icon}
                    alt=""
                    class="h-5 w-5 opacity-60"
                  />
                </div>

                <span class="text-sm text-neutral-300">
                  {item.name}
                </span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>