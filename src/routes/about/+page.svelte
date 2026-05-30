<script lang="ts">
  import { resolve } from '$app/paths';
  import Collapsible from '$lib/components/Collapsible.svelte';
</script>

<div class="flex w-full max-w-7xl flex-col gap-4 p-8 mx-auto">
  <h1
    class="bg-linear-to-bl from-zinc-500 to-zinc-800 bg-clip-text text-6xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
  >
    About
  </h1>

  <p>Find answers to various frequently asked questions about Titanium below.</p>
  <div class="flex w-full flex-col gap-3">
    <Collapsible title="What is Titanium?">
      Titanium is a multipurpose, open source Discord bot designed to enhance your Discord
      experience. It can be added to your server to provide features like moderation, logging,
      starboard, leaderboard and more, or it can be added to your account so you can use Titanium's
      commands anywhere on Discord!
    </Collapsible>

    <Collapsible title="How do I add Titanium to my account or server?">
      Adding Titanium is easy! Simply press the <i>Add Bot</i> button on the top of Titanium's
      website, click the <i>Add App</i> button on Titanium's Discord profile, or select a server in
      the web dashboard. Then, select <i>Add to Server</i> to add Titanium to your server, or
      <i>Add to My Apps</i> to use Titanium anywhere.
    </Collapsible>

    <Collapsible title="Who develops Titanium?">
      I <i>(@restartb)</i> am the sole developer of Titanium. Titanium is also open source, meaning anyone
      can contribute to it!
    </Collapsible>

    <Collapsible title="What's new with Titanium v2?">
      Titanium v2 is a full rewrite of Titanium v1. It includes a more stable and updated codebase,
      many new features, and significant improvements to existing features, while maintaining user
      app support. From moderation, to logging, to server engagement with the leaderboard and
      fireboard, to user app features such as image manipulation and web search, Titanium v2 is
      <i>your</i> multipurpose Discord bot.
    </Collapsible>

    <Collapsible title="What is the difference between Titanium v1 and v2?">
      Titanium v1 was the version that started it all. It had a major focus on user app support,
      with many commands available such as image manipulation, Spotify search and more. Titanium v2
      improved on these features, and added several major server focused features, including
      moderation, automod, logging, and more.
    </Collapsible>

    <Collapsible title="How long has Titanium been in development?">
      There are 2 major versions of Titanium - v1 and v2. v1 was in active development from February
      2024, to around August 2025. From then, development on v2 started, with v2 becoming the main
      version of the bot in May 2026. v2 is now the main public version of Titanium.
    </Collapsible>

    <Collapsible title="Why was Titanium created?">
      Back in February 2024, I wanted to create a Discord bot with various utilities for the server
      I use to talk to my IRL friends. Around March 2024, people started to show interest in wanting
      to use it publicly, so I decided to open source it and make it available for everyone to use!
    </Collapsible>

    <Collapsible title="What languages are Titanium written in?">
      The bot itself is written in <strong>Python</strong> with the <strong>discord.py</strong>
      library. The website and dashboard are written using <strong>SvelteKit</strong> and
      <strong>TypeScript!</strong>
    </Collapsible>

    <Collapsible title="Do you sell my data?">
      No. Titanium does not sell your data, or send your data to unwanted third parties.
    </Collapsible>

    <Collapsible title="How can I submit bug reports or feature requests?">
      The best way to submit bug reports or feature requests is to create a post in the <a
        class="underline"
        href={resolve('/server')}>Discord server</a
      >, or use the <code>/feedback</code> command. You can also create an issue in the
      <a class="underline" href="https://github.com/RestartB/Titanium/issues">GitHub repository</a>.
    </Collapsible>

    <Collapsible title="How can I contribute to Titanium?">
      To contribute to Titanium, you can check out the
      <a class="underline" href="https://github.com/RestartB/Titanium">GitHub repository</a>. There,
      you can find the instructions on how to contribute. Contributions are always welcome!
    </Collapsible>

    <Collapsible title="How can I support Titanium?">
      The best way to support Titanium is to use it and share with other people you know! This helps
      Titanium grow and reach more people. :)
    </Collapsible>
  </div>
</div>
