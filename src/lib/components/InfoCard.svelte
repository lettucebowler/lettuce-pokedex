<script lang="ts">
	import TypeBorder from './TypeBorder.svelte';
	import { leftPad } from '$lib/util/helpers';

	export let description = '';
	export let height: number;
	export let weight: number;
	export let types: string[];
</script>

<TypeBorder {types}>
	<div class="grid place-items-center gap-2">
		<div class="w-full rounded-lg bg-white p-2 text-center">
			<h2 class="text-lg font-bold">Description</h2>
			<p class="text-lg">{description}</p>
		</div>
		<div class="flex w-full flex-col gap-2 rounded-lg bg-white p-2 text-center">
			<h2 class="text-lg font-bold">Biology</h2>
			<div class="grid grid-cols-2 place-items-center">
				<div class="flex flex-col gap-1">
					<h3 class="text-md font-medium">Height</h3>
					<div>
						{`${Math.floor((height * 10) / 2.54 / 12)}' ${leftPad(
							2,
							Math.round((height * 10) / 2.54) - Math.floor((height * 10) / 2.54 / 12) * 12
						)}" (${(height / 10).toFixed(1)} m)`}
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<h3 class="text-md font-medium">Weight</h3>
					<div>
						{`${((weight / 10) * 2.20462).toFixed(1)} lbs (${(weight / 10).toFixed(1)} kg)`}
					</div>
				</div>
			</div>
		</div>
	</div>
</TypeBorder>
