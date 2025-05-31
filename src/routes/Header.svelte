<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';

	import logo from '$lib/images/titanium-logo.svg';

	import MaterialSymbolsMenuRounded from 'virtual:icons/material-symbols/menu-rounded';
	import MaterialSymbolsCloseRounded from 'virtual:icons/material-symbols/close-rounded';
	import MaterialSymbolsHomeRounded from 'virtual:icons/material-symbols/home-rounded';
	import MaterialSymbolsInfoOutlineRounded from 'virtual:icons/material-symbols/info-outline-rounded';
	import MaterialSymbolsCheckCircleOutlineRounded from 'virtual:icons/material-symbols/check-circle-outline-rounded';

	let width = $state(1024);

	let mounted = $state(false);
	let compact = $state(false);
	let menuActive = $state(false);

	let headerElement: HTMLElement | null = null;

	function toggleMenu() {
		console.log('Toggling menu');
		menuActive = !menuActive;
	}

	$effect(() => {
		if (width < 380) {
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

	$effect(() => {
		if (headerElement) {
			if (compact) {
				headerElement.classList.replace('w-fit', 'w-full');
				headerElement.classList.replace('justify-center', 'justify-between');
			} else {
				headerElement.classList.replace('w-full', 'w-fit');
				headerElement.classList.replace('justify-between', 'justify-center');
			}
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
		transition:fade={{ duration: 100 }}
		onclick={toggleMenu}
	></div>
{/if}

<div class="fixed right-0 left-0 z-50 m-2.5 flex items-center justify-center">
	<header
		style="view-transition-name: header;"
		class="border-titanium-border z-50 box-border flex h-12 w-fit items-center justify-center gap-2.5 rounded-lg border-1 bg-zinc-200/70 pr-2.5 pl-2.5 backdrop-blur-lg dark:bg-zinc-800/70"
		bind:this={headerElement}
	>
		<div class="flex h-full items-center justify-center gap-2.5">
			<img src={logo} alt="Titanium Logo" height="30" width="30" />
			<h1 class="font-bold">Titanium</h1>
		</div>

		{#if !compact || !mounted}
			<nav class="h-full" in:fade={{ duration: 100 }}>
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
				in:fade={{ duration: 100 }}
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
					transition:fly={{ y: -10, duration: 300 }}
					onclick={toggleMenu}
				>
					<ul class="flex flex-col gap-2.5">
						<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
							<a
								href="/"
								class="border-titanium-border ml-auto flex w-fit items-center gap-1 rounded-lg border-1 bg-zinc-200 p-2.5 text-center dark:bg-zinc-800"
							>
								<MaterialSymbolsHomeRounded />
								<p>Home</p>
							</a>
						</li>
						<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
							<a
								href="/about"
								class="border-titanium-border ml-auto flex w-fit items-center gap-1 rounded-lg border-1 bg-zinc-200 p-2.5 text-center dark:bg-zinc-800"
							>
								<MaterialSymbolsInfoOutlineRounded />
								<p>About</p></a
							>
						</li>
						<li aria-current={page.url.pathname === '/status' ? 'page' : undefined}>
							<a
								href="/status"
								class="border-titanium-border ml-auto flex w-fit items-center gap-1 rounded-lg border-1 bg-zinc-200 p-2.5 text-center dark:bg-zinc-800"
								><MaterialSymbolsCheckCircleOutlineRounded />
								<p>Status</p></a
							>
						</li>
					</ul>
				</nav>
			{/if}
		{/if}
	</header>
</div>
