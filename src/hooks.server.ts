import { env } from '$env/dynamic/private';
import cron from 'node-cron';

import { db } from '$lib/server/db';
import { historicPing } from '$lib/server/db/schema';

import type { botStatus } from '$lib/interfaces/status';

cron.schedule('* * * * *', async () => {
  try {
    const request = await fetch(`${env.TITANIUM_URL}/status`);

    if (!request.ok) {
      console.error(
        'Failed to get Titanium status for historic ping: ',
        request.status,
        request.statusText
      );
      await db.insert(historicPing).values({ ping: null });
      return;
    }

    const data: botStatus = await request.json();
    await db.insert(historicPing).values({ ping: data.latency });
  } catch {
    console.log("Failed to log Titanium ping")
    await db.insert(historicPing).values({ ping: null });
  }
});
