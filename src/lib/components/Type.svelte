<script lang="ts">
	export let type: string;
</script>

<div style={`background-color:var(--${type}-color)`}>{type}</div>

<style>
	div {
		padding: 8px;
		border-radius: 4px;
		color: white;
		font-weight: bold;
		display: inline-block;
		box-sizing: border-box;
		width: 100%;
		text-align: center;
	}
</style>
