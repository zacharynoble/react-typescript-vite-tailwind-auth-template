module.exports = {
    content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            '2xl': { min: '1535px' },
            xl: { min: '1279px' },
            lg: { min: '1023px' },
            md: { min: '767px' },
            sm: { min: '639px' },
        },
        extend: {
            colors: {
                text: '#000',
                background: '#fff',
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/forms')],
};
