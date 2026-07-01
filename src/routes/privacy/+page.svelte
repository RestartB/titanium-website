<script lang="ts">
  import { resolve } from '$app/paths';
  import Alert from '$lib/components/Alert.svelte';
</script>

<div class="mx-auto flex max-w-7xl flex-col gap-4 p-4">
  <div>
    <h1 class="text-4xl font-bold">Privacy Policy</h1>
    <h2 class="text-xl font-semibold">Effective: 08/12/2025 (dd/mm/yyyy)</h2>
    <h2 class="text-xl font-semibold">Updated: 16/06/2026 (dd/mm/yyyy)</h2>
  </div>

  <p>
    This document explains how Titanium treats your data.
    <strong
      >Please note that this Privacy Policy only applies to the official main Titanium bot instance.
      When using other Titanium instances, please refer to their own Privacy Policies.</strong
    >
  </p>

  <section class="flex flex-col gap-2.5" id="definitions">
    <h2 class="text-xl font-semibold">Definitions</h2>
    <ul class="list-inside list-disc">
      <li><span class="italic">"bot"</span> - an app developed for Discord.</li>
      <li>
        <span class="italic">"Titanium", "Titanium Bot", "the bot"</span> - the Titanium Discord bot.
      </li>
      <li><span class="italic">"we", "us"</span> - Restart.</li>
      <li>
        <span class="italic">"guild"</span> - a Discord server.
      </li>
    </ul>
  </section>

  <section class="flex flex-col gap-2.5" id="data">
    <h2 class="text-xl font-semibold">Data Collected</h2>
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
      Titanium allows users to moderate their guilds. When a user or the bot takes an action that
      creates a case, the case is stored on Titanium's servers. Data stored on Titanium's guilds
      will include the creator's Discord user ID and the target users's Discord ID, as well as the
      reason that the user provides and the action that was taken. Any provided comments will also
      be stored, including the creation date and the creator's user ID.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="automod">
    <h3 class="font-semibold">Automod</h3>
    <p>
      Titanium provides an automod feature that allows guild moderators to let Titanium assist with
      moderation. This feature stores basic information about the past 100 messages per user per
      guild such as basic message metadata (such as ID), author and guild information, as well as,
      but not limited to, the following data:
    </p>

    <ul class="list-inside list-disc">
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
      phishing link checking is processed locally, and your links are not stored or sent to third
      parties.
    </Alert>
  </section>

  <section class="flex flex-col gap-2.5" id="logging">
    <h3 class="font-semibold">Logging</h3>
    <p>
      Titanium provides a logging feature that allows guild moderators to log events that happen in
      their guild. The guild admins should ensure that any data logged by this feature is kept
      secure, by utilising Discord channel permissions. We are not responsible for any data leaks
      that may occur as a result of misconfigured channel permissions.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="fireboard">
    <h3 class="font-semibold">Fireboard</h3>
    <p>
      Titanium provides a fireboard feature that allows guild members to highlight messages by using
      reactions. This feature stores message IDs and corresponding channel IDs that meet the
      critieria as set by guild moderators, but does not store message content, attachments or who
      reacted.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="leaderboard">
    <h3 class="font-semibold">Leaderboard</h3>
    <p>
      Titanium provides a leaderboard feature that allows guild members to see their XP ranking,
      calculated based on messages and message length. This feature stores user IDs and their
      corresponding XP and level, but does not store any message content or attachments. The
      following additional data is also collected and stored for users to view if the leaderboard
      feature is enabled:
    </p>

    <ul class="list-inside list-disc">
      <li>Message Count</li>
      <li>Word Count</li>
      <li>Attachment Count</li>
      <li>Swear Count</li>
      <li>Voice Chat Minutes</li>
    </ul>
  </section>

  <section class="flex flex-col gap-2.5" id="server-counters">
    <h3 class="font-semibold">Server Counters</h3>
    <p>
      Titanium provides server counters that allow guild members to see various statistics about the
      guild. These counters appear as voice channels in the channel list. Titanium will store the
      created channel ID and the counter type when a counter channel is created, as well as the
      selected name.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="confessions">
    <h3 class="font-semibold">Confessions</h3>
    <p>
      Titanium provides a confessions feature that allows guild members to anonymously share their
      confessions. This feature allows guild admins to send confession messages to a private log
      channel that contains the author of the confession, this is intended for moderation and
      compliance purposes. You should not assume that confession messages are anonymous to a guild's
      staff team.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="anon-polls">
    <h3 class="font-semibold">Anonymous Polls</h3>
    <p>
      When you create an anonymous poll using Titanium, some data about the poll is stored in
      Titanium's database, including the creator's ID and the content of the poll. This is so
      Titanium can remember the poll if it restarts. The creator is not displayed to users. When you
      submit an answer to an anonymous poll, Titanium will store your user ID and vote inside its
      database, so duplicate votes can be blocked. As with the confessions feature, server
      moderators are able to receive logs when anonymous polls are created, including who created
      them. You should not assume that the creator of an anonymous poll is anonymous to a guild's
      staff team.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="tags">
    <h3 class="font-semibold">Tags</h3>
    <p>
      Users can create user specific tags, and guild wide tags. The tag's name, content, creator,
      and the last user that modified the tag will be stored, as well as the corresponding guild ID
      if the tag is a "server tag". The amount of times that the tag has been used is stored as
      well, to sort the suggestions list.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="tags">
    <h3 class="font-semibold">Reminders</h3>
    <p>
      Users can create reminders, where Titanium will send them a message after a certain time. This
      feature stores the reminder content and the creator's ID, as well as whether the reminder will
      be sent to DMs. The server ID, creating message's ID, and channel ID will be stored if the
      reminder is sent to a server.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="images">
    <h3 class="font-semibold">Image and Video Features</h3>
    <p>
      When using Titanium's image and video processing features, the original file and output file
      will be temporarily stored in memory to complete the request. Once the request is complete,
      both files will be deleted from memory. No files are stored at rest at any point in the
      process.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="retention">
    <h2 class="text-xl font-semibold">Data Retention</h2>
    <p>
      Unless otherwise specified in feature-specific sections, Titanium will retain data only for as
      long as necessary to provide Titanium's services. When data is no longer needed, it is deleted
      from Titanium's server. If you remove Titanium from your guild and have the "Delete data after
      3 days" option enabled, any stored data about your guild will be retained up to a 3 day
      period, then it will be deleted. If this option is disabled, data about your guild will be
      deleted as soon as possible.
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
      <li>Whether the command was ran in user app mode or guild mode</li>
    </ul>

    <Alert type="Info">
      We do not collect any arguments or data that you provide (URLs, attachments, etc) as part of
      this telemetry.
    </Alert>
  </section>

  <section class="flex flex-col gap-2.5" id="errors">
    <h2 class="text-xl font-semibold">Error Data Collection</h2>
    <p>
      If an error occurs while you are using Titanium, we collect the following information to fix
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
        Guild the command was ran in <span class="italic"
          >(not collected if the bot is not in the guild)</span
        >
      </li>
      <li>User that ran the command</li>
    </ul>
  </section>

  <section class="flex flex-col gap-2.5" id="feedback">
    <h2 class="text-xl font-semibold">Feedback</h2>
    <p>
      When you run the feedback command to submit a bug report, feature request, etc, we are the
      only ones that can see the feedback. We will also receive your username and user ID so we can
      further contact you about the request if required.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="location">
    <h2 class="text-xl font-semibold">Processing Location</h2>
    <p>
      Titanium is operated from the United Kingdom and hosted on Hetzner servers located in
      Helsinki, Finland, within the European Economic Area (EEA).
    </p>

    <p>
      By using Titanium, you understand that your data is processed in the United Kingdom and the
      EEA in accordance with this Privacy Policy and applicable data protection laws, including the
      UK GDPR where applicable.
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
      To remove all user related data, use the <code class="text-base">/opt-out</code> command - this
      will remove data such as tags and leaderboard data for your account, and block further data collection
      of this type.
    </p>

    <h3 class="font-semibold">Server Data</h3>
    <p>
      To remove all data about your Discord server from Titanium's systems, please follow these
      steps:
    </p>
    <ul class="list-inside list-decimal">
      <li>Log into the web dashboard, and select your server.</li>
      <li>In the general settings tab, turn off the "Delete data after 3 days" option.</li>
      <li>
        Kick Titanium from your server. Data will be removed automatically. If Titanium is down /
        offline when you kick it, data will be removed when the bot next comes online.
      </li>
    </ul>
  </section>

  <section class="flex flex-col gap-2.5" id="backups">
    <h2 class="text-xl font-semibold">Backups</h2>
    <p>
      To ensure that data can be restored in the case of data loss, we make use of the Duplicati
      backup tool. This creates encrypted backups using the AES-256 algorithm that are stored in a
      private Backblaze B2 storage bucket.
    </p>
    <p>
      Since we implemented this backup policy on 30/04/2026, our backup history will build up over
      time. Older backups are automatically deleted, but we will always retain at least one backup.
      Once enough time has passed, our maximum retention schedule will be:
    </p>

    <ul class="list-inside list-disc">
      <li>One backup for each of the last 7 days</li>
      <li>One backup for each of the last 4 weeks</li>
      <li>One backup for each of the last 12 months</li>
    </ul>

    <Alert type="Warning">
      These backups are for internal use only. If you delete data yourself, for example, deleting a
      case or configuration, we will not be able to recover it for you at this time.
    </Alert>
  </section>

  <section class="flex flex-col gap-2.5" id="security">
    <h2 class="text-xl font-semibold">Data Security</h2>
    <p>
      None of Titanium's backend services are publicly accessible. Access to the servers is
      restricted to Restart exclusively, and all dashboard endpoints are restricted using Discord
      authentication. However, no transmission, storage medium or software is 100% secure, and we
      are not liable for data loss or breaches.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="website">
    <h2 class="text-xl font-semibold">Web Services</h2>
    <p>
      When you access Titanium's website or the Titanium Dashboard, Cloudflare Web Analytics is used
      to gain insights into our traffic and site performance. This service does not store any
      cookies or client-side data on your device, and IP addresses are not logged or stored. IP
      addresses are processed strictly at the network edge to securely route traffic and determine
      general, country-level geography. Cloudflare Fonts is also used to serve fonts, replacing
      Google Fonts, to increase performance and privacy.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="dashboard">
    <h2 class="text-xl font-semibold">Dashboard Security</h2>
    <p>
      When you log into the Titanium Dashboard, Titanium requests a token from Discord to get
      information about your account, including your Discord ID, username and profile picture. This
      token and your Discord ID are then stored in the dashboard's database. The token is encrypted
      at rest to avoid unauthorised access, and the tokens are only valid for 7 days before Discord
      automatically revokes them.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="data-breach">
    <h2 class="text-xl font-semibold">Data Breach Procedures</h2>
    <p>
      If we believe a data breach has occurred and data may have been accessed, we will do the
      following as a good faith effort to notify affected users:
    </p>
    <ul class="list-inside list-disc">
      <li>A public announcement informing users that the breach has occurred</li>
      <li>
        Attempt to contact affected users individually with more info about the data that was
        accessed if applicable
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
      request, etc.), please join the <a href={resolve('/server')} target="_blank"
        >support Discord server</a
      >, then create a ticket. We will attempt to get back to you ASAP regarding your concern.
    </p>
  </section>
</div>

<style>
  a {
    text-decoration: underline;
  }
</style>
