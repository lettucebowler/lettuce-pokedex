import { getPokemonList } from '$lib/client/cloyster';
import { getList, stashList } from '$lib/client/redis';
export async function load() {
	let cached;
	console.time('get pokemon list from redis');
	cached = await getList();
	console.timeEnd('get pokemon list from redis');

	if (!cached) {
		console.time('load pokemon list');
		const list = await getPokemonList();
		console.timeEnd('load pokemon list');
		stashList(list);
		return {
			pokemonList: list
		};
	}

	return {
		pokemon: cached
	};
}
