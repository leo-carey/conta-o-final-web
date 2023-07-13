import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt',
    '@nuxtjs/google-fonts'
  ],

  colorMode: {
    classSuffix: ''
  },

  googleFonts: {
    preconnect: true,
    families: {
      Poppins: [200, 300, 400, 500, 600, 800, 900]
    }
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
      'postcss-preset-env': {
        features: { 'nesting-rules': false }
      }
    }
  },

  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL
  }
})
