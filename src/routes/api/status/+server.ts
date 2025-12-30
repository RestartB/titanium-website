import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	let mainData;
	let stagingData;

	// Main bot status
	try {
		const response = await fetch('http://localhost:5000/status');

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
		const response = await fetch('http://localhost:5100/status');

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
