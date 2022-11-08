import { getPokemonData } from '$lib/util/pokemonData';

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }: any) => {
	const { species, variant, form } = params;
	let cached;

	let pokemonData;

	if (!cached) {
		pokemonData = await getPokemonData(species, variant);
	}

	if (!pokemonData) {
		return error(404);
	}

	return {
		pokemonData,
		form
	};
};
