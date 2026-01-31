/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'paper': '#F9F7F2',
                'mahogany': '#321C2D',
                'plum': '#3879BF',
                'love-spell': '#EBA4D5',
                'aqua': '#67CCFE',
                'tiffany': '#03C4C8',
            },
            fontFamily: {
                'body': ['Poppins', 'sans-serif'],
                'hand': ['"Gochi Hand"', 'cursive'],
                'patrick': ['"Patrick Hand"', 'cursive'],
            },
            rotate: {
                '2': '2deg',
                '-2': '-2deg',
                '1': '1deg',
                '-1': '-1deg',
                '3': '3deg',
                '-3': '-3deg',
            }
        },
    },
    plugins: [],
}
