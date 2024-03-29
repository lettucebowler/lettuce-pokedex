import type { PokemonData } from '$lib/types/types';
import { DB_URL, DB_API_KEY } from '$env/static/private';

import { fetcher } from 'itty-fetcher';

const cloyster = fetcher({
	base: DB_URL,
	transformRequest(req) {
		req.headers['Access-Control-Request-Handlers'] = '*';
		req.headers['api-key'] = DB_API_KEY;
		return req;
	}
});

export const getPokemonList = async (count: number = 905, start: number = 1) => {
	const body = {
		collection: 'pokemon',
		database: 'Pokemon',
		dataSource: 'Shellder',
		filter: {
			id: { $gte: start, $lte: start + count }
		},
		projection: {
			species: 1,
			types: 1,
			id: 1,
			_id: 0
		}
	};
	const json = await cloyster.post('/action/find', body);
	const sorted = json.documents.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
	return sorted;
};

export const getDexRange = async (start = 0, end = 1008) => {};

export const insertOrUpdatePokemonDetail = async (pokemonData: PokemonData) => {
	const body = {
		collection: 'pokemon',
		database: 'Pokemon',
		dataSource: 'Shellder',
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
