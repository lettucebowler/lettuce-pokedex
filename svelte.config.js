import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			out: 'build',
			edge: true
		}),
		paths: {
			assets: 'https://cdn.dex.rusondia.net'
		},
		prerender: {
			concurrency: 25,
			handleHttpError: 'warn'
		}
	}
};

export default config;
