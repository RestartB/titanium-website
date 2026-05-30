<script>
  import { resolve } from '$app/paths';
</script>

<footer class="border-t-zinc-300 dark:border-t-zinc-700 border-t-2 text-base text-zinc-500 bg-zinc-200 dark:bg-zinc-800">
  <nav class="w-full flex items-center justify-center gap-2 px-4 p-2 max-w-7xl mx-auto">
    <p class="mr-auto font-bold">© 2026, Restart</p>
    <a href={resolve('/server')} class="hover:font-bold transition-all">Support Server</a>
    <a href={resolve('/server')} class="hover:font-bold transition-all">Terms of Use</a>
    <a href={resolve('/server')} class="hover:font-bold transition-all">Privacy Policy</a>
  </nav>
</footer>
