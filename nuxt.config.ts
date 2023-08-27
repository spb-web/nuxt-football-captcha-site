// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '@nuxt-themes/typography',
  ],
  devtools: { enabled: true },
  modules: [
    'nuxt-football-captcha',
    '@nuxtjs/tailwindcss',
    ['unplugin-icons/nuxt', {autoInstall: true,}],
    '@vueuse/nuxt',
  ],
  footballCaptcha: {
    component: {
      global: true,
    }
  },
  routeRules: {
    // Use client-side rendering for all routes
    '/**': { ssr: false },
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
  },
  nitro: {
    preset: "vercel",
  }
})
