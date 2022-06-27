<script lang="ts">
	import { capitalize } from '$lib/util/helpers';
	import Figure from './Figure.svelte';
	export let id: number;
	export let form: string;

	$: formName = form.split('-').slice(1).join('-') || 'default';
</script>

<a
	sveltekit:prefetch
	sveltekit:noscroll
	href={`/species/${form.split('-').at(0)}/variant/default/form/${formName}`}
	title={`${form}`}
>
	<Figure
		caption={`${capitalize(formName)}`}
		altText={`${formName} form`}
		url={formName === 'default'
			? `/home/${id}.webp`
			: `/home/${id}-${form.split('-').slice(1).join('-')}.webp`}
		pixelated={true}
	/>
</a>

<style>
	a {
		text-decoration: none;
		color: black;
	}
</style>
