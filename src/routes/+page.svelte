<script lang="ts">
	import { createVirtualizer, Virtualizer } from '@tanstack/svelte-virtual';
	import DexCard from '$lib/components/DexCard.svelte';
	import type { PokemonData } from '$lib/types/types';
	import type { Readable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { json } from '@sveltejs/kit';

	export let data: import('./$types').PageData;
	let pokemon: PokemonData[] = [...data.pokemon];

	let filterName = '';

	// const handleChange = async () => {
	// 	if (hasMore) {
	// 		end += 12;
	// 	}
	// };

	let filtered = [];

	let ref;

	let virtualizer: Readable<Virtualizer<Window, unknown>>;

	$: {
		if (browser) {
			virtualizer = createVirtualizer({
				count: filtered.length,
				getScrollElement: () => ref,
				estimateSize: () => (238 * 2) / 12,
				overscan: 0
			});
		}
	}

	$: {
		filtered = !filterName
			? pokemon
			: pokemon.filter((pokemonster) => {
					return pokemonster.species.includes(filterName);
			  });
	}

	onMount(() => {
		filtered = pokemon;
	});
</script>

<svelte:head>
	<meta name="description" content="Lettuce Pokedex - a bad pokedex made by Lettucebowler" />
	<title>LettucePokedex</title>
</svelte:head>

<div class="grid gap-2">
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
	{#if filtered.length && browser && $virtualizer.getVirtualItems().length}
		<div class="grid gap-2" bind:this={ref} style:height={`${$virtualizer?.getTotalSize() || 0}px`}>
			{#each $virtualizer
				.getVirtualItems()
				.filter((filterItem) => filterItem.index % 12 === 0) as item, i (i)}
				<div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
					{#each Array(12).fill(null) as _, j (j)}
						{@const mon = filtered.at(i * 12 + j)}
						{#if mon}
							<DexCard id={mon.id} species={mon.species} lazy={i > 29} types={mon.types} />
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	{:else}
		<div class="mt-20 flex w-full flex-col items-center">
			<svg
				class="h-32 w-32 w-full animate-spin items-center text-default-300"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
			<p class="text-lg font-medium">Just a sec...</p>
		</div>
	{/if}
</div>
<!-- {#if hasMore}
	<div
		class="p-2 text-center text-lg font-bold"
		use:inview={{ rootMargin: '25%' }}
		on:change={handleChange}
	>
		Fetching more pokemon...
	</div>
{/if} -->
