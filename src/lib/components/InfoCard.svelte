<script lang="ts">
	import TypeBorder from '$lib/components/TypeBorder.svelte';
	import { leftPad } from '$lib/util/helpers';

	export let description = '';
	export let primaryType: string;
	export let secondaryType: string;
	export let height: number;
	export let weight: number;
</script>

<TypeBorder {primaryType} {secondaryType}>
	<div class="flex-column white rounded padded">
		<h2>Description</h2>
		<p class="description">{description}</p>
	</div>
	<div class="flex-column white rounded padded">
		<h2>Biology</h2>
		<div class="row">
			<div class="flex-column wide">
				<h3>Height</h3>
				<div class="row">
					<div>
						{`${Math.floor((height * 10) / 2.54 / 12)}' ${leftPad(
							2,
							Math.round((height * 10) / 2.54) - Math.floor((height * 10) / 2.54 / 12) * 12
						)}"`}
					</div>
					<div>{`${(height / 10).toFixed(1)} m`}</div>
				</div>
			</div>
			<div class="flex-column wide">
				<h3>Weight</h3>
				<div class="row">
					<div>{`${((weight / 10) * 2.20462).toFixed(1)} lbs`}</div>

					<div>
						{`${(weight / 10).toFixed(1)} kg`}
					</div>
				</div>
			</div>
		</div>
	</div>
</TypeBorder>

<style>
	h2,
	h3 {
		margin: 0 auto;
		text-align: center;
	}

	.wide {
		flex: 1 1 40%;
	}

	.row {
		display: flex;
		width: 100%;
		gap: 8px;
		justify-content: space-around;
		flex-wrap: wrap-reverse;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.description {
		font-size: 1.25rem;
		margin: 0;
	}

	.white {
		background-color: white;
	}

	.rounded {
		border-radius: 8px;
	}

	.padded {
		padding: 8px 10px;
	}
</style>
