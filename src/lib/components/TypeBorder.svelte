<script>
	import ColorWrapper from '$lib/components/ColorWrapper.svelte';
	export let primaryType = 'default';
	export let secondaryType = primaryType;
	export let padding = 4;
	export let radius = 20;
</script>

<ColorWrapper type={primaryType} {secondaryType} border={true} borderRadius={radius} {padding}>
	<div style={`background-color:var(--${primaryType}-color-light)`}>
		<slot />
	</div>
</ColorWrapper>

<style>
	::slotted {
		background-color: white;
		display: flex;
		flex: 1 1 100%;
	}

	div {
		padding: 8px;
		background-color: blue;
		border-radius: 16px;
		gap: 8px;
		display: flex;
		/* width: 100%; */
		flex-direction: column;
	}
</style>
