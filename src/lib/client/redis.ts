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
