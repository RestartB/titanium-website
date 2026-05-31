<script lang="ts">
  import { getHistoricPing, getStatus } from '$lib/remote/status.remote';

  import { Plot, Line } from 'svelteplot';
  import { Check, TriangleAlert, LoaderCircle, X } from '@lucide/svelte';

  const status = await getStatus();
  const pings = await getHistoricPing();
</script>

<div class="mx-auto flex w-full max-w-7xl flex-col gap-4 p-8">
  <h1
    class="bg-linear-to-bl from-zinc-500 to-zinc-800 bg-clip-text text-6xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
  >
    Status
  </h1>
  <p>Get the current status of Titanium, including its ping and connection state.</p>

  <div
    class="flex w-full items-center gap-2 rounded-lg border-2 border-zinc-300 p-4 font-bold dark:border-zinc-700"
    class:bg-green-200={status.connected && status.ready && status.latency < 300}
    class:dark:bg-green-950={status.connected && status.ready && status.latency < 300}
    class:bg-orange-200={status.connected && status.ready && status.latency >= 300}
    class:dark:bg-yellow-950={status.connected && status.ready && status.latency >= 300}
    class:bg-zinc-200={status.connected && !status.ready}
    class:dark:bg-zinc-800={status.connected && !status.ready}
    class:bg-red-200={!status.connected}
    class:dark:bg-red-950={!status.connected}
  >
    {#if status.connected && status.ready && status.latency < 300}
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
    class="flex w-full items-center gap-4 rounded-lg border-2 border-zinc-300 bg-zinc-200 p-4 dark:border-zinc-700 dark:bg-zinc-800"
  >
    <enhanced:img src="$lib/assets/logo.svg" alt="Titanium Logo" class="h-12 w-12 rounded-lg" />
    <div>
      <p class="text-xl font-bold">Titanium</p>
      <p>The main, public version of Titanium.</p>
    </div>

    <div class="ml-auto flex flex-col items-end justify-center gap-2">
      <div class="flex items-center justify-center gap-2">
        {#if status.connected && status.ready}
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
        {/if}
      </div>

      <div
        class="rounded-lg border-2 border-zinc-300 bg-zinc-100 p-1 px-2 text-base dark:border-zinc-700 dark:bg-zinc-900"
      >
        Ping: <code>{status.latency || '---'}ms</code>
      </div>
    </div>
  </div>

  <hr class="text-zinc-600" />

  <div>
    <h2 class="mb-1 text-xl font-bold">Historic Ping</h2>
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
    <p>No historic data available.</p>
  {:else}
    <Plot grid y={{ domain: [80, 300] }}>
      <Line data={pings} x="time" y="ping" />
    </Plot>
  {/if}
</div>
