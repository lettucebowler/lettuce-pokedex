import { getNavEntries } from '$lib/util/pokemonData';

export const csr = false;

export const load: import('./$types').PageServerLoad = async ({ params }) => {
	return {
		navigation: getNavEntries(params?.species || '')
	};
};
