<script lang="ts">
	import { fly } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';
	import Summary from '$lib/components/Summary.svelte';
</script>

<svelte:head>
	<title>Titanium - About</title>
	<meta content="Titanium" property="og:title" />
	<meta content="Your multipurpose, open source Discord bot." property="og:description" />
</svelte:head>

<div
	in:fly={{ y: prefersReducedMotion.current ? 0 : 20, duration: 500 }}
	class="flex w-full max-w-4xl flex-col items-center gap-5 p-5 pt-19.5"
>
	<h1
		class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-center text-6xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
	>
		About
	</h1>

	<div class="mb-10 flex max-w-[600px] flex-col gap-3 border-l-4 pl-3">
		<p class="max-w-2xl">
			Hi there! I'm Restart, the creator of Titanium. This page goes over some more information
			about Titanium. Have another question? Make sure to join our support Discord server! 😊
		</p>
		<div class="flex items-center gap-2">
			<enhanced:img src="$lib/images/restart.png" alt="Restart" class="w-8 rounded-full" />
			<p><span class="font-bold">Restart</span></p>
		</div>
	</div>

	<div class="flex w-full flex-col gap-3">
		<Summary
			title="What is Titanium?"
			content="Titanium is a multipurpose, open source Discord bot designed to enhance your Discord experience. It can be added to your server to provide features like a starboard and message stats, or it can be added to your account so you can use Titanium's features anywhere on Discord!"
		/>

		<Summary
			title="Who develops Titanium?"
			content="I <i>(@restartb)</i> am the sole developer of Titanium. Titanium is also open source, meaning anyone can contribute to it!"
		/>

		<Summary
			title="How long has Titanium been in development?"
			content="Titanium has been in ongoing development since February 2024. The version of Titanium that you can use today has been in development since then!"
		/>

		<Summary
			title="Why was Titanium created?"
			content="Back in February 2024, I wanted to create a Discord bot with various utilities for the server I use to talk to my IRL friends. Around March 2024, people started to show interest in wanting to use it publicly, so I decided to open source it and make it available for everyone to use!"
		/>

		<Summary
			title="What is Titanium written in?"
			content="The bot itself is written in <strong>Python</strong> with the <strong>discord.py</strong> library. This website is written using <strong>SvelteKit</strong> and <strong>TypeScript!</strong>"
		/>

		<Summary
			title="How can I submit bug reports or feature requests?"
			content="The best way to submit bug reports or feature requests is to create a post in the <a class='underline' href='/server'>Discord server</a>. You can also create an issue in the <a class='underline' href='https://github.com/RestartB/Titanium/issues'>GitHub repository</a>."
		/>

		<Summary
			title="How can I contribute to Titanium?"
			content="To contribute to Titanium, you can check out the <a class='underline' href='https://github.com/RestartB/Titanium'>GitHub repository</a>. There, you can find the instructions on how to contribute. Contributions are always welcome!"
		/>

		<Summary
			title="How can I support Titanium?"
			content="The best way to support Titanium is to use it and share with other people you know! This helps Titanium grow and reach more people. :)"
		/>
	</div>
</div>
