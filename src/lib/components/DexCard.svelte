<script lang="ts">
	import { variables } from '$lib/variables';
	import classnames from 'classnames';

	import Portrait from './Portrait.svelte';
	import TypeBorder from './TypeBorder.svelte';

	const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

	export let species: string = 'bulbasaur';
	export let form = 'default';
	export let id = 1;
	export let types: string[];
	export let lazy = false;
	const link = (id: number) =>
		(variables.imageHost || '') + `/home/${id}-${form !== 'default' ? `${form}-` : ''}${128}.webp`;
</script>

<a
	class="grid place-items-center box-border cursor-pointer w-full hover:brightness-90"
	alt={`Link to ${species} detail page`}
	href={`/species/${species}/variant/default/form/default`}
>
	<TypeBorder {types}>
		<figure
			id={id.toString()}
			class={classnames('flex flex-col text-center w-full justify-end box-border gap-1.5')}
		>
			<figcaption
				class="p-1 text-center font-extrabold font-sans text-sm sm:text-base md:text-lg lg:text-xl font-sans p-1 rounded-lg bg-white"
			>
				{capitalize(species)}
			</figcaption>
			<Portrait {id} {species} {form} {types} {lazy} size={128} />
		</figure>
	</TypeBorder>
</a>
