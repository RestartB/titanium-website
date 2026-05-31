import { error } from '@sveltejs/kit';
import { query } from '$app/server';
import { env } from '$env/dynamic/private';

import type { botStats } from '$lib/interfaces/stats';

export const getStats = query(async () => {
  const statsRequeset = await fetch(`${env.TITANIUM_URL}/stats`);
  if (!statsRequeset.ok) {
    return error(500, 'Failed to get stats');
  }

  return (await statsRequeset.json()) as botStats;
});
