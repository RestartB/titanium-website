<script lang="ts">
	import { fly } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';
	import { onMount, onDestroy } from 'svelte';

	let { data } = $props();

	import CharmTick from 'virtual:icons/charm/tick';
	import CharmCross from 'virtual:icons/charm/cross';

	let loading = $state();
	let failed = $state(false);

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
			failed = false;

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
			failed = true;
		}
	}

	let secondsInterval: ReturnType<typeof setInterval>;
	let fetchTimeout: ReturnType<typeof setTimeout>;

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
	<meta content="Titanium - Status" property="og:title" />
	<meta content="Your multipurpose, open source Discord bot." property="og:description" />
</svelte:head>

<div
	in:fly={{ y: prefersReducedMotion.current ? 0 : 20, duration: 500 }}
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
				Last successful update {secondsAgo}s ago
			</p>
		</div>

		{#if loading}
			<div
				class="flex w-full items-center gap-3 rounded-xl border-2 border-zinc-600 bg-orange-200 p-4 dark:bg-orange-950"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="21.59px"
					height="21.59px"
					viewBox="0 0 24 24"
					class="shrink-0 animate-spin"
					><path
						fill="currentColor"
						d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
					></path></svg
				>
				<p>Loading status...</p>
			</div>
		{:else if failed}
			<div
				class="flex w-full items-center gap-3 rounded-xl border-2 border-zinc-600 bg-red-200 p-4 dark:bg-red-950"
			>
				<CharmCross class="shrink-0" />
				<p>
					Couldn't connect to the server. Please check your internet connection and try again later.
				</p>
			</div>
		{:else if mainConnected && privateConnected}
			<div
				class="flex w-full items-center gap-3 rounded-xl border-2 border-zinc-600 bg-green-200 p-4 dark:bg-green-950"
			>
				<CharmTick class="shrink-0" />
				<p>All systems operational.</p>
			</div>
		{:else}
			<div
				class="flex w-full items-center gap-3 rounded-xl border-2 border-zinc-600 bg-red-200 p-4 dark:bg-red-950"
			>
				<CharmCross class="shrink-0" />
				<p>Some systems are currently offline.</p>
			</div>
		{/if}

		<div
			class="flex w-full flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-4 dark:bg-zinc-700"
		>
			<div class="xs:flex-row flex flex-col items-center gap-3">
				<div class="flex items-center gap-3">
					{#if data.mainPFP !== ''}
						<img
							src={data.mainPFP}
							alt="Titanium Logo"
							height="64"
							width="64"
							class="h-16 w-16 rounded-xl"
						/>
					{:else}
						<enhanced:img
							src="$lib/images/titanium-logo.svg"
							alt="Titanium Logo"
							class="h-16 w-16 rounded-xl"
						/>
					{/if}
					<div>
						<h2 class="font-bold">Titanium</h2>
						<p>The main Titanium instance.</p>
					</div>
				</div>

				<div
					class="xs:flex-col xs:ml-auto xs:items-end xs:gap-1 flex shrink-0 flex-row flex-nowrap items-center justify-center gap-3"
				>
					<div class="flex items-center gap-2">
						{#if loading}
							<span class="relative flex size-3">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
								></span>
								<span class="relative inline-flex size-3 rounded-full bg-orange-500"></span>
							</span>
							<h3 class="font-light">Loading</h3>
						{:else if failed}
							<h3 class="font-light">Error</h3>
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

			<div class="xs:flex-row flex flex-col items-center gap-3">
				<div class="flex items-center gap-3">
					{#if data.privatePFP !== ''}
						<img
							src={data.privatePFP}
							alt="Titanium Private Logo"
							height="64"
							width="64"
							class="h-16 w-16 rounded-xl"
						/>
					{:else}
						<enhanced:img
							src="$lib/images/titanium-logo.svg"
							alt="Titanium Logo"
							class="h-16 w-16 rounded-xl"
						/>
					{/if}
					<div>
						<h2 class="font-bold">Titanium Private</h2>
						<p>Private version of Titanium.</p>
					</div>
				</div>

				<div
					class="xs:flex-col xs:ml-auto xs:items-end xs:gap-1 flex shrink-0 flex-row flex-nowrap items-center justify-center gap-3"
				>
					<div class="flex items-center gap-2">
						{#if loading}
							<span class="relative flex size-3">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
								></span>
								<span class="relative inline-flex size-3 rounded-full bg-orange-500"></span>
							</span>
							<h3 class="font-light">Loading</h3>
						{:else if failed}
							<h3 class="font-light">Error</h3>
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
			{#if !data.success}
				<p class="text-center font-light">Failed to load incidents.</p>
			{:else if data.incidents.length === 0}
				<p class="text-center font-light">No incidents reported.</p>
			{:else}
				{#each data.incidents as incident, i (incident.id)}
					<div class="flex flex-col gap-2">
						<div class="flex items-center gap-3">
							<h3 class="font-bold">{incident.title}</h3>

							<div class="flex items-center gap-2">
								{#if incident.resolved}
									<span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
									<p>Resolved</p>
								{:else}
									<span class="relative flex size-3">
										<span
											class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
										></span>
										<span class="relative inline-flex size-3 rounded-full bg-orange-500"></span>
									</span>
									<p>Ongoing</p>
								{/if}
							</div>
						</div>

						<p class="text-sm text-zinc-600 dark:text-zinc-400">
							{#if incident.resolved}
								{incident.createdAt.toLocaleTimeString()} - {incident.createdAt.toLocaleDateString()},
								resolved at {incident.resolvedAt.toLocaleTimeString()} - {incident.resolvedAt.toLocaleDateString()}
							{:else}
								{incident.createdAt.toLocaleTimeString()} - {incident.createdAt.toLocaleDateString()}
							{/if}
						</p>

						<p>{incident.description}</p>
					</div>

					{#if i < data.incidents.length - 1}
						<hr class="border-zinc-600" />
					{/if}
				{/each}
			{/if}
		</div>
	</div>
</div>
