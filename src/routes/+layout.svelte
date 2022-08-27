<script lang="ts">
	import '$lib/assets/icons.css';
	import '$lib/assets/pokemon-types.css';
	import '$lib/assets/app.css';
	import smallFavicon from '$lib/assets/favicon-16x16.png';
	import bigFavicon from '$lib/assets/favicon-32x32.png';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';
	import safariPinnedTabIcon from '$lib/assets/safari-pinned-tab.svg';
	import SpeciesNav from '$lib/components/SpeciesNav.svelte';
	import autoAnimate from '@formkit/auto-animate';

	export let data: import('./$types').LayoutData;
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={bigFavicon} />
	<link rel="icon" type="image/png" sizes="16x16" href={smallFavicon} />
	<link rel="mask-icon" href={safariPinnedTabIcon} color="#a3be8c" />
</svelte:head>

<div class="w-full max-w-[1200px] m-auto flex flex-col gap-2 pl-1 pr-1 pb-1">
	<div
		class="border-b-2 border-l-2 border-r-2 border-default-100 pb-1 pl-1 pr-1 bg-default-200 rounded-b-[22px] w-full"
	>
		<div class="bg-default-300 rounded-b-2xl w-full" use:autoAnimate={{ duration: 100 }}>
			<div class="flex flex-wrap w-full justify-around">
				<a sveltekit:prefetch title="link to home page" href="/">
					<h1 class="text-center font-bold text-2xl">Pokédex</h1>
				</a>
			</div>
			{#if data.navigation}
				<SpeciesNav navData={data.navigation} />
			{/if}
		</div>
	</div>
	<slot />
</div>
