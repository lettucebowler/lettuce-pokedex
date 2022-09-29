<script lang="ts">
	import EvolutionChart from './EvolutionChart.svelte';
	export let evolutionChain: any;
</script>

<div class="rounded-lg bg-white p-2 text-center">
	<h2 class="m-2 text-lg font-bold">Evolution Chart</h2>
	<EvolutionChart {evolutionChain} />
</div>
