export type Reference = {
	name: string;
	url: string;
};

export type PokemonVariant = {
	is_default: Boolean;
	pokemon: Reference;
};

type PokemonAbility = {
	ability: {
		ability: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
};

export type PokemonType = {
	slot: number;
	type: {
		name: string;
		url: string;
	};
};

type PokemonEvolutionChain = {
	evolution_details: any;
	evolves_to: PokemonEvolutionChain[];
	is_baby: boolean;
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
	types: PokemonType[];
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
	dexNum: number;
	id: number;
	description: string;
	biology: PokemonBiology;
	evolutionChain: PokemonEvolutionChain;
	variants: PokemonVariant[];
	forms: string[];
	types: PokemonType[];
	navigation: PokemonNavigation;
	genus: string;
};
