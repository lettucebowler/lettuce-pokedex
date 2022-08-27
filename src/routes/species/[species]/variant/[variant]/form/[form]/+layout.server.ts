import { getNavEntries } from '$lib/util/pokemonData';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ params }) {
	console.log(params.species);
	return {
		navigation: getNavEntries(params?.species || '')
	};
}
