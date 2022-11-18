import { getPokemonList } from '$lib/client/cloyster';

export async function load() {
	const documents = await getPokemonList(905, 1);

	return {
		pokemon: documents
	};
}
