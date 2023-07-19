import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-adsense'
  ],

  // GOOGLE ADSENSE
  'google-adsense': {
    id: process.env.GOOGLE_ADSENSE_ID,
    test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true'
  },

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
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    }
  }
})
