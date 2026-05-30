<script>
  import { resolve } from '$app/paths';
</script>

<footer
  class="border-t-2 border-t-zinc-300 bg-zinc-200 text-base text-zinc-500 dark:border-t-zinc-700 dark:bg-zinc-800"
>
  <nav class="mx-auto flex w-full max-w-7xl items-center justify-center gap-2 p-2 px-4">
    <p class="mr-auto font-bold">
      © 2026, <a
        href="https://restartb.xyz"
        class="font-normal transition-all hover:font-bold hover:text-zinc-700 hover:dark:text-zinc-300"
      >
        Restart
      </a>
    </p>
    <a
      href={resolve('/server')}
      class="transition-all hover:font-bold hover:text-zinc-700 hover:dark:text-zinc-300"
    >
      Support Server
    </a>
    <a
      href={resolve('/terms')}
      class="transition-all hover:font-bold hover:text-zinc-700 hover:dark:text-zinc-300"
    >
      Terms of Use
    </a>
    <a
      href={resolve('/privacy')}
      class="transition-all hover:font-bold hover:text-zinc-700 hover:dark:text-zinc-300"
    >
      Privacy Policy
    </a>
  </nav>
</footer>
