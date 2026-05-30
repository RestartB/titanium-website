import type { PageServerLoad } from './$types';

export const load = (async () => {
  return { userCount: 413, serverCount: 175 };
}) satisfies PageServerLoad;
