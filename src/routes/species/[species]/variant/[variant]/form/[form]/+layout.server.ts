import { getNavEntries } from '$lib/util/pokemonData';

export const load: import('./$types').PageServerLoad = async ({ params }) => {
	return {
		navigation: getNavEntries(params?.species || '')
	};
};
