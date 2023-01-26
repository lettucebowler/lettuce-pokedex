import { fetcher } from 'itty-fetcher';
import { POKEAPI_HOST } from '$env/static/private';
import { getDefaultForm } from '$lib/util/filters';
import { filterForms, filterVarieties, cleanupChain } from '$lib/util/filters';
import { pokedex } from '$lib/util/pokedex';

const api = fetcher({
	base: POKEAPI_HOST + '/api/v2'
});

export const getForm = async (id: number) => {
	const formData = await api.get(`/pokemon-form/${id}/`);
	return formData as any;
};

export type PokemonData = {
	abilities: string[];
	height: number;
	weight: number;
	id: number;
	forms: string[];
	types: string[];
};

export const getPokemon = async (species: string, variant: string) => {
	const realVariant = variant === 'default' ? getDefaultForm(species) : variant;
	const variantUrl = `/pokemon/${species}${realVariant !== 'default' ? `-${realVariant}` : ''}`;

	const pokemonData = (await api.get(variantUrl)) as any;

	const { abilities, height, weight, id } = pokemonData;
	return {
		abilities,
		height,
		weight,
		types: pokemonData.types.map((type: { type: { name: string } }) => type.type.name),
		forms: filterForms(species, pokemonData.forms).map((form) => form.name),
		id
	} as PokemonData;
};

export const getSpecies = async (species: string | number) => {
	const speciesUrl = `/pokemon-species/${species}`;
	const speciesData = (await api.get(speciesUrl)) as any;
	const { name, flavor_text_entries, genera, varieties, evolution_chain } = speciesData;
	const description: string =
		flavor_text_entries
			.filter((f: { language: { name: string } }) => f.language.name === 'en')
			.at(-1)?.flavor_text || '';
	const genus: string =
		genera.filter((g: { language: { name: string } }) => g.language.name === 'en')[0]?.genus || '';
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
		genus,
		species: name
	};
};

export const getEvolutionChain = async (id: number) => {
	if (!id) {
		return {
			evolves_to: [],
			species: 'none',
			id: 1
		};
	}

	const evolutionChain = (await api.get(`/evolution-chain/${id}/`)) as any;
	const { chain } = evolutionChain;
	const cleaned = cleanupChain(chain);
	return cleaned;
};

export const getPokemonList = async (start: number = 0, count: number = 905) => {
	const pokemon = (await api.get('/pokemon-species', { limit: 1008 })) as any;
	return pokemon;
};
