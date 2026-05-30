<script lang="ts">
  import { resolve } from '$app/paths';

  import Link from '$lib/components/Link.svelte';
  import logo from '$lib/assets/logo.svg';
  import { Plus, Wrench } from '@lucide/svelte';

  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<span
  class="-z-10 absolute left-0 right-0 w-full h-100 bg-[url('/assets/background_blur.svg')] brightness-120 bg-cover bg-no-repeat bg-center mask-[linear-gradient(to_bottom,black_40%,transparent)]"
></span>

<section class="h-100 w-full flex items-center justify-center p-4 flex-col">
  <div class="flex sm:items-center justify-center gap-8 flex-col sm:flex-row">
    <img src={logo} class="h-30 w-fit" alt="Titanium Logo" />
    <div>
      <h1
        class="text-7xl font-bold bg-linear-to-r from-zinc-500 to-zinc-800 bg-clip-text text-transparent"
      >
        Titanium
      </h1>
      <p class="text-3xl">Your multipurpose Discord bot.</p>
    </div>
  </div>
  <div class="flex gap-2 items-center justify-center mt-2">
    <Link href={resolve('/invite')} class="rounded-full!" title="Add Bot">
      <Plus />
      Add Bot
    </Link>
    <Link href="https://dash.titanium.fyi" class="rounded-full!" title="Dashboard">
      <Wrench />
      Dashboard
    </Link>
  </div>
</section>

<div class="max-w-7xl mx-auto p-4 pt-0 space-y-4">
  <section>
    <h2 class="text-3xl font-bold">User and Server Support</h2>
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
  </section>

  <section>
    <h2 class="text-3xl font-bold">Log Everything</h2>
    <p>Log every event that happens in your server with Titanium's advanced logging support.</p>

    <ul class="list-disc list-inside">
      <li>Server Settings, Messages, Members, Roles, Reactions and more</li>
      <li>70+ logging events available</li>
      <li>Information filled embeds</li>
    </ul>
  </section>

  <section>
    <h2 class="text-3xl font-bold">Powerful Server Features</h2>
    <p>
      Make use of Titanium's powerful server features to make the lives of your server staff easier.
    </p>

    <ul class="list-disc list-inside">
      <li>Advanced moderation with cases</li>
      <li>Customisable automod with word, malicious link and spam detection</li>
      <li>Bouncer to monitor your members profiles automatically</li>
    </ul>
  </section>

  <section>
    <h2 class="text-3xl font-bold">Enhance Server Engagement</h2>
    <p>
      Enhance server engagement using Titanium's wide range of features to entertain your members.
    </p>

    <ul class="list-disc list-inside">
      <li>Leaderboard - track XP, message stats, add levels and more</li>
      <li>Fireboard - advanced starboard system, with mulitple boards supported</li>
      <li>Confessions - let users create anonymous messages, with logging for moderation</li>
    </ul>
  </section>

  <section>
    <h2 class="text-3xl font-bold">Respond with Tags</h2>
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

  <section>
    <h2 class="text-3xl font-bold">Custom Dashboard</h2>
    <p>
      No need to use clunky configuration commands - simply use Titanium's beautiful, fully custom
      web dashboard.
    </p>

    <ul class="list-disc list-inside">
      <li>Customise all parts of Titanium</li>
      <li>Monitor cases and add case comments</li>
      <li>Add roles as managers to grant access</li>
    </ul>
  </section>
</div>
