import type { PageServerLoad } from './$types';

const routes = import.meta.glob('./*/+page.svelte');

export const load: PageServerLoad = async () => {
  const pages = Object.keys(routes)
    .map((p) => p.split('/')[1])
    .sort()
    .reverse();
  return { pages };
};
