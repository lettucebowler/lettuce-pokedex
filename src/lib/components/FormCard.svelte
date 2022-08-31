<script lang="ts">
	import PokemonLink from '$lib/components/PokemonLink.svelte';

	export let forms: string[];
	export let species: string;
	export let id: number;
</script>

<div class="bg-white text-center rounded-lg p-2 flex flex-col gap-1">
	<h3 class="font-bold text-xl">Forms</h3>
	{#each [1] as _ (Math.random())}
		<div class="flex flex-wrap justify-between gap-1">
			{#each forms as form}
				<div class="flex-[1_1_80px] flex justify-center">
					<PokemonLink
						{species}
						variant="default"
						{id}
						form={form.split(species).at(-1)?.slice(1) || 'default'}
					/>
				</div>
			{/each}
		</div>
	{/each}
</div>
