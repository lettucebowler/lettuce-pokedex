import { getPokemonData } from '$lib/util/pokemonData';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }: any) => {
	const { species, variant, form } = params;
	let cached;

	let pokemonData;

	if (!cached) {
		pokemonData = await getPokemonData(species, variant);
	}

	return {
		pokemonData,
		form
	};
};
