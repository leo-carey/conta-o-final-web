import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    colors: {
      ...colors,
      'cof-primary': {
        100: '#cc6c4a',
        200: '#b35f40'
      },
      'cof-secondary': {
        100: '#ECE7C2',
        200: '#6F5643'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
  content: ['./src/**/*.{html,ts,scss,css}']
}
