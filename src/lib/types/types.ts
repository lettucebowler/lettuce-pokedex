export type Reference = {
	name: string;
	url: string;
};

export type PokemonVariant = {
	is_default: boolean;
	pokemon: {
		name: string;
		id: number;
	};
};

type PokemonAbility = {
	ability: {
		ability: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
};

type PokemonEvolutionChain = {
	evolves_to: PokemonEvolutionChain[];
	species: Reference;
};

export type PokemonSpecies = {
	description: string;
	genus: string;
	dexNum: number;
	varieties: PokemonVariant[];
	species: string;
	variant: string;
	abilities: PokemonAbility[];
	height: number;
	weight: number;
	types: string[];
	id: 1;
	name: string;
	formName: string;
	forms: Reference[];
	next: string;
	previous: string;
	evolutionChain: PokemonEvolutionChain;
};

export type PokemonNavigation = {
	current: {
		id: number;
		name: string;
	};
	next: {
		id: number;
		name: string;
	};
	previous: {
		id: number;
		name: string;
	};
};

export type PokemonBiology = {
	height: number;
	weight: number;
};

export type PokemonData = {
	species: string;
	variant: string;
	dexNum: number;
	id: number;
	description: string;
	biology: PokemonBiology;
	evolutionChain: PokemonEvolutionChain;
	variants: PokemonVariant[];
	forms: string[];
	types: string[];
	genus: string;
};
