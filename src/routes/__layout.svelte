<script>
	import SpeciesSearchForm from '$lib/components/SpeciesSearchForm.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="/icons.css" />
</svelte:head>

<div class="width">
	<div class="wrapper-dark">
		<div class="wrapper-medium">
			<div class="wrapper-light grid">
				<a title="link to home page" href="/">
					<h1>Pokédex</h1>
				</a>
				<div class="search">
					<SpeciesSearchForm />
				</div>
			</div>
		</div>
	</div>
	<slot />
</div>

<style>
	h1 {
		text-align: center;
		display: grid;
		padding: 0px;
		margin: 0px;
	}

	a {
		text-decoration: none;
		color: black;
		grid-column: 2;
	}

	@media screen and (max-width: 600px) {
		a {
			grid-column: span 3;
		}

		div.search {
			grid-column: span 3;
		}
	}

	.wrapper-medium {
		background-color: var(--default-color);
		border-radius: 0px 0px 24px 24px;
		padding: 0px 8px 8px 8px;
	}

	.wrapper-light {
		background-color: var(--default-color-light);
		border-radius: 0px 0px 16px 16px;
		padding: 8px;
	}

	.wrapper-dark {
		background-color: var(--default-color-dark);
		padding: 0px 2px 2px 2px;
		margin: 0 auto 8px auto;
		border-radius: 0px 0px 26px 26px;
	}

	.width {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 8px;
	}

	:global(body) {
		margin: 0px 4px 4px 4px;
		overflow-y: scroll;
	}

	:global(html) {
		font-family: sans-serif;
		margin-left: calc(100vw - 100%);
	}
</style>
