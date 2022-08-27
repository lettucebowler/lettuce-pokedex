import { getPokemonList } from '$lib/client/cloyster';

export async function load() {
	const documents = await getPokemonList(0, 905);
	const enhanced = documents;

	return {
		pokemon: enhanced
	};
}
