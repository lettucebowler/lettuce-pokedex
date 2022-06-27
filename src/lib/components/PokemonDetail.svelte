<script lang="ts">
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	import SpeciesNav from '$lib/components/SpeciesNav.svelte';
	import EvolutionCard from './EvolutionCard.svelte';
	import InfoCard from '$lib/components/InfoCard.svelte';
	import { modulo } from '$lib/util/helpers';
	import type { PokemonData } from '$lib/types/types';

	export let pokemonData: PokemonData;
	export let form: any;

	$: primaryType = pokemonData.types[0].type.name;
	$: secondaryType = pokemonData?.types?.at(-1)?.type.name || primaryType;
</script>

<div class="column">
	<div class="row">
		<SpeciesNav navData={pokemonData.navigation} {primaryType} {secondaryType} />
	</div>

	<div class="columns">
		<div class="column-1">
			<div class="row">
				<InfoCard
					description={pokemonData.description}
					{primaryType}
					{secondaryType}
					height={pokemonData.biology.height}
					weight={pokemonData.biology.weight}
				/>
			</div>
			{#if pokemonData.evolutionChain.evolves_to.length}
				<EvolutionCard evolutionChain={pokemonData.evolutionChain} {primaryType} {secondaryType} />
			{/if}
		</div>

		<div class="column-2">
			<PokemonCard
				species={pokemonData.species}
				dexNum={pokemonData.dexNum}
				id={pokemonData.id}
				{form}
				{primaryType}
				{secondaryType}
				genus={pokemonData.genus}
				varieties={pokemonData.variants}
				forms={pokemonData.forms}
			/>
		</div>
	</div>
</div>

<style>
	.column {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.columns {
		display: flex;
		flex-wrap: wrap-reverse;
		gap: 8px;
	}

	.column-1 {
		display: flex;
		flex-direction: column;
		flex: 2 1 300px;
		gap: 8px;
		width: 100%;
	}

	.column-2 {
		flex-direction: column;
		gap: 8px;
		display: flex;
		flex: 1 1 300px;
		width: 100%;
	}

	.row {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}
</style>
