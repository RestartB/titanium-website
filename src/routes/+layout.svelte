<script lang="ts">
  import '../app.css';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();
</script>

<div class="flex min-h-screen flex-col">
  <Header />

  <main class="flex-1 pt-12">
    {@render children()}
  </main>

  <Footer />
</div>
