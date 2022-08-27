<script lang="ts">
	import DexCard from '$lib/components/DexCard.svelte';

	export let data: import('./$types').PageData;
	$: pokemon = data.pokemon;
</script>

<svelte:head>
	<meta name="description" content="Lettuce Pokedex - a bad pokedex made by Lettucebowler" />
	<title>LettucePokedex</title>
</svelte:head>
<h2 class="text-2xl text-center font-bold m-2">Pokemon by National Pokedex order</h2>
<div class="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-2">
	{#each pokemon as mon, i}
		<DexCard id={mon.id} species={mon.species} lazy={i > 29} types={mon.types} />
	{/each}
</div>
