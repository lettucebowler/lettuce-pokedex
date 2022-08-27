<script lang="ts">
	import { variables } from '$lib/variables';
	import PokemonFigure from './PokemonFigure.svelte';
	export let species: string = 'bulbasaur';
	export let variant = 'default';
	export let form = 'default';
	export let id = 1;
	export let size = 64;

	$: imageUrl = `${variables.imageHost}/home/${
		form === 'default' ? `${id}-${size}` : `${id}-${form}-${size}`
	}.webp`;
</script>

<a
	href={`/species/${species}/variant/${variant}/form/${form}`}
	class="grid place-items-center p-1"
	sveltekit:prefetch
>
	<PokemonFigure {species} {variant} {form} {size} {imageUrl} />
</a>
