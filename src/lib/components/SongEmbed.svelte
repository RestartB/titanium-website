<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	type Props = {
		artist: string;
		artistArtURL: Picture;
		album: string;
		albumArtURL: Picture;
		song: string;
		releaseYear: number;
	};

	let { artist, artistArtURL, album, albumArtURL, song, releaseYear }: Props = $props();
</script>

<div
	class="h-fit overflow-hidden rounded-xl border-2 border-zinc-600 bg-zinc-200 sm:min-w-[310px] dark:bg-zinc-700"
>
	<div class="flex h-fit w-full items-center gap-2 border-l-8 border-(--colour) p-4">
		<div class="mr-auto flex flex-col justify-center gap-1">
			<div class="flex items-center gap-2">
				<enhanced:img src={artistArtURL} alt="Artist" class="h-7.5 w-7.5 rounded-full" />
				<p>{artist}</p>
			</div>

			<div>
				<h3 class="text-2xl font-bold">{song}</h3>
				<p><span class="font-semibold">on {album}</span> - {releaseYear}</p>
			</div>
		</div>

		<enhanced:img src={albumArtURL} alt="Album Art" class="h-20 w-20 rounded-xl" />
	</div>
</div>
