import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			out: 'build',
			runtime: 'nodejs18.x',
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
