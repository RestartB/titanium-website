<script lang="ts">
  const { data } = $props();
</script>

<div class="mx-auto flex max-w-7xl flex-col gap-4 p-4">
  <h1
    class="bg-linear-to-bl from-zinc-500 to-zinc-800 bg-clip-text text-6xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
  >
    Past Policies
  </h1>
  <p>View past Privacy policies for Titanium.</p>

  <ol>
    <li class="group w-full border-zinc-300 py-2 not-last:border-b-2 dark:border-zinc-700">
      <a href="/privacy" title="Current Policy" class="block w-full group-hover:underline"
        >Current Policy</a
      >
    </li>
    {#each data.pages as page (page)}
      <li class="group w-full border-zinc-300 py-2 not-last:border-b-2 dark:border-zinc-700">
        <a href="/privacy/previous/{page}" title={page} class="block w-full group-hover:underline"
          >{page}</a
        >
      </li>
    {/each}
  </ol>
</div>
