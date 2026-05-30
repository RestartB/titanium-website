<script lang="ts">
  import '../app.css';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();
</script>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="pt-12 flex-1">
    {@render children()}
  </main>

  <Footer />
</div>
