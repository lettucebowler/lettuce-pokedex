<script lang="ts">
	import SpeciesLink from './SpeciesLink.svelte';
	export let evolutionChain: any;
</script>

<div class="row">
	<div class="column">
		<SpeciesLink species={evolutionChain.species} id={evolutionChain.id} wide={true} />
	</div>

	{#if evolutionChain.evolves_to.length === 1}
		<div class="column nomargin">
			<span class="icon-arrow_forward" />
		</div>
		<svelte:self evolutionChain={evolutionChain.evolves_to[0]} />
	{:else if evolutionChain.evolves_to.length > 1}
		<div class="column">
			{#each evolutionChain.evolves_to as evolution}
				<div class="row">
					<div class="column nomargin">
						<span class="icon-arrow_forward" />
					</div>
					<svelte:self evolutionChain={evolution} />
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.row {
		display: flex;
		justify-content: center;
	}

	.column {
		display: flex;
		text-align: center;
		flex-direction: column;
		justify-content: space-around;
		gap: 8px;
		/* width: 100%; */
	}

	.nomargin {
		margin: 0px 8px;
	}
</style>
