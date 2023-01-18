<script lang="ts">
	import SpeciesNav from '$lib/components/SpeciesNav.svelte';
	import TypeBorder from '$lib/components/TypeBorder.svelte';
	export let data: import('./$types').LayoutData;
</script>

<div class="m-auto flex w-full max-w-[1200px] flex-col gap-2">
	<TypeBorder types={['default']}>
		{#if data.navigation}
			<SpeciesNav navData={data.navigation} />
		{/if}
	</TypeBorder>
	<slot />
</div>
