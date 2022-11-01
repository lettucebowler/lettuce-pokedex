import { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from '$env/static/private';

import { Redis } from '@upstash/redis';

import type { PokemonData } from '$lib/types/types';

const redis = new Redis({
	url: UPSTASH_REDIS_REST_URL,
	token: UPSTASH_REDIS_REST_TOKEN
});

export const stashDetail = async (pokemonDetail: any) => {
	const { species, variant } = pokemonDetail;
	const key = `${species}-${variant}`;
	await redis.set(key, pokemonDetail.id);
	await redis.set(pokemonDetail.id, pokemonDetail);
};

export const getDetail = async (species: string, variant: string) => {
	const before = new Date();
	let detail = null;
	const key = await redis.get(`${species}-${variant}`);
	if (!key) {
		return detail;
	}
	detail = (await redis.get(key.toString())) || detail;
	const after = new Date();
	const duration = after.getTime() - before.getTime();
	console.log(`fetch detail in ${duration}ms`);
	return detail;
};

export const getPokemonList = async (count: number = 905, start: number = 0) => {
	const before = new Date();
	const keys = Array(count)
		.fill(null)
		.map((_, i) => (i + start).toString());
	let details: PokemonData[] = await redis.mget(...keys);
	const after = new Date();
	const duration = after.getTime() - before.getTime();
	console.log(duration);

	return details;
};
