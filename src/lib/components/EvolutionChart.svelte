<script lang="ts">
	import PokemonLink from './PokemonLink.svelte';
	export let evolutionChain: any;
</script>

<div class="flex justify-center h-full gap-2">
	<div class="flex flex-col justify-center h-full mt-auto mb-auto">
		<PokemonLink species={evolutionChain.species} id={evolutionChain.id} size={128} />
	</div>

	{#if evolutionChain.evolves_to.length === 1}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="w-6 h-6 mt-auto mb-auto"
		>
			<path
				fill-rule="evenodd"
				d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
				clip-rule="evenodd"
			/>
		</svg>
		<svelte:self evolutionChain={evolutionChain.evolves_to[0]} />
	{:else if evolutionChain.evolves_to.length > 1}
		<div class="flex flex-col gap-2">
			{#each evolutionChain.evolves_to as evolution}
				<div class="flex justify-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6 mt-auto m-auto"
					>
						<path
							fill-rule="evenodd"
							d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
					<svelte:self evolutionChain={evolution} />
				</div>
			{/each}
		</div>
	{/if}
</div>
