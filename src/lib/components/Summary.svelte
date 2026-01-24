<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ChevronRight } from '@lucide/svelte';

	type Props = {
		title: string;
		children?: any;
	};

	let { title, children }: Props = $props();
	let showContent = $state(false);

	function onclick() {
		showContent = !showContent;
	}
</script>

<button type="button" {onclick} class="cursor-pointer text-left">
	<div class="flex items-center gap-2">
		<ChevronRight
			size={32}
			class="transition-transform duration-400 {showContent ? 'rotate-90' : ''}"
		/>
		<h2 class="text-2xl font-bold">{@html title}</h2>
	</div>

	{#if showContent}
		<div class="mt-2 pl-10" transition:slide>
			{@render children?.()}
		</div>
	{/if}

	<noscript>
		<div class="mt-2">
			{@render children?.()}
		</div>
	</noscript>

	<hr class="mt-2 w-full text-zinc-600" />
</button>
