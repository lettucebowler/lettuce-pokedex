import { getPokemonData } from '$lib/util/pokemonData';
import { getDetail, stashDetail } from '$lib/client/redis';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }: any) => {
	const { species, variant, form } = params;

	// const cached = await getDetail(species, variant);

	// const dbStuff = await getPokemonDetail(species, variant);
	let cached;

	let pokemonData;

	if (!cached) {
		pokemonData = await getPokemonData(species, variant);
		// await insertOrUpdatePokemonDetail(pokemonData);
		// await stashDetail(pokemonData);
	}

	if (!pokemonData) {
		return error(404);
	}

	return {
		pokemonData,
		form
	};
};
