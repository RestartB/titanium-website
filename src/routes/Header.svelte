<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/titanium-logo.svg';
</script>

<header
	style="view-transition-name: header;"
	class="fixed right-0 left-0 z-50 m-2.5 box-border flex items-center justify-center"
>
	<div
		class="border-titanium-border flex h-12 w-fit items-center gap-2.5 rounded-md border-1 bg-zinc-200/70 pr-2.5 pl-2.5 backdrop-blur-lg dark:bg-zinc-800/70"
	>
		<img src={logo} alt="Titanium Logo" height="30" width="30" />
		<h1 class="font-bold">Titanium</h1>

		<nav class="h-full">
			<ul class="flex h-full">
				<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
					<a
						href="/"
						class="hover:bg-titanium-sidebar-active flex h-full w-fit cursor-pointer items-center justify-center px-2.5 transition-colors"
						><p>Home</p></a
					>
				</li>
				<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
					<a
						href="/about"
						class="hover:bg-titanium-sidebar-active flex h-full w-fit cursor-pointer items-center justify-center px-2.5 transition-colors"
						><p>About</p></a
					>
				</li>
				<li aria-current={page.url.pathname === '/status' ? 'page' : undefined}>
					<a
						href="/status"
						class="hover:bg-titanium-sidebar-active flex h-full w-fit cursor-pointer items-center justify-center px-2.5 transition-colors"
						><p>Status</p></a
					>
				</li>
			</ul>
		</nav>
	</div>
</header>
