<script lang="ts">
	import PokemonDetail from '$lib/components/PokemonDetail.svelte';

	export let data: import('./$types').PageData;
	$: ({ pokemonData, form } = data);

	const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
</script>

<svelte:head>
	<meta name="description" content={pokemonData?.species || 'Lettuce Pokedex'} />
	<title>{capitalize(pokemonData?.species || 'Lettuce Pokedex')}</title>
</svelte:head>
<PokemonDetail {pokemonData} {form} />
