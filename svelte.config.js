import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			out: 'build',
			runtime: 'edge',
			isr: {
				expiration: 3600
			}
		}),
		prerender: {
			concurrency: 25,
			handleHttpError: 'warn'
		}
	}
};

export default config;
