import { json } from '@sveltejs/kit';
import { MAIN_PATH, STAGING_PATH } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	let mainData;
	let stagingData;

	// Main bot status
	try {
		const response = await fetch(MAIN_PATH + '/status');

		if (response.ok) {
			mainData = await response.json();
		} else {
			throw new Error(
				`Titanium server has returned an error - ${response.status}, ${response.text()}`
			);
		}
	} catch {
		mainData = {
			ready: false
		};
	}

	// Staging bot status
	try {
		const response = await fetch(STAGING_PATH + '/status');

		if (response.ok) {
			stagingData = await response.json();
		} else {
			throw new Error(
				`Titanium server has returned an error - ${response.status}, ${response.text()}`
			);
		}
	} catch {
		stagingData = {
			ready: false
		};
	}

	return json({
		main: mainData,
		staging: stagingData
	});
};
