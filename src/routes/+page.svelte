<script lang="ts">
	import DexCard from '$lib/components/DexCard.svelte';
	import type { PokemonData } from '$lib/types/types';

	import { inview } from 'svelte-inview/dist/index';

	let hasMore = true;
	export let data: import('./$types').PageData;
	let pokemon: PokemonData[] = [...data.pokemon];

	let start = 0;
	let end = 59;
	let filterName = '';

	$: filteredMonsters = pokemon.filter((mon, i) => {
		return mon.species.includes(filterName) && i >= start && i <= end;
	});

	$: {
		if (filterName === '') {
			end = 59;
			start = 0;
		}
	}

	const handleChange = async () => {
		if (hasMore) {
			end += 12;
		}
	};

	$: hasMore = filterName === '' ? end <= pokemon.length : end <= filteredMonsters.length;
</script>

<svelte:head>
	<meta name="description" content="Lettuce Pokedex - a bad pokedex made by Lettucebowler" />
	<title>LettucePokedex</title>
</svelte:head>
<div class="flex flex-col gap-4">
	<h2 class="text-2xl text-center font-bold">Pokemon by National Pokedex order</h2>
	<div class="grid place-items-center w-full">
		<input
			class="m-auto border-2 border-black rounded p-1 text-lg"
			type="text"
			bind:value={filterName}
			autocapitalize="none"
			placeholder="pokemon"
		/>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
		{#each filteredMonsters as mon, i}
			<DexCard id={mon.id} species={mon.species} lazy={i > 29} types={mon.types} />
		{/each}
	</div>
</div>
{#if hasMore}
	<div
		class="text-lg font-bold p-2 text-center"
		use:inview={{ rootMargin: '25%' }}
		on:change={handleChange}
	>
		Fetching more pokemon...
	</div>
{/if}
