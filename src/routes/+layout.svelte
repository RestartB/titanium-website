<script lang="ts">
  import '../app.css';

  import { onNavigate } from '$app/navigation';
  import { page } from '$app/state';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    if (navigation.to?.url.pathname === navigation.from?.url.pathname) {
      return;
    }

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
  <meta content="Titanium" property="og:title" />
  <meta content="https://titanium.fyi/" property="og:url" />
  <meta content="https://titanium.fyi/assets/logo.png" property="og:image" />
  <link rel="canonical" href={`https://titanium.fyi${page.url.pathname}`} />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <Header />

  <main class="flex-1 pt-12">
    {@render children()}
  </main>

  <Footer />
</div>
