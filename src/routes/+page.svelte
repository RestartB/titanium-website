<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	// Components
	import SongEmbed from '../components/SongEmbed.svelte';

	// Images
	import logo from '$lib/images/titanium-logo.svg';

	import deepfried from '$lib/images/deepfried.png';
	import quote from '$lib/images/quote.png';

	import xcx from '$lib/images/embeds/xcx.jpeg?enhanced';
	import brat from '$lib/images/embeds/brat.png?enhanced';

	import seanpaul from '$lib/images/embeds/seanpaul.jpeg?enhanced';
	import trinity from '$lib/images/embeds/trinity.jpeg?enhanced';

	// Icons
	import IcRoundAdd from 'virtual:icons/ic/round-add';
	import ArcticonsUrbanDictionary from 'virtual:icons/arcticons/urban-dictionary';

	onMount(() => {
		// Meowium easter egg
		if (window.location.search.includes('?meow')) {
			console.log('meow meow meow meow meow meow meow meow meow');
			document.title = document.title.replaceAll('Titanium', 'Meowium');
			document.body.innerHTML = document.body.innerHTML.replaceAll('Titanium', 'Meowium');

			const tagline = document.getElementById('tagline');
			if (tagline) {
				tagline.textContent = 'pspspspspsppspsp meow meow';
			}
		}

		async function fetchStats() {
			try {
				type Response = {
					server_count: number;
					server_member_count: number;
					user_count: number;
				};

				const response = await fetch('/api/stats');
				if (response.ok) {
					const data: Response = await response.json();

					const statString = document.getElementById('statString');
					if (statString) {
						statString.innerHTML = `Ready? Join <strong>${data.user_count.toLocaleString()}</strong> users and <strong>${data.server_count.toLocaleString()}</strong> servers and`;
					}
				} else {
					const statString = document.getElementById('statString');
					if (statString) {
						statString.innerHTML = `Ready? Join hundreds of other users and`;
					}
				}
			} catch (error) {
				console.error('Error fetching stats:', error);
			}
		}

		fetchStats();
	});
</script>

<svelte:head>
	<title>Titanium</title>
	<meta content="Titanium" property="og:title" />
	<meta content="Your multipurpose, open source Discord bot." property="og:description" />
</svelte:head>

<section
	class="border-titanium-border flex h-screen w-full flex-col items-center overflow-hidden border-b-4 p-4 pt-0"
>
	<!-- prettier-ignore -->
	<div
		class="absolute left-0 right-0 w-full h-screen bg-[url('/images/background_blur.svg')] bg-cover bg-no-repeat bg-center brightness-50"
    ></div>

	<div class="z-10 mt-auto mb-auto flex flex-col gap-4 p-4">
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
		<p
			in:fly={{ y: 20, duration: 500 }}
			class="text-center text-3xl font-semibold text-white"
			id="tagline"
		>
			Your multipurpose Discord bot.
		</p>
	</div>

	<a
		in:scale={{ easing: cubicOut, duration: 500 }}
		href="/invite"
		class="border-titanium-border z-10 flex items-center justify-center gap-1 rounded-full border-2 bg-zinc-300 px-6 pt-2 pb-2 text-xl transition-colors hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700"
	>
		<IcRoundAdd class="h-7.5 w-7.5" />
		Add Titanium
	</a>
</section>

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
	<div class="flex h-fit flex-col gap-3 select-none sm:min-w-[310px]">
		<div class="flex gap-2">
			<enhanced:img
				src="$lib/images/restart.png"
				alt="Restart & Titanium"
				class="h-15 w-15 rounded-xl"
			/>

			<div class="flex flex-col justify-center">
				<h3 class="font-semibold">Restart & Titanium</h3>
				<p><code>/spotify search song</code></p>
			</div>
		</div>

		<div class="flex gap-2 sm:ml-4">
			<enhanced:img
				src="$lib/images/servers/jiga.gif"
				alt="Jiga Server"
				class="h-15 w-15 rounded-xl"
			/>

			<div class="flex flex-col justify-center">
				<h3 class="font-semibold">Jiga Tech's Discord</h3>
				<p><code>/quote</code></p>
			</div>
		</div>

		<div class="flex gap-2 sm:ml-8">
			<enhanced:img
				src="$lib/images/servers/irl.png"
				alt="IRL Server"
				class="h-15 w-15 rounded-xl"
			/>

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

		<ul class="list-inside list-disc">
			<li>use Titanium's commands anywhere, including DMs - just use <strong>/</strong></li>
			<li>your info stays private - Titanium can't see any messages except ones you pick</li>
			<li>invite Titanium to your server for more features</li>
		</ul>
	</div>
</section>

<hr class="w-full text-zinc-600" />

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
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

	<div
		class="flex h-fit flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-4 select-none sm:min-w-[310px] dark:bg-zinc-700"
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
</section>

<hr class="w-full text-zinc-600" />

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
	<div
		class="flex h-fit flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-4 select-none sm:min-w-[310px] dark:bg-zinc-700"
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

	<div class="flex h-fit flex-col gap-3 select-none sm:min-w-[310px]">
		<img src={quote} alt="Quote" width="400" class="rounded-xl border-2 border-zinc-600" />
	</div>
</section>

<hr class="w-full text-zinc-600" />

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
	<div class="flex flex-col gap-3 select-none">
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
			artist="Sean Paul"
			artistArtURL={seanpaul}
			album="The Trinity"
			albumArtURL={trinity}
			song="Temperature"
			releaseYear={2005}
			--colour="#1d1f20"
		/>

		<p class="text-center text-sm font-light">
			Album artwork and artist images provided by Spotify.
		</p>
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

<hr class="w-full text-zinc-600" />

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
	<div class="flex max-w-[750px] flex-col justify-center gap-2">
		<h2
			class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-5xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
		>
			Web Search
		</h2>
		<p>
			Search Wikipedia and Urban Dictionary directly from Discord, to get definitions for any term,
			person, or thing. You can search ReviewDB to see what other Discord users think about you and
			the current server.
		</p>
		<ul class="list-inside list-disc">
			<li>Search Wikipedia</li>
			<li>Search Urban Dictionary</li>
			<li>Get reviews for any user or the current server with ReviewDB</li>
		</ul>
	</div>

	<div class="flex flex-col gap-3 select-none">
		<div
			class="h-fit overflow-hidden rounded-xl border-2 border-zinc-600 bg-zinc-200 sm:min-w-[310px] dark:bg-zinc-700"
		>
			<div class="flex h-fit w-full items-center gap-2 border-l-8 border-[#8C8C8C] p-4">
				<div class="mr-auto flex flex-col justify-center gap-1">
					<div class="flex items-center gap-2">
						<ArcticonsUrbanDictionary class="h-7.5 w-7.5" />
						<p>Urban Dictionary</p>
					</div>

					<div>
						<h3 class="text-2xl font-bold">Titanium</h3>
						<p>by <span class="font-semibold">@RestartB</span></p>

						<p>Quite possibly the best bot on the planet.</p>
					</div>
				</div>

				<img src={logo} alt="Logo" class="h-20 w-20 rounded-xl" />
			</div>
		</div>
	</div>
</section>

<hr class="w-full text-zinc-600" />

<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
	<div class="flex flex-col items-center justify-center gap-3 select-none">
		<p
			class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-8xl font-black text-transparent dark:from-zinc-200 dark:to-zinc-600 dark:drop-shadow-[0_0_15px_rgba(244,244,245,0.4)]"
		>
			48+
		</p>
		<p class="text-4xl font-semibold">features</p>
	</div>

	<div class="flex max-w-[750px] flex-col justify-center gap-2">
		<h2
			class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-5xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
		>
			...and more!
		</h2>
		<p>
			Titanium contains over 48 features, including utility commands like user info and server info,
			and other smaller commands like a random number generator and magic 8 ball. New commands are
			also getting added all of the time!
		</p>
		<ul class="list-inside list-disc">
			<li>Search Wikipedia</li>
			<li>Search Urban Dictionary</li>
			<li>Get reviews for any user or the current server with ReviewDB</li>
		</ul>
	</div>
</section>

<hr class="w-full text-zinc-600" />

<section
	class="relative flex w-full flex-col items-center justify-center gap-5 overflow-hidden p-10"
>
	<div
		class="after:pointer-none absolute right-0 left-0 h-screen w-full bg-[url('/images/background_blur.svg')] bg-cover bg-center bg-no-repeat brightness-50"
	></div>

	<h3 class="z-10 text-center text-2xl text-white" id="statString">
		Ready? Join <strong
			><span class="relative top-0.5 inline-block h-6 w-12 animate-pulse rounded-full bg-gray-500"
			></span> users</strong
		>
		and
		<strong
			><span class="relative top-0.5 inline-block h-6 w-12 animate-pulse rounded-full bg-gray-500"
			></span> servers</strong
		> and
	</h3>
	<h1
		class="z-10 bg-linear-to-bl from-zinc-100 to-zinc-400 bg-clip-text text-center text-6xl font-bold text-transparent drop-shadow-[0_0_15px_rgba(168,162,158,0.4)] dark:drop-shadow-[0_0_15px_rgba(244,244,245,0.4)]"
	>
		Enhance your Discord experience
	</h1>

	<a
		href="/invite"
		class="border-titanium-border z-10 flex items-center justify-center gap-1 rounded-full border-2 bg-zinc-300 px-6 pt-2 pb-2 text-xl transition-colors hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700"
	>
		<IcRoundAdd class="h-7.5 w-7.5" />
		Add Titanium Now
	</a>
</section>

<style>
	h1,
	h2 {
		line-height: normal;
	}
</style>
