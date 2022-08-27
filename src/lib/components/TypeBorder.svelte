<script lang="ts">
	import classnames from 'classnames';
	export let types = ['default'];
</script>

<div
	class={classnames('border-2 p-1 rounded-[22px] w-full', {
		'bg-grass-200': types[0] === 'grass',
		'bg-fire-200': types[0] === 'fire',
		'bg-water-200': types[0] === 'water',
		'bg-normal-200': types[0] === 'normal',
		'bg-bug-200': types[0] === 'bug',
		'bg-electric-200': types[0] === 'electric',
		'bg-poison-200': types[0] === 'poison',
		'bg-ground-200': types[0] === 'ground',
		'bg-steel-200': types[0] === 'steel',
		'bg-ghost-200': types[0] === 'ghost',
		'bg-psychic-200': types[0] === 'psychic',
		'bg-dark-200': types[0] === 'dark',
		'bg-fairy-200': types[0] === 'fairy',
		'bg-dragon-200': types[0] === 'dragon',
		'bg-rock-200': types[0] === 'rock',
		'bg-flying-200': types[0] === 'flying',
		'bg-ice-200': types[0] === 'ice',
		'bg-fighting-200': types[0] === 'fighting',
		'bg-default-200': types[0] === 'default',
		'border-grass-100': types[1] === 'grass' || (types.length === 1 && types[0] === 'grass'),
		'border-fire-100': types[1] === 'fire' || (types.length === 1 && types[0] === 'fire'),
		'border-water-100': types[1] === 'water' || (types.length === 1 && types[0] === 'water'),
		'border-normal-100': types[1] === 'normal' || (types.length === 1 && types[0] === 'normal'),
		'border-bug-100': types[1] === 'bug' || (types.length === 1 && types[0] === 'bug'),
		'border-electric-100':
			types[1] === 'electric' || (types.length === 1 && types[0] === 'electric'),
		'border-poison-100': types[1] === 'poison' || (types.length === 1 && types[0] === 'poison'),
		'border-ground-100': types[1] === 'ground' || (types.length === 1 && types[0] === 'ground'),
		'border-steel-100': types[1] === 'steel' || (types.length === 1 && types[0] === 'steel'),
		'border-ghost-100': types[1] === 'ghost' || (types.length === 1 && types[0] === 'ghost'),
		'border-psychic-100': types[1] === 'psychic' || (types.length === 1 && types[0] === 'psychic'),
		'border-dark-100': types[1] === 'dark' || (types.length === 1 && types[0] === 'dark'),
		'border-fairy-100': types[1] === 'fairy' || (types.length === 1 && types[0] === 'fairy'),
		'border-dragon-100': types[1] === 'dragon' || (types.length === 1 && types[0] === 'dragon'),
		'border-rock-100': types[1] === 'rock' || (types.length === 1 && types[0] === 'rock'),
		'border-flying-100': types[1] === 'flying' || (types.length === 1 && types[0] === 'flying'),
		'border-ice-100': types[1] === 'ice' || (types.length === 1 && types[0] === 'ice'),
		'border-fighting-100':
			types[1] === 'fighting' || (types.length === 1 && types[0] === 'fighting'),
		'border-default-100': types[1] === 'default' || (types.length === 1 && types[0] === 'default')
	})}
>
	<div
		class={classnames('p-2 rounded-2xl', {
			'bg-grass-300': types[0] === 'grass',
			'bg-fire-300': types[0] === 'fire',
			'bg-water-300': types[0] === 'water',
			'bg-normal-300': types[0] === 'normal',
			'bg-bug-300': types[0] === 'bug',
			'bg-electric-300': types[0] === 'electric',
			'bg-poison-300': types[0] === 'poison',
			'bg-ground-300': types[0] === 'ground',
			'bg-steel-300': types[0] === 'steel',
			'bg-ghost-300': types[0] === 'ghost',
			'bg-psychic-300': types[0] === 'psychic',
			'bg-dark-300': types[0] === 'dark',
			'bg-fairy-300': types[0] === 'fairy',
			'bg-dragon-300': types[0] === 'dragon',
			'bg-rock-300': types[0] === 'rock',
			'bg-flying-300': types[0] === 'flying',
			'bg-ice-300': types[0] === 'ice',
			'bg-fighting-300': types[0] === 'fighting',
			'bg-default-300': types[0] === 'default'
		})}
	>
		<slot />
	</div>
</div>
