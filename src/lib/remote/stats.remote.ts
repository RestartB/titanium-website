import { query } from '$app/server';
import { env } from '$env/dynamic/private';

import type { botStats } from '$lib/interfaces/stats';

export const getStats = query(async () => {
  try {
    const statsRequeset = await fetch(`${env.TITANIUM_URL}/stats`);
    if (!statsRequeset.ok) {
      return { success: false };
    }

    return { success: true, stats: (await statsRequeset.json()) as botStats };
  } catch {
    return { success: false };
  }
});
