<script lang="ts">
	import PokemonDetail from '$lib/components/PokemonDetail.svelte';
	import { capitalize } from '$lib/util/helpers';

	export let data: import('./$types').PageData;
	$: ({ pokemonData, form } = data);
	// export let pokemonData: PokemonData;
	// export let form: string;
</script>

<svelte:head>
	<meta name="description" content={pokemonData?.species || 'Lettuce Pokedex'} />
	<title>{capitalize(pokemonData?.species || 'Lettuce Pokedex')}</title>
</svelte:head>
{#if pokemonData}
	<PokemonDetail {pokemonData} {form} />
{/if}
