import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	try {
		const response = await fetch('http://localhost:5000/stats');

		if (response.ok) {
			const data = await response.json();

			return json(data);
		} else {
			throw new Error(
				`Titanium server has returned an error - ${response.status}, ${response.text()}`
			);
		}
	} catch (err) {
		console.error('Failed to fetch stats:', err);
		throw error(500, 'Failed to fetch stats');
	}
};
