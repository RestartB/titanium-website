<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/titanium-logo.svg';

	import titanium from '$lib/images/88x31/titanium.png';
	import restart from '$lib/images/88x31/restart.png';
</script>

<footer
	style="view-transition-name: footer;"
	class="border-titanium-border box-border flex h-fit w-full flex-wrap items-center justify-center border-t-4 bg-zinc-100 p-5 dark:bg-zinc-900"
>
	<div
		class="flex h-fit w-full max-w-5xl flex-wrap items-center justify-center gap-2.5 md:justify-between"
	>
		<div class="flex w-[270px] items-center justify-center gap-2.5">
			<img src={logo} alt="Titanium Logo" height="60" width="60" />
			<div>
				<h1 class="font-bold">Titanium</h1>
				<h3 class="text-base">More features than protons.</h3>
				<p class="mt-1 text-sm font-light">2025, Restart</p>
			</div>
		</div>

		<div class="flex h-full items-end justify-center gap-2.5 md:flex-col">
			<a href="https://restartb.xyz" aria-labelledby="restart-88x31" title="Restart"
				><img
					src={restart}
					alt="Restart's 88x31"
					id="restart-88x31"
					style="image-rendering: pixelated;"
				/></a
			>
			<a href="/" aria-labelledby="titanium-88x31" title="Titanium"
				><img
					src={titanium}
					alt="Titanium's 88x31"
					id="titanium-88x31"
					style="image-rendering: pixelated;"
				/></a
			>
		</div>

		<nav class="flex h-full flex-wrap items-center justify-center gap-2.5">
			<ul class="flex h-full flex-col text-base">
				<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/" class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5"
						><p>Home</p></a
					>
				</li>
				<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
					<a
						href="/about"
						class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5"
						><p>About</p></a
					>
				</li>
				<li aria-current={page.url.pathname === '/terms' ? 'page' : undefined}>
					<a
						href="/terms"
						class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5"
						><p>Status</p></a
					>
				</li>
				<li>
					<a
						href="/invite"
						class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5"
						><p>Add Titanium</p></a
					>
				</li>
			</ul>

			<ul class="flex h-full flex-col text-base">
				<li aria-current={page.url.pathname === '/terms' ? 'page' : undefined}>
					<a
						href="/terms"
						class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5"
						><p>Terms of Use</p></a
					>
				</li>
				<li aria-current={page.url.pathname === '/privacy' ? 'page' : undefined}>
					<a
						href="/privacy"
						class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5"
						><p>Bot Privacy Policy</p></a
					>
				</li>
				<li aria-current={page.url.pathname === '/privacy' ? 'page' : undefined}>
					<a
						href="/privacy"
						class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5"
						><p>Website Privacy Policy</p></a
					>
				</li>
				<li>
					<a
						href="https://github.com/RestartB/Titanium"
						class="flex h-full w-fit cursor-pointer items-center justify-center px-2.5"
						><p>Source Code</p></a
					>
				</li>
			</ul>
		</nav>
	</div>
</footer>

<style>
	h1,
	h3 {
		line-height: normal;
	}
</style>
