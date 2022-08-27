import { getNavEntries } from '$lib/util/pokemonData';

export const load: import('./$types').PageServerLoad = async ({ params }) => {
	console.log(params.species);
	return {
		navigation: getNavEntries(params?.species || '')
	};
};
