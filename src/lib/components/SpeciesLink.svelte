<script lang="ts">
	import { variables } from '$lib/variables';

	const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

	export let id: number;
	export let species: string;
	export let hover = false;
	export let size = 128;
	export let wide = false;
	const link = (id: number) => `${variables.imageHost || ''}/home/${id}-${size}.webp`;
	$: style = `${size ? `max-height:${size}px;height:${size}px;width:${size}px` : ''}`;
</script>

<figure class={`${hover ? 'hover' : ''}`}>
	<a
		sveltekit:prefetch
		class="white border"
		alt={`Link to ${species} detail page`}
		href={`/species/${species}/variant/default/form/default`}
	>
		<img
			src={link(id)}
			alt={species}
			id={`${species}-sprite`}
			{style}
			class={`${wide ? 'wide' : ''}`}
		/>
	</a>
	<figcaption>{capitalize(species)}</figcaption>
</figure>

<style>
	a {
		text-decoration: none;
		flex-direction: column;
		color: #2769be;
		box-sizing: border-box;
		cursor: pointer;
		transition: 0.25s;
		text-align: center;
		padding: 8px;
	}

	figure {
		display: flex;
		flex-direction: column;
		margin: 0;
		box-sizing: border-box;
		border-radius: 16px;
	}

	figcaption {
		font-weight: bold;
		text-align: center;
	}

	img {
		object-fit: contain;
		height: 128px;
	}

	.hover:hover {
		outline-offset: 4px;
		transition: 0.1s;
		transform: scale(1.05);
	}

	.wide {
		width: 100%;
	}
</style>
