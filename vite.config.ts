import tailwindcss from '@tailwindcss/vite';

import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

import Icons from 'unplugin-icons/vite'

import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
		})
	]
});
