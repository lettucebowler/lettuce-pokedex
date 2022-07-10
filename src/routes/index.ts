export async function get() {
	const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=905`);
	const pokemon = await pokemonResponse.json();
	const { results } = pokemon;

	return {
		body: {
			pokemon: results
		}
	};
}
