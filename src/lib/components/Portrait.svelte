<script lang="ts">
	import classnames from 'classnames';
	import variables from '$lib/variables';
	import Type from './Type.svelte';

	export let types: string[] = ['default'];
	export let species: string;
	export let form: string;
	export let id: number;
	export let size = 512;
	export let lazy = false;

	const homeLink = (id: number | string) =>
		`${variables.imageHost || ''}/home/${id}${size !== 512 ? `-${size}` : ''}.webp`;
</script>

<div class="w-full bg-white rounded-lg">
	<img
		alt={`${species} official artwork`}
		src={`${homeLink(`${id}${form === 'default' ? '' : `-${form}`}`)}`}
		id={`${id}-big}`}
		loading={lazy ? 'lazy' : 'eager'}
		class={classnames('m-auto w-full aspect-square', {
			'max-w-[128px]': size === 128,
			'max-w-[64px]': size === 64,
			'max-w-[512px]': size === 512
		})}
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
