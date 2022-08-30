<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
	import type { PokemonNavigation } from '$lib/types/types';
	import NavLink from './NavLink.svelte';

	export let navData: PokemonNavigation;
</script>

<nav class="grid grid-cols-[repeat(3,_1fr)] w-full gap-2" use:autoAnimate={{ duration: 100 }}>
	{#each [navData.previous, navData.current, navData.next] as navItem, i (navItem.name)}
		<NavLink name={navItem.name} id={navItem.id} left={i === 0} right={i === 2} />
	{/each}
</nav>
