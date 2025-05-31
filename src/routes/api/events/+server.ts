import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    let incidents;

    try {
        const response = await fetch('http://localhost:5002/incidents');

        if (response.ok) {
            incidents = await response.json();
        } else {
            throw new Error(
                `Failed to fetch incidents - ${response.status}, ${response.statusText}`
            );
        }
    } catch (error) {
        console.error('Error fetching incidents:', error);
        return json({ error: 'Failed to fetch incidents' }, { status: 500 });
    }

    return json(incidents);
};
