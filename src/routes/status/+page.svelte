<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Titanium - Status</title>
	<meta content="Titanium" property="og:title" />
	<meta content="Your multipurpose, open source Discord bot." property="og:description" />
</svelte:head>

<div
	in:fly={{ y: 20, duration: 500 }}
	class="flex w-full max-w-4xl flex-col items-center gap-5 p-5 pt-19.5"
>
	<h1
		class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-center text-6xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
	>
		Status
	</h1>

	<div
		class="flex w-full flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-4 dark:bg-zinc-700"
	>
		<div class="flex items-center gap-3">
			<enhanced:img src="$lib/images/titanium-logo.svg" alt="Titanium Logo" class="h-16 w-16" />
			<div>
				<h2 class="font-bold">Titanium</h2>
				<p>The main Titanium instance.</p>
			</div>

			<div class="flex flex-col gap-1 items-end justify-center ml-auto">
				<div class="flex items-center gap-2">
					<span class="relative flex size-3">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
						></span>
						<span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
					</span>
					<h3 class="font-light">Online</h3>
				</div>

				<div class="text-sm border-2 border-zinc-600 rounded-md bg-zinc-800 p-1 px-2 text-center">
					<p>Ping: <code>100ms</code></p>
				</div>
			</div>
		</div>

		<hr class="border-zinc-600" />

		<div class="flex items-center gap-3">
			<enhanced:img src="$lib/images/titanium-logo.svg" alt="Titanium Logo" class="h-16 w-16" />
			<div>
				<h2 class="font-bold">Titanium Private</h2>
				<p>Private version of Titanium.</p>
			</div>

			<div class="flex flex-col gap-1 items-end justify-center ml-auto">
				<div class="flex items-center gap-2">
					<span class="relative flex size-3">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
						></span>
						<span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
					</span>
					<h3 class="font-light">Online</h3>
				</div>

				<div class="text-sm border-2 border-zinc-600 rounded-md bg-zinc-800 p-1 px-2 text-center">
					<p>Ping: <code>100ms</code></p>
				</div>
			</div>
		</div>
	</div>

	<p class="font-light text-sm w-full">Updated: 5 seconds ago</p>

	<h2 class="text-2xl font-bold w-full">Previous Outages</h2>
	<div class="flex w-full flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-4 dark:bg-zinc-700">
		<p class="text-center font-light">No previous outages.</p>
	</div>
</div>
