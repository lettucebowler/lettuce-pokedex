<script lang="ts">
	import PokemonLink from '$lib/components/PokemonLink.svelte';
	import classnames from 'classnames';

	export let varieties: any[];
	export let species: string;
</script>

<div class="bg-white text-center rounded-lg p-2 flex flex-col">
	<h3 class="font-bold text-xl">Variants</h3>
	<div
		class={classnames('grid gap-1', {
			'grid-cols-2': varieties.length === 2,
			'grid-cols-3': varieties.length === 3,
			'grid-cols-4': varieties.length > 3
		})}
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
