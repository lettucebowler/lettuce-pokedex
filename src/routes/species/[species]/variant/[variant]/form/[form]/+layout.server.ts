import { getNavEntries } from '$lib/util/pokemonData';
import { dev } from '$app/environment';

export let csr = dev;

export const load: import('./$types').PageServerLoad = async ({ params }) => {
	return {
		navigation: getNavEntries(params?.species || '')
	};
};
