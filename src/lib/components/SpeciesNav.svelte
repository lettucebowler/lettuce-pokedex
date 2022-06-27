<script lang="ts">
	import SpeciesLink from '$lib/components/SpeciesLink.svelte';
	import TypeBorder from '$lib/components/TypeBorder.svelte';
	import type { PokemonNavigation } from '$lib/types/types';

	export let navData: PokemonNavigation;
	export let primaryType: string;
	export let secondaryType: string;
</script>

<TypeBorder {primaryType} {secondaryType}>
	<nav class="hide" style={`background-color:var(--${primaryType}-color-light)`}>
		<div class="column">
			<SpeciesLink id={navData.previous.id} species={navData.previous.name} size={64} />
		</div>
		<span class="icon-arrow_back hide" />
		<div class="hide column">
			<SpeciesLink id={navData.current.id} species={navData.current.name} size={64} />
		</div>
		<span class="icon-arrow_forward hide" />
		<div class="column">
			<SpeciesLink id={navData.next.id} species={navData.next.name} size={64} />
		</div>
	</nav>
</TypeBorder>

<style>
	@media screen and (max-width: 360px) {
		div.hide,
		span.hide {
			display: none;
		}

		nav.hide {
			grid-template-columns: 1fr 1fr;
		}
	}

	div {
		display: inline;
	}

	nav {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		border-radius: 16px;
	}

	span {
		display: grid;
		place-items: center;
	}

	.column {
		margin: auto;
	}
</style>
