import { db } from '$lib/server/db/index';
import { incidents } from '$lib/server/db/schema';
import { MAIN_PATH, STAGING_PATH } from '$env/static/private';

async function getIncidents() {
	return await db.select().from(incidents);
}

export async function load() {
	let success = true;
	let mainPFP = '';
	let stagingPFP = '';

	// Get main bot PFP
	try {
		const response = await fetch(MAIN_PATH + '/pfp');

		if (response.ok) {
			mainPFP = (await response.json()).url;
		} else {
			console.error('Error fetching main PFP:', response.status);
		}
	} catch (err) {
		console.error('Error fetching main PFP:', err);
	}

	// Get staging bot PFP
	try {
		const response = await fetch(STAGING_PATH + '/info');

		if (response.ok) {
			stagingPFP = (await response.json()).pfp;
		} else {
			console.error('Error fetching staging PFP:', response.status);
		}
	} catch (err) {
		console.error('Error fetching staging PFP:', err);
	}

	// Set size of PFPs
	if (mainPFP) {
		mainPFP = mainPFP.replace(/\?size=\d+/, '') + '?size=128';
	}

	if (stagingPFP) {
		stagingPFP = stagingPFP.replace(/\?size=\d+/, '') + '?size=128';
	}

	try {
		const incidentsData = await getIncidents();
		return { incidents: incidentsData, success, mainPFP, stagingPFP };
	} catch (error) {
		success = false;
		console.error('Error fetching incidents:', error);

		return { incidents: [], success };
	}
}
