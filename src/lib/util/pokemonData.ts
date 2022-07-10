import { pokedex } from './pokedex';
import type { PokemonData, PokemonVariant, PokemonNavigation } from '$lib/types/types';

const varietyFilters: { [x: string]: boolean } = {
	'floette-eternal': true,
	'rockruff-own-tempo': true,
	'minior-orange-meteor': true,
	'minior-yellow-meteor': true,
	'minior-green-meteor': true,
	'minior-blue-meteor': true,
	'minior-indigo-meteor': true,
	'minior-violet-meteor': true,
	'gumshoos-totem': true,
	'araquanid-totem': true,
	'lurantis-totem': true,
	'salazzle-totem': true,
	'marowak-totem': true,
	'vikavolt-totem': true,
	'togedemaru-totem': true,
	'mimikyu-totem-disguised': true,
	'mimikyu-totem-busted': true,
	'kommo-o-totem': true,
	'ribombee-totem': true,
	'raticate-totem-alola': true,
	'zygarde-10-power-construct': true,
	'zygarde-50-power-construct': true,
	'greninja-battle-bond': true,
	'pikachu-rock-star': true,
	'pikachu-belle': true,
	'pikachu-pop-star': true,
	'pikachu-phd': true,
	'pikachu-libre': true,
	'pikachu-cosplay': true,
	'pikachu-starter': true,
	'eevee-starter': true,
	'basculegion-female': true
};

const formFilters = ['pichu-spiky-eared', 'arceus-unknown', 'enamorus-incarnate'];

const formSpeciesFilters = ['scatterbug', 'spewpa', 'sinistea', 'polteageist', 'mothim'];

const getNavEntries = (dexNum: number): PokemonNavigation => {
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

const getForm = async (formLink: any) => {
	const url = formLink.url;
	const formResponse = await fetch(url);
	const formData = await formResponse.json();
	return formData;
};

const getPokemon = async (variety: any) => {
	const url = variety.pokemon.url;
	const pokemonResponse = await fetch(url);
	const pokemon = await pokemonResponse.json();
	const { forms, abilities, height, weight, types, id } = pokemon;

	const formData = forms?.length ? await getForm(forms[0]) : {};
	const name = formData?.names?.length ? formData.names.at(-1).name : '';
	const formName = formData.name;
	return {
		abilities,
		height,
		weight,
		types,
		id,
		name,
		formName,
		forms: filterForms(variety.pokemon.name, forms)
	};
};

const filterVarieties = (varieties: any[]) => {
	return varieties.filter((v: any) => {
		return !varietyFilters[v.pokemon.name];
	});
};

const filterForms = (species: string, forms: any[]) => {
	return forms.filter(
		(f) => !formFilters.includes(f.name) && !formSpeciesFilters.includes(species)
	);
};

const getEvolutionChain = async (url: string) => {
	if (!url) {
		return null;
	}

	const chainResponse = await fetch(url);

	const evolutionChain = await chainResponse.json();
	const { chain } = evolutionChain;
	return chain;
};

export const getPokemonData = async (species: string, variant: string): Promise<PokemonData> => {
	const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${species}`;

	const speciesResponse = await fetch(speciesUrl);
	const speciesData = await speciesResponse.json();
	const { name, flavor_text_entries, genera, pokedex_numbers, varieties, evolution_chain } =
		speciesData;
	const description: string = flavor_text_entries
		.filter((f: { language: { name: string } }) => f.language.name === 'en')
		.at(-1).flavor_text;
	const genus: string = genera.filter(
		(g: { language: { name: string } }) => g.language.name === 'en'
	)[0].genus;
	const dexNum =
		pokedex_numbers.filter((d: { pokedex: { name: string } }) => d.pokedex.name === 'national')[0]
			?.entry_number || speciesData.id;

	const variants = filterVarieties(varieties);

	const selectedVariant = variants.filter((v: PokemonVariant) => {
		if (variant === 'default') {
			return v.is_default;
		} else {
			return v.pokemon.name === `${species}-${variant}`;
		}
	})[0];
	const navigation = getNavEntries(dexNum);

	const pokemonPromise = getPokemon(selectedVariant);
	const evolutionChainPromise = getEvolutionChain(evolution_chain?.url);

	const [pokemon, evolutionChain] = await Promise.all([pokemonPromise, evolutionChainPromise]);

	return {
		species: name,
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
		navigation,
		genus,
		id: pokemon.id
	};
};
