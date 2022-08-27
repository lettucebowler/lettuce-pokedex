<script lang="ts">
	import PokemonLink from '$lib/components/PokemonLink.svelte';
	import type { PokemonNavigation } from '$lib/types/types';
	import PokemonFigure from './PokemonFigure.svelte';
	import variables from '$lib/variables';
	import NavLink from './NavLink.svelte';
	import { current_component } from 'svelte/internal';

	export let navData: PokemonNavigation;
</script>

<nav class="grid grid-cols-[repeat(3,_1fr)] w-full p-2">
	{#each [navData.previous, navData.current, navData.next] as navItem, i}
		<NavLink name={navItem.name} id={navItem.id} left={i === 0} right={i === 2} />
	{/each}
</nav>
