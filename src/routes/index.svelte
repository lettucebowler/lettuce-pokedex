<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import type { Reference } from '$lib/types/types';
	import PokemonBox from '$lib/components/PokemonBox.svelte';
	export let pokemon: Reference[];

	const types = [
		'normal',
		'fighting',
		'flying',
		'poison',
		'ground',
		'rock',
		'bug',
		'ghost',
		'steel',
		'fire',
		'water',
		'grass',
		'electric',
		'psychic',
		'ice',
		'dragon',
		'dark',
		'fairy'
	];

	const chunk = (arr: any[], size: number) =>
		Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
			arr.slice(i * size, i * size + size)
		);
</script>

<svelte:head>
	<meta name="description" content="Lettuce Pokedex - a bad pokedex made by Lettucebowler" />
	<title>LettucePokedex</title>
</svelte:head>
<div class="column">
	<h2>Pokemon by National Pokedex order</h2>
	{#each chunk(pokemon, 30) as box, n}
		<PokemonBox type={types[n % types.length]} {box} boxNum={n} />
	{/each}
</div>

<style>
	h2 {
		text-align: center;
		margin: 0 auto;
		margin-top: 8px;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
