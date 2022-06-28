<script context="module">
	export const prerender = false;
</script>

<script lang="ts">
	import type { PokemonData } from '$lib/types/types';
	import PokemonDetail from '$lib/components/PokemonDetail.svelte';
	import { capitalize } from '$lib/util/helpers';
	export let pokemonData: PokemonData;
	export let form: string;
</script>

<svelte:head>
	<meta name="description" content={pokemonData.species} />
	<title>{capitalize(pokemonData.species)}</title>
</svelte:head>
<PokemonDetail {pokemonData} {form} />
