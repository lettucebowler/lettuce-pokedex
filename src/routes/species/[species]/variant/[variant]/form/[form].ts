import { getPokemonData } from '$lib/util/pokemonData';

export async function GET({
	params
}: {
	params: { species: string; variant: string; form: string };
}) {
	const { species, variant, form } = params;

	const pokemonData = await getPokemonData(species, variant);

	return {
		headers: {
			'cache-control': 'public, maxage=604800'
		},
		body: {
			pokemonData,
			form
		}
	};
}
