<script>
  import Link from '$lib/components/Link.svelte';
  import { ArrowLeft } from '@lucide/svelte';
</script>

<div class="mx-auto flex max-w-7xl flex-col gap-4 p-4">
  <div>
    <h1 class="text-4xl font-bold">Website Privacy Policy (previous)</h1>
    <h2 class="text-xl font-semibold">Effective: 01/06/2025</h2>
    <h2 class="text-xl font-semibold">Until: 01/05/2026</h2>
  </div>

  <Link href="/privacy/previous" title="Back to list">
    <ArrowLeft />Back to list
  </Link>

  <p>
    This document explains how Titanium's website treats your data. <span class="font-bold"
      >Please note that this Privacy Policy only applies to the Titanium bot website
      (https://titanium.fyi/).</span
    >
  </p>

  <section class="flex flex-col gap-2.5" id="data">
    <h2 class="text-xl font-semibold">Stored Data</h2>
    <p>
      When you visit our website, we may collect basic information like IP addresses. This is
      required for the website to function.
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="errors">
    <h2 class="text-xl font-semibold">Cloudflare Analytics</h2>
    <p>
      We make use of Cloudflare Analytics, a privacy first and lightweight analytics solution, to
      get insights for our website. Some of the following data may be collected:
    </p>
    <ul class="list-inside list-disc">
      <li>country</li>
      <li>host operating system</li>
      <li>referrer</li>
      <li>website status code</li>
      <li>page visited</li>
    </ul>

    <p>
      More data may be collected by Cloudflare. For more information, please go to the official <a
        href="https://www.cloudflare.com/en-gb/web-analytics/">Cloudflare Analytics page.</a
      >
    </p>
  </section>

  <section class="flex flex-col gap-2.5" id="data">
    <h2 class="text-xl font-semibold">Font Notice</h2>
    <p>
      Please note that the website uses the <a
        href="https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next"
        >Atkinson Hyperlegible Next</a
      > font, which is hosted by Google Fonts.
    </p>
  </section>
</div>

<style>
  a {
    text-decoration: underline;
  }
</style>
