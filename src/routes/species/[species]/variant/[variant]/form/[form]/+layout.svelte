<script lang="ts">
	import '$lib/assets/icons.css';
	import '$lib/assets/pokemon-types.css';
	import '$lib/assets/app.css';
	import smallFavicon from '$lib/assets/favicon-16x16.png';
	import bigFavicon from '$lib/assets/favicon-32x32.png';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';
	import safariPinnedTabIcon from '$lib/assets/safari-pinned-tab.svg';
	import SpeciesNav from '$lib/components/SpeciesNav.svelte';
	import { scale } from 'svelte/transition';
	import TypeBorder from '$lib/components/TypeBorder.svelte';

	export let data: import('./$types').LayoutData;
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={bigFavicon} />
	<link rel="icon" type="image/png" sizes="16x16" href={smallFavicon} />
	<link rel="mask-icon" href={safariPinnedTabIcon} color="#a3be8c" />
</svelte:head>

<div class="w-full max-w-[1200px] m-auto flex flex-col gap-2 pl-1 pr-1 pb-1">
	<TypeBorder types={['default']}>
		{#if data.navigation}
			<div in:scale={{ duration: 100 }}>
				<SpeciesNav navData={data.navigation} />
			</div>
		{/if}
	</TypeBorder>
	<slot />
</div>

<style>
	:global(html) {
		overflow-x: hidden;
		margin-right: calc(-1 * (100vw - 100%));
	}
</style>
