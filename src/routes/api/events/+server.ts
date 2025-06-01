import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { db } from '$lib/server/db/index';
import { incidents } from '$lib/server/db/schema';

export const GET: RequestHandler = async () => {
	let incidentsRaw;

	try {
		incidentsRaw = await db.select().from(incidents);
	} catch (error) {
		console.error('Error fetching incidents:', error);
		return json({ error: 'Failed to fetch incidents' }, { status: 500 });
	}

	return json(incidentsRaw);
};
