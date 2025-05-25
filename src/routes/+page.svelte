<script lang="ts">
	// Components
	import SongEmbed from '../components/SongEmbed.svelte';

	// Images
	import logo from '$lib/images/titanium-logo.svg';

	import restart from '$lib/images/restart.png';
	import jiga from '$lib/images/servers/jiga.gif';
	import irl from '$lib/images/servers/irl.png';

	import deepfried from '$lib/images/deepfried.png';
	import quote from '$lib/images/quote.png';

	import xcx from '$lib/images/embeds/xcx.jpeg?enhanced';
	import brat from '$lib/images/embeds/brat.png?enhanced';

	import { onMount } from 'svelte';
	
	// Meowium easter egg
	onMount(() => {
		if (window.location.search.includes('?meow')) {
			console.log("meow meow meow meow meow meow meow meow meow");
			document.title = document.title.replaceAll("Titanium", 'Meowium');
			document.body.innerHTML = document.body.innerHTML.replaceAll("Titanium", 'Meowium');

			const tagline = document.getElementById('tagline');
			if (tagline) {
				tagline.textContent = 'pspspspspsppspsp meow meow';
			}
		}
	});
</script>

<svelte:head>
	<title>Titanium</title>
	<meta content="Titanium" property="og:title" />
	<meta content="Your multipurpose, open source Discord bot." property="og:description" />
</svelte:head>

<section class="flex h-screen w-full flex-col items-center p-4 pt-0 overflow-hidden border-b-4 border-titanium-border">
	<!-- prettier-ignore -->
	<div
		class="absolute -z-10 left-0 right-0 w-full h-screen bg-[url('/images/background.svg')] bg-cover bg-no-repeat bg-center brightness-30 after:content-[''] after:absolute after:w-full after:h-full after:backdrop-blur-[100px] after:pointer-none"
    ></div>

	<div class="mt-auto mb-auto flex flex-col gap-4 p-4">
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<img
				src={logo}
				height="120"
				width="120"
				alt="Titanium Logo"
				class="rounded-full border-6 border-zinc-300"
			/>
			<h1
				class="bg-linear-to-bl from-zinc-100 to-zinc-400 bg-clip-text text-7xl font-bold text-transparent"
			>
				Titanium
			</h1>
		</div>
		<p class="text-center text-3xl font-semibold text-white" id="tagline">
			More features than protons.
		</p>
	</div>

	<a href="/invite" class="border-titanium-border rounded-full border-2 bg-zinc-300 px-6 pt-2 pb-2 text-xl transition-colors hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700">Add Titanium</a>
</section>

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
	<div class="flex h-fit flex-col gap-3 sm:min-w-[310px]">
		<div class="flex gap-2">
			<img
				src={restart}
				alt="Restart & Titanium"
				class="h-15 w-15 rounded-xl"
				width="60"
				height="60"
			/>

			<div class="flex flex-col justify-center">
				<h3 class="font-semibold">Restart & Titanium</h3>
				<p><code>/spotify search song</code></p>
			</div>
		</div>

		<div class="flex gap-2 sm:ml-4">
			<img src={jiga} alt="Jiga Server" class="h-15 w-15 rounded-xl" width="60" height="60" />

			<div class="flex flex-col justify-center">
				<h3 class="font-semibold">Jiga Tech's Discord</h3>
				<p><code>/quote</code></p>
			</div>
		</div>

		<div class="flex gap-2 sm:ml-8">
			<img src={irl} alt="Jiga Server" class="h-15 w-15 rounded-xl" width="60" height="60" />

			<div class="flex flex-col justify-center">
				<h3 class="font-semibold">irl friends</h3>
				<p><code>/image speechbubble</code></p>
			</div>
		</div>
	</div>

	<div class="flex max-w-[750px] flex-col justify-center gap-2">
		<h2
			class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-5xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
		>
			Usable everywhere
		</h2>
		<p>
			Titanium is designed to be used as a server bot or a user app. This means you can use Titanium
			in any server, without it being invited!
		</p>
	</div>
</section>

<hr class="w-full text-zinc-600" />

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
	<div
		class="flex h-fit flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-4 sm:min-w-[310px] dark:bg-zinc-700"
	>
		<div class="flex gap-2">
			<img src={logo} alt="Titanium" class="h-15 w-15 rounded-xl" width="60" height="60" />

			<div class="flex flex-col justify-center">
				<h3 class="font-semibold">Titanium</h3>
				<p>Image deepfried!</p>
			</div>
		</div>
		<img src={deepfried} alt="Deepfried" width="250" class="rounded-xl" />
	</div>

	<div class="flex max-w-[750px] flex-col justify-center gap-2">
		<h2
			class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-5xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
		>
			Manipulate Images
		</h2>
		<p>
			From resizing images, to changing image formats, to allowing images to be bookmarked in
			Discord, Titanium has you covered.
		</p>
		<ul class="list-inside list-disc">
			<li>resize images</li>
			<li>convert between a variety of formats</li>
			<li>allow images to be bookmarked</li>
			<li>convert videos to GIFs</li>
			<li>add speech bubble and deepfry overlays</li>
		</ul>
	</div>
</section>

<hr class="w-full text-zinc-600" />

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
	<div
		class="flex h-fit flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-4 sm:min-w-[310px] dark:bg-zinc-700"
	>
		<div class="flex gap-2">
			<img src={logo} alt="Titanium" class="h-15 w-15 rounded-xl" width="60" height="60" />

			<div class="flex flex-col justify-center">
				<h3 class="font-semibold">Titanium</h3>
				<p>Server leaderboard</p>
			</div>
		</div>

		<ol class="list-inside list-decimal">
			<li>@restartb - 1000 messages</li>
			<li>@restarta - 800 messages</li>
			<li>@titaniumfan111 - 540 messages</li>
			<li>@adiscorduser - 250 messages</li>
		</ol>
	</div>

	<div class="flex max-w-[750px] flex-col justify-center gap-2">
		<h2
			class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-5xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
		>
			Server stats and starboard
		</h2>
		<p>Titanium offers message stats and a starboard to keep server members engaged.</p>
		<ul class="list-inside list-disc">
			<li>track message amounts, words and attachments</li>
			<li>get leaderboards for each category</li>
			<li>customise reaction requirements</li>
			<li>set a custom reaction</li>
			<li>add blacklisted roles and channels</li>
		</ul>
	</div>
</section>

<hr class="w-full text-zinc-600" />

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
	<div class="flex h-fit flex-col gap-3 sm:min-w-[310px]">
		<img src={quote} alt="Quote" width="400" class="rounded-xl border-2 border-zinc-600" />
	</div>

	<div class="flex max-w-[750px] flex-col justify-center gap-2">
		<h2
			class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-5xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
		>
			Quotes
		</h2>
		<p>Use Titanium to generate quote images, so you can share and remember messages.</p>
		<ul class="list-inside list-disc">
			<li>light and dark modes</li>
			<li>colour or black and white options</li>
			<li>enable or disable nickname and PFP fade effect</li>
			<li>support for custom emojis</li>
			<li>directly quote messages or create a custom quote</li>
		</ul>
	</div>
</section>

<hr class="w-full text-zinc-600" />

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
	<div class="flex flex-col gap-3">
		<SongEmbed
			artist="Charli xcx"
			artistArtURL={xcx}
			album="BRAT"
			albumArtURL={brat}
			song="Apple"
			releaseYear={2024}
			--colour="#8ace00"
		/>

		<SongEmbed
			artist="Charli xcx"
			artistArtURL={xcx}
			album="BRAT"
			albumArtURL={brat}
			song="Apple"
			releaseYear={2024}
			--colour="#8ace00"
		/>
	</div>

	<div class="flex max-w-[750px] flex-col justify-center gap-2">
		<h2
			class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-5xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
		>
			Spotify Search and Lyrics
		</h2>
		<p>
			Search Spotify to find songs, artists and albums with informative embeds - all from within
			Discord, powered by Titanium. You can also display Spotify playlists and info from any
			streaming service when you enter a link, and get song lyrics.
		</p>
		<ul class="list-inside list-disc">
			<li>search Spotify</li>
			<li>get info on songs, artists, albums and playlists</li>
			<li>
				paste in links from any streaming service - powerered by <a
					href="https://odesli.co/"
					target="_blank">odesli.co</a
				>
			</li>
			<li>get full quality album art</li>
			<li>get song lyrics</li>
		</ul>
	</div>
</section>

<style>
	h2 {
		line-height: normal;
	}
</style>
