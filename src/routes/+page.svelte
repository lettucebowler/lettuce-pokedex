<script lang="ts">
	import DexCard from '$lib/components/DexCard.svelte';
	import type { PokemonData } from '$lib/types/types';

	import { inview } from 'svelte-inview/dist/index';

	let hasMore = true;

	// onMount(() => {
	// 	if (browser) {
	// 		const handleIntersect = (entries, observer) => {
	// 			entries.forEach(async (entry) => {
	// 				if (allLoaded) {
	// 					observer.unobserve(entry.target);
	// 				}
	// 				if (!allLoaded) {
	// 					const data = await getMorePokemon(pokemon.length + 1);
	// 					console.log(data);
	// 					pokemon = [...pokemon, ...data];
	// 				}
	// 			});
	// 		};
	// 		const options = { threshold: 1, rootMargin: '-100% 0% 100%' };
	// 		const observer = new IntersectionObserver(handleIntersect, options);
	// 		observer.observe(footer);
	// 	}
	// });

	const handleChange = async (e) => {
		console.log('bleh');
		if (e.detail.inView && hasMore) {
			const morePokemon = await getMorePokemon(pokemon.length);
			pokemon = [...pokemon, ...morePokemon];
			if (pokemon.length === 905) {
				hasMore = false;
			}
		}
	};

	export let data: import('./$types').PageData;
	let pokemon: PokemonData[] = [...data.pokemon];

	const getMorePokemon = async (start: number) => {
		const rsp = await fetch(`/list?min=${start + 1}&max=${start + 60}`);
		const json = await rsp.json();
		return json;
	};
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
{#if hasMore}
	<div
		class="text-lg font-bold p-2 text-center"
		use:inview={{ rootMargin: '250px' }}
		on:change={handleChange}
	>
		Fetching more Pokemon...
	</div>
{/if}
