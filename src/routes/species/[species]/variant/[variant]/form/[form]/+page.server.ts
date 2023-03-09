import { getPokemonData } from '$lib/util/pokemonData';
import type { LayoutServerLoad } from './$types';
import { insertOrUpdatePokemonDetail } from '$lib/client/cloyster';
export let csr = false;
export const load: LayoutServerLoad = async (event) => {
	const { species, variant, form } = event.params;
	let cached;

	let pokemonData;

	if (!cached) {
		console.time(`load ${species}-${variant}-${form} detail from api`);
		pokemonData = await getPokemonData(species, variant);
		console.timeEnd(`load ${species}-${variant}-${form} detail from api`);
		insertOrUpdatePokemonDetail(pokemonData);
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
