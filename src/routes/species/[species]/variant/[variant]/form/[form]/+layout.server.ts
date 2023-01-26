import { getSpecies } from '$lib/client/pokeapi';
import { getNav, stashNav } from '$lib/client/redis';

const mod = (n: number, base: number) => ((n % base) + base) % base;

export const prerender = false;

const getSpeciesNameFromNumber = async (id: number) => {
	const { species } = await getSpecies(id);
	return {
		id,
		name: species
	};
};

export const load: import('./$types').PageServerLoad = async ({ params }) => {
	const pokedexLength = 905;

	console.time(`load nav for ${params.species} from cache`);
	const cached = await getNav(params.species);
	console.timeEnd(`load nav for ${params.species} from cache`);


	if (cached) {
		return {
			navigation: cached,
		}
	}
	
	console.time(`load nav for ${params.species} from api`);
	const { dexNum: currentNum, species: currentSpecies } = await getSpecies(params.species || '');
	const nextNum = mod(currentNum + 1, pokedexLength) || pokedexLength;
	const previousNum = mod(currentNum - 1, pokedexLength) || pokedexLength;
	const current = {
		id: currentNum,
		name: currentSpecies
	};
	const [next, previous] = await Promise.all([
		getSpeciesNameFromNumber(nextNum),
		getSpeciesNameFromNumber(previousNum)
	]);
	console.timeEnd(`load nav for ${params.species} from api`);

	const nav = {
		current,
		next,
		previous
	};

	stashNav(params.species, nav);
	return {
		navigation: nav
	};
};
