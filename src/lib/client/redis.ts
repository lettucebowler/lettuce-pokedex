import { Redis } from '@upstash/redis';
import { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } from '$env/static/private';

const redis = new Redis({
	url: UPSTASH_REDIS_REST_URL,
	token: UPSTASH_REDIS_REST_TOKEN
});

export const getList = () => redis.get('list');

export const stashList = (list: any[]) =>
	redis.set('list', list, {
		ex: 86400 * 7
	});

export const getDetail = async (species: string, variant: string) =>
	redis.get(`detail-${species}-${variant}`);

export const stashDetail = async (pokemonDetail: any) => {
	const { species, variant } = pokemonDetail;
	redis.set(`detail-${species}-${variant}`, pokemonDetail, {
		ex: 86400 * 7
	});
};
