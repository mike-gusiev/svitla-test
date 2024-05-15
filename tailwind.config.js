/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte}'],
    theme: {
        extend: {
            colors: {
                skyBlue: '#93B3FE',
                lightLilac: '#E5E2FF',
                lightCyan: '#F0F9FE',
                deepIndigo: '#010015',
                darkNavy: '#000115',
                royalIndigo: '#010B3E',
                ivory: '#F0EFEA',
                stormCloud: '#5D6574',
                lavenderBlue: '#B1B1E2'
            },
            borderRadius: {
                largeRadius: '100px'
            }
        }
    },
    plugins: []
};
