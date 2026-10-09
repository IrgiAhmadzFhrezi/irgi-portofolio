<script lang="ts">
  import Navbar from '../lib/components/Navbar.svelte';
  import Hero from '../lib/components/Hero.svelte';
  import About from '../lib/components/About.svelte';
  import Projects from '../lib/components/Projects.svelte';
  import Technologies from '../lib/components/Technologies.svelte';
  import Experience from '#lib/components/Experience.svelte';
  import Contact from '#lib/components/Contact.svelte';
  import Footer from '#lib/components/Footer.svelte';
  import { language, translations } from '#lib/i18n/index.svelte.js';

  let t = $derived(translations[language.current]);
</script>

<svelte:head>
  <title>{t.home.title}</title>
  <meta name="description" content={t.home.description} />
</svelte:head>

<Navbar />

<main id="top">
  <Hero />
  <About />
  <Projects />
  <Technologies />
  <Experience/>
  <Contact/>
</main>

<Footer />