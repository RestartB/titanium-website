<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    type: string;
    children?: Snippet<[]>;
  };

  let { type, children }: Props = $props();

  let colour: string = $derived.by(() => {
    if (type.toLowerCase() === 'error') {
      return 'border-red-700 dark:border-red-300';
    } else if (type.toLowerCase() === 'warning') {
      return 'border-yellow-700 dark:border-yellow-300';
    } else if (type.toLowerCase() === 'info') {
      return 'border-blue-700 dark:border-blue-300';
    } else {
      return 'border-gray-700 dark:border-gray-300';
    }
  });
</script>

<div class="h-fit w-full border-l-4 pl-2.5 {colour}">
  <h3 class="font-bold">{type}</h3>
  {@render children?.()}
</div>
