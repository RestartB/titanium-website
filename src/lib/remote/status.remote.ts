import { query } from '$app/server';
import { env } from '$env/dynamic/private';

import { historicPingAvg } from '$lib/server/db/schema';
import { db } from '$lib/server/db';

import type { botStatus } from '$lib/interfaces/status';

export const getStatus = query(async () => {
  try {
    const statsRequeset = await fetch(`${env.TITANIUM_URL}/status`);
    if (!statsRequeset.ok) {
      return { connected: false } as botStatus;
    }

    return (await statsRequeset.json()) as botStatus;
  } catch {
    return { connected: false } as botStatus;
  }
});

export const getHistoricPing = query(async () => {
  const pings = await db.select().from(historicPingAvg);
  return pings;
});
