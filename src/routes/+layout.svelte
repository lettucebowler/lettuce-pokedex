<script lang="ts">
	import '$lib/assets/app.css';
	import smallFavicon from '$lib/assets/favicon-16x16.png';
	import bigFavicon from '$lib/assets/favicon-32x32.png';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';
	import safariPinnedTabIcon from '$lib/assets/safari-pinned-tab.svg';
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={bigFavicon} />
	<link rel="icon" type="image/png" sizes="16x16" href={smallFavicon} />
	<link rel="mask-icon" href={safariPinnedTabIcon} color="#a3be8c" />
</svelte:head>

<div class="m-auto flex w-full min-w-[320px] max-w-[1200px] flex-col gap-2 pb-1">
	<div
		class="w-full rounded-b-[22px] border-b-2 border-l-2 border-r-2 border-default-100 bg-default-200 pb-1 pl-1 pr-1"
	>
		<div class="w-full rounded-b-2xl bg-default-300">
			<div class="flex w-full flex-wrap justify-around">
				<a title="link to home page" href="/" data-sveltekit-prefetch>
					<h1 class="p-2 text-center text-2xl font-bold">Pokédex</h1>
				</a>
			</div>
		</div>
	</div>
	<slot />
</div>

<style>
	:global(html) {
		margin-left: calc(100vw - 100%);
	}

	:global(body) {
		margin: 0px 4px 4px 4px;
		overflow-y: scroll;
	}
</style>
