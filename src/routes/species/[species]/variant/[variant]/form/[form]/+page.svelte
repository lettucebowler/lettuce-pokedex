<script lang="ts">
	import PokemonDetail from '$lib/components/PokemonDetail.svelte';
	import { capitalize } from '$lib/util/helpers';

	export let data: import('./$types').PageData;
	$: ({ pokemonData, form } = data);
</script>

<svelte:head>
	<meta name="description" content={pokemonData?.species || 'Lettuce Pokedex'} />
	<title>{capitalize(pokemonData?.species || 'Lettuce Pokedex')}</title>
</svelte:head>
<PokemonDetail {pokemonData} {form} />
