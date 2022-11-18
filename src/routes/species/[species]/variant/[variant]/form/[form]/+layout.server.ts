import { getNavEntries } from '$lib/util/pokemonData';

export let csr = false;

export const load: import('./$types').PageServerLoad = async ({ params }) => {
	return {
		navigation: getNavEntries(params?.species || '')
	};
};
