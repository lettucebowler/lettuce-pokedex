/** @type {import('tailwindcss').Config} */
module.exports = {
	safelist: [
		'@[64px]:hidden',
		'@[64px]:block',
		'@[128px]:hidden',
		'@[128px]:block',
		'@[256px]:hidden',
		'@[256px]:block',
		'@[512px]:hidden',
		'@[512px]:block'
	],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			white: 'white',
			default: {
				300: '#ed9c88',
				200: '#d1421e',
				100: '#8b2c14'
			},
			normal: {
				300: '#c6c6a7',
				100: '#6d6d4e',
				200: '#a8a878'
			},
			fighting: {
				200: '#c03028',
				100: '#7d1f1a',
				300: '#d67873'
			},
			flying: {
				100: '#6d5e9c',
				300: '#c6b7f5',
				200: '#a890f0'
			},
			poison: {
				200: '#a040a0',
				100: '#682a68',
				300: '#c183c1'
			},
			ground: {
				200: '#e0c068',
				100: '#927d44',
				300: '#ebd69d'
			},
			rock: {
				200: '#b8a038',
				100: '#786824',
				300: '#d1c17d'
			},
			bug: {
				200: '#a8b820',
				100: '#6d7815',
				300: '#c6d16e'
			},
			ghost: {
				100: '#493963',
				200: '#705898',
				300: '#a292bc'
			},
			steel: {
				100: '#787887',
				200: '#b8b8d0',
				300: '#d1d1e0'
			},
			fire: {
				100: '#9c531f',
				200: '#f08030',
				300: '#f5ac78'
			},
			water: {
				100: '#455f9f',
				200: '#6890f0',
				300: '#9db7f5'
			},
			grass: {
				100: '#4e8234',
				200: '#78c850',
				300: '#a7db8d'
			},
			electric: {
				100: '#a1871f',
				200: '#f8d030',
				300: '#fae078'
			},
			psychic: {
				100: '#a13959',
				200: '#f85888',
				300: '#fa92b2'
			},
			ice: {
				100: '#638d8d',
				200: '#98d8d8',
				300: '#bce6e6'
			},
			dragon: {
				100: '#4924a1',
				200: '#7038f8',
				300: '#a27dfa'
			},
			dark: {
				100: '#49392f',
				200: '#705848',
				300: '#a29288'
			},
			fairy: {
				100: '#9b6470',
				200: '#ee99ac',
				300: '#f4bdc9'
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
