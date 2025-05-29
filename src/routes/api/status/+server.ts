import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	let mainData;
	let privateData;

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

	// Private bot status
	try {
		const response = await fetch('http://localhost:5001/status');

		if (response.ok) {
			privateData = await response.json();
		} else {
			throw new Error(
				`Titanium server has returned an error - ${response.status}, ${response.text()}`
			);
		}
	} catch {
		privateData = {
			ready: false
		};
	}

	return json({
		main: mainData,
		private: privateData
	});
};
