/** @type {import('@sveltejs/kit').Config} */
import { resolve } from "path";

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					src: resolve('./src/'),

				}
			}
		}
	}
};

export default config;
