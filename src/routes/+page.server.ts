import { getPokemonList } from '$lib/client/cloyster';

export async function load() {
	const documents = await getPokemonList(1, 905);

	return {
		pokemon: documents
	};
}
