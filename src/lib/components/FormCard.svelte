<script lang="ts">
	import classnames from 'classnames';
	import PokemonLink from '$lib/components/PokemonLink.svelte';

	export let forms: string[];
	export let species: string;
	export let id: number;
</script>

<div class="flex flex-col gap-1 rounded-lg bg-white p-2 text-center">
	<h3 class="text-xl font-bold">Forms</h3>
	<div
		class={classnames('grid gap-1', {
			'grid-cols-2': forms.length === 2,
			'grid-cols-3': forms.length === 3,
			'grid-cols-4': forms.length > 3
		})}
	>
		{#each forms as form}
			<div class="flex flex-[1_1_80px] justify-center">
				<PokemonLink
					{species}
					variant="default"
					{id}
					form={form.split(species).at(-1)?.slice(1) || 'default'}
				/>
			</div>
		{/each}
	</div>
</div>
