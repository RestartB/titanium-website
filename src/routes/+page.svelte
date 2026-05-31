<script lang="ts">
  import { resolve } from '$app/paths';
  import { getStats } from '$lib/remote/stats.remote';

  import LinkButton from '$lib/components/LinkButton.svelte';
  import Embed from '$lib/components/embeds/Embed.svelte';
  import EmbedField from '$lib/components/embeds/EmbedField.svelte';
  import restart from '$lib/assets/restart.png?enhanced';
  import {
    Plus,
    LayoutDashboard,
    CodeXmlIcon,
    Hammer,
    Sparkles,
    Scroll,
    Tag
  } from '@lucide/svelte';
</script>

<span
  class="absolute right-0 left-0 -z-10 h-100 w-full bg-[url('/assets/background_blur.svg')] mask-[linear-gradient(to_bottom,black_40%,transparent)] bg-cover bg-center bg-no-repeat brightness-120 dark:brightness-50"
></span>

<section class="flex h-100 w-full flex-col items-center justify-center p-8">
  <div class="flex flex-col justify-center gap-4 sm:flex-row sm:items-center sm:gap-8">
    <enhanced:img src="$lib/assets/logo.svg" class="h-30 w-fit" alt="Titanium Logo" />
    <div>
      <h1
        class="bg-linear-to-r from-zinc-500 to-zinc-800 bg-clip-text text-7xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400"
      >
        Titanium
      </h1>
      <p class="text-3xl">Your multipurpose Discord bot.</p>
    </div>
  </div>
  <div class="mt-4 flex items-center justify-center gap-2">
    <LinkButton href={resolve('/invite')} class="rounded-full!" title="Add Bot">
      <Plus />
      Add Bot
    </LinkButton>
    <LinkButton href="https://dash.titanium.fyi" class="rounded-full!" title="Dashboard">
      <LayoutDashboard />
      Dashboard
    </LinkButton>
  </div>
</section>

<div class="mx-auto max-w-7xl space-y-10 p-8 py-20 md:space-y-20">
  <section class="flex flex-col gap-8 md:flex-row md:items-center">
    <div class="w-80 shrink-0">
      <p
        class="bg-linear-to-bl from-zinc-400 to-zinc-900 bg-clip-text text-8xl font-black text-transparent md:text-center dark:from-zinc-200 dark:to-zinc-600 dark:drop-shadow-[0_0_15px_rgba(244,244,245,0.4)]"
      >
        80+
      </p>
      <p class="text-4xl font-semibold md:text-center">commands</p>
    </div>

    <div class="flex-1">
      <span class="flex items-center gap-2 text-3xl font-bold">
        <CodeXmlIcon /> User and Server Support
      </span>
      <p>
        Titanium has first class experiences for users and servers. Add Titanium to your server to
        make use of powerful server features, or add it to your account to use Titanium's commands
        anywhere.
      </p>

      <ul class="mt-2 list-inside list-disc">
        <li>Full <b>user app</b> support</li>
        <li>Over <b>80 commands</b> available</li>
        <li>Use <b>slash commands</b>, and <b>prefix commands with 5 custom prefixes</b></li>
      </ul>
    </div>
  </section>

  <hr class="text-zinc-600 md:hidden" />

  <section class="flex flex-col gap-8 md:flex-row-reverse md:items-center">
    <div class="w-80 shrink-0">
      <div class="mb-2 flex items-center gap-2">
        <enhanced:img
          src="$lib/assets/default.png"
          class="h-12 w-12 rounded-full"
          alt="Default Discord PFP"
        />
        <div>
          <p class="font-bold">ShutdownB</p>
          <p>I'm the REAL restartb...</p>
        </div>
      </div>

      <div class="mb-2 flex gap-2">
        <enhanced:img
          src="$lib/assets/logo.svg"
          class="h-12 w-12 rounded-full"
          alt="Titanium Logo"
        />
        <div class="w-full flex-1">
          <p class="font-bold">Titanium</p>
          <Embed
            title="✅ Banned"
            footer="@restartb"
            footerImg={restart}
            colour="#2FCC70"
            class="w-full! shrink-0"
          >
            <p>
              Target: <b>@shutdownb</b><br />
              Reason: <b>Impersonating me</b>
            </p>
          </Embed>
        </div>
      </div>
    </div>

    <div class="flex-1">
      <span class="flex items-center gap-2 text-3xl font-bold">
        <Hammer /> Powerful Server Features
      </span>

      <p>
        Make use of Titanium's powerful server features to make the lives of your server staff
        easier.
      </p>

      <ul class="mt-2 list-inside list-disc">
        <li><b>Advanced moderation</b> with cases</li>
        <li><b>Customisable automod</b> with word, malicious link and spam detection</li>
        <li><b>Bouncer</b> to monitor your members profiles automatically</li>
      </ul>
    </div>
  </section>

  <hr class="text-zinc-600 md:hidden" />

  <section class="flex flex-col gap-8 md:flex-row md:items-center">
    <div class="w-80 shrink-0">
      <div class="mb-2 flex items-center gap-2">
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

      <ul class="mt-2 list-inside list-disc">
        <li><b>Leaderboard - </b> XP, message stats, add levels and more</li>
        <li><b>Fireboard - </b> starboard system, with mulitple boards supported</li>
        <li><b>Confessions - </b> users create anonymous messages, with logging for moderation</li>
      </ul>
    </div>
  </section>

  <hr class="text-zinc-600 md:hidden" />

  <section class="flex flex-col gap-8 md:flex-row-reverse md:items-center">
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

      <ul class="mt-2 list-inside list-disc">
        <li><b>Server Settings, Messages, Members, Roles, Reactions, Moderation</b> and more</li>
        <li><b>70+ logging events</b> available</li>
        <li>Information filled embeds</li>
      </ul>
    </div>
  </section>

  <hr class="text-zinc-600 md:hidden" />

  <section class="flex flex-col gap-8 md:flex-row md:items-center">
    <div class="w-80 shrink-0">
      <div class="mb-2 flex items-center gap-2">
        <enhanced:img src={restart} class="h-12 w-12 rounded-full" alt="Default Discord PFP" />
        <div>
          <p class="font-bold">Restart</p>
          <p>t!bee</p>
        </div>
      </div>

      <div class="mb-2 flex gap-2">
        <enhanced:img
          src="$lib/assets/logo.svg"
          class="h-12 w-12 rounded-full"
          alt="Titanium Logo"
        />
        <div class="w-full flex-1">
          <p class="font-bold">Titanium</p>
          <p>
            According to all known laws of aviation, there is no way that a bee should be able to
            fly. Its wings are too small to get its fat little body off the ground.
          </p>
        </div>
      </div>
    </div>

    <div class="flex-1">
      <span class="flex items-center gap-2 text-3xl font-bold">
        <Tag /> Respond with Tags
      </span>

      <p>
        Create quick responses to use server wide, or in any server when Titanium is added to your
        account.
      </p>

      <ul class="mt-2 list-inside list-disc">
        <li><b>Server wide</b> or <b>user specific</b> tags</li>
        <li>Use <b>prefix</b>, as well as <b>slash commands</b></li>
        <li>Create up to <b>250 tags</b> per user or server</li>
      </ul>
    </div>
  </section>

  <hr class="text-zinc-600 md:hidden" />

  <section class="flex flex-col gap-8 md:flex-row-reverse md:items-center">
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

      <ul class="mt-2 list-inside list-disc">
        <li>Customise <b>all parts</b> of Titanium</li>
        <li><b>Monitor cases</b> and add case comments</li>
        <li><b>Add roles as managers</b> to grant access</li>
      </ul>
    </div>
  </section>
</div>

<section class="relative flex h-100 flex-col items-center justify-center gap-4 p-8">
  <span
    class="absolute right-0 left-0 -z-10 h-100 w-full bg-[url('/assets/background_blur.svg')] mask-[linear-gradient(to_top,black_40%,transparent)] bg-cover bg-center bg-no-repeat brightness-120 dark:brightness-50"
  ></span>

  <h3 class="z-10 text-center text-2xl">
    Ready? Join <b>{(await getStats()).user_count}</b> users and
    <b>{(await getStats()).server_count}</b> servers and
  </h3>
  <h1
    class="z-10 bg-linear-to-bl from-zinc-500 to-zinc-800 bg-clip-text text-center text-6xl/tight font-bold text-transparent drop-shadow-[0_0_15px_rgba(244,244,245,0.4)] dark:from-zinc-100 dark:to-zinc-400 dark:drop-shadow-[0_0_15px_rgba(168,162,158,0.4)]"
  >
    Enhance your Discord experience
  </h1>

  <div class="mt-2 flex items-center justify-center gap-2">
    <LinkButton href={resolve('/invite')} class="rounded-full!" title="Add Bot">
      <Plus />
      Add Bot
    </LinkButton>
    <LinkButton href="https://dash.titanium.fyi" class="rounded-full!" title="Dashboard">
      <LayoutDashboard />
      Dashboard
    </LinkButton>
  </div>
</section>
