<script lang="ts">
	import DexCard from '$lib/components/DexCard.svelte';
	import type { PokemonData } from '$lib/types/types';
	import { onMount } from 'svelte';

	import { inview } from 'svelte-inview/dist/index';

	let hasMore = true;
	export let data: import('./$types').PageData;
	let pokemon: PokemonData[] = [...data.pokemon];

	let start = 0;
	let end = 59;
	let filterName = '';

	$: filteredMonsters = pokemon
		.filter((mon, i) => {
			return mon.species.includes(filterName);
		})
		.filter((_, i) => i >= start && i <= end);

	$: {
		if (filterName === '') {
			end = 59;
			start = 0;
		}
	}

	const handleChange = async () => {
		if (hasMore) {
			end += 60;
		}
	};

	let minHeight = 'auto';

	onMount(() => {
		minHeight = `${Math.floor((905 * 238) / 6)}px`;
	});

	$: hasMore = filterName === '' ? end <= pokemon.length : end <= filteredMonsters.length;
</script>

<svelte:head>
	<meta name="description" content="Lettuce Pokedex - a bad pokedex made by Lettucebowler" />
	<title>LettucePokedex</title>
</svelte:head>
<div class="flex flex-col gap-4" style:min-height={minHeight}>
	<h2 class="text-center text-2xl font-bold">Pokemon by National Pokedex order</h2>
	<div class="grid w-full place-items-center">
		<input
			class="border-black m-auto rounded border-2 p-1 text-lg"
			type="text"
			bind:value={filterName}
			autocapitalize="none"
			placeholder="pokemon"
		/>
	</div>
	<div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
		{#each filteredMonsters as mon, i}
			<DexCard id={mon.id} species={mon.species} lazy={i > 29} types={mon.types} />
		{/each}
	</div>
	{#if hasMore}
		<div
			class="h-2 bg-default-300 p-2 text-center text-lg font-bold"
			use:inview={{ rootMargin: '0%' }}
			on:change={handleChange}
		>
			Fetching more pokemon...
		</div>
	{/if}
</div>
