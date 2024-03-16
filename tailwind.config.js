/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#202c39',
                secondary: '#6096ba',
                white: '#ffffff',
                darkBlue: '#0f306a',
                blueGray: '#283845',
                // Add more custom colors here
            },
        },
    },
    plugins: [],
}

