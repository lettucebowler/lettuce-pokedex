<script lang="ts">
	import EvolutionChart from './EvolutionChart.svelte';
	import TypeBorder from './TypeBorder.svelte';
	export let evolutionChain: any;
	export let primaryType = 'default';
	export let secondaryType = 'default';
</script>

<TypeBorder {primaryType} {secondaryType}>
	<div class="white">
		<h2>Evolution Chart</h2>
		<EvolutionChart {evolutionChain} />
	</div>
</TypeBorder>

<style>
	.white {
		background-color: white;
		border-radius: 8px;
		padding: 8px;
	}

	h2 {
		text-align: center;
		margin: 8px;
	}
</style>
