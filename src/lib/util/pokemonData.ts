const mod = (n: number, base: number) => ((n % base) + base) % base;

const getSpeciesNameFromNumber = async (id: number) => {
	const { species } = await getSpecies(id);
	return {
		id,
		name: species
	};
};

export const getNavEntries = async (species: string) => {
	const pokedexLength = 905;
	const { dexNum: currentNum, species: currentSpecies } = await getSpecies(species);

	const nextNum = mod(currentNum + 1, pokedexLength);
	const previousNum = mod(currentNum - 1, pokedexLength) || pokedexLength;

	const current = {
		id: currentNum,
		name: currentSpecies
	};
	return {
		current,
		next: getSpeciesNameFromNumber(nextNum),
		previous: getSpeciesNameFromNumber(previousNum)
	};
};

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
