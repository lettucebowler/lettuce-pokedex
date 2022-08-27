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

const defaultOverrides = new Map([
	['enamorus', 'incarnate'],
	['urshifu', 'single-strike'],
	['basculegion', 'male'],
	['morpeko', 'full-belly'],
	['indeedee', 'male'],
	['eiscue', 'ice'],
	['pumpkaboo', 'average'],
	['gourgeist', 'average'],
	['darmanitan', 'standard'],
	['wormadam', 'plant'],
	['giratina', 'altered'],
	['basculin', 'red-striped'],
	['zygarde', '50'],
	['toxtricity', 'amped'],
	['shaymin', 'land'],
	['aegislash', 'shield'],
	['meowstic', 'male'],
	['deoxys', 'normal'],
	['oricorio', 'baile'],
	['lycanroc', 'midday'],
	['wishiwashi', 'solo'],
	['meloetta', 'aria'],
	['keldeo', 'ordinary'],
	['landorus', 'incarnate'],
	['thundurus', 'incarnate'],
	['tornadus', 'incarnate'],
	['minior', 'red-meteor'],
	['mimikyu', 'disguised']
]);

const formFilters = ['pichu-spiky-eared', 'arceus-unknown', 'enamorus-incarnate'];

const formSpeciesFilters = ['scatterbug', 'spewpa', 'sinistea', 'polteageist', 'mothim'];

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

const getForm = async (formLink: any) => {
	const url = formLink.url;
	const formResponse = await fetch(url);
	const formData = await formResponse.json();
	return formData;
};

const getPokemon = async (species: string, variant: string) => {
	const realVariant = variant === 'default' ? defaultOverrides.get(species) || 'default' : variant;
	const variantUrl = `https://pokeapi.co/api/v1/pokemon/${species}${
		realVariant !== 'default' ? `-${realVariant}` : ''
	}`;
	console.log(variantUrl);
	const pokemonResponse = await fetch(variantUrl);
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
		forms: filterForms(species, forms)
	};
};

const filterForms = (species: string, forms: any[]) => {
	return forms.filter(
		(f) => !formFilters.includes(f.name) && !formSpeciesFilters.includes(species)
	);
};

const filterVarieties = (varieties: any[]) => {
	return varieties.filter((v: any) => {
		return !varietyFilters[v.pokemon.name];
	});
};

const cleanupChain = (chain: any) => {
	return {
		evolves_to: chain.evolves_to.map((chain: any) => cleanupChain(chain)),
		species: chain.species.name,
		id: parseInt(chain?.species?.url?.split('/').at(-2))
	};
};

const getEvolutionChain = async (url: string) => {
	if (!url) {
		return {
			evolves_to: [],
			species: 'none',
			id: 1
		};
	}

	const chainResponse = await fetch(url);
	const evolutionChain = await chainResponse.json();
	const { chain } = evolutionChain;
	const cleaned = cleanupChain(chain);
	return cleaned;
};

export const getSpecies = async (species: string) => {
	const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${species}`;
	const speciesResponse = await fetch(speciesUrl);
	const speciesData = await speciesResponse.json();
	const { flavor_text_entries, genera, varieties, evolution_chain } = speciesData;
	const description: string = flavor_text_entries
		.filter((f: { language: { name: string } }) => f.language.name === 'en')
		.at(-1).flavor_text;
	const genus: string = genera.filter(
		(g: { language: { name: string } }) => g.language.name === 'en'
	)[0].genus;
	const dexNum = pokedex.indexOf(species) + 1;
	const variants = filterVarieties(varieties).map((variant) => {
		const { is_default, pokemon } = variant;
		const id = parseInt(variant.pokemon.url.split('/').at(-2));
		return { is_default, pokemon: { name: pokemon.name, id, url: pokemon.url } };
	});
	return {
		evolution_chain,
		dexNum,
		description,
		variants,
		genus
	};
};

export const getPokemonData = async (species: string, variant: string): Promise<PokemonData> => {
	const speciesPromise = getSpecies(species);
	const pokemonPromise = getPokemon(species, variant);

	const [speciesData, pokemon] = await Promise.all([speciesPromise, pokemonPromise]);

	const { evolution_chain, dexNum, description, variants, genus } = speciesData;

	const evolutionChain = await getEvolutionChain(evolution_chain?.url);

	let { forms, types } = pokemon;
	forms = forms.map((form) => form.name);
	types = types.map((type: { type: { name: string } }) => type.type.name);

	return {
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
		forms,
		types,
		genus,
		id: pokemon.id
	};
};
