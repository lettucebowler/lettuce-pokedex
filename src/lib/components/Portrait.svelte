<script lang="ts">
	import { dev } from '$app/environment';
	import { PUBLIC_IMAGE_HOST } from '$env/static/public';
	import classnames from 'classnames';
	import Type from './Type.svelte';

	export let types: string[] = ['default'];
	export let species: string;
	export let form: string;
	export let id: number;
	export let size = 512;
	export let lazy = false;

	const homeLink = (id: number | string, form: string, size: number) => dev ? `${id}${
			form === 'default' ? '' : `-${form}`
		}.webp` : `/_vercel/image?url=/home/${id}${
			form === 'default' ? '' : `-${form}`
		}.webp&w=${size}&q=100`;

	console.log(dev);
</script>

<div class="w-full rounded-lg bg-white">
	<img
		alt={species}
		src={homeLink(id, form, size)}
		id={`${id}-big}`}
		loading={lazy ? 'lazy' : 'eager'}
		class={`w-full aspect-square object-contain`}
	/>
	<div class="grid grid-cols-2 gap-1 p-1">
		{#each types as type}
			<div
				class={classnames('grid w-full place-items-center', {
					'col-span-1': types.length > 1,
					'col-span-2': types.length === 1
				})}
			>
				<Type {type} />
			</div>
		{/each}
	</div>
</div>
