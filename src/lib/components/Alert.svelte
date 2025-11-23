<script lang="ts">
	type Props = {
		type: string;
		children?: any;
	};

	let { type, children }: Props = $props();

	// svelte-ignore non_reactive_update
	let colour: string | undefined = undefined;
	if (type.toLowerCase() === 'error') {
		colour = 'border-red-700 dark:border-red-300';
	} else if (type.toLowerCase() === 'warning') {
		colour = 'border-yellow-700 dark:border-yellow-300';
	} else if (type.toLowerCase() === 'info') {
		colour = 'border-blue-700 dark:border-blue-300';
	} else {
		colour = 'border-gray-700 dark:border-gray-300';
	}
</script>

<div class="h-fit w-full border-l-3 pl-2.5 {colour}">
	<h3 class="font-bold">{type}</h3>
	{@render children?.()}
</div>
