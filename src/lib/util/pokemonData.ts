import { pokedex } from './pokedex';
import type { PokemonNavigation } from '$lib/types/types';

export const getNavEntries = (species: string): PokemonNavigation | null => {
	if (!species || !pokedex.includes(species)) {
		return null;
	}
	const dexNum = pokedex.indexOf(species) + 1;
	const next = {
		id: (dexNum % pokedex.length) + 1,
		name: pokedex.at(dexNum % pokedex.length)
	};
	const current = {
		id: dexNum,
		name: pokedex.at(dexNum - 1)
	};
	const previous = {
		id: dexNum === 1 ? pokedex.length : pokedex.indexOf(pokedex.at(dexNum - 1)),
		name: pokedex.at(dexNum - 2)
	};
	return {
		next,
		previous,
		current
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
