import { getNavEntries } from '$lib/util/pokemonData';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ params }) {
	const { species } = params;
	return {
		navigation: getNavEntries(species || '')
	};
}
