<script lang="ts">
	import { page } from '$app/state';
	import { fade, fly } from 'svelte/transition';
	import { onNavigate } from '$app/navigation';
	import logo from '$lib/images/titanium-logo.svg';

	let width = $state(0);
	let menuActive = $state(false);

	let menuBackground: HTMLDivElement;

	function toggleMenu() {
		menuActive = !menuActive;
	}

	$effect(() => {
		if (width > 385 && menuActive) {
			menuActive = false;
		}
	});

	onNavigate((navigation) => {
		if (menuActive) {
			menuActive = false;
		}
	});
</script>

<svelte:window bind:innerWidth={width} />

{#if menuActive}
	<div
		style="view-transition-name: header-container;"
		class="fixed top-0 left-0 z-20 w-full h-screen bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-lg"
		transition:fade={{ duration: 100 }}
		bind:this={menuBackground}
		onclick={toggleMenu}
	>
	</div>
{/if}

<div class="fixed right-0 left-0 z-50 m-2.5 flex items-center justify-center">
	<header
		style="view-transition-name: header;"
		class="border-titanium-border z-50 box-border flex h-12 w-fit items-center justify-center gap-2.5 rounded-md border-1 bg-zinc-200/70 pr-2.5 pl-2.5 backdrop-blur-lg dark:bg-zinc-800/70"
	>
		<img src={logo} alt="Titanium Logo" height="30" width="30" />
		<h1 class="font-bold">Titanium</h1>

		{#if width > 385}
			<nav class="h-full">
				<ul class="flex h-full">
					<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
						<a
							href="/"
							class="hover:bg-titanium-sidebar-active flex h-full w-fit cursor-pointer items-center justify-center px-2.5 transition-colors"
							><p>Home</p></a
						>
					</li>
					<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
						<a
							href="/about"
							class="hover:bg-titanium-sidebar-active flex h-full w-fit cursor-pointer items-center justify-center px-2.5 transition-colors"
							><p>About</p></a
						>
					</li>
					<li aria-current={page.url.pathname === '/status' ? 'page' : undefined}>
						<a
							href="/status"
							class="hover:bg-titanium-sidebar-active flex h-full w-fit cursor-pointer items-center justify-center px-2.5 transition-colors"
							><p>Status</p></a
						>
					</li>
				</ul>
			</nav>
		{:else}
			<button
				class="hover:bg-titanium-sidebar-active flex h-full w-fit cursor-pointer items-center justify-center px-2.5 transition-colors"
				onclick={toggleMenu}
			>
				<p>Menu</p>
			</button>

			{#if menuActive}
				<nav
					class="absolute top-14.5 left-0 z-40 flex w-full flex-col items-center gap-2 bg-zinc-200 p-2.5 dark:bg-zinc-800 rounded-xl border-1 border-titanium-border"
					transition:fly={{ y: -10, duration: 300 }}
				>
					<ul class="flex flex-col items-center">
						<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
							<a href="/" class="w-full text-center">Home</a>
						</li>
						<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
							<a href="/about" class="w-full text-center">About</a>
						</li>
						<li aria-current={page.url.pathname === '/status' ? 'page' : undefined}>
							<a href="/status" class="w-full text-center">Status</a>
						</li>
					</ul>
				</nav>
			{/if}
		{/if}
	</header>
</div>