import type { PokemonData } from '$lib/types/types';
import { DB_URL, DB_API_KEY } from '$env/static/private';

export const getPokemonList = async (start = 1, end = 30) => {
	const body = {
		collection: 'pokemon',
		database: 'Pokemon',
		dataSource: 'Shellder',
		filter: {
			id: { $gte: start, $lte: end }
		},
		projection: {
			species: 1,
			types: 1,
			id: 1,
			_id: 0
		}
	};
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Request-Headers': '*',
			'api-key': DB_API_KEY,
			Accept: 'application/json'
		},
		body: JSON.stringify(body)
	};

	const rsp = await fetch(`${DB_URL}/action/find`, options);
	const json = await rsp.json();
	const sorted = json.documents.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
	return sorted;
};

export const insertOrUpdatePokemonDetail = async (pokemonData: PokemonData) => {
	const body = {
		collection: 'pokemon',
		database: 'Pokemon',
		dataSource: 'Shelllder',
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
			'api-key': DB_API_KEY
		},
		body: JSON.stringify(body)
	};
	const rsp = await fetch(`${DB_URL}/action/updateOne`, options);
	const json = await rsp.json();
	return json;
};

export const getPokemonDetail = async (species: string, variant: string) => {
	const body = {
		collection: 'pokemon',
		database: 'Pokemon',
		dataSource: 'Shellder',
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
			'api-key': DB_API_KEY,
			Accept: 'application/json'
		},
		body: JSON.stringify(body)
	};

	const rsp = await fetch(`${DB_URL}/action/find`, options);
	const json = await rsp.json();
	const { documents } = json;
	return documents.at(0) || null;
};
