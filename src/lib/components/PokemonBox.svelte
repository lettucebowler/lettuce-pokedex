<script lang="ts">
	import ColorWrapper from './ColorWrapper.svelte';
	import DexCard from '$lib/components/DexCard.svelte';

	export let type = 'default';
	export let box: any[] = [];
	export let boxNum = 0;

	const growBox = (box: any[]) => {
		return box.concat(Array(30 - box.length).fill({ name: '', id: 0 }));
	};
</script>

<ColorWrapper {type} secondaryType={type} padding={8} borderRadius={24} border={true}>
	<div class="grid">
		{#each growBox(box) as pokemon, i}
			<DexCard id={boxNum * 30 + i + 1} species={pokemon.name} {type} lazy={boxNum !== 0} />
		{/each}
	</div>
</ColorWrapper>

<style>
	.grid {
		/* padding: 18px 16px; */
		border-radius: 32px;
		--grid-layout-gap: 8px;
		--grid-column-count: 6;
		--grid-item--min-width: 148px;

		--gap-count: calc(var(--grid-column-count) - 1);
		--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
		--grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

		display: grid;
		grid-template-columns: repeat(
			auto-fill,
			minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
		);
		grid-gap: var(--grid-layout-gap);
	}
</style>
