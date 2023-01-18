import { getPokemonData } from '$lib/util/pokemonData';
import type { PageServerLoad } from './$types';
import { insertOrUpdatePokemonDetail } from '$lib/client/cloyster';

export const load: PageServerLoad = async ({ params }: any) => {
	const { species, variant, form } = params;
	let cached;

	let pokemonData;

	if (!cached) {
		pokemonData = await getPokemonData(species, variant);
	}

	if (pokemonData) {
		insertOrUpdatePokemonDetail(pokemonData);
	}

	return {
		pokemonData,
		form
	};
};
