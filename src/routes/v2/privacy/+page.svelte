<script lang="ts">
	import { fly } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';

	import Alert from '$lib/components/Alert.svelte';
</script>

<svelte:head>
	<title>Titanium - Bot Privacy Policy</title>
	<meta content="Titanium - Bot Privacy Policy" property="og:title" />
	<meta
		content="View the bot privacy policy for Titanium, your multipurpose, open source Discord bot."
		property="og:description"
	/>
</svelte:head>

<div
	in:fly={{ y: prefersReducedMotion.current ? 0 : 20, duration: 500 }}
	class="flex max-w-5xl flex-col gap-5 p-5 pt-19.5"
>
	<Alert type="Warning">
		This privacy policy only applies to Titanium v2, which is not publicly available yet. For the
		current privacy policy, please refer to the <a href="/privacy/bot">v1 privacy policy</a>.
	</Alert>

	<div>
		<h1 class="text-4xl font-bold">Privacy Policy - v2</h1>
		<h2 class="text-xl font-semibold">Effective: 08/12/2025 (dd/mm/yyyy)</h2>
		<h2 class="text-xl font-semibold">Updated: 08/12/2025 (dd/mm/yyyy)</h2>
	</div>

	<p>
		This document explains how Titanium treats your data. <span class="font-bold"
			>Please note that this Privacy Policy only applies to the official main Titanium bot instance.
			When using other Titanium instances, please refer to their own Privacy Policies.</span
		>
	</p>

	<section class="flex flex-col gap-2.5" id="definitions">
		<h2 class="text-xl font-semibold">Definitions</h2>
		<ul class="list-inside list-disc">
			<li><span class="italic">"bot"</span> - an app developed for Discord.</li>
			<li>
				<span class="italic">"Titanium", "Titanium Bot", "the bot"</span> - the Titanium Discord bot.
			</li>
			<li><span class="italic">"we", "I", "me"</span> - Restart.</li>
			<li>
				<span class="italic">"guild"</span> - a Discord server.
			</li>
		</ul>
	</section>

	<section class="flex flex-col gap-2.5" id="ai">
		<h2 class="text-xl font-semibold">No AI Training</h2>
		<p>
			In a world where more and more of your data is being used to train AI models without you being
			aware, I want to make it clear - Titanium does not train AI models on your messages or
			attachments, and doesn't send your messages to other AI providers.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="data">
		<h2 class="text-xl font-semibold">Data I collect</h2>
		<p>
			When using certain Titanium features, the bot may need to collect and process some data.
			Titanium accesses this data using the Discord API; all data accessed is publicly accessible.
			The data collected may include but is not limited to:
		</p>
		<ul class="list-inside list-disc">
			<li>User Information <span class="italic">(incl. IDs, profile picture URLs)</span></li>
			<li>User Permissions in guilds</li>
			<li>Guild Information <span class="italic">(incl. guild members)</span></li>
			<li>Message Info <span class="italic">(incl. IDs)</span></li>
		</ul>

		<p>
			This information is not collected to be stored, unless explicitly specified for one of the
			following features:
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="moderation">
		<h3 class="font-semibold">Moderation</h3>
		<p>
			Titanium allows users to moderate their servers. When a user creates a case, the case is
			stored in Titanium's servers. Data stored on Titanium's servers will include the creator's
			Discord user ID and the target users's Discord ID, as well as the reason that the user
			provides.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="automod">
		<h3 class="font-semibold">Automod</h3>
		<p>
			Titanium provides an automod feature that allows server moderators to let Titanium moderate
			for them. This feature stores basic information about the past 100 messages per user as well
			as, but not limited to, the following data:
		</p>

		<ul class="list-inside list-disc">
			<li>Message ID</li>
			<li>Guild ID</li>
			<li>Channel ID</li>
			<li>Author ID</li>
			<li>Timestamp of when the message was sent</li>
			<li>Amount of triggers per word rule</li>
			<li>Amount of malicious links</li>
			<li>Amount of phishing links</li>
			<li>Amount of mentions</li>
			<li>Amount of words</li>
			<li>Amount of new lines</li>
			<li>Amount of links</li>
			<li>Amount of attachments</li>
			<li>Amount of emojis</li>
		</ul>

		<Alert type="Info">
			No message content or attachments are stored by Titanium's automod feature. Malicious /
			phishing link checking is processed locally, and your links are not stored or sent to a third
			party.
		</Alert>
	</section>

	<section class="flex flex-col gap-2.5" id="bouncer">
		<h3 class="font-semibold">Bouncer</h3>
		<p>
			Titanium provides a bouncer features that monitors members as they join and update their
			accounts. This feature does not store any user data.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="logging">
		<h3 class="font-semibold">Logging</h3>
		<p>
			Titanium provides a logging feature that allows server moderators to log events that happen in
			the server. The server admins should ensure that any data logged by this feature is kept
			secure, by utilising Discord channel permissions. I am not responsible for any data leaks that
			may occur as a result of misconfigured channel permissions.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="fireboard">
		<h3 class="font-semibold">Fireboard</h3>
		<p>
			Titanium provides a fireboard feature that allows server members to remember messages they
			love. This feature stores message IDs and corresponding channel IDs that meet the critieria as
			set by server moderators, but does not store message content, attachments or who reacted.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="leaderboard">
		<h3 class="font-semibold">Leaderboard</h3>
		<p>
			Titanium provides a leaderboard feature that allows server members to see their ranking in
			various activities. This feature stores user IDs and their corresponding XP and level, but
			does not store any message content or attachments.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="server-counters">
		<h3 class="font-semibold">Server Counters</h3>
		<p>
			Titanium provides server counters that allow server members to see various statistics about
			the server. These counters appear as voice channels in the channel list. Titanium will store
			the created channel ID and the counter type when a counter channel is created. For channels
			that track user statuses, eg. online members, no user presence data is stored.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="confessions">
		<h3 class="font-semibold">Confessions</h3>
		<p>
			Titanium provides a confessions feature that allows server members to anonymously share their
			confessions. This feature allows server admins to send confession messages to a private log
			channel that contains the author of the confession, this is intended for moderation and
			compliance purposes. You should not assume that confession messages are anonymous to the
			server admins.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="tags">
		<h3 class="font-semibold">Tags</h3>
		<p>
			Users can create user specific tags, and server wide tags. The tag's name, content and creator
			will be stored.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="song-url">
		<h3 class="font-semibold">Song URL Feature</h3>
		<p>
			When you use Titanium's Song URL feature, Titanium uses song.link / Odesli to convert the
			link. Once the link has been converted, Titanium will store it in a cache to speed up future
			requests. The cache is fully anonymous, and only stores the user provided cleaned link, and
			the response from song.link.
		</p>

		<Alert type="Info"
			>Each cache entry will expire after 30 days, after which it will be removed.</Alert
		>
	</section>

	<section class="flex flex-col gap-2.5" id="images">
		<h3 class="font-semibold">Image Features</h3>
		<p>
			When using Titanium's image processing features, the original image and processed image will
			be temporarily stored in memory to complete the request. Once the request is complete, both
			images will be deleted from memory and not stored at rest at any point in the process.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="retention">
		<h2 class="text-xl font-semibold">Data Retention</h2>
		<p>
			Unless otherwise specified in feature-specific sections, Titanium will retain data only for as
			long as necessary to provide Titanium's services. When data is no longer needed, it is deleted
			from Titanium's server.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="telemetry">
		<h2 class="text-xl font-semibold">Telemetry</h2>
		<p>
			When you run a Titanium slash command, use a Titanium context menu item, load results from
			autocorrect in Titanium slash commands, open a modal or use an embed button from Titanium, the
			bot will collect the following information:
		</p>
		<ul class="list-inside list-disc">
			<li>Command used</li>
			<li>Time the command was ran at</li>
			<li>User that ran the command</li>
		</ul>

		<Alert type="Info"
			>I do not collect any arguments that you provide (URLs, attachments, etc) as part of this
			telemetry.</Alert
		>
	</section>

	<section class="flex flex-col gap-2.5" id="errors">
		<h2 class="text-xl font-semibold">Error Data Collection</h2>
		<p>
			If an error occurs while you are using Titanium, I collect the following information to fix
			issues and improve the bot experience:
		</p>
		<ul class="list-inside list-disc">
			<li>Command used</li>
			<li>
				Arguments provided when running the command <span class="italic">(if applicable)</span>
			</li>
			<li>Developer information about the error</li>
			<li>Time the command was ran at</li>
			<li>
				Discord server the command was ran in <span class="italic"
					>(not collected if the bot is not in the server)</span
				>
			</li>
			<li>User that ran the command</li>
		</ul>
	</section>

	<section class="flex flex-col gap-2.5" id="location">
		<h2 class="text-xl font-semibold">Processing Location</h2>
		<p>
			Titanium is hosted using Contabo servers in their EU data centers. By using Titanium, you
			agree to your data being processed according to this privacy policy, and local laws /
			regulations in the European Union, as well as the United Kingdom.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="data-sharing">
		<h2 class="text-xl font-semibold">Data Sharing</h2>
		<p>
			We do not share any data with third parties, apart from where it is required for core
			functionality of the bot or when required by law. Discord may collect some data during regular
			usage of their service, such as commands ran, message content and attachments sent. Please
			refer to their <a href="https://discord.com/privacy">privacy policy</a> for more information.
		</p>

		<p>
			The full list of third party services that Titanium uses is provided here for your
			convenience, accurate at the time of publishing:
		</p>
		<ul class="list-inside list-disc">
			<li>Discord</li>
			<li>Spotify</li>
			<li>LRCLib</li>
			<li>Urban Dictionary</li>
			<li>Wikipedia</li>
			<li>Odesli / song.link</li>
			<li>The Cat API</li>
			<li>dog.ceo</li>
			<li>sandcat.link</li>
			<li>ReviewDB (mantikafasi.dev)</li>
			<li>Steam</li>
		</ul>
	</section>

	<section class="flex flex-col gap-2.5" id="rights">
		<h2 class="text-xl font-semibold">Your Rights</h2>
		<p>As a user of Titanium, you have the following rights regarding your data:</p>
		<ul class="list-inside list-disc">
			<li>Request access to your data (by contacting us, see contact us section)</li>
			<li>Request deletion of your data</li>
			<li>Opt-out of data collection</li>
		</ul>
	</section>

	<section class="flex flex-col gap-2.5" id="opt-out">
		<h2 class="text-xl font-semibold">Opting Out / Data Removal</h2>
		<p>As a user of Titanium, you have the right to opt out of your data being stored.</p>

		<h3 class="font-semibold">Telemetry Logs</h3>
		<p>
			If you would like us to remove you from all telemetry logs, please join the support Discord
			server and create a ticket.
		</p>

		<h3 class="font-semibold">User Data</h3>
		<p>
			To remove all user related data, use the <code class="text-base">/settings remove-data</code> command
			- this will remove data such as tags and leaderboard data for your account.
		</p>

		<h3 class="font-semibold">Server Data</h3>
		<p>
			To remove all data about your Discord server from Titanium's systems, please follow these
			steps:
		</p>
		<ul class="list-inside list-decimal">
			<li>Log into the web dashboard, and select your server.</li>
			<li>In the general settings tab, turn off the "Keep server data for 3 days" option.</li>
			<li>
				Kick Titanium from your server. Data will be removed automatically. If Titanium is down when
				you kick it, data will be removed when the bot next comes online.
			</li>
		</ul>
	</section>

	<section class="flex flex-col gap-2.5" id="backups">
		<h2 class="text-xl font-semibold">Backups</h2>
		<p>
			I take daily backups of Titanium's server to ensure that I can restore data if a data loss
			event occurs.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="security">
		<h2 class="text-xl font-semibold">Data Security</h2>
		<p>
			None of Titanium's servers are publicly accessible. Access to the servers is restricted to
			Restart exclusively, and all dashboard endpoints are restricted using Discord authentication.
			However, no transmission, storage medium or software is 100% secure, and I am not liable for
			data loss or breaches.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="data-breach">
		<h2 class="text-xl font-semibold">Data Breach Procedures</h2>
		<p>
			I ensure that I do not collect any information that may impact you if a data breach occurs.
			However, if I believe a data breach has occurred and data may have been accessed, I will do
			the following as a good faith effort to notify affected users:
		</p>
		<ul class="list-inside list-disc">
			<li>A public announcement informing users that the breach has occurred</li>
			<li>
				Attempt to contact affected users individually with more info about the data that was
				accessed
			</li>
		</ul>
	</section>

	<section class="flex flex-col gap-2.5" id="updates">
		<h2 class="text-xl font-semibold">Policy Updates</h2>
		<p>
			We may make changes to this policy over time. If a major change is made to the privacy policy,
			you will be notified over public channels.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="contact">
		<h2 class="text-xl font-semibold">Contact Us</h2>
		<p>
			If you wish to contact us about a privacy related concern (policy enquiry, data access
			request, etc.), please join the <a href="/server" target="_blank">support Discord server</a>,
			then create a ticket. We will attempt to get back to you ASAP regarding your concern.
		</p>
	</section>
</div>

<style>
	a {
		text-decoration: underline;
	}
</style>
