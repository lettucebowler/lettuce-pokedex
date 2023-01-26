import { getPokemonData } from '$lib/util/pokemonData';
import type { LayoutServerLoad } from './$types';
import { insertOrUpdatePokemonDetail } from '$lib/client/cloyster';
import { getDetail, stashDetail } from '$lib/client/redis';
import type { PokemonData } from '$lib/types/types';

export const load: LayoutServerLoad = async (event) => {
	const { species, variant, form } = event.params;
	let cached;

	// console.time(`load ${species}-${variant}-${form} detail from cache`);
	// cached = await getDetail(species, variant) as PokemonData;
	// console.timeEnd(`load ${species}-${variant}-${form} detail from cache`);

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

	event.setHeaders({
		'cache-control': 'public, max-age=3153600'
	});

	return {
		pokemonData: cached,
		form
	};
};
