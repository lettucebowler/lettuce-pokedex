<script lang="ts">
	import VarietyCard from './VarietyCard.svelte';
	import { leftPad, capitalize } from '$lib/util/helpers';
	import autoAnimate from '@formkit/auto-animate';

	import TypeBorder from './TypeBorder.svelte';

	import FormCard from './FormCard.svelte';
	import Portrait from './Portrait.svelte';

	export let id: number;
	export let dexNum: number;
	export let form: string;
	export let species: string;
	export let genus = '';
	export let types = ['default'];
	export let varieties: any[] = [];
	export let forms: any[] = [];
</script>

<TypeBorder {types}>
	<div class="flex flex-col gap-2" use:autoAnimate>
		<div class="grid grid-cols-3 w-full gap-2">
			<div
				class="rounded-lg bg-white w-full text-center flex flex-col justify-center p-1 col-span-2"
			>
				<h2 class="font-bold text-lg">{capitalize(species)}</h2>
				<span class="text-md">{genus}</span>
			</div>
			<div
				class="rounded-lg bg-white w-full text-center text-lg flex flex-col justify-center font-bold p-1 flex-[1_1_auto] flex"
			>
				{`#${leftPad(3, dexNum)}`}
			</div>
		</div>
		<Portrait {id} {species} {form} {types} />

		{#if forms.length > 1}
			<FormCard {species} {id} {forms} />
		{/if}

		{#if varieties.length > 1}
			<VarietyCard {varieties} {species} />
		{/if}
	</div>
</TypeBorder>
