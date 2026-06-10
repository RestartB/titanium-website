import { env } from '$env/dynamic/private';
import cron from 'node-cron';

import { desc, gte } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { historicPing, historicPingAvg } from '$lib/server/db/schema';

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

    // get around the last 3-4 minutes to calculate average
    const fourMinutesAgo = new Date(Date.now() - 4 * 60 * 1000);
    const past = await db
      .select()
      .from(historicPing)
      .orderBy(desc(historicPing.time))
      .where(gte(historicPing.time, fourMinutesAgo))
      .limit(4);

    if (past.length === 0) {
      // nothing to do
      return;
    }
    
    const average =
      past.reduce((sum, row) => sum + (row.ping ? row.ping : 0), 0) / past.length;
    await db.insert(historicPingAvg).values({ ping: average });
  } catch {
    console.log("Failed to log Titanium ping")
    await db.insert(historicPing).values({ ping: null });
  }
});
