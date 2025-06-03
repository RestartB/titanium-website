<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';

	import logo from '$lib/images/titanium-logo.svg';

	import MaterialSymbolsMenuRounded from 'virtual:icons/material-symbols/menu-rounded';
	import MaterialSymbolsCloseRounded from 'virtual:icons/material-symbols/close-rounded';
	import MaterialSymbolsHomeRounded from 'virtual:icons/material-symbols/home-rounded';
	import MaterialSymbolsInfoOutlineRounded from 'virtual:icons/material-symbols/info-outline-rounded';
	import MaterialSymbolsCheckCircleOutlineRounded from 'virtual:icons/material-symbols/check-circle-outline-rounded';
	import MaterialSymbolsAdd2Rounded from 'virtual:icons/material-symbols/add-2-rounded';

	let width = $state(1024);

	let mounted = $state(false);
	let compact = $state(false);
	let menuActive = $state(false);

	let headerElement: HTMLElement | null = null;

	function toggleMenu() {
		menuActive = !menuActive;
	}

	$effect(() => {
		if (width < 525) {
			compact = true;
		} else {
			compact = false;
		}
	});

	$effect(() => {
		if (!compact && menuActive) {
			menuActive = false;
		}
	});

	onNavigate((navigation) => {
		if (menuActive) {
			menuActive = false;
		}
	});

	onMount(() => {
		mounted = true;
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape' && menuActive) {
				menuActive = false;
			}
		});
	});
</script>

<svelte:window bind:innerWidth={width} />

{#if menuActive}
	<div
		style="view-transition-name: header-container;"
		class="fixed top-0 left-0 z-20 h-screen w-full bg-zinc-100/70 backdrop-blur-lg dark:bg-zinc-900/70"
		aria-hidden="true"
		transition:fade={{ duration: prefersReducedMotion.current ? 0 : 100 }}
		onclick={toggleMenu}
	></div>
{/if}

<div class="fixed right-0 left-0 z-50 m-2.5 flex items-center justify-center">
	<header
		style="view-transition-name: header;"
		class="border-titanium-border z-50 box-border flex h-12 w-full max-w-5xl items-center justify-between gap-2.5 rounded-lg border-1 bg-zinc-200/70 pr-2.5 pl-2.5 backdrop-blur-lg dark:bg-zinc-800/70"
		bind:this={headerElement}
	>
		<div class="flex h-full w-[120px] items-center justify-center gap-2.5">
			<img src={logo} alt="Titanium Logo" height="30" width="30" />
			<h1 class="font-bold" translate="no">Titanium</h1>
		</div>

		{#if !compact || !mounted}
			<nav class="fullnav h-full" in:fade={{ duration: prefersReducedMotion.current ? 0 : 100 }}>
				<ul class="flex h-full">
					<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
						<a
							href="/"
							class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-700"
						>
							<p>Home</p>
						</a>
					</li>
					<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
						<a
							href="/about"
							class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-700"
							><p>About</p></a
						>
					</li>
					<li aria-current={page.url.pathname === '/status' ? 'page' : undefined}>
						<a
							href="/status"
							class="flex h-full w-full cursor-pointer items-center justify-center px-2.5 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-700"
							><p>Status</p></a
						>
					</li>
				</ul>
			</nav>

			<div class="flex h-full min-w-[120px] items-center justify-end gap-2.5">
				<a
					href="/invite"
					class="border-titanium-border flex h-fit w-fit items-center gap-1 rounded-lg border-1 bg-zinc-200 px-2.5 text-center hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
					><MaterialSymbolsAdd2Rounded />
					<p>Add Bot</p></a
				>
			</div>
		{:else}
			<button
				class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-700"
				onclick={toggleMenu}
				in:fade={{ duration: prefersReducedMotion.current ? 0 : 100 }}
			>
				{#if menuActive}
					<div in:fade={{ duration: 100 }}>
						<MaterialSymbolsCloseRounded />
					</div>
				{:else}
					<div in:fade={{ duration: 100 }}>
						<MaterialSymbolsMenuRounded />
					</div>
				{/if}
			</button>

			{#if menuActive}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<nav
					class=" absolute top-14.5 left-0 z-40 flex w-full flex-col items-end gap-2"
					style="view-transition-name: menu;"
					transition:fly={{ y: prefersReducedMotion.current ? 0 : -10, duration: 300 }}
					onclick={toggleMenu}
				>
					<ul class="flex flex-col gap-2.5">
						<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
							<a
								href="/"
								class="border-titanium-border ml-auto flex w-fit items-center gap-1 rounded-lg border-1 bg-zinc-200 p-2.5 text-center hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
							>
								<MaterialSymbolsHomeRounded />
								<p>Home</p>
							</a>
						</li>
						<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
							<a
								href="/about"
								class="border-titanium-border ml-auto flex w-fit items-center gap-1 rounded-lg border-1 bg-zinc-200 p-2.5 text-center hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
							>
								<MaterialSymbolsInfoOutlineRounded />
								<p>About</p></a
							>
						</li>
						<li aria-current={page.url.pathname === '/status' ? 'page' : undefined}>
							<a
								href="/status"
								class="border-titanium-border ml-auto flex w-fit items-center gap-1 rounded-lg border-1 bg-zinc-200 p-2.5 text-center hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
								><MaterialSymbolsCheckCircleOutlineRounded />
								<p>Status</p></a
							>
						</li>
						<li>
							<a
								href="/invite"
								class="border-titanium-border ml-auto flex w-fit items-center gap-1 rounded-lg border-1 bg-zinc-200 p-2.5 text-center hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"
								><MaterialSymbolsAdd2Rounded />
								<p>Add Bot</p></a
							>
						</li>
					</ul>
				</nav>
			{/if}
		{/if}
	</header>
</div>

<style>
	.fullnav {
		li {
			position: relative;
		}

		li[aria-current='page']::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 2px;
			background: black;
			view-transition-name: active-bar;
		}
	}

	@media (prefers-color-scheme: dark) {
		.fullnav {
			li[aria-current='page']::before {
				background: white;
			}
		}
	}
</style>
