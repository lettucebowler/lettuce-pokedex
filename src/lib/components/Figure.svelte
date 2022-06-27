<script lang="ts">
	export let caption: string;
	export let altText: string;
	export let url: string;
	export let pixelated: boolean;
</script>

<figure>
	<div>
		<img alt={altText} src={url} class={pixelated ? 'pixelated' : ''} />
	</div>
	<figcaption>{caption}</figcaption>
</figure>

<style>
	figure {
		display: flex;
		flex-direction: column;
		gap: 8px;
		text-align: center;
		font-weight: bold;
		margin: 0;
	}

	img {
		/* height: 64px; */
		max-height: 64px;
		max-width: 64px;
		aspect-ratio: 1;
	}

	.pixelated {
		image-rendering: pixelated;
	}
</style>
