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
		<div class="rounded-lg bg-white text-center p-1 col-span-2 grid">
			<h2 class="font-bold text-lg">{capitalize(species)}</h2>
			<span class="text-md">{genus}</span>
		</div>
		<div
			class="rounded-lg bg-white w-full text-center text-lg font-bold p-1 grid place-items-center"
		>
			{`#${leftPad(3, dexNum)}`}
		</div>
		<div class="grid col-span-3">
			<Portrait {id} {species} {form} {types} />
		</div>
	</div>
	<div class="col-span-3">
		{#each [1] as _ (1)}
			{#if forms.length > 1}
				<div class="h-2" />
				<div class="grid col-span-3">
					<FormCard {species} {id} {forms} />
				</div>
			{/if}

			{#if varieties.length > 1}
				<div class="h-2" />
				<div class="grid col-span-3"><VarietyCard {varieties} {species} /></div>
			{/if}
		{/each}
	</div>
</TypeBorder>
