import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	try {
		const response = await fetch('http://localhost:5000/status');

		if (response.ok) {
			const data = await response.json();

			return json(data);
		} else {
			throw new Error(
				`Titanium server has returned an error - ${response.status}, ${response.text()}`
			);
		}
	} catch {
		const data = {
			ready: false,
		};

		return json(data)
	}
};
