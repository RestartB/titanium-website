<script lang="ts">
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

<div class="flex max-w-5xl flex-col gap-5 p-5 pt-19.5">
	<div>
		<h1 class="text-4xl font-bold">Privacy Policy</h1>
		<h2 class="text-xl font-semibold">Updated: 01/06/2025</h2>
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
			<li><span class="italic">"we"</span> - Restart Software.</li>
			<li>
				<span class="italic">"guild"</span> - a Discord server. Not to be confused with the bot
				hosting server (labelled <i>"the server"</i>).
			</li>
		</ul>
	</section>

	<section class="flex flex-col gap-2.5" id="data">
		<h2 class="text-xl font-semibold">Data we collect</h2>
		<p>
			When using certain Titanium features, we may need to collect and process some data. Titanium
			accesses this data using the Discord API; all data accessed is publicly accessible. The data
			collected may include but is not limited to:
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

	<section class="flex flex-col gap-2.5" id="fireboard">
		<h3 class="font-semibold">Fireboard Feature</h3>
		<p>
			When the fireboard feature is enabled, Titanium will need to collect and store the following
			information:
		</p>
		<ul class="list-inside list-disc">
			<li>Guild ID</li>
			<li>Message ID to be added to the fireboard</li>
			<li>Fireboard message ID</li>
			<li>Number of selected reactions on the message</li>
		</ul>

		<Alert
			type="Info"
			content="This data is deleted if the message drops below the reaction requirement or if a guild admin disables the feature. Message content will <strong>not</strong> be stored by this feature."
		/>

		<p>Titanium will also store the following user-defined settings:</p>
		<ul class="list-inside list-disc">
			<li>Target amount of reactions</li>
			<li>Selected reaction</li>
			<li>Fireboard channel ID</li>
			<li>Whether to ignore bot messages</li>
			<li>Corresponding guild ID</li>
		</ul>

		<Alert
			type="Info"
			content="This data is deleted if the bot leaves the guild or if a guild admin disables the feature."
		/>
	</section>

	<section class="flex flex-col gap-2.5" id="leaderboard">
		<h3 class="font-semibold">Leaderboard Feature</h3>
		<p>
			When the guild leaderboard feature is enabled, Titanium will need to collect and store the
			following information:
		</p>
		<ul class="list-inside list-disc">
			<li>Guild ID</li>
			<li>Your User ID</li>
			<li>The amount of messages you send</li>
			<li>The amount of words you have sent</li>
			<li>The amount of attachments you have sent</li>
		</ul>

		<p>
			To collect this information, Titanium will need to temporarily store the content of messages
			in memory. Once the length of the message has been processed, it will be discarded. The
			content of the message will not be permanently saved in any place, and can not be collected or
			seen while it is being processed.
		</p>

		<Alert
			type="Info"
			content="This data is deleted if the bot leaves the guild or if a guild admin disables the feature."
		/>

		<h4>Opting Out</h4>
		<p>
			You can optionally opt out of leaderboard data collection. To do this, use the <code
				>/leaderboard opt-out</code
			>
			command. When you opt out, your user ID will be stored in an SQL table. If your user ID is in
			that table, no information will be processed or stored for the leaderboard. in any servers
			that have the Titanium leaderboard enabled. If you have opted out previously and want to opt
			back in, use the <code>/leaderboard opt-in</code> command.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="tags">
		<h3 class="font-semibold">Tag Feature</h3>
		<p>When you create tags with Titanium, the following information will be stored:</p>
		<ul class="list-inside list-disc">
			<li>Name of the tag</li>
			<li>Content of the tag</li>
			<li>Creator's User ID</li>
		</ul>

		<Alert type="Info" content="This data is deleted if you delete the tag." />
	</section>

	<section class="flex flex-col gap-2.5" id="music">
		<h3 class="font-semibold">Music Features</h3>
		<p>
			When you use Titanium's Song URL feature, Titanium will store some anonymous information in a
			cache to speed up future usage of the command. The following information will be stored:
		</p>
		<ul class="list-inside list-disc">
			<li>User provided link</li>
			<li>User provided link's platform</li>
			<li>Converted links</li>
			<li>Time created</li>
		</ul>

		<Alert type="Info" content="Each cache entry will expire after 30 days." />
	</section>

	<section class="flex flex-col gap-2.5" id="images">
		<h3 class="font-semibold">Image Features</h3>
		<p>
			When using Titanium's image processing features, the original image and processed image will
			be temporarily stored in memory. Once processing is complete, the files will be removed from
			the memory. The images will not be permanently saved in any place, and can not be collected or
			seen while they are being processed.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="videos">
		<h3 class="font-semibold">Video Features</h3>
		<p>
			When using Titanium's video processing features, the video will be temporarily downloaded to
			our server so it can be processed. Once the file has been processed, the original copy and
			processed copy will be deleted from our server.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="retention">
		<h2 class="text-xl font-semibold">Data Retention</h2>
		<p>
			Unless otherwise specified in feature-specific sections, we retain data only for as long as
			necessary to provide our bot's services. When data is no longer needed, it is deleted from our
			server.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="usage">
		<h2 class="text-xl font-semibold">Bot Usage Collection</h2>
		<p>
			When you run a Titanium slash command, use a Titanium context menu item, load results from
			autocorrect in Titanium slash commands, open a modal or use an embed button from Titanium, we
			collect the following information:
		</p>
		<ul class="list-inside list-disc">
			<li>Command used</li>
			<li>Time the command was ran at</li>
			<li>User that ran the command</li>
		</ul>

		<p>
			We do not collect any arguments that you provide (URLs, attachments, etc). We are currently
			working on a way to opt out of this usage collection and will have more information to share
			about this at a later time.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="errors">
		<h2 class="text-xl font-semibold">Error Collection</h2>
		<p>
			If an error occurs while you are using Titanium, we collect the following information to fix
			issues and improve the bot experience:
		</p>
		<ul class="list-inside list-disc">
			<li>Command / context menu item used</li>
			<li>
				Arguments provided when running the command <span class="italic">(if applicable)</span>
			</li>
			<li>Developer information about the error</li>
			<li>Time the command / context menu item was ran at</li>
			<li>
				Guild the command / context menu item was ran in <span class="italic"
					>(not collected if the bot is not in the guild)</span
				>
			</li>
			<li>User that ran the command / context menu item</li>
		</ul>

		<p>
			This info will not be shared with anyone not in the dev team. We are currently working on a
			way to opt out of this error collection and will have more information to share about this at
			a later time.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="location">
		<h2 class="text-xl font-semibold">Processing Location</h2>
		<p>
			Titanium is hosted in the United Kingdom. By using Titanium, you agree to your data being
			processed according to this privacy policy, and local laws / regulations in the United
			Kingdom.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="data-sharing">
		<h2 class="text-xl font-semibold">Third Party Data Sharing</h2>
		<p>
			We do not share any data with third parties, apart from where it is required for core
			functionality of the bot or when required by law. Discord may collect some data during regular
			usage of their service, such as commands ran, message content and attachments sent. Please
			refer to their [privacy policy](https://discord.com/privacy) for more information.
		</p>

		<p>
			The full list of third party services that Titanium uses is provided here for your
			convenience, accurate at the time of publishing:
		</p>
		<ul class="list-inside list-disc">
			<li>Discord</li>
			<li>Spotify</li>
			<li>Urban Dictionary</li>
			<li>Wikipedia</li>
			<li>Odesli / song.link</li>
			<li>The Cat API</li>
		</ul>
	</section>

	<section class="flex flex-col gap-2.5" id="rights">
		<h2 class="text-xl font-semibold">Your Rights</h2>
		<p>As a user of Titanium, you have the following rights regarding your data:</p>
		<ul class="list-inside list-disc">
			<li>Request access to your data (by contacting us, see contact us section)</li>
			<li>Request deletion of your data (using opt-out commands)</li>
			<li>Opt-out of data collection (using opt-out commands)</li>
		</ul>
	</section>

	<section class="flex flex-col gap-2.5" id="backups">
		<h2 class="text-xl font-semibold">Backups</h2>
		<p>
			We take daily backups of our server to ensure that we can restore data if a data loss event
			occurs. We keep backups from the past 3 days using Proxmox container snapshots.
		</p>
	</section>

	<section class="flex flex-col gap-2.5" id="data-breach">
		<h2 class="text-xl font-semibold">Data Breach Procedures</h2>
		<p>
			We ensure that we do not collect any information that may impact you if a data breach occurs.
			However, if we believe a data breach has occurred and data may have been accessed, we will do
			the following:
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
