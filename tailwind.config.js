/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './assets/**/*.{vue,js,css}',
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                'colorPrimaryLight': '#984062',
                'colorOnPrimaryLight': '#ffffff',
                'colorPrimaryContainerLight': '#ffd9e3',
                'colorOnPrimaryContainerLight': '#3e001e',
                'colorSecondaryLight': '#74565f',
                'colorOnSecondaryLight': '#ffffff',
                'colorSecondaryContainerLight': '#ffd9e3',
                'colorOnSecondaryContainerLight': '#2b151c',
                'colorBackgroundLight': '#fffbff',
                'colorOnBackgroundLight': '#201a1b',
                'colorSurfaceLight': '#fffbff',
                'colorOnSurfaceLight': '#201a1b',
                'colorErorContainerLight': '#ffdad6',
                'colorOnErrorLight': '#ffffff',
                'colorOnErrorContainerLight': '#410002',
                'colorOutlineLight': '#837377',
                /** Dark Theme */
                'colorPrimaryDark': '#ffb0c9',
                'colorOnPrimaryDark': '#5e1134',
                'colorPrimaryContainerDark': '#7b294a',
                'colorOnPrimaryContainerDark': '#ffd9e3',
                'colorSecondaryDark': '#e2bdc7',
                'colorOnSecondaryDark': '#422931',
                'colorSecondaryContainerDark': '#5a3f47',
                'colorOnSecondaryContainerDark': '#ffd9e3',
                'colorBackgroundDark': '#201a1b',
                'colorOnBackgroundDark': '#ebe0e1',
                'colorSurfaceDark': '#201a1b',
                'colorOnSurfaceDark': '#ebe0e1',
                'colorErorDark': '#ffb4ab',
                'colorErorContainerDark': '#93000a',
                'colorOnErrorDark': '#690005',
                'colorOnErrorContainerDark': '#ffdad6',
                'colorOutlineDark': '#9e8c90'
            }
        }
    },
    plugins: []
}
