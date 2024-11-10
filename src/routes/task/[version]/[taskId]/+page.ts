import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		taskId: params.taskId,
		version: params.version
	};
}) satisfies PageLoad;
