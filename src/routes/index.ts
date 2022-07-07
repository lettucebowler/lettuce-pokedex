import { variables } from '$lib/variables';
export async function get() {
	console.log(variables.imageHost);
	const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=898`);
	const pokemon = await pokemonResponse.json();
	const { results } = pokemon;

	return {
		body: {
			pokemon: results
		}
	};
}
