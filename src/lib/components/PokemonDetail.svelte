<script lang="ts">
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	import EvolutionCard from './EvolutionCard.svelte';
	import InfoCard from '$lib/components/InfoCard.svelte';
	import type { PokemonData } from '$lib/types/types';
	import TypeBorder from './TypeBorder.svelte';

	export let pokemonData: PokemonData;
	export let form: any;
</script>

<div class="grid grid-cols-12 gap-2">
	<div class="col-span-12 order-last sm:order-first sm:col-span-7 flex flex-col gap-2">
		<TypeBorder types={pokemonData.types}>
			<div class="flex flex-col gap-2">
				<InfoCard
					description={pokemonData.description}
					height={pokemonData.biology.height}
					weight={pokemonData.biology.weight}
				/>
			</div>
		</TypeBorder>
		{#if pokemonData?.evolutionChain?.evolves_to.length}
			<TypeBorder types={pokemonData.types}>
				<EvolutionCard evolutionChain={pokemonData.evolutionChain} />
			</TypeBorder>
		{/if}
	</div>

	<div class="col-span-12 sm:col-span-5">
		<PokemonCard
			species={pokemonData.species}
			dexNum={pokemonData.dexNum}
			id={pokemonData.id}
			{form}
			types={pokemonData.types}
			genus={pokemonData.genus}
			varieties={pokemonData.variants}
			forms={pokemonData.forms}
		/>
	</div>
</div>
