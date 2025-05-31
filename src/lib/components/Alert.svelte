<script lang="ts">
	type Props = {
    	type: string
    	content: string
  	}
	
	let { type, content }: Props = $props();

	// svelte-ignore non_reactive_update
		let colour: string | undefined = undefined;
	if (type.toLowerCase() === "error") {
		colour = "border-red-300";
	} else if (type.toLowerCase() === "warning") {
		colour = "border-yellow-300";
	} else if (type.toLowerCase() === "info") {
		colour = "border-blue-300";
	} else {
		colour = "border-gray-300";
	}
</script>

<div class="w-full h-fit pl-2.5 border-l-3 {colour}">
	<h3 class="font-bold">{type}</h3>
	<p>{@html content}</p>
</div>