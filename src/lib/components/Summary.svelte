<script lang="ts">
	import { fly } from 'svelte/transition';
	import MaterialSymbolsArrowForwardIosRounded from 'virtual:icons/material-symbols/arrow-forward-ios-rounded';

	type Props = {
		title: string;
		content: string;
	};

	let { title, content }: Props = $props();
	let showContent = $state(false);

	function onclick() {
		showContent = !showContent;
	}
</script>

<button type="button" {onclick} class="flex flex-col gap-2 text-left cursor-pointer">
	<div class="flex gap-2 items-center">
		<MaterialSymbolsArrowForwardIosRounded class="min-h-8 min-w-8 transition-transform {showContent ? 'rotate-90' : ''}" />
		<h2 class="text-2xl font-bold">{title}</h2>
	</div>
	
	{#if showContent}
		<p class="pl-10" in:fly={{ y: -10, duration: 200 }} out:fly={{ y: -10, duration: 150 }}>
			{@html content}
		</p>
	{/if}

	<noscript>
		<p in:fly={{ y: -10, duration: 200 }} out:fly={{ y: -10, duration: 150 }}>
			{@html content}
		</p>
	</noscript>

	<hr class="w-full text-zinc-600" />
</button>