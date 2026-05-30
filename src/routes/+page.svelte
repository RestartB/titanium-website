<script lang="ts">
  import { resolve } from '$app/paths';

  import Link from '$lib/components/Link.svelte';
  import Embed from '$lib/components/embeds/Embed.svelte';
  import EmbedField from '$lib/components/embeds/EmbedField.svelte';
  import {
    Plus,
    LayoutDashboard,
    CodeXmlIcon,
    Hammer,
    Sparkles,
    Scroll,
    Tag
  } from '@lucide/svelte';

  import restart from '$lib/assets/restart.png?enhanced';

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<span
  class="-z-10 absolute left-0 right-0 w-full h-100 bg-[url('/assets/background_blur.svg')] brightness-120 dark:brightness-50 bg-cover bg-no-repeat bg-center mask-[linear-gradient(to_bottom,black_40%,transparent)]"
></span>

<section class="h-100 w-full flex items-center justify-center p-8 flex-col">
  <div class="flex sm:items-center justify-center gap-4 sm:gap-8 flex-col sm:flex-row">
    <enhanced:img src="$lib/assets/logo.svg" class="h-30 w-fit" alt="Titanium Logo" />
    <div>
      <h1
        class="text-7xl font-bold bg-linear-to-r dark:from-zinc-100 dark:to-zinc-400 from-zinc-500 to-zinc-800 bg-clip-text text-transparent"
      >
        Titanium
      </h1>
      <p class="text-3xl">Your multipurpose Discord bot.</p>
    </div>
  </div>
  <div class="flex gap-2 items-center justify-center mt-4">
    <Link href={resolve('/invite')} class="rounded-full!" title="Add Bot">
      <Plus />
      Add Bot
    </Link>
    <Link href="https://dash.titanium.fyi" class="rounded-full!" title="Dashboard">
      <LayoutDashboard />
      Dashboard
    </Link>
  </div>
</section>

<div class="max-w-7xl mx-auto p-8 pt-0 space-y-8">
  <section class="flex gap-8 items-center">
    <div>
      <span class="flex items-center gap-2 text-3xl font-bold">
        <CodeXmlIcon /> User and Server Support
      </span>
      <p>
        Titanium has first class experiences for users and servers. Add Titanium to your server to
        make use of powerful server features, or add it to your account to use Titanium's commands
        anywhere.
      </p>

      <ul class="list-disc list-inside">
        <li>Full user app support</li>
        <li>Over 80 commands available</li>
        <li>Use slash commands, and prefix commands with 5 custom prefixes</li>
      </ul>
    </div>
  </section>

  <section>
    <span class="flex items-center gap-2 text-3xl font-bold">
      <Hammer /> Powerful Server Features
    </span>

    <p>
      Make use of Titanium's powerful server features to make the lives of your server staff easier.
    </p>

    <ul class="list-disc list-inside">
      <li>Advanced moderation with cases</li>
      <li>Customisable automod with word, malicious link and spam detection</li>
      <li>Bouncer to monitor your members profiles automatically</li>
    </ul>
  </section>

  <section class="flex gap-8 items-center">
    <div>
      <div class="flex gap-2 items-center mb-2">
        <enhanced:img
          src="$lib/assets/logo.svg"
          class="h-12 w-12 rounded-full"
          alt="Titanium Logo"
        />
        <div>
          <p class="font-bold">Titanium</p>
          <p>5 🔥 | @restartb | #important</p>
        </div>
      </div>
      <Embed
        author="@restartb"
        authorImg={restart}
        footer="30/05/2026 20:06"
        colour="#979C9F"
        class="w-80! shrink-0"
      >
        <p>this is a truly amazing message that everyone will enjoy</p>
      </Embed>
    </div>

    <div class="flex-1">
      <span class="flex items-center gap-2 text-3xl font-bold">
        <Sparkles /> Enhance Server Engagement
      </span>

      <p>
        Enhance server engagement using Titanium's wide range of features to entertain your members.
      </p>

      <ul class="list-disc list-inside">
        <li>Leaderboard - track XP, message stats, add levels and more</li>
        <li>Fireboard - advanced starboard system, with mulitple boards supported</li>
        <li>Confessions - let users create anonymous messages, with logging for moderation</li>
      </ul>
    </div>
  </section>

  <section class="flex flex-row-reverse gap-8 items-center">
    <Embed
      title="Message Deleted"
      author="@restartb"
      authorImg={restart}
      colour="#E74E3D"
      class="w-80! shrink-0"
    >
      <p>
        ID: <code>12345678987654321</code><br />
        Channel: <b>#general</b><br />
        Author: <b>@restartb</b><br />
        Total Attachments: <code>0</code>
      </p>

      <EmbedField title="Content">This is a test deleted message :)</EmbedField>
    </Embed>

    <div class="flex-1">
      <span class="flex items-center gap-2 text-3xl font-bold">
        <Scroll /> Log Everything
      </span>

      <p>Log every event that happens in your server with Titanium's advanced logging support.</p>

      <ul class="list-disc list-inside">
        <li>Server Settings, Messages, Members, Roles, Reactions, Moderation and more</li>
        <li>70+ logging events available</li>
        <li>Information filled embeds</li>
      </ul>
    </div>
  </section>

  <section>
    <span class="flex items-center gap-2 text-3xl font-bold">
      <Tag /> Respond with Tags
    </span>

    <p>
      Create quick responses to use server wide, or in any server when Titanium is added to your
      account.
    </p>

    <ul class="list-disc list-inside">
      <li>Server wide or user specific tags</li>
      <li>Use prefix, as well as slash commands</li>
      <li>Create up to 250 tags per user or server</li>
    </ul>
  </section>

  <section class="flex flex-row-reverse gap-8 items-center">
    <div class="w-80 shrink-0">
      <enhanced:img
        src="$lib/assets/dashboard.png"
        class="rounded-lg border-2 border-zinc-300 dark:border-zinc-700"
        alt="Titanium Dashboard's home page"
      />
    </div>

    <div class="flex-1">
      <span class="flex items-center gap-2 text-3xl font-bold">
        <LayoutDashboard /> Custom Dashboard
      </span>

      <p>
        No need to use clunky configuration commands - simply use Titanium's beautiful, fully custom
        web dashboard.
      </p>

      <ul class="list-disc list-inside">
        <li>Customise all parts of Titanium</li>
        <li>Monitor cases and add case comments</li>
        <li>Add roles as managers to grant access</li>
      </ul>
    </div>
  </section>
</div>

<section class="relative flex-col h-100 flex items-center justify-center gap-4 p-8">
  <span
    class="-z-10 dark:brightness-50 left-0 absolute right-0 w-full h-100 bg-[url('/assets/background_blur.svg')] brightness-120 bg-cover bg-no-repeat bg-center mask-[linear-gradient(to_top,black_40%,transparent)]"
  ></span>

  <h3 class="z-10 text-center text-2xl">
    Ready? Join <b>413</b> users and <b>175</b> servers and
  </h3>
  <h1
    class="z-10 bg-linear-to-bl from-zinc-500 to-zinc-800 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-center text-6xl font-bold text-transparent dark:drop-shadow-[0_0_15px_rgba(168,162,158,0.4)] drop-shadow-[0_0_15px_rgba(244,244,245,0.4)]"
  >
    Enhance your Discord experience
  </h1>

  <div class="flex gap-2 items-center justify-center mt-2">
    <Link href={resolve('/invite')} class="rounded-full!" title="Add Bot">
      <Plus />
      Add Bot
    </Link>
    <Link href="https://dash.titanium.fyi" class="rounded-full!" title="Dashboard">
      <LayoutDashboard />
      Dashboard
    </Link>
  </div>
</section>
