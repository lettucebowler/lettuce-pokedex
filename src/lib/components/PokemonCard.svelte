<script lang="ts">
	import TypeBorder from '$lib/components/TypeBorder.svelte';
	import VarietyCard from './VarietyCard.svelte';
	import Type from '$lib/components/Type.svelte';
	import FormLink from '$lib/components/FormLink.svelte';
	import { leftPad, capitalize } from '$lib/util/helpers';
	import { variables } from '$lib/variables';

	export let id: number;
	export let dexNum: number;
	export let form: string;
	export let species: string;
	export let genus = '';
	export let primaryType: string;
	export let secondaryType: string;
	export let varieties: any[] = [];
	export let forms: any[] = [];

	$: types = secondaryType === primaryType ? [primaryType] : [primaryType, secondaryType];
	const homeLink = (id: number | string) => `${variables.imageHost || ''}/home/${id}.webp`;

	// let big = '/home/0.webp';

	// const importUrl = async (id: number) => {
	// 	const stuff = await import(`../assets/home/${id}.webp`);
	// 	big = stuff.default;
	// };

	// $: importUrl(id);
</script>

<TypeBorder {primaryType} {secondaryType}>
	<div class="top-row">
		<div class="header white rounded padded">
			<h2>{capitalize(species)}</h2>
			<span>{genus}</span>
		</div>
		<div class="white rounded pokedex-number padded">
			{`#${leftPad(3, dexNum)}`}
		</div>
	</div>
	<div class="white rounded padded-sm flex-column gap">
		<img
			alt={`${species} official artwork`}
			src={`${homeLink(`${id}${form === 'default' ? '' : `-${form}`}`)}`}
			id={`${id}-big}`}
		/>
		{#if forms.length > 1}
			<div class="row wrap padded-sm">
				{#each forms.filter((f) => f !== form) as form, i}
					<div class="form2">
						<FormLink {id} {form} />
					</div>
				{/each}
			</div>
		{/if}
		<div class="row gap-sm wide">
			{#each types as type}
				<Type {type} />
			{/each}
		</div>
	</div>

	{#if varieties.length > 1}
		<VarietyCard {varieties} {species} />
	{/if}
</TypeBorder>

<style>
	h2 {
		text-align: center;
		margin: 0 auto;
	}

	h2 {
		font-size: 1.5rem;
	}

	img {
		margin: 0 auto;
		display: block;
		width: 100%;
		max-height: 512px;
		max-width: 512px;
		aspect-ratio: 1;
	}

	.form2 {
		flex: 0 1 68px;
		image-rendering: pixelated;
	}

	.white {
		background-color: white;
	}

	.rounded {
		border-radius: 8px;
	}

	.padded {
		padding: 8px;
	}

	.padded-sm {
		padding: 4px;
	}

	.top-row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 8px;
	}

	.pokedex-number {
		display: grid;
		place-items: center;
		font-size: 2rem;
		font-weight: bold;
	}

	.header {
		display: grid;
		grid-column: span 2;
		text-align: center;
	}

	.row {
		display: flex;
		justify-content: space-evenly;
		gap: 8px;
	}

	.wrap {
		flex-wrap: wrap;
	}

	.gap-sm {
		gap: 4px;
	}

	.gap {
		gap: 8px;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
	}

	.wide {
		width: 100%;
		box-sizing: border-box;
	}
</style>
