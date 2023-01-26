import { getPokemon, getSpecies, getEvolutionChain } from '$lib/client/pokeapi';

export const getPokemonData = async (species: string, variant: string) => {
	const [speciesData, pokemon] = await Promise.all([
		getSpecies(species),
		getPokemon(species, variant)
	]);
	const { evolution_chain, dexNum, description, variants, genus } = speciesData;
	const chainId = evolution_chain?.url?.split('/')?.at(-2) || 0;
	const evolutionChain = await getEvolutionChain(chainId);

	const data = {
		species,
		variant,
		dexNum,
		description,
		biology: {
			weight: pokemon.weight,
			height: pokemon.height
		},
		evolutionChain,
		variants,
		forms: pokemon.forms,
		types: pokemon.types,
		genus,
		id: pokemon.id
	};
	return data;
};
