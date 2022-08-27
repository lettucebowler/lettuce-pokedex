import { getNavEntries } from '$lib/util/pokemonData';

export const load: import('./$types').LayoutServerLoad = async ({ params }) => {
	console.log(params.species);
	return {
		navigation: getNavEntries(params?.species || '')
	};
};
