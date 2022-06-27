<script lang="ts">
	export let caption: string;
	export let altText: string;
	export let url: string;
	export let pixelated: boolean;
</script>

<figure>
	<img alt={altText} src={url} class={pixelated ? 'pixelated' : ''} />
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
	}

	.pixelated {
		image-rendering: pixelated;
	}
</style>
