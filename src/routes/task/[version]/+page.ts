import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		version: params.version
	};
}) satisfies PageLoad;
