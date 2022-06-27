<script lang="ts">
	import SpeciesSearchForm from '$lib/components/SpeciesSearchForm.svelte';
</script>

<div>
	<h2>We were unable to find what you were looking for</h2>
	<SpeciesSearchForm />
</div>

<style>
	div {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}

	h2 {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
</style>
