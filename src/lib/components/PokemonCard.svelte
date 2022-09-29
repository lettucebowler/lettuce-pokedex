<script lang="ts">
	import VarietyCard from './VarietyCard.svelte';
	import { leftPad, capitalize } from '$lib/util/helpers';

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
	<div class="grid grid-cols-3 gap-2">
		<div class="col-span-2 grid rounded-lg bg-white p-1 text-center">
			<h2 class="text-lg font-bold">{capitalize(species)}</h2>
			<span class="text-md">{genus}</span>
		</div>
		<div
			class="grid w-full place-items-center rounded-lg bg-white p-1 text-center text-lg font-bold"
		>
			{`#${leftPad(3, dexNum)}`}
		</div>
		<div class="col-span-3 grid">
			<Portrait {id} {species} {form} {types} />
		</div>
	</div>
	<div class="col-span-3">
		{#each [1] as _ (1)}
			{#if forms.length > 1}
				<div class="h-2" />
				<div class="col-span-3 grid">
					<FormCard {species} {id} {forms} />
				</div>
			{/if}

			{#if varieties.length > 1}
				<div class="h-2" />
				<div class="col-span-3 grid"><VarietyCard {varieties} {species} /></div>
			{/if}
		{/each}
	</div>
</TypeBorder>
