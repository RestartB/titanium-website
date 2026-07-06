<script lang="ts">
  import '../app.css';

  import { onNavigate } from '$app/navigation';
  import { page } from '$app/state';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();

  const pages = {
    '/': 1,
    '/about': 2,
    '/status': 3
  };
  type PagePath = keyof typeof pages;

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    if (
      !navigation.to ||
      !navigation.from ||
      navigation.to.url.pathname === navigation.from?.url.pathname
    ) {
      return;
    }

    const oldPage = pages[navigation.from.url.pathname as PagePath];
    const newPage = pages[navigation.to.url.pathname as PagePath];

    let oldAnim;
    let newAnim;

    if (!oldPage || !newPage) {
      oldAnim = 'fade-out';
      newAnim = 'fade-in';
    } else if (oldPage < newPage) {
      oldAnim = 'slide-to-left';
      newAnim = 'slide-from-right';
    } else {
      oldAnim = 'slide-to-right';
      newAnim = 'slide-from-left';
    }

    document.documentElement.style.setProperty('--old-animation', oldAnim);
    document.documentElement.style.setProperty('--new-animation', newAnim);

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <title>Titanium</title>

  <meta name="description" content="Titanium is your multipurpose Discord bot. Moderation, starboards, leaderboards, image tools, and more - all for free." />
  <meta name="theme-color" content="#979C9F" data-react-helmet="true" />

  <meta property="og:title" content="Titanium" />
  <meta property="og:description" content="Your multipurpose Discord bot. Moderation, starboards, leaderboards, image tools, and more - all for free." />
  <meta property="og:url" content="https://titanium.fyi/" />
  <meta property="og:image" content="https://titanium.fyi/assets/logo.png" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Titanium",
    "url": "https://titanium.fyi/"
  }
  </script>

  <link rel="canonical" href={`https://titanium.fyi${page.url.pathname}`} />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <Header />

  <main class="flex-1 pt-12">
    {@render children()}
  </main>

  <Footer />
</div>

<style>
  :root::view-transition-old(root) {
    animation: 300ms cubic-bezier(0.4, 0, 0.2, 1) both var(--old-animation);
  }

  :root::view-transition-new(root) {
    animation: 300ms cubic-bezier(0.4, 0, 0.2, 1) both var(--new-animation);
  }
</style>
