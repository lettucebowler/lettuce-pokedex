<script lang="ts">
	import PokemonLink from '$lib/components/PokemonLink.svelte';

	export let varieties: any[];
	export let species: string;
</script>

<div class="flex flex-col rounded-lg bg-white p-2 text-center">
	<h3 class="text-xl font-bold capitalize">variants</h3>
	<div
		class="grid gap-1"
		class:grid-cols-2={varieties.length === 2}
		class:grid-cols-3={varieties.length === 3}
		class:grid-cols-4={varieties.length > 3}
	>
		{#each varieties as variant}
			<div class="h-full flex-[1_1_80px] justify-center">
				<PokemonLink
					{species}
					variant={variant.is_default
						? 'default'
						: variant.pokemon.name.split(species).at(-1).slice(1)}
					id={variant.pokemon.url.split('/').at(-2)}
					form={variant.form || 'default'}
				/>
			</div>
		{/each}
	</div>
</div>
