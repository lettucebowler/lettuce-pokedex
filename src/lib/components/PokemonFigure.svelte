<script lang="ts">
	import classnames from 'classnames';
	import { capitalize } from '$lib/util/helpers';

	export let size = 64;
	export let species: string;
	export let imageUrl: string;
	export let variant: string = 'default';
	export let form = 'default';
</script>

<figure class="flex flex-col justify-end flex-[1_1_80px] gap-1">
	<img
		src={imageUrl}
		alt={species}
		class={classnames('m-auto aspect-square object-contain', {
			'h-[128px]': size === 128,
			'h-[64px]': size === 64,
			'h-[512px]': size === 512
		})}
	/>
	<figcaption class="font-bold m-0 align-bottom text-sm">
		{capitalize(form !== 'default' ? form : variant !== 'default' ? variant : species)}
	</figcaption>
</figure>
