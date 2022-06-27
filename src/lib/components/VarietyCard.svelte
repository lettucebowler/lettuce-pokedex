<script lang="ts">
	import Figure from './Figure.svelte';

	export let varieties: any[];
	export let species: string;

	const link = (id: number | string) => `/home/${id}-64.webp`;
</script>

<div class="white flex-column padded rounded wide">
	<h3>Variants</h3>
	<div class="row wrap">
		{#each varieties as vari}
			<div class="variety">
				<a
					sveltekit:prefetch
					sveltekit:noscroll
					href={`/species/${species}/variant/${
						vari.pokemon.name.replace(species, '').slice(1) || 'default'
					}/form/default`}
				>
					<Figure
						altText={vari.pokemon.name}
						caption={vari.pokemon.name}
						url={`${link(vari.pokemon.url.split('/').at(-2))}`}
						pixelated={false}
					/>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	h3 {
		text-align: center;
		margin: 0 auto;
		margin-bottom: 4px;
	}

	a {
		color: black;
		text-decoration: none;
		margin: 0px 0px;
		padding-bottom: 4px;
	}

	.rounded {
		border-radius: 8px;
	}

	.row {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}

	.variety {
		flex: 0 1 64px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.white {
		background-color: white;
		box-sizing: border-box;
	}

	.padded {
		padding: 8px;
	}

	.wide {
		width: 100%;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
</style>
