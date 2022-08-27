import { json } from '@sveltejs/kit';
import { getPokemonList } from '$lib/client/cloyster';
export const GET: import('./$types').RequestHandler = async ({ url }) => {
	const min = Number(url.searchParams.get('min') ?? '0');
	const max = Number(url.searchParams.get('max') ?? '30');
	const documents = await getPokemonList(min, max);

	return json(documents);
};
