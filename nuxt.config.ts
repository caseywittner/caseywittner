// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      scripts: [
        {
          src: '~/assets/preline/dist/preline.js',
          body: true,
          defer: true
        }
      ]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [['@nuxtjs/google-fonts', {
    families: {
      'Roboto+Condensed': true,
      Roboto: true,
    }
  }]]
})