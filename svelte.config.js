import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

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
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        // vite: {
        //     server: {
        //         hmr: {
        //             port: 24679
        //         }
        //     }
        // },
        adapter: staticAdapter({
            fallback: '404.html'
        }),
        ssr: false,
        amp: false,
        trailingSlash: 'never'
    }
};

export default config;
