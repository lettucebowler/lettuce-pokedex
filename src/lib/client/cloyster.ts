import type { PokemonData } from '$lib/types/types';
import { dbUrl, dbApiKey } from '$lib/variables';

export const getPokemonList = async (start = 1, end = 30) => {
	const body = {
		collection: 'pokemon',
		database: 'Pokemon',
		dataSource: 'Cloyster',
		filter: {
			id: { $gte: start, $lte: end }
		}
	};
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Request-Headers': '*',
			'api-key': dbApiKey,
			Accept: 'application/json'
		},
		body: JSON.stringify(body)
	};

	const rsp = await fetch(`${dbUrl}/action/find`, options);
	const json = await rsp.json();
	const sorted = json.documents.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
	return sorted;
};

export const insertOrUpdatePokemonDetail = async (pokemonData: PokemonData) => {
	const body = {
		collection: 'pokemon',
		database: 'Pokemon',
		dataSource: 'Cloyster',
		update: {
			$set: pokemonData
		},
		filter: { species: pokemonData.species, variant: pokemonData.variant },
		upsert: true
	};
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Request-Headers': '*',
			'api-key': dbApiKey
		},
		body: JSON.stringify(body)
	};
	const rsp = await fetch(`${dbUrl}/action/updateOne`, options);
	const json = await rsp.json();
	return json;
};

export const getPokemonDetail = async (species: string, variant: string) => {
	const body = {
		collection: 'pokemon',
		database: 'Pokemon',
		dataSource: 'Cloyster',
		filter: {
			species: species,
			variant: variant
		}
	};
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Request-Headers': '*',
			'api-key': dbApiKey,
			Accept: 'application/json'
		},
		body: JSON.stringify(body)
	};

	const rsp = await fetch(`${dbUrl}/action/find`, options);
	const json = await rsp.json();
	const { documents } = json;
	return documents.at(0) || null;
};
