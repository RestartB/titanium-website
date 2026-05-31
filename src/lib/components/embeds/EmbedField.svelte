<script lang="ts">
  import type { Snippet } from 'svelte';

  const { title, children }: { title: string; children?: Snippet<[]> } = $props();
</script>

<p class="font-semibold">{title}</p>
{@render children?.()}
