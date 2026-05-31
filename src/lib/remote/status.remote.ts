import { error } from '@sveltejs/kit';
import { query } from '$app/server';
import { env } from '$env/dynamic/private';

import { historicPing } from '$lib/server/db/schema';
import { db } from '$lib/server/db';

import type { botStatus } from '$lib/interfaces/status';

export const getStatus = query(async () => {
  const statsRequeset = await fetch(`${env.TITANIUM_URL}/status`);
  if (!statsRequeset.ok) {
    return error(500, 'Failed to get status');
  }

  return (await statsRequeset.json()) as botStatus;
});

export const getHistoricPing = query(async () => {
  const pings = await db.select().from(historicPing);
  return pings;
});
