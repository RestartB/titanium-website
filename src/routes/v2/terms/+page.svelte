<script lang="ts">
	import { fly } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';
	import Alert from '$lib/components/Alert.svelte';
</script>

<svelte:head>
	<title>Titanium - Terms of Use</title>
	<meta content="Titanium - Terms of Use" property="og:title" />
	<meta
		content="View the terms of use for Titanium, your multipurpose, open source Discord bot."
		property="og:description"
	/>
</svelte:head>

<div
	in:fly={{ y: prefersReducedMotion.current ? 0 : 20, duration: 500 }}
	class="flex max-w-5xl flex-col gap-5 p-5 pt-19.5"
>
	<Alert type="Warning">
		This Terms of Use policy only applies to Titanium v2, which is not publicly available yet. For
		the current policy please refer to the <a href="/terms">v1 terms of use policy</a>.
	</Alert>

	<div>
		<h1 class="text-4xl font-bold">Terms of Use - v2</h1>
		<h2 class="text-xl font-semibold">Updated: 22/11/2025</h2>
	</div>

	<p>
		This document contains the terms of service that you agree to when using Titanium's services. <span
			class="font-bold"
			>Please note that this Terms of Use policy only applies to the official main Titanium bot
			instance. When using other Titanium instances, please refer to their own policies.</span
		>
	</p>

	<div class="flex flex-col gap-2.5" id="definitions">
		<h2 class="text-xl font-semibold">Definitions</h2>
		<ul class="list-inside list-disc">
			<li><span class="italic">"bot"</span> - an app developed for Discord.</li>
			<li>
				<span class="italic">"Titanium", "Titanium Bot", "the bot"</span> - the Titanium Discord bot.
			</li>
			<li><span class="italic">"we", "Restart"</span> - Restart Software.</li>
		</ul>
	</div>

	<div class="flex flex-col gap-2.5" id="terms">
		<h2 class="text-xl font-semibold">Terms of Use</h2>
		<p>You must abide by the following guidelines when using Titanium's services:</p>
		<ul class="list-inside list-disc">
			<li>
				you must not use Titanium to <span class="font-bold"
					>harass or harm other users / yourself.</span
				>
			</li>
			<li>
				you must not use Titanium to <span class="font-bold"
					>send unsolicited advertisements or messages to other users.</span
				>
			</li>
			<li>
				you must not use Titanium to <span class="font-bold"
					>cause major inconvenience to other users.</span
				>
			</li>
			<li>
				you must not use Titanium to <span class="font-bold"
					>attempt to cause damage to Discord's services or violate the Discord ToS.</span
				>
			</li>
			<li>
				you must not use Titanium to <span class="font-bold"
					>attempt to cause damage to other services.</span
				>
			</li>
			<li>
				you must not use Titanium to <span class="font-bold"
					>violate any laws in the European Union (hosting country), United Kingdom, or the country
					of usage.</span
				>
			</li>
			<li>
				you must not <span class="font-bold"
					>attempt to bypass any limits put in place by us (e.g. cooldowns, tag limits).</span
				>
			</li>
			<li>
				you must not <span class="font-bold"
					>attempt to harm or overload any Titanium services.</span
				>
			</li>
		</ul>

		<p>
			If any of these rules are violated, <span class="font-bold"
				>your access to Titanium services may be terminated.</span
			>
			Please see the <a href="#service-termination">service termination section</a> below for more info.
		</p>
	</div>

	<div class="flex flex-col gap-2.5" id="licence">
		<h3 class="font-semibold">Licence</h3>
		<p>By using Titanium, you also agree to the GNU Affero General Public License.</p>

		<p>
			This program is free software: you can redistribute it and/or modify it under the terms of the
			GNU Affero General Public License as published by the Free Software Foundation, either version
			3 of the License, or (at your option) any later version.
		</p>
		<p>
			This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
			without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
		</p>

		<p>
			For more information, please see the <a
				href="https://github.com/RestartB/titanium/blob/main/LICENSE"
				target="_blank">licence file</a
			> on our GitHub repository for more information.
		</p>
	</div>

	<div class="flex flex-col gap-2.5" id="features">
		<h3 class="font-semibold">Features</h3>
		<p>
			We are developing Titanium to add new features and remove bugs all the time. Because of this,
			new features may be added and some features may be removed. By using Titanium, you acknowledge
			this fact and that we are not responsible for any lost data or features.
		</p>
	</div>

	<div class="flex flex-col gap-2.5" id="outages">
		<h2 class="text-xl font-semibold">Outages</h2>
		<p>
			Titanium may experience temporary outages in service, whether this is due to maintenance,
			feature rollouts or other issues. By using Titanium, you acknowledge this fact and that we are
			not responsible for any outages.
		</p>
	</div>

	<div class="flex flex-col gap-2.5" id="third-party">
		<h2 class="text-xl font-semibold">Third Party Services</h2>
		<p>
			Titanium relies on several third party services. By using features that rely on these
			services, you agree to their policies. Below is a list of these services with their terms of
			service if available, provided for your convenience, accurate as of the release date of this
			policy:
		</p>

		<ul class="list-inside list-disc">
			<li><a href="https://discord.com/terms" target="_blank">Discord</a></li>
			<li>
				<a href="https://www.spotify.com/us/legal/end-user-agreement/" target="_blank">Spotify</a>
			</li>
			<li><a href="https://about.urbandictionary.com/tos/" target="_blank">Urban Dictionary</a></li>
			<li>
				<a href="https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use/en" target="_blank"
					>Wikipedia</a
				>
			</li>
			<li><a href="https://odesli.co/terms" target="_blank">Odesli / song.link</a></li>
			<li><a href="https://thecatapi.com/terms" target="_blank">The Cat API</a></li>
			<li>dog.ceo</li>
			<li>sandcat.link</li>
			<li>ReviewDB / vendicated.dev</li>
			<li>Steam</li>
		</ul>
	</div>

	<div class="flex flex-col gap-2.5" id="service-termination">
		<h2 class="text-xl font-semibold">Service Termination</h2>
		<p>
			By using Titanium, you agree that we have the right to terminate your service at any time,
			with or without notice, for any reason. When this happens, you will not be allowed to run any
			commands with Titanium, use Titanium context menu items, or interact with Titanium in any
			other way. We will do this in one of two ways:
		</p>
		<ul class="list-inside list-disc">
			<li>
				<span class="font-bold">Per User Termination:</span> if one user is violating the terms of service,
				we will blacklist the user from accessing Titanium's services.
			</li>
			<li>
				<span class="font-bold">Server Termination:</span> if an entire Discord server is violating the
				terms of service, we will blacklist the server from being able to use Titanium's services. The
				bot will be kicked from the server and will automatically leave if someone attempts to add it
				back.
			</li>
		</ul>
	</div>

	<div class="flex flex-col gap-2.5" id="policy-updates">
		<h2 class="text-xl font-semibold">Policy Updates</h2>
		<p>
			We may make changes to this policy over time. If a major change is made to the Terms of Use
			policy, we will make an announcement over public channels.
		</p>
	</div>

	<div class="flex flex-col gap-2.5" id="contact">
		<h2 class="text-xl font-semibold">Contact Us</h2>
		<p>
			If you wish to contact us, please join the <a href="/server" target="_blank"
				>support Discord server</a
			>, then create a ticket. We will attempt to get back to you ASAP regarding your concern.
		</p>
	</div>
</div>

<style>
	a {
		text-decoration: underline;
	}
</style>
