const colors = require('tailwindcss/colors');

const config = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                sky: colors.sky,
                cyan: colors.cyan
            }
        }
    },
    plugins: []
};

module.exports = config;
