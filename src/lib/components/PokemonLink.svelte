<script lang="ts">
	import { PUBLIC_IMAGE_HOST } from '$env/static/public';
	import PokemonFigure from './PokemonFigure.svelte';
	export let species: string = 'bulbasaur';
	export let variant = 'default';
	export let form = 'default';
	export let id = 1;
	export let size = 64;

	$: imageUrl = `${PUBLIC_IMAGE_HOST}/home/${
		form === 'default' ? `${id}-${size}` : `${id}-${form}-${size}`
	}.webp`;
</script>

<a
	href={`/species/${species}/variant/${variant}/form/${form}`}
	class="grid h-full w-full place-items-center"
	data-sveltekit-prefetch
>
	<div class="h-full w-full rounded-lg p-2 hover:backdrop-brightness-90 hover:backdrop-filter">
		<PokemonFigure {species} {variant} {form} {size} {imageUrl} />
	</div>
</a>
