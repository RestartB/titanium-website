<script lang="ts">
  import '../app.css';

  import Header from '$lib/components/Header.svelte';
  import type { LayoutProps } from './$types';

  let { data, children }: LayoutProps = $props();
</script>

<Header />

<div class="pt-12">
  {@render children()}
</div>
