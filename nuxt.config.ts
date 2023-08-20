// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  build: {
    transpile: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/pro-solid-svg-icons',
        '@fortawesome/pro-regular-svg-icons',
        '@fortawesome/pro-light-svg-icons',
        '@fortawesome/free-brands-svg-icons'
    ]
  },
  modules: [
    '@pinia/nuxt',
  ],
})
