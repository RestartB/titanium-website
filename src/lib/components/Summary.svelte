<script lang="ts">
	import { fly } from 'svelte/transition';
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

<button type="button" {onclick} class="flex cursor-pointer flex-col gap-2 text-left">
	<div class="flex items-center gap-2">
		<ChevronRight size={32} class="transition-transform {showContent ? 'rotate-90' : ''}" />
		<h2 class="text-2xl font-bold">{@html title}</h2>
	</div>

	{#if showContent}
		<div class="pl-10" in:fly={{ y: -10, duration: 200 }} out:fly={{ y: -10, duration: 150 }}>
			{@render children?.()}
		</div>
	{/if}

	<noscript>
		<div in:fly={{ y: -10, duration: 200 }} out:fly={{ y: -10, duration: 150 }}>
			{@render children?.()}
		</div>
	</noscript>

	<hr class="w-full text-zinc-600" />
</button>
