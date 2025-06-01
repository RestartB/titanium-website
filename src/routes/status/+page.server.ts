import { db } from '$lib/server/db/index';
import { incidents } from '$lib/server/db/schema';

async function getIncidents() {
	return await db.select().from(incidents);
}

export async function load() {
	let success = true;
	let mainPFP = '';
	let privatePFP = '';

	// Get main bot PFP
	try {
		const response = await fetch('http://localhost:5000/pfp');

		if (response.ok) {
			mainPFP = (await response.json()).url;
		} else {
			console.error('Error fetching main PFP:', response.status);
		}
	} catch (err) {
		console.error('Error fetching main PFP:', err);
	}

	// Get private bot PFP
	try {
		const response = await fetch('http://localhost:5001/pfp');

		if (response.ok) {
			privatePFP = (await response.json()).url;
		} else {
			console.error('Error fetching private PFP:', response.status);
		}
	} catch (err) {
		console.error('Error fetching private PFP:', err);
	}

	// Set size of PFPs
	if (mainPFP) {
		mainPFP = mainPFP.replace(/\?size=\d+/, '') + '?size=128';
	}

	if (privatePFP) {
		privatePFP = privatePFP.replace(/\?size=\d+/, '') + '?size=128';
	}

	try {
		const incidentsData = await getIncidents();
		return { incidents: incidentsData, success, mainPFP, privatePFP };
	} catch (error) {
		success = false;
		console.error('Error fetching incidents:', error);

		return { incidents: [], success };
	}
}
