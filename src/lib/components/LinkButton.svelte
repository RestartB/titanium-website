<script lang="ts">
  /* eslint-disable svelte/no-navigation-without-resolve */
  import type { Snippet } from 'svelte';

  const {
    href,
    title,
    class: className = '',
    border = true,
    disablePadding = false,
    children
  }: {
    href: string;
    title: string;
    class?: string;
    border?: boolean;
    disablePadding?: boolean;
    children: Snippet<[]>;
  } = $props();
</script>

<!-- prettier-ignore -->
<a
  class="flex w-fit cursor-pointer items-center gap-2 bg-zinc-200 rounded-lg {border ? 'border-2 border-zinc-300 dark:border-zinc-700' : 'border-0'} dark:bg-zinc-800 {disablePadding ? '' : 'p-1 px-4'} transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-600 {className}"
  {href}
  {title}
>
  {@render children?.()}
</a>
