<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	// Components
	import SongEmbed from '$lib/components/SongEmbed.svelte';

	// Images
	import xcx from '$lib/images/embeds/xcx.jpeg?enhanced';
	import brat from '$lib/images/embeds/brat.png?enhanced';

	import seanpaul from '$lib/images/embeds/seanpaul.jpeg?enhanced';
	import trinity from '$lib/images/embeds/trinity.jpeg?enhanced';

	// Icons
	import { Plus } from '@lucide/svelte';
	import ArcticonsUrbanDictionary from 'virtual:icons/arcticons/urban-dictionary';

	// Bindings
	let statString: HTMLElement | null = null;
	let tagline: HTMLElement | null = null;

	onMount(() => {
		// Meowium easter egg
		if (window.location.search.includes('?meow')) {
			console.log('meow meow meow meow meow meow meow meow meow');
			document.title = document.title.replaceAll('Titanium', 'Meowium');

			// Get safe text elements
			const text = document.querySelectorAll('h1, h2, h3, p, span');
			text.forEach((text) => {
				if (text.textContent) {
					text.textContent = text.textContent.replaceAll('Titanium', 'Meowium');
				}
			});

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

					if (statString) {
						statString.innerHTML = `Ready? Join <span class="font-bold">${data.user_count.toLocaleString()}</span> users and <span class="font-bold">${data.server_count.toLocaleString()}</span> servers and`;
					}
				} else {
					if (statString) {
						statString.innerHTML = `Ready? Join <span class="font-bold">hundreds of other users</span> and`;
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

<div in:fly={{ y: prefersReducedMotion.current ? 0 : 20, duration: 500 }} class="w-full">
	<section
		class="border-titanium-border flex h-screen w-full flex-col items-center overflow-hidden border-b-4 p-4 pt-0"
	>
		<!-- prettier-ignore -->
		<div
			class="absolute left-0 right-0 w-full h-screen bg-[url('/images/background_blur.svg')] bg-cover bg-no-repeat bg-center brightness-50"
		></div>

		<div class="z-10 mt-auto mb-auto flex flex-col gap-4 p-4">
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<enhanced:img
					src="$lib/images/titanium-logo.svg"
					alt="Titanium Logo"
					class="h-30 w-30 rounded-full border-6 border-zinc-300"
				/>
				<h1
					class="bg-linear-to-bl from-zinc-100 to-zinc-400 bg-clip-text text-7xl font-bold text-transparent"
					translate="no"
				>
					Titanium
				</h1>
			</div>
			<p
				in:fly={{ y: prefersReducedMotion.current ? 0 : 20, duration: 500 }}
				class="text-center text-3xl font-semibold text-white"
				bind:this={tagline}
			>
				Your multipurpose Discord bot.
			</p>
		</div>

		<a
			in:scale={{ easing: cubicOut, duration: prefersReducedMotion.current ? 0 : 500 }}
			href="/invite"
			class="border-titanium-border z-10 flex items-center justify-center gap-1 rounded-full border-2 bg-zinc-300 px-6 pt-2 pb-2 text-xl transition-colors hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700"
		>
			<Plus size={30} />
			Add <span translate="no">Titanium</span>
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
					<h3 class="font-semibold" translate="no">Restart & Titanium</h3>
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
					<h3 class="font-semibold" translate="no">Jiga Tech's Discord</h3>
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
					<h3 class="font-semibold" translate="no">irl friends</h3>
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
				<span translate="no">Titanium</span> is designed to be used as a server bot or a user app.
				This means you can use
				<span translate="no">Titanium</span> in any server, without it being invited!
			</p>

			<ul class="list-inside list-disc">
				<li>
					use <span translate="no">Titanium</span>'s commands anywhere, including DMs - just use
					<strong>/</strong>
				</li>
				<li>
					your info stays private - <span translate="no">Titanium</span> can't see any messages except
					ones you pick
				</li>
				<li>invite <span translate="no">Titanium</span> to your server for more features</li>
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
				Discord, <span translate="no">Titanium</span> has you covered.
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
				<enhanced:img
					src="$lib/images/titanium-logo.svg"
					alt="Titanium"
					class="h-15 w-15 rounded-xl"
				/>

				<div class="flex flex-col justify-center">
					<h3 class="font-semibold" translate="no">Titanium</h3>
					<p>Image deepfried!</p>
				</div>
			</div>
			<enhanced:img src="$lib/images/deepfried.png" alt="Deepfried" class="w-[250px] rounded-xl" />
		</div>
	</section>

	<hr class="w-full text-zinc-600" />

	<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
		<div
			class="flex h-fit flex-col gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-4 select-none sm:min-w-[310px] dark:bg-zinc-700"
		>
			<div class="flex gap-2">
				<enhanced:img
					src="$lib/images/titanium-logo.svg"
					alt="Titanium"
					class="h-15 w-15 rounded-xl"
				/>

				<div class="flex flex-col justify-center">
					<h3 class="font-semibold" translate="no">Titanium</h3>
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
			<p>
				<span translate="no">Titanium</span> offers message stats and a starboard to keep server members
				engaged.
			</p>
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
				Stat Counters
			</h2>
			<p>
				Create stat counters that sit in the server list and update every 10 minutes with <span
					translate="no">Titanium</span
				>.
			</p>
			<ul class="list-inside list-disc">
				<li>track member counts, channel counts and more</li>
				<li>create up to 20 counters</li>
				<li>set custom channel names</li>
				<li>channels update every 10 minutes</li>
			</ul>
		</div>

		<div class="flex flex-col gap-3 select-none">
			<div
				class="flex h-fit items-center gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-2 px-4 select-none sm:min-w-[310px] dark:bg-zinc-700"
			>
				<h1 class="text-2xl font-bold">#</h1>
				<h3>Server members: 53</h3>
			</div>

			<div
				class="flex h-fit items-center gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-2 px-4 select-none sm:min-w-[310px] dark:bg-zinc-700"
			>
				<h1 class="text-2xl font-bold">#</h1>
				<h3>3 robots</h3>
			</div>

			<div
				class="flex h-fit items-center gap-3 rounded-xl border-2 border-zinc-600 bg-zinc-200 p-2 px-4 select-none sm:min-w-[310px] dark:bg-zinc-700"
			>
				<h1 class="text-2xl font-bold">#</h1>
				<h3>Text channels, there are 5</h3>
			</div>
		</div>
	</section>

	<hr class="w-full text-zinc-600" />

	<section class="flex w-full flex-col items-center justify-center gap-10 p-10 md:flex-row">
		<div class="flex h-fit flex-col gap-3 select-none sm:min-w-[310px]">
			<enhanced:img
				src="$lib/images/quote.png"
				alt="Quote"
				class="w-[400px] rounded-xl border-2 border-zinc-600"
			/>
		</div>

		<div class="flex max-w-[750px] flex-col justify-center gap-2">
			<h2
				class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-5xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
			>
				Quotes
			</h2>
			<p>
				Use <span translate="no">Titanium</span> to generate quote images, so you can share and remember
				messages.
			</p>
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
		<div class="flex max-w-[750px] flex-col justify-center gap-2">
			<h2
				class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-5xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
			>
				Tags
			</h2>
			<p>
				Use tags to create quick replies to common questions, store quick responses, and more. You
				can have server wide tags, or per user tags that work in any server.
			</p>
			<ul class="list-inside list-disc">
				<li>server wide tags that work for anyone with command access</li>
				<li>per user tags that work in any server</li>
				<li>store up to 200 tags</li>
				<li>create attachment tags easily</li>
			</ul>
		</div>

		<div class="flex flex-col gap-3 select-none">
			<div
				class="h-fit overflow-hidden rounded-xl border-2 border-zinc-600 bg-zinc-200 sm:min-w-[310px] dark:bg-zinc-700"
			>
				<div class="flex h-fit w-full items-center gap-2 border-l-8 border-[#8C8C8C] p-4">
					<div class="mr-auto flex flex-col justify-center gap-1">
						<div class="flex items-center gap-2">
							<p>User Tag</p>
						</div>

						<div>
							<h3 class="text-2xl font-bold">Hello</h3>

							<p>Hi there, I am a tag!</p>
						</div>
					</div>
				</div>
			</div>
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
				Discord, powered by <span translate="no">Titanium</span>. You can also display Spotify
				playlists and info from any streaming service when you enter a link, and get song lyrics.
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
				Search Wikipedia and Urban Dictionary directly from Discord, to get definitions for any
				term, person, or thing. You can search ReviewDB to see what other Discord users think about
				you and the current server.
			</p>
			<ul class="list-inside list-disc">
				<li>search Wikipedia</li>
				<li>search Urban Dictionary</li>
				<li>get reviews for any user or the current server with ReviewDB</li>
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
							<h3 class="text-2xl font-bold" translate="no">Titanium</h3>
							<p>by <span class="font-semibold">@RestartB</span></p>

							<p>Quite possibly the best bot on the planet.</p>
						</div>
					</div>

					<enhanced:img
						src="$lib/images/titanium-logo.svg"
						alt="Logo"
						class="h-20 w-20 rounded-xl"
					/>
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
				<span translate="no">Titanium</span> contains over 48 features, including utility commands like
				user info and server info, and other smaller commands like a random number generator and magic
				8 ball. New commands are also getting added all of the time!
			</p>
		</div>
	</section>

	<hr class="w-full text-zinc-600" />

	<section
		class="relative flex w-full flex-col items-center justify-center gap-5 overflow-hidden p-10"
	>
		<div
			class="after:pointer-none absolute right-0 left-0 h-screen w-full bg-[url('/images/background_blur.svg')] bg-cover bg-center bg-no-repeat brightness-50"
		></div>

		<h3 class="z-10 text-center text-2xl text-white" bind:this={statString}>
			Ready? Join <span class="font-bold"
				><span class="relative top-0.5 inline-block h-6 w-12 animate-pulse rounded-full bg-gray-500"
				></span> users</span
			>
			and
			<span class="font-bold"
				><span class="relative top-0.5 inline-block h-6 w-12 animate-pulse rounded-full bg-gray-500"
				></span> servers</span
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
			<Plus size={30} />
			Add <span translate="no">Titanium</span> Now
		</a>
	</section>
</div>

<style>
	h1,
	h2 {
		line-height: normal;
	}
</style>
