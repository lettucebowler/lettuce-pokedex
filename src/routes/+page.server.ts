import { getPokemonList as getApiList } from '$lib/client/pokeapi';

import { getList, stashList } from '$lib/client/redis';
import { getPokemonData } from '$lib/util/pokemonData';

export async function load() {
	const beforeRedis = performance.now();
	const rlist = await getList();
	const afterRedis = performance.now();
	const redisDuration = afterRedis - beforeRedis;
	console.log('redis loaded', redisDuration);

	if (rlist) {
		return {
			pokemon: rlist
		};
	}

	const beforeApi = performance.now();
	const list = await getApiList();
	const afterApi = performance.now();
	const apiDuration = afterApi - beforeApi;
	console.log('api loaded', apiDuration, 'ms');

	const pokemonList = list.results as any[];

	let enhancedList = [];

	for (const p of pokemonList) {
		const detail = await getPokemonData(p.name, 'default');
		const entry = {
			species: p.name,
			types: detail.types,
			id: detail.id
		};
		enhancedList.push(entry);
	}

	stashList(enhancedList);

	return {
		pokemon: enhancedList
	};
}
