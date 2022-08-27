import { getPokemonList } from '$lib/client/cloyster';

export async function load() {
	const documents = await getPokemonList(1, 60);

	return {
		pokemon: documents
	};
}
