<script lang="ts">
  import type { Snippet } from 'svelte';

  const {
    href,
    title,
    class: className = '',
    border = true,
    smallPadding = false,
    disablePadding = false,
    children
  }: {
    href: string;
    title: string;
    class?: string;
    border?: boolean;
    smallPadding?: boolean;
    disablePadding?: boolean;
    children: Snippet<[]>;
  } = $props();
</script>

<!-- prettier-ignore -->
<a
  class="flex w-fit cursor-pointer items-center gap-2 rounded-lg {border ? 'border-2 border-zinc-700' : 'border-0'} bg-zinc-800 {disablePadding ? '' : smallPadding ? 'p-1 px-4' : 'p-2 px-4'} transition-colors hover:bg-zinc-600 disabled:cursor-not-allowed disabled:opacity-50 {className}"
  {href}
  {title}
>
  {@render children?.()}
</a>
