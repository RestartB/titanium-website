<script lang="ts">
  import { getHistoricPing, getStatus } from '$lib/remote/status.remote';

  import { Plot, Line } from 'svelteplot';
  import { Check, TriangleAlert, LoaderCircle, X } from '@lucide/svelte';
  import { onDestroy, onMount } from 'svelte';
  import type { botStatus } from '$lib/interfaces/status';

  const statusQuery = getStatus();
  const pingsQuery = getHistoricPing();

  await Promise.allSettled([statusQuery, pingsQuery]);

  const status = $derived((statusQuery.current || { connected: false }) as botStatus);
  const pings = $derived(pingsQuery.current || []);

  const loading = $derived(statusQuery.loading);
  const error = $derived(statusQuery.error);
  const pingsLoading = $derived(pingsQuery.loading);
  const pingsError = $derived(pingsQuery.error);

  let sinceLastUpdate = $state(Date.now());
  let secondsAgo = $state(0);
  let secondsInterval: ReturnType<typeof setInterval>;
  let fetchTimeout: ReturnType<typeof setTimeout>;

  const updateSecondsAgo = () => {
    secondsAgo = Math.floor((Date.now() - sinceLastUpdate) / 1000);
  };

  function scheduleNextFetch() {
    statusQuery
      .refresh()
      .then(() => (sinceLastUpdate = Date.now()))
      .catch((e) => {
        console.error('Network error:', e);
      });

    pingsQuery.refresh().catch((e) => {
      console.error('Network error:', e);
    });

    fetchTimeout = setTimeout(scheduleNextFetch, 15000);
  }

  onMount(() => {
    scheduleNextFetch();
    secondsInterval = setInterval(updateSecondsAgo, 1000);
  });

  onDestroy(() => {
    clearTimeout(fetchTimeout);
    clearInterval(secondsInterval);
  });
</script>

<div class="mx-auto flex w-full max-w-7xl flex-col gap-4 p-8">
  <h1
    class="bg-linear-to-bl from-zinc-500 to-zinc-800 bg-clip-text text-6xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
  >
    Status
  </h1>
  <p>Get the current status of Titanium, including its ping and connection state.</p>

  <div class="flex items-center gap-2">
    <span class="flex items-center justify-center gap-2">
      <span class="relative">
        {#if error}
          <span class="absolute block h-4 w-4 animate-ping rounded-full bg-red-500"></span>
          <span class="block h-4 w-4 rounded-full bg-red-500"></span>
        {:else}
          <span class="absolute block h-4 w-4 animate-ping rounded-full bg-green-500"></span>
          <span class="block h-4 w-4 rounded-full bg-green-500"></span>
        {/if}
      </span>
      <p class="font-bold">Live</p>
    </span>
    <p>Last refresh <b>{secondsAgo}s ago</b></p>
  </div>

  <div
    class="flex w-full items-center gap-2 rounded-lg border-2 border-zinc-300 p-4 font-bold dark:border-zinc-700"
    class:bg-zinc-200={loading || (status.connected && !status.ready)}
    class:dark:bg-zinc-800={loading || (status.connected && !status.ready)}
    class:bg-green-200={!loading && status.connected && status.ready && status.latency < 300}
    class:dark:bg-green-950={!loading && status.connected && status.ready && status.latency < 300}
    class:bg-orange-200={!loading && status.connected && status.ready && status.latency >= 300}
    class:dark:bg-yellow-950={!loading && status.connected && status.ready && status.latency >= 300}
    class:bg-red-200={(!loading && error) || !status.connected}
    class:dark:bg-red-950={(!loading && error) || !status.connected}
  >
    {#if loading}
      <LoaderCircle class="shrink-0 animate-spin" />
      <p>Loading status...</p>
    {:else if error}
      <X class="shrink-0" />
      <p>Failed to get status.</p>
    {:else if status.connected && status.ready && status.latency < 300}
      <Check class="shrink-0" />
      <p>Everything looks good.</p>
    {:else if status.connected && status.ready && status.latency >= 300}
      <TriangleAlert class="shrink-0" />
      <p>High ping detected, Titanium may be slow.</p>
    {:else if status.connected && !status.ready}
      <LoaderCircle class="shrink-0 animate-spin" />
      <p>Titanium is getting ready.</p>
    {:else if !status.connected}
      <X class="shrink-0" />
      <p>Titanium is unavailable.</p>
    {/if}
  </div>

  <div
    class="flex w-full flex-col items-center gap-4 rounded-lg border-2 border-zinc-300 bg-zinc-200 p-4 xxs:flex-row dark:border-zinc-700 dark:bg-zinc-800"
  >
    <div class="flex items-center gap-4">
      <enhanced:img src="$lib/assets/logo.svg" alt="Titanium Logo" class="h-12 w-12 rounded-lg" />
      <div>
        <p class="text-xl font-bold">Titanium</p>
        <p>The main, public version of Titanium.</p>
      </div>
    </div>

    <div
      class="flex flex-wrap items-center justify-center gap-2 xxs:ml-auto xxs:flex-col xxs:items-end"
    >
      <div class="flex items-center justify-center gap-2">
        {#if loading || error}
          <div class="relative">
            <span class="absolute block h-4 w-4 animate-ping rounded-full bg-zinc-500"></span>
            <span class="block h-4 w-4 rounded-full bg-zinc-500"></span>
          </div>
          <p>Loading...</p>
        {:else if status.connected && status.ready}
          <div class="relative">
            <span class="absolute block h-4 w-4 animate-ping rounded-full bg-green-500"></span>
            <span class="block h-4 w-4 rounded-full bg-green-500"></span>
          </div>
          <p>Online</p>
        {:else if status.connected && !status.ready}
          <div class="relative">
            <span class="absolute block h-4 w-4 animate-ping rounded-full bg-orange-500"></span>
            <span class="block h-4 w-4 rounded-full bg-orange-500"></span>
          </div>
          <p>Starting</p>
        {:else}
          <div class="relative">
            <span class="absolute block h-4 w-4 animate-ping rounded-full bg-red-500"></span>
            <span class="block h-4 w-4 rounded-full bg-red-500"></span>
          </div>
          <p>Offline</p>
        {/if}
      </div>

      <div
        class="shrink-0 rounded-lg border-2 border-zinc-300 bg-zinc-100 p-1 px-2 text-base text-nowrap dark:border-zinc-700 dark:bg-zinc-900"
      >
        Ping: <code>{status.latency || '---'}ms</code>
      </div>
    </div>
  </div>

  <hr class="text-zinc-600" />

  <div class="mb-1">
    <div class="flex flex-wrap items-center gap-2">
      <h2 class="text-xl font-bold">Historic Ping</h2>
      {#if pingsLoading}
        <LoaderCircle class="animate-spin" />
      {:else if pingsError}
        <TriangleAlert />
      {/if}
    </div>
    <p>View Titanium's ping over the last 3 days.</p>
  </div>

  <noscript>
    <div
      class="flex w-full items-center gap-2 rounded-lg border-2 border-zinc-300 bg-red-200 p-4 font-bold dark:border-zinc-700 dark:bg-red-950"
    >
      <X class="shrink-0" />
      <p>JavaScript is disabled. Please enable JavaScript to render the chart.</p>
    </div>
  </noscript>

  {#if !pings || pings.length === 0}
    <p class="font-bold">No historic data available.</p>
  {:else if pingsError}
    <p class="font-bold">An error occurred while fetching data. Please try again.</p>
  {:else}
    <Plot grid y={{ domain: [100, 300] }}>
      <Line data={pings} x="time" y="ping" />
    </Plot>
  {/if}
</div>
