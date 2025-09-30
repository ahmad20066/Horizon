/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'horizon-blue': '#0A3C64',
                'sky-blue': '#1E88E5',
                'dark-navy': '#081A2C',
            },
            fontFamily: {
                'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
