<script lang="ts">
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	import EvolutionCard from './EvolutionCard.svelte';
	import InfoCard from '$lib/components/InfoCard.svelte';
	import TypeBorder from './TypeBorder.svelte';

	export let pokemonData: any;
	export let form: any;
</script>

<div class="grid grid-cols-12 gap-2">
	<div class="order-last col-span-12 sm:order-first sm:col-span-7">
		<InfoCard
			description={pokemonData.description}
			height={pokemonData.biology.height}
			weight={pokemonData.biology.weight}
			types={pokemonData.types}
		/>
		{#if pokemonData?.evolutionChain?.evolves_to.length}
			<div class="h-2" />
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
