import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",

  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"],

  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {},
      "postcss-preset-env": {
        features: { "nesting-rules": false },
      },
    },
  },
});
