<script lang="ts">
	import SpeciesNav from '$lib/components/SpeciesNav.svelte';
	import TypeBorder from '$lib/components/TypeBorder.svelte';
	import { imageHost } from '$lib/variables';
	export let data: import('./$types').LayoutData;

	$: currentId = data?.navigation?.current?.id;
</script>

<svelte:head>
	<link
		rel="preload"
		href={`${imageHost}/home/${currentId < 904 ? currentId + 2 : (currentId + 2) % 905}-64.webp`}
		as="image"
	/>
	<link
		rel="preload"
		href={`${imageHost}/home/${currentId > 2 ? currentId - 2 : 905 - currentId}-64.webp`}
		as="image"
	/>
</svelte:head>

<div class="m-auto flex w-full max-w-[1200px] flex-col gap-2">
	<TypeBorder types={['default']}>
		{#if data.navigation}
			<SpeciesNav navData={data.navigation} />
		{/if}
	</TypeBorder>
	<slot />
</div>
