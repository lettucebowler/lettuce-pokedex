<script lang="ts">
	import classnames from 'classnames';
	import PokemonFigure from './PokemonFigure.svelte';
	import variables from '$lib/variables';

	export let name: string;
	export let id: number;
	export let left: boolean = false;
	export let right: boolean = false;
</script>

<a
	href={`/species/${name}/variant/default/form/default`}
	class="grid grid-cols-1 sm:grid-cols-2 place-items-center hover:backdrop-filter hover:backdrop-brightness-90 rounded-lg p-1"
	data-sveltekit-prefetch
>
	{#if right}
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
	{/if}

	<div class={classnames('sm:grid', { hidden: left || right, 'col-span-2': !left && !right })}>
		<PokemonFigure
			species={name}
			size={64}
			imageUrl={`${variables.imageHost}/home/${id}-64.webp`}
		/>
	</div>

	{#if left}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="w-6 h-6 mt-auto mb-auto flex flex-auto"
		>
			<path
				fill-rule="evenodd"
				d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
				clip-rule="evenodd"
			/>
		</svg>
	{/if}
</a>
