import { getPokemonList as getApiList } from '$lib/client/pokeapi';

import { getList, stashList } from '$lib/client/redis';
import { getPokemonData } from '$lib/util/pokemonData';

export async function load() {
	const beforeRedis = new Date().getTime();
	const rlist = await getList();
	const afterRedis = new Date().getTime();
	console.log('redis loaded', afterRedis - beforeRedis);

	if (rlist) {
		return {
			pokemon: rlist
		};
	}

	const beforeApi = new Date().getTime();
	const list = await getApiList();
	const afterApi = new Date().getTime();
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
