<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	let loading = $state();

	let mainConnected = $state();
	let mainLatency = $state(0);

	let privateConnected = $state();
	let privateLatency = $state(0);

	let sinceLastUpdate = $state(Date.now());
	let secondsAgo = $state(0);

	// Update seconds ago every second
	const updateSecondsAgo = () => {
		secondsAgo = Math.floor((Date.now() - sinceLastUpdate) / 1000);
	};

	// Request status from API
	async function fetchStatus() {
		try {
			loading = true;

			const response = await fetch('/api/status');
			if (!response.ok) throw new Error('Network response was not ok');
			const data = await response.json();

			mainConnected = data.main.connected;
			mainLatency = data.main.latency || 0;

			privateConnected = data.private.connected;
			privateLatency = data.private.latency || 0;

			loading = false;
			sinceLastUpdate = Date.now();
		} catch (error) {
			console.error('Failed to fetch status:', error);

			mainConnected = false;
			privateConnected = false;
			loading = false;
		}
	}

	let secondsInterval: number;
	let fetchTimeout: number;

	async function scheduleNextFetch() {
		await fetchStatus();
		// Wait 5 seconds after the request completes
		fetchTimeout = setTimeout(scheduleNextFetch, 15000);
	}

	onMount(() => {
		scheduleNextFetch();

		// Update seconds counter every second
		secondsInterval = setInterval(updateSecondsAgo, 1000);
	});

	onDestroy(() => {
		clearTimeout(fetchTimeout);
		clearInterval(secondsInterval);
	});
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

	<noscript>
		<style>
			#status-content {
				display: none;
			}
		</style>

		<div
			class="flex w-full flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-red-200 p-4 dark:bg-red-950"
		>
			<p>Please enable JavaScript to use this page.</p>
		</div>
	</noscript>

	<div class="flex w-full flex-col items-center gap-5" id="status-content">
		<div class="flex w-full items-center justify-between gap-3">
			<div class="flex items-center gap-3">
				<div class="ml-auto flex flex-col items-end justify-center gap-1">
					<div class="flex items-center gap-2">
						<span class="relative flex size-3">
							<span
								class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75 dark:bg-green-200"
							></span>
							<span class="relative inline-flex size-3 rounded-full bg-green-700 dark:bg-green-300"
							></span>
						</span>
						<h3 class="font-bold">Live</h3>
					</div>
				</div>
			</div>

			<p class="w-full">
				Last updated {secondsAgo}s ago
			</p>
		</div>

		{#if loading}
			<div
				class="flex w-full flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-orange-200 p-4 dark:bg-orange-950"
			>
				<p>Loading status...</p>
			</div>
		{:else if mainConnected && privateConnected}
			<div
				class="flex w-full flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-green-200 p-4 dark:bg-green-950"
			>
				<p>All systems operational.</p>
			</div>
		{:else}
			<div
				class="flex w-full flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-red-200 p-4 dark:bg-red-950"
			>
				<p>Some systems are currently offline.</p>
			</div>
		{/if}

		<div
			class="flex w-full flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-4 dark:bg-zinc-700"
		>
			<div class="flex items-center gap-3">
				<enhanced:img src="$lib/images/titanium-logo.svg" alt="Titanium Logo" class="h-16 w-16" />
				<div>
					<h2 class="font-bold">Titanium</h2>
					<p>The main Titanium instance.</p>
				</div>

				<div class="ml-auto flex flex-col items-end justify-center gap-1">
					<div class="flex items-center gap-2">
						{#if loading}
							<span class="relative flex size-3">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
								></span>
								<span class="relative inline-flex size-3 rounded-full bg-orange-500"></span>
							</span>
							<h3 class="font-light">Loading</h3>
						{:else if mainConnected}
							<span class="relative flex size-3">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
								></span>
								<span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
							</span>
							<h3 class="font-light">Online</h3>
						{:else}
							<span class="relative flex size-3">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"
								></span>
								<span class="relative inline-flex size-3 rounded-full bg-red-500"></span>
							</span>
							<h3 class="font-light">Offline</h3>
						{/if}
					</div>

					<div
						class="rounded-md border-2 border-zinc-600 bg-zinc-300 p-1 px-2 text-center text-sm dark:bg-zinc-800"
					>
						{#if mainConnected}
							<p>Ping: <code>{mainLatency}ms</code></p>
						{:else}
							<p>Ping: <code>---ms</code></p>
						{/if}
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

				<div class="ml-auto flex flex-col items-end justify-center gap-1">
					<div class="flex items-center gap-2">
						{#if loading}
							<span class="relative flex size-3">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
								></span>
								<span class="relative inline-flex size-3 rounded-full bg-orange-500"></span>
							</span>
							<h3 class="font-light">Loading</h3>
						{:else if privateConnected}
							<span class="relative flex size-3">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
								></span>
								<span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
							</span>
							<h3 class="font-light">Online</h3>
						{:else}
							<span class="relative flex size-3">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"
								></span>
								<span class="relative inline-flex size-3 rounded-full bg-red-500"></span>
							</span>
							<h3 class="font-light">Offline</h3>
						{/if}
					</div>

					<div
						class="rounded-md border-2 border-zinc-600 bg-zinc-300 p-1 px-2 text-center text-sm dark:bg-zinc-800"
					>
						{#if privateConnected}
							<p>Ping: <code>{privateLatency}ms</code></p>
						{:else}
							<p>Ping: <code>---ms</code></p>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<h2 class="w-full text-2xl font-bold">Previous Incidents</h2>
		<div
			class="flex w-full flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-4 dark:bg-zinc-700"
		>
			<p class="text-center font-light">No previous incidents.</p>
		</div>
	</div>
</div>
