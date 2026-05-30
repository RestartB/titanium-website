<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { Picture } from 'vite-imagetools';

  const {
    title,
    author,
    authorImg,
    footer,
    footerImg,
    colour,
    class: className = '',
    children
  }: {
    title?: string;
    author?: string;
    authorImg?: Picture;
    footer?: string;
    footerImg?: Picture;
    colour?: string;
    class?: string;
    children?: Snippet<[]>;
  } = $props();
</script>

<div
  class="w-fit bg-zinc-200 p-2 px-4 rounded-lg dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 {colour
    ? 'border-l-6 border-l-(--colour)'
    : ''} {className}"
  style:--colour={colour}
>
  {#if author || authorImg}
    <span class="flex items-center gap-1 text-base mb-1">
      {#if authorImg}
        <enhanced:img src={authorImg} class="h-6 w-6 rounded-full" />
      {/if}
      <p>{author}</p>
    </span>
  {/if}

  {#if title}
    <p class="text-xl font-bold mb-1">{title}</p>
  {/if}

  <div class="text-base">
    {@render children?.()}
  </div>

  {#if footer || footerImg}
    <span class="flex items-center gap-1 text-base mt-1">
      {#if footerImg}
        <enhanced:img src={footerImg} class="h-6 w-6 rounded-full" />
      {/if}
      <p>{footer}</p>
    </span>
  {/if}
</div>
