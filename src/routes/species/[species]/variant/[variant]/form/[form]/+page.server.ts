import { getPokemonData } from '$lib/util/pokemonData';
import { getPokemonDetail, insertOrUpdatePokemonDetail } from '$lib/client/cloyster';

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }: any) => {
	const { species, variant, form } = params;

	const dbStuff = await getPokemonDetail(species, variant);

	let pokemonData;

	if (!dbStuff) {
		pokemonData = await getPokemonData(species, variant);
		await insertOrUpdatePokemonDetail(pokemonData);
	}
	return {
		pokemonData: dbStuff || pokemonData,
		form
	};
};
