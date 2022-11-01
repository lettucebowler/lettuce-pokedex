import { getPokemonData } from '$lib/util/pokemonData';
import { getPokemonDetail, insertOrUpdatePokemonDetail } from '$lib/client/cloyster';
import { getDetail, stashDetail } from '$lib/client/redis';

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }: any) => {
	const { species, variant, form } = params;

	const cached = await getDetail(species, variant);

	// const dbStuff = await getPokemonDetail(species, variant);

	let pokemonData;

	if (!cached) {
		pokemonData = await getPokemonData(species, variant);
		// await insertOrUpdatePokemonDetail(pokemonData);
		await stashDetail(pokemonData);
	}

	return {
		pokemonData: cached || pokemonData,
		form
	};
};
