<script lang="ts">
	import { goto } from '$app/navigation';

	export let primaryType = 'default';
	export let secondaryType = primaryType;

	let search = '';

	const navigate = async (event: any) => {
		event.preventDefault();
		goto(`/species/${search.toLowerCase()}/variant/default/form/default`);
	};
</script>

<form on:submit={navigate}>
	<input
		bind:value={search}
		type="search"
		style={`border-color:var(--${secondaryType}-color-dark)`}
		placeHolder="Pokemon name"
	/>
</form>

<style>
	form {
		width: 100%;
		display: grid;
		place-items: center;
	}

	input {
		border-radius: 8px;
		border: solid 2px;
		font-size: 1.25rem;
		width: 100%;
		box-sizing: border-box;
		padding: 8px;
	}
</style>
