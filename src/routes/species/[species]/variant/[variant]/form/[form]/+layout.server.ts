import { getSpecies } from '$lib/client/pokeapi';

const mod = (n: number, base: number) => ((n % base) + base) % base;

const getSpeciesNameFromNumber = async (id: number) => {
	const { species } = await getSpecies(id);
	return {
		id,
		name: species
	};
};

export const load: import('./$types').PageServerLoad = async ({ params }) => {
	const pokedexLength = 905;
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
	const nav = {
		current,
		next,
		previous
	};
	return {
		navigation: nav
	};
};
