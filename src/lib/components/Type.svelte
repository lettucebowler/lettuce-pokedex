<script lang="ts">
	import classnames from 'classnames';
	export let type: string = 'default';
</script>

<div
	class={classnames(
		'text-white w-full rounded text-center p-1 text-xs sm:text-sm md:text-base lg:text-base font-medium',
		{
			'bg-grass-200': type === 'grass',
			'bg-fire-200': type === 'fire',
			'bg-water-200': type === 'water',
			'bg-normal-200': type === 'normal',
			'bg-bug-200': type === 'bug',
			'bg-electric-200': type === 'electric',
			'bg-poison-200': type === 'poison',
			'bg-ground-200': type === 'ground',
			'bg-steel-200': type === 'steel',
			'bg-ghost-200': type === 'ghost',
			'bg-psychic-200': type === 'psychic',
			'bg-dark-200': type === 'dark',
			'bg-fairy-200': type === 'fairy',
			'bg-dragon-200': type === 'dragon',
			'bg-rock-200': type === 'rock',
			'bg-flying-200': type === 'flying',
			'bg-ice-200': type === 'ice',
			'bg-fighting-200': type === 'fighting'
		}
	)}
>
	{type}
</div>
