import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@element-plus/nuxt'],

  colorMode: {
    classSuffix: ''
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
