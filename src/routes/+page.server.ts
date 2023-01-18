import { getPokemonList } from '$lib/client/cloyster';
export async function load() {
	const beforeApi = new Date().getTime();
	const list = await getPokemonList();
	const afterApi = new Date().getTime();
	const apiDuration = afterApi - beforeApi;
	console.log('api loaded', apiDuration, 'ms');

	const pokemonList = list as any[];

	return {
		pokemon: pokemonList,
	};
}
