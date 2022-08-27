<script lang="ts">
	import DexCard from '$lib/components/DexCard.svelte';
	import type { PokemonData } from '$lib/types/types';
	import { onMount, createEventDispatcher } from 'svelte';
	import { browser } from '$app/environment';
	let footer;

	onMount(() => {
		if (browser) {
			const handleIntersect = (entries, observer) => {
				entries.forEach(async (entry) => {
					if (allLoaded) {
						observer.unobserve(entry.target);
					}
					if (!allLoaded) {
						const data = await getMorePokemon(pokemon.length + 1);
						console.log(data);
						pokemon = [...pokemon, ...data];
					}
				});
			};
			const options = { threshold: 1, rootMargin: '-100% 0% 100%' };
			const observer = new IntersectionObserver(handleIntersect, options);
			observer.observe(footer);
		}
	});

	export let data: import('./$types').PageData;
	let pokemon: PokemonData[] = [...data.pokemon];

	const getMorePokemon = async (start: number) => {
		const rsp = await fetch(`/list?min=${start}&max=${start + 59}`);
		const json = await rsp.json();
		return json;
	};

	$: allLoaded = pokemon.length >= 905;
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
<footer bind:this={footer} />
