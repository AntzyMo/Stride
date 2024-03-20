// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'dayjs-nuxt'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  ui: {
    icons: ['mingcute']
  },
  dayjs: {
    locales: ['en', 'fr', 'zh-cn'],
    defaultLocale: ['zh-cn']
  }
})
