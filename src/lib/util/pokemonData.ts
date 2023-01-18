import type { PokemonNavigation } from '$lib/types/types';

const mod = (n: number, base: number) => ((n % base) + base) % base;

const getSpeciesNameFromNumber = async (id: number) => {
	const { species} = await getSpecies(id);
	return {
		id,
		name: species,
	};
}

export const getNavEntries = async (species: string) => {
	const pokedexLength = 905;
	const {dexNum: currentNum, species: currentSpecies} = await getSpecies(species);

	const nextNum = mod(currentNum + 1, pokedexLength);
	const previousNum = mod(currentNum - 1, pokedexLength) || pokedexLength;

	// const {species: nextSpecies} = await getSpecies(nextNum);
	// const { species: previousSpecies} = await getSpecies(previousNum);
	// const next = {
	// 	id: nextNum,
	// 	name: nextSpecies,
	// };
	const current = {
		id: currentNum,
		name: currentSpecies
	};
	// const previous = {
	// 	id: previousNum,
	// 	name: previousSpecies,
	// };
	return {
		current,
		next: getSpeciesNameFromNumber(nextNum),
		previous: getSpeciesNameFromNumber(previousNum)
	};
};

import { getPokemon, getSpecies, getEvolutionChain } from '$lib/client/pokeapi';

const logDuration = (name: string, before: Date) => {
	const after = new Date();
	const duration = after.getTime() - before.getTime();
	console.log(`${name} loaded: ${duration}`);
};

export const getPokemonData = async (species: string, variant: string) => {
	const before = new Date();
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
	logDuration(species, before);
	return data;
};
