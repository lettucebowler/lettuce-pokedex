<script lang="ts">
	import { PUBLIC_IMAGE_HOST } from '$env/static/public';
	import classnames from 'classnames';

	import Portrait from './Portrait.svelte';
	import TypeBorder from './TypeBorder.svelte';

	export let species: string = 'bulbasaur';
	export let form = 'default';
	export let id = 1;
	export let types: string[];
	export let lazy = false;
	const link = (id: number) =>
		(PUBLIC_IMAGE_HOST || '') + `/home/${id}-${form !== 'default' ? `${form}-` : ''}${128}.webp`;
</script>

<a
	class="box-border grid w-full cursor-pointer place-items-center hover:brightness-90"
	alt={`Link to ${species} detail page`}
	href={`/species/${species}/variant/default/form/default`}
>
	<TypeBorder {types}>
		<figure
			id={id.toString()}
			class={classnames('flex flex-col text-center w-full justify-end box-border gap-1.5')}
		>
			<figcaption
				class="rounded-lg bg-white p-1 p-1 text-center font-sans font-sans text-sm font-extrabold capitalize sm:text-base md:text-lg lg:text-xl"
			>
				{species}
			</figcaption>
			<Portrait {id} {species} {form} {types} {lazy} size={128} />
		</figure>
	</TypeBorder>
</a>
