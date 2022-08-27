<script lang="ts">
	import EvolutionChart from './EvolutionChart.svelte';
	export let evolutionChain: any;
</script>

<div class="bg-white rounded-lg p-2 text-center">
	<h2 class="text-lg font-bold m-2">Evolution Chart</h2>
	<EvolutionChart {evolutionChain} />
</div>
