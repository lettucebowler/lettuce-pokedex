import { getPokemonList } from '$lib/client/cloyster';
// import { getPokemonList } from '$lib/client/redis';

export async function load() {
	const documents = await getPokemonList(905, 1);

	return {
		pokemon: documents
	};
}
