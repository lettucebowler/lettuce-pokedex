<script lang="ts">
	import PokemonLink from '$lib/components/PokemonLink.svelte';

	export let varieties: any[];
	export let species: string;
</script>

<div class="bg-white text-center rounded-lg p-2 flex flex-col gap-1">
	<h3 class="font-bold text-xl">Variants</h3>
	<div class="flex flex-wrap justify-between gap-1">
		{#each varieties as variant}
			<div class="flex-[1_1_80px] flex justify-center">
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
