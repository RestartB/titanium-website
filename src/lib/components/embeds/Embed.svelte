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
  class="w-fit rounded-lg border-2 border-zinc-300 bg-zinc-200 p-2 px-4 dark:border-zinc-700 dark:bg-zinc-800 {colour
    ? 'border-l-6 border-l-(--colour)!'
    : ''} {className}"
  style:--colour={colour}
>
  {#if author || authorImg}
    <span class="mb-1 flex items-center gap-1 text-base">
      {#if authorImg}
        <enhanced:img src={authorImg} class="h-6 w-6 rounded-full" />
      {/if}
      <p>{author}</p>
    </span>
  {/if}

  {#if title}
    <p class="mb-1 text-xl font-bold">{title}</p>
  {/if}

  <div class="text-base">
    {@render children?.()}
  </div>

  {#if footer || footerImg}
    <span class="mt-1 flex items-center gap-1 text-base">
      {#if footerImg}
        <enhanced:img src={footerImg} class="h-6 w-6 rounded-full" />
      {/if}
      <p>{footer}</p>
    </span>
  {/if}
</div>
