<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center gap-4">
	<h1 class="text-9xl font-bold">{page.status}</h1>
	{#if page.error?.message}
		<p class="text-3xl font-semibold">{page.error.message}</p>
	{:else}
		<p class="text-3xl font-semibold">An error occurred</p>
	{/if}

	<button
		class="border-titanium-border rounded-full border-2 bg-zinc-300 px-6 pt-2 pb-2 text-xl transition-colors hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700"
		on:click={() => window.history.back()}
	>
		Back
	</button>
</div>
