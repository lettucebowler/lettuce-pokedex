<script lang="ts">
	import SpeciesLink from '$lib/components/SpeciesLink.svelte';
	export let id: number;
	export let type = '';
	export let species: string;
	export let lazy = true;
</script>

<div style={`background-color: var(--${type}-color-light)`} class={`${lazy ? 'lazy' : ''}`}>
	{#if species && id}
		<SpeciesLink {id} {species} {lazy} hover={true} />
	{/if}
</div>

<style>
	div {
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
		border-radius: 16px;
		padding: 4px;
		aspect-ratio: 1;
	}
</style>
