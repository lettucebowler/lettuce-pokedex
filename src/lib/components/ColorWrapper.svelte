<script lang="ts">
	export let type = 'default';
	export let secondaryType = type;
	export let border = false;
	export let brightness = '';
	export let padding = 8;
	export let borderRadius = 8;
</script>

<div
	style={`background-color:var(--${type}-color${
		brightness ? `-${brightness}` : ''
	});padding:${padding}px;border-radius:${borderRadius}px${
		border ? `;border:solid 2px var(--${secondaryType}-color-dark)` : ''
	}`}
>
	<slot />
</div>

<style>
	div {
		border-radius: 16px;
		width: 100%;
		box-sizing: border-box;
		padding: 8px;
		gap: 8px;
		display: flex;
		flex-direction: column;
	}
</style>
