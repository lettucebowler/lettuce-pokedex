import { getPokemonData } from '$lib/util/pokemonData';
import type { PageServerLoad } from './$types';
import { insertOrUpdatePokemonDetail } from '$lib/client/cloyster';
import { getDetail, stashDetail } from '$lib/client/redis';

export const load: PageServerLoad = async ({ params }: any) => {
	const { species, variant, form } = params;
	let cached;

	console.time(`load ${species}-${variant}-${form} detail from cache`);
	cached = await getDetail(species, variant);
	console.timeEnd(`load ${species}-${variant}-${form} detail from cache`);

	let pokemonData;

	if (!cached) {
		console.time(`load ${species}-${variant}-${form} detail from api`);
		pokemonData = await getPokemonData(species, variant);
		console.timeEnd(`load ${species}-${variant}-${form} detail from api`);
		insertOrUpdatePokemonDetail(pokemonData);
		stashDetail(pokemonData);
		return {
			pokemonData,
			form
		};
	}

	return {
		pokemonData: cached,
		form
	};
};
