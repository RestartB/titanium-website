<script lang="ts">
	import { onNavigate } from '$app/navigation';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div
	class="app font-display bg-linear-to-bl from-zinc-100 to-zinc-400 text-lg text-black dark:from-zinc-700 dark:to-zinc-900 dark:text-white"
>
	<Header />

	<main
		class="flex min-h-screen flex-col items-center"
		style="view-transition-name: page-content"
		id="page-content"
	>
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	@keyframes fade-in {
		from {
			filter: blur(10px);
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			filter: blur(10px);
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	::view-transition-group(root) {
		background: linear-gradient(to bottom left, rgb(63 63 70), rgb(24 24 27));
		animation: none;
	}

	:root::view-transition-old(page-content) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(page-content) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}

	@media (prefers-reduced-motion) {
		::view-transition-group(*),
		::view-transition-old(*),
		::view-transition-new(*) {
			animation: none !important;
		}
	}
</style>
