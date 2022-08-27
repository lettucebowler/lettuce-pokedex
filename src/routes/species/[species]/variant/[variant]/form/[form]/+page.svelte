<script lang="ts">
	import PokemonDetail from '$lib/components/PokemonDetail.svelte';
	import { capitalize } from '$lib/util/helpers';

	export let data: import('./$types').PageData;
	$: ({ pokemonData, form } = data);
	// export let pokemonData: PokemonData;
	// export let form: string;
</script>

<svelte:head>
	<meta name="description" content={pokemonData.species} />
	<title>{capitalize(pokemonData.species)}</title>
</svelte:head>
<PokemonDetail {pokemonData} {form} />
