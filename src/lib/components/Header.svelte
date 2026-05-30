<script lang="ts">
  /* eslint-disable svelte/no-navigation-without-resolve */
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import { afterNavigate } from '$app/navigation';
  import { fade, fly } from 'svelte/transition';
  import { prefersReducedMotion } from 'svelte/motion';

  import { X, Menu, House, Info, Wifi, Wrench, Plus } from '@lucide/svelte';
  import logo from '$lib/assets/logo.svg';

  import type { Component } from 'svelte';
  import type { Pathname } from '$app/types';

  let menuOpen = $state(false);
  let width = $state(0);

  afterNavigate(() => {
    menuOpen = false;
  });

  $effect(() => {
    if (menuOpen && width > 480) {
      menuOpen = false;
    }
  });
</script>

<svelte:window bind:innerWidth={width} />

{#snippet topRowLink(title: string, href: Pathname)}
  <a
    href={resolve(href)}
    class="hidden h-full items-center border-y-transparent border-b-zinc-400 dark:border-b-zinc-500 px-2 transition-all hover:border-y-4 xs:flex"
  >
    {title}
  </a>
{/snippet}

{#snippet menuLink(title: string, href: string, active: boolean, Icon: Component)}
  <a
    class="flex w-full items-center gap-2 p-2 px-8 {active
      ? 'bg-zinc-200 dark:bg-zinc-700 font-bold'
      : ''} transition-all active:scale-98"
    {href}
  >
    <Icon size={20} />
    <p>{title}</p>
  </a>
{/snippet}

<header
  class="fixed z-100 h-12 w-full border-b-2 border-b-zinc-300 dark:border-b-zinc-700 bg-zinc-200 dark:bg-zinc-800 text-base"
  style="view-transition-name: header"
>
  <div class="mx-auto flex h-full max-w-7xl items-center">
    <div class="mr-auto ml-4 flex h-full shrink-0 items-center">
      <div class="mr-2 flex items-center gap-2">
        <img src={logo} alt="Titanium" class="h-8 w-8 rounded-md" translate="no" />
        <h1 class="text-lg font-bold" translate="no">Titanium</h1>
      </div>

      <nav class="shrink-0 items-center flex h-full">
        {@render topRowLink('Home', '/')}
        {@render topRowLink('About', '/about')}
        {@render topRowLink('Status', '/status')}
      </nav>
    </div>

    <a
      class="bg-zinc-300 hover:bg-zinc-200 border-zinc-400 transition-colors border p-1 px-2 rounded-lg hidden xs:flex gap-1 items-center justify-center"
      href={resolve('/invite')}
    >
      Add Bot
    </a>
    <a
      class="ml-2 bg-zinc-300 hover:bg-zinc-200 border-zinc-400 transition-colors border p-1 px-2 rounded-lg mr-4 hidden xs:flex gap-1 items-center justify-center"
      href="https://dash.titanium.fyi"
    >
      Dashboard
    </a>

    <button
      class="cursor-pointer p-4 xs:hidden"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="{menuOpen ? 'Close' : 'Open'} menu"
    >
      {#if menuOpen}
        <span in:fade={{ duration: 100 }}>
          <X class="h-6 w-6 shrink-0" />
        </span>
      {:else}
        <span in:fade={{ duration: 100 }}>
          <Menu class="h-6 w-6 shrink-0" />
        </span>
      {/if}
    </button>
  </div>
</header>

{#if menuOpen}
  <nav
    class="absolute inset-0 mt-12 from-zinc-300 dark:from-zinc-800 pt-2 from-75% h-fit w-full z-90 pb-20 bg-linear-to-b"
    transition:fly={{ y: prefersReducedMotion.current ? 0 : -10, duration: 200 }}
  >
    {@render menuLink('Home', resolve('/'), page.url.pathname.endsWith('/'), House)}
    {@render menuLink('About', resolve('/about'), page.url.pathname.endsWith('/about'), Info)}
    {@render menuLink('Status', resolve('/status'), page.url.pathname.endsWith('/status'), Wifi)}
    {@render menuLink('Dashboard', 'https://dash.titanium.fyi', false, Wrench)}
    {@render menuLink('Add Bot', resolve('/invite'), false, Plus)}
  </nav>
{/if}
